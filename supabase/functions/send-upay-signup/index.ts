import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { Resend } from "https://esm.sh/resend@2.0.0";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const resend = new Resend(Deno.env.get("RESEND_API_KEY"));

const supabaseUrl = Deno.env.get("SUPABASE_URL")!;
const supabaseServiceKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!;
const supabase = createClient(supabaseUrl, supabaseServiceKey);

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

interface UPaySignupRequest {
  name: string;
  email: string;
  location: string;
  subscribeNewsletter: boolean;
}

const handler = async (req: Request): Promise<Response> => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { name, email, location, subscribeNewsletter }: UPaySignupRequest = await req.json();

    console.log("Received uPay signup:", { name, email, location, subscribeNewsletter });

    // Save signup to database
    const { error: dbError } = await supabase
      .from("upay_signups")
      .insert({
        name,
        email,
        location,
        subscribe_newsletter: subscribeNewsletter,
      });

    if (dbError) {
      console.error("Error saving to database:", dbError);
      throw new Error(`Database error: ${dbError.message}`);
    }

    console.log("Signup saved to database successfully");
    // Send email to U-topia team
    const adminEmailResponse = await resend.emails.send({
      from: "U-topia <noreply@u-topia.com>",
      to: ["info@u-topia.com"],
      subject: `New uPay Card Signup from ${name}`,
      html: `
        <h1>New uPay Card Signup</h1>
        <p>Someone has signed up for the uPay card waitlist:</p>
        <table style="border-collapse: collapse; width: 100%; max-width: 600px;">
          <tr>
            <td style="padding: 10px; border: 1px solid #ddd; font-weight: bold;">Name</td>
            <td style="padding: 10px; border: 1px solid #ddd;">${name}</td>
          </tr>
          <tr>
            <td style="padding: 10px; border: 1px solid #ddd; font-weight: bold;">Email</td>
            <td style="padding: 10px; border: 1px solid #ddd;"><a href="mailto:${email}">${email}</a></td>
          </tr>
          <tr>
            <td style="padding: 10px; border: 1px solid #ddd; font-weight: bold;">Location</td>
            <td style="padding: 10px; border: 1px solid #ddd;">${location}</td>
          </tr>
          <tr>
            <td style="padding: 10px; border: 1px solid #ddd; font-weight: bold;">Newsletter</td>
            <td style="padding: 10px; border: 1px solid #ddd;">${subscribeNewsletter ? "Yes" : "No"}</td>
          </tr>
        </table>
        <p style="margin-top: 20px; color: #666;">This signup was submitted through the U-topia Get uPay form.</p>
      `,
    });

    console.log("Admin email sent successfully:", adminEmailResponse);

    // Send confirmation email to the user
    const userEmailResponse = await resend.emails.send({
      from: "U-topia <noreply@u-topia.com>",
      to: [email],
      subject: "Welcome to the uPay Waitlist!",
      html: `
        <h1>Welcome to the uPay Waitlist, ${name}!</h1>
        <p>Thank you for signing up for the uPay card. You're now on the list to be one of the first to get your own customizable uPay card!</p>
        <h2>Your Submission Details:</h2>
        <table style="border-collapse: collapse; width: 100%; max-width: 600px;">
          <tr>
            <td style="padding: 10px; border: 1px solid #ddd; font-weight: bold;">Name</td>
            <td style="padding: 10px; border: 1px solid #ddd;">${name}</td>
          </tr>
          <tr>
            <td style="padding: 10px; border: 1px solid #ddd; font-weight: bold;">Location</td>
            <td style="padding: 10px; border: 1px solid #ddd;">${location}</td>
          </tr>
          <tr>
            <td style="padding: 10px; border: 1px solid #ddd; font-weight: bold;">Newsletter</td>
            <td style="padding: 10px; border: 1px solid #ddd;">${subscribeNewsletter ? "Subscribed" : "Not subscribed"}</td>
          </tr>
        </table>
        <p style="margin-top: 20px;">We'll be in touch soon with updates on your uPay card!</p>
        <p>Best regards,<br>The U-topia Team</p>
      `,
    });

    console.log("User confirmation email sent successfully:", userEmailResponse);

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
        ...corsHeaders,
      },
    });
  } catch (error: any) {
    console.error("Error in send-upay-signup function:", error);
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
