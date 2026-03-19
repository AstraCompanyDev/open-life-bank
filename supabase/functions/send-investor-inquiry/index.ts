import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { Resend } from "https://esm.sh/resend@2.0.0";

const resend = new Resend(Deno.env.get("RESEND_API_KEY"));

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

interface InvestorInquiryRequest {
  name: string;
  company: string;
  title: string;
  email: string;
  mobile: string;
  investmentTypes: string[];
}

const getInvestmentTypeLabels = (types: string[]): string => {
  const labelMap: Record<string, string> = {
    "crypto": "Crypto",
    "equity": "Equity",
    "token-equity": "Token & Equity",
  };
  return types.map(t => labelMap[t] || t).join(", ");
};

const handler = async (req: Request): Promise<Response> => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { name, company, title, email, mobile, investmentTypes }: InvestorInquiryRequest = await req.json();

    console.log("Received investor inquiry:", { name, company, title, email, mobile, investmentTypes });

    const investmentTypeLabel = getInvestmentTypeLabels(investmentTypes);

    // Send email to U-topia team
    const adminEmailResponse = await resend.emails.send({
      from: "U-topia <noreply@u-topia.com>",
      to: ["info@u-topia.com"],
      subject: `New Investor Inquiry from ${name} - ${company}`,
      html: `
        <h1>New Investor Inquiry</h1>
        <p>You have received a new investor inquiry from the U-topia website:</p>
        <table style="border-collapse: collapse; width: 100%; max-width: 600px;">
          <tr>
            <td style="padding: 10px; border: 1px solid #ddd; font-weight: bold;">Name</td>
            <td style="padding: 10px; border: 1px solid #ddd;">${name}</td>
          </tr>
          <tr>
            <td style="padding: 10px; border: 1px solid #ddd; font-weight: bold;">Company</td>
            <td style="padding: 10px; border: 1px solid #ddd;">${company}</td>
          </tr>
          <tr>
            <td style="padding: 10px; border: 1px solid #ddd; font-weight: bold;">Title</td>
            <td style="padding: 10px; border: 1px solid #ddd;">${title}</td>
          </tr>
          <tr>
            <td style="padding: 10px; border: 1px solid #ddd; font-weight: bold;">Email</td>
            <td style="padding: 10px; border: 1px solid #ddd;"><a href="mailto:${email}">${email}</a></td>
          </tr>
          <tr>
            <td style="padding: 10px; border: 1px solid #ddd; font-weight: bold;">Mobile/Telegram</td>
            <td style="padding: 10px; border: 1px solid #ddd;">${mobile}</td>
          </tr>
          <tr>
            <td style="padding: 10px; border: 1px solid #ddd; font-weight: bold;">Investment Interest</td>
            <td style="padding: 10px; border: 1px solid #ddd;">${investmentTypeLabel}</td>
          </tr>
        </table>
        <p style="margin-top: 20px; color: #666;">This inquiry was submitted through the U-topia investor contact form.</p>
      `,
    });

    console.log("Admin email sent successfully:", adminEmailResponse);

    // Send confirmation email to the user
    const userEmailResponse = await resend.emails.send({
      from: "U-topia <noreply@u-topia.com>",
      to: [email],
      subject: "Thank you for your interest in U-topia",
      html: `
        <h1>Thank you for reaching out, ${name}!</h1>
        <p>We have received your investor inquiry and our team is excited to explore potential opportunities with you.</p>
        <h2>Your Submission Details:</h2>
        <table style="border-collapse: collapse; width: 100%; max-width: 600px;">
          <tr>
            <td style="padding: 10px; border: 1px solid #ddd; font-weight: bold;">Company</td>
            <td style="padding: 10px; border: 1px solid #ddd;">${company}</td>
          </tr>
          <tr>
            <td style="padding: 10px; border: 1px solid #ddd; font-weight: bold;">Title</td>
            <td style="padding: 10px; border: 1px solid #ddd;">${title}</td>
          </tr>
          <tr>
            <td style="padding: 10px; border: 1px solid #ddd; font-weight: bold;">Investment Interest</td>
            <td style="padding: 10px; border: 1px solid #ddd;">${investmentTypeLabel}</td>
          </tr>
        </table>
        <p style="margin-top: 20px;">We will review your inquiry and get back to you shortly.</p>
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
    console.error("Error in send-investor-inquiry function:", error);
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
