import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const PrivacyPolicy = () => {
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
          
          <h1 className="text-3xl md:text-4xl font-semibold mb-6">Privacy Policy</h1>
          
          <div className="text-muted-foreground mb-8">
            Effective Date: April 18, 2026
          </div>
          
          <div className="prose prose-neutral dark:prose-invert max-w-none">
            <h2>1. Introduction</h2>
            <p>
              U-TOPIA CORP ("Company", "we", "our", or "us") respects your privacy and is committed to protecting your personal data. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our website, platform, and related services (collectively, the "Services").
            </p>
            <p>
              By using our Services, you agree to the collection and use of information in accordance with this Privacy Policy.
            </p>

            <h2>2. Information We Collect</h2>
            <p>We may collect the following types of information:</p>
            
            <h3>a. Personal Information</h3>
            <ul>
              <li>Full name</li>
              <li>Date of birth</li>
              <li>Address</li>
              <li>Email address</li>
              <li>Phone number</li>
              <li>Government-issued identification (for KYC/AML compliance)</li>
            </ul>

            <h3>b. Financial Information</h3>
            <ul>
              <li>Bank account details</li>
              <li>Transaction history</li>
              <li>Payment methods</li>
            </ul>

            <h3>c. Technical Information</h3>
            <ul>
              <li>IP address</li>
              <li>Device information</li>
              <li>Browser type</li>
              <li>Operating system</li>
              <li>Usage data and interaction with our platform</li>
            </ul>

            <h3>d. Cookies and Tracking Technologies</h3>
            <p>
              We use cookies and similar technologies to enhance user experience, analyze usage, and improve our Services.
            </p>

            <h2>3. How We Use Your Information</h2>
            <p>We use your information to:</p>
            <ul>
              <li>Provide and maintain our Services</li>
              <li>Process transactions and payments</li>
              <li>Verify your identity (KYC/AML compliance)</li>
              <li>Detect and prevent fraud or illegal activities</li>
              <li>Improve platform performance and user experience</li>
              <li>Communicate with you (including support and updates)</li>
              <li>Comply with legal and regulatory obligations</li>
            </ul>

            <h2>4. Legal Basis for Processing (Where Applicable)</h2>
            <p>Depending on your jurisdiction, we process your data based on:</p>
            <ul>
              <li>Your consent</li>
              <li>Performance of a contract</li>
              <li>Compliance with legal obligations</li>
              <li>Legitimate business interests</li>
            </ul>

            <h2>5. Sharing and Disclosure of Information</h2>
            <p>We may share your information with:</p>

            <h3>a. Service Providers</h3>
            <p>
              Third-party vendors that support our operations (e.g., payment processors, cloud services, identity verification providers).
            </p>

            <h3>b. Financial Institutions</h3>
            <p>
              Banks and regulated entities necessary to facilitate transactions.
            </p>

            <h3>c. Legal and Regulatory Authorities</h3>
            <p>
              When required by law, regulation, or legal process, including AML and fraud prevention.
            </p>

            <h3>d. Business Transfers</h3>
            <p>
              In connection with a merger, acquisition, or sale of assets.
            </p>

            <p>We do not sell your personal data.</p>

            <h2>6. Data Retention</h2>
            <p>We retain your personal data only as long as necessary to:</p>
            <ul>
              <li>Provide Services</li>
              <li>Comply with legal obligations</li>
              <li>Resolve disputes</li>
              <li>Enforce agreements</li>
            </ul>
            <p>Retention periods may vary depending on regulatory requirements.</p>

            <h2>7. Data Security</h2>
            <p>
              We implement appropriate technical and organizational measures to protect your data. However, no system is completely secure, and we cannot guarantee absolute security.
            </p>

            <h2>8. Your Rights</h2>
            <p>Depending on your location, you may have the right to:</p>
            <ul>
              <li>Access your personal data</li>
              <li>Correct inaccurate data</li>
              <li>Request deletion of your data</li>
              <li>Restrict or object to processing</li>
              <li>Request data portability</li>
            </ul>
            <p>To exercise your rights, contact us at comms@u-topia.com.</p>

            <h2>9. International Data Transfers</h2>
            <p>
              Your information may be transferred to and processed in the United States or other jurisdictions where our partners operate. By using our Services, you consent to such transfers.
            </p>

            <h2>10. Cookies Policy</h2>
            <p>We use cookies to:</p>
            <ul>
              <li>Authenticate users</li>
              <li>Remember preferences</li>
              <li>Analyze traffic and usage</li>
            </ul>
            <p>
              You can control cookies through your browser settings. Disabling cookies may affect functionality.
            </p>

            <h2>11. Third-Party Links</h2>
            <p>
              Our platform may contain links to third-party websites. We are not responsible for their privacy practices or content.
            </p>

            <h2>12. Children's Privacy</h2>
            <p>
              Our Services are not intended for individuals under 18. We do not knowingly collect data from minors.
            </p>

            <h2>13. Changes to This Privacy Policy</h2>
            <p>
              We may update this Privacy Policy from time to time. Continued use of the Services after updates constitutes acceptance of the revised policy.
            </p>

            <h2>14. Contact Information</h2>
            <p>If you have any questions about this Privacy Policy, contact us at:</p>
            <p>
              <strong>Email:</strong> comms@u-topia.com<br />
              <strong>Address:</strong><br />
              3 Calle Tulane Cond. University Plaza Apt. 29<br />
              00927, SAN JUAN, PR, 00927<br />
              United States of America
            </p>

            <h2>15. Regulatory Compliance (Fintech-Specific)</h2>
            <p>
              As a financial technology provider, we may be subject to various regulations, including:
            </p>
            <ul>
              <li>Anti-Money Laundering (AML) laws</li>
              <li>Know Your Customer (KYC) requirements</li>
              <li>Financial reporting obligations</li>
            </ul>
            <p>
              We may collect and share information as necessary to comply with these obligations.
            </p>

            <p className="text-center font-medium mt-12">End of Privacy Policy</p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
