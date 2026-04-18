import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const TermsOfService = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-32 pb-20 px-6 sm:px-8 lg:px-12">
        <div className="max-w-4xl mx-auto">
          <Link 
            to="/" 
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-8"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Home
          </Link>
          
          <h1 className="text-3xl md:text-4xl font-semibold mb-6">Terms of Service</h1>
          
          <div className="text-muted-foreground mb-8">
            Effective Date: April 18, 2026
          </div>
          
          <div className="prose prose-neutral dark:prose-invert max-w-none">
            <h2>1. Introduction</h2>
            <p>
              Welcome to U-TOPIA CORP ("Company", "we", "our", or "us"). These Terms of Service ("Terms") govern your access to and use of our website, platform, and related services (collectively, the "Services").
            </p>
            <p>
              By accessing or using our Services, you agree to be bound by these Terms. If you do not agree, you must not use the Services.
            </p>

            <h2>2. Eligibility</h2>
            <p>
              You must be at least 18 years old (or the legal age in your jurisdiction) to use our Services. By using the platform, you represent and warrant that you meet these requirements.
            </p>

            <h2>3. Description of Services</h2>
            <p>U-TOPIA CORP provides financial technology services, which may include:</p>
            <ul>
              <li>Digital wallets</li>
              <li>Payments and transfers</li>
              <li>Financial data tools</li>
              <li>Account management features</li>
              <li>Integration with third-party financial providers</li>
            </ul>
            <p>We reserve the right to modify, suspend, or discontinue any part of the Services at any time.</p>

            <h2>4. Account Registration</h2>
            <p>To access certain features, you must create an account. You agree to:</p>
            <ul>
              <li>Provide accurate and complete information</li>
              <li>Keep your login credentials secure</li>
              <li>Notify us immediately of any unauthorized access</li>
            </ul>
            <p>You are fully responsible for all activities under your account.</p>

            <h2>5. Compliance and KYC</h2>
            <p>
              You agree to comply with all applicable laws, including anti-money laundering (AML) and counter-terrorist financing regulations.
            </p>
            <p>
              We may require identity verification ("KYC") at any time. Failure to comply may result in account suspension or termination.
            </p>

            <h2>6. Prohibited Activities</h2>
            <p>You agree not to:</p>
            <ul>
              <li>Use the Services for illegal or fraudulent purposes</li>
              <li>Engage in money laundering or financial crime</li>
              <li>Interfere with system security or integrity</li>
              <li>Attempt unauthorized access to accounts or data</li>
              <li>Use the platform to transmit harmful code</li>
            </ul>
            <p>We reserve the right to investigate and take legal action for violations.</p>

            <h2>7. Payments and Fees</h2>
            <p>Certain features may involve fees. By using paid services, you agree to:</p>
            <ul>
              <li>Pay all applicable fees</li>
              <li>Authorize us to process transactions</li>
              <li>Accept that fees may change with notice</li>
            </ul>
            <p>All transactions are final unless otherwise stated.</p>

            <h2>8. Third-Party Services</h2>
            <p>Our platform may integrate with third-party providers (e.g., banks, payment processors). We are not responsible for:</p>
            <ul>
              <li>Third-party service availability</li>
              <li>Errors or delays caused by third parties</li>
              <li>Their terms or policies</li>
            </ul>
            <p>You use third-party services at your own risk.</p>

            <h2>9. Data and Privacy</h2>
            <p>Your use of the Services is also governed by our Privacy Policy. By using our platform, you consent to:</p>
            <ul>
              <li>Data collection and processing</li>
              <li>Sharing data with regulated partners where required</li>
              <li>Compliance reporting obligations</li>
            </ul>

            <h2>10. Security</h2>
            <p>
              We implement reasonable security measures, but we do not guarantee absolute security. You are responsible for safeguarding your credentials and devices.
            </p>

            <h2>11. Intellectual Property</h2>
            <p>All content, branding, and technology on the platform are owned by or licensed to U-TOPIA CORP. You may not:</p>
            <ul>
              <li>Copy, modify, or distribute our content</li>
              <li>Reverse engineer the platform</li>
              <li>Use our brand without permission</li>
            </ul>

            <h2>12. Suspension and Termination</h2>
            <p>We may suspend or terminate your account if:</p>
            <ul>
              <li>You violate these Terms</li>
              <li>We are required to do so by law</li>
              <li>There is suspicious or fraudulent activity</li>
            </ul>
            <p>You may also close your account at any time.</p>

            <h2>13. Disclaimers</h2>
            <p>The Services are provided "as is" and "as available." We do not guarantee:</p>
            <ul>
              <li>Continuous or error-free operation</li>
              <li>Accuracy of financial data</li>
              <li>Suitability for specific financial outcomes</li>
            </ul>
            <p>We do not provide financial, legal, or investment advice.</p>

            <h2>14. Limitation of Liability</h2>
            <p>To the fullest extent permitted by law, U-TOPIA CORP shall not be liable for:</p>
            <ul>
              <li>Indirect or consequential damages</li>
              <li>Loss of profits, data, or business</li>
              <li>Unauthorized access or use of your account</li>
            </ul>
            <p>Our total liability shall not exceed the amount you paid us in the last 12 months.</p>

            <h2>15. Indemnification</h2>
            <p>You agree to indemnify and hold harmless U-TOPIA CORP from any claims, damages, or losses arising from:</p>
            <ul>
              <li>Your use of the Services</li>
              <li>Your violation of these Terms</li>
              <li>Your breach of applicable laws</li>
            </ul>

            <h2>16. Governing Law</h2>
            <p>
              These Terms are governed by the laws of the United States of America. Any disputes shall be resolved in the appropriate courts within the United States unless otherwise required by law.
            </p>

            <h2>17. Changes to Terms</h2>
            <p>
              We may update these Terms at any time. Continued use of the Services after changes constitutes acceptance.
            </p>

            <h2>18. Contact Information</h2>
            <p>If you have questions about these Terms, contact us at:</p>
            <p>
              <strong>Email:</strong> comms@u-topia.com<br />
              <strong>Address:</strong><br />
              3 Calle Tulane Cond. University Plaza Apt. 29<br />
              00927, SAN JUAN, PR, 00927<br />
              United States of America
            </p>

            <h2>19. Risk Disclosure (Fintech-Specific)</h2>
            <p>By using our Services, you acknowledge:</p>
            <ul>
              <li>Financial transactions carry inherent risks</li>
              <li>Digital assets (if applicable) may be volatile</li>
              <li>Regulatory environments may change</li>
            </ul>
            <p>You assume full responsibility for your financial decisions.</p>

            <h2>20. Entire Agreement</h2>
            <p>
              These Terms constitute the entire agreement between you and U-TOPIA CORP regarding the Services and supersede all prior agreements.
            </p>

            <p className="text-center font-medium mt-12">End of Terms</p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default TermsOfService;
