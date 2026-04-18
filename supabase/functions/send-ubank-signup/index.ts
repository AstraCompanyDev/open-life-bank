import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { Resend } from "https://esm.sh/resend@2.0.0";

const resend = new Resend(Deno.env.get("RESEND_API_KEY"));

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

interface UBankSignupRequest {
  name: string;
  email: string;
  mobile: string;
  subscribeNewsletter: boolean;
}

const handler = async (req: Request): Promise<Response> => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { name, email, mobile, subscribeNewsletter }: UBankSignupRequest = await req.json();

    console.log("Received uBank signup:", { name, email, mobile, subscribeNewsletter });

    // Send email to U-topia team
    const adminEmailResponse = await resend.emails.send({
      from: "U-topia <noreply@u-topia.com>",
      to: ["info@u-topia.com", "sean@astracompany.co"],
      subject: `New Waitlist Signup from ${name}`,
      html: `
        <h1>New uBank Account Signup</h1>
        <p>Someone has signed up for the uBank account waitlist:</p>
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
            <td style="padding: 10px; border: 1px solid #ddd; font-weight: bold;">Mobile</td>
            <td style="padding: 10px; border: 1px solid #ddd;">${mobile}</td>
          </tr>
          <tr>
            <td style="padding: 10px; border: 1px solid #ddd; font-weight: bold;">Newsletter</td>
            <td style="padding: 10px; border: 1px solid #ddd;">${subscribeNewsletter ? "Yes" : "No"}</td>
          </tr>
        </table>
        <p style="margin-top: 20px; color: #666;">This signup was submitted through the U-topia Open Account form.</p>
      `,
    });

    console.log("Admin email sent successfully:", adminEmailResponse);

    // Send confirmation email to the user
    const userEmailResponse = await resend.emails.send({
      from: "U-topia <noreply@u-topia.com>",
      to: [email],
      subject: "Welcome to the uBank Waitlist!",
      html: `
        <h1>Welcome to the uBank Waitlist, ${name}!</h1>
        <p>Thank you for signing up for a uBank account. You're now on the list to be one of the first to experience seamless crypto management with 70,000+ assets!</p>
        <h2>Your Submission Details:</h2>
        <table style="border-collapse: collapse; width: 100%; max-width: 600px;">
          <tr>
            <td style="padding: 10px; border: 1px solid #ddd; font-weight: bold;">Name</td>
            <td style="padding: 10px; border: 1px solid #ddd;">${name}</td>
          </tr>
          <tr>
            <td style="padding: 10px; border: 1px solid #ddd; font-weight: bold;">Mobile</td>
            <td style="padding: 10px; border: 1px solid #ddd;">${mobile}</td>
          </tr>
          <tr>
            <td style="padding: 10px; border: 1px solid #ddd; font-weight: bold;">Newsletter</td>
            <td style="padding: 10px; border: 1px solid #ddd;">${subscribeNewsletter ? "Subscribed" : "Not subscribed"}</td>
          </tr>
        </table>
        <p style="margin-top: 20px;">We'll be in touch soon with updates on your uBank account!</p>
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
    console.error("Error in send-ubank-signup function:", error);
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