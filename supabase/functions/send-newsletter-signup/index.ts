import { serve } from "https://deno.land/std@0.190.0/http/server.ts";

const RESEND_API_KEY = Deno.env.get("RESEND_API_KEY");

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

interface NewsletterSignupRequest {
  email: string;
}

const handler = async (req: Request): Promise<Response> => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { email }: NewsletterSignupRequest = await req.json();

    // Validate email
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return new Response(
        JSON.stringify({ error: "Valid email is required" }),
        {
          status: 400,
          headers: { "Content-Type": "application/json", ...corsHeaders },
        }
      );
    }

    // Send notification to admin
    const adminEmailRes = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${RESEND_API_KEY}`,
      },
      body: JSON.stringify({
        from: "U-topia <noreply@u-topia.com>",
        to: ["info@u-topia.com"],
        subject: "New Newsletter Subscription",
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
            <h2 style="color: #f7732d;">New Newsletter Subscription</h2>
            <p>A new user has subscribed to the U-topia newsletter:</p>
            <div style="background: #0f1729; color: #ffffff; padding: 20px; border-radius: 8px; margin: 20px 0;">
              <p style="margin: 0;"><strong>Email:</strong> ${email}</p>
              <p style="margin: 10px 0 0 0;"><strong>Date:</strong> ${new Date().toLocaleString()}</p>
            </div>
          </div>
        `,
      }),
    });

    if (!adminEmailRes.ok) {
      throw new Error(`Failed to send admin notification: ${await adminEmailRes.text()}`);
    }

    console.log("Admin notification sent");

    // Send confirmation to subscriber
    const subscriberEmailRes = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${RESEND_API_KEY}`,
      },
      body: JSON.stringify({
        from: "U-topia <noreply@u-topia.com>",
        to: [email],
        subject: "Welcome to U-topia Newsletter!",
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
            <h2 style="color: #f7732d;">Welcome to U-topia!</h2>
            <p>Thank you for subscribing to our newsletter.</p>
            <p>You'll now receive the latest insights, updates, and news from the U-topia ecosystem directly to your inbox.</p>
            <p style="margin-top: 30px;">Best regards,<br>The U-topia Team</p>
          </div>
        `,
      }),
    });

    if (!subscriberEmailRes.ok) {
      console.error("Failed to send subscriber confirmation:", await subscriberEmailRes.text());
    } else {
      console.log("Subscriber confirmation sent");
    }

    return new Response(
      JSON.stringify({ success: true, message: "Subscription successful" }),
      {
        status: 200,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  } catch (error: any) {
    console.error("Error in newsletter signup:", error);
    return new Response(
      JSON.stringify({ error: error.message }),
      {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }
};

serve(handler);
