import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      <main className="flex-grow pt-32 pb-24 px-6 sm:px-8 lg:px-12">
        <div className="max-w-3xl mx-auto">
          <Link 
            to="/" 
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-10"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Home
          </Link>
          
          <h1 className="text-3xl md:text-4xl font-semibold mb-3">Privacy Policy</h1>
          <p className="text-muted-foreground text-lg mb-16">
            Effective Date: April 18, 2026
          </p>
          
          <div className="space-y-16">
            {/* Section 1 */}
            <section>
              <h2 className="text-xl font-semibold mb-5 text-foreground">1. Introduction</h2>
              <div className="space-y-4 text-base leading-relaxed text-muted-foreground">
                <p>
                  U-TOPIA CORP ("Company", "we", "our", or "us") respects your privacy and is committed to protecting your personal data. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our website, platform, and related services (collectively, the "Services").
                </p>
                <p>
                  By using our Services, you agree to the collection and use of information in accordance with this Privacy Policy.
                </p>
              </div>
            </section>

            {/* Section 2 */}
            <section>
              <h2 className="text-xl font-semibold mb-5 text-foreground">2. Information We Collect</h2>
              <p className="text-base leading-relaxed text-muted-foreground mb-6">
                We may collect the following types of information:
              </p>
              
              <div className="space-y-8">
                <div className="pl-4 border-l-2 border-border">
                  <h3 className="font-medium text-foreground mb-3">a. Personal Information</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-start gap-3"><span className="text-primary mt-1.5">•</span><span>Full name</span></li>
                    <li className="flex items-start gap-3"><span className="text-primary mt-1.5">•</span><span>Date of birth</span></li>
                    <li className="flex items-start gap-3"><span className="text-primary mt-1.5">•</span><span>Address</span></li>
                    <li className="flex items-start gap-3"><span className="text-primary mt-1.5">•</span><span>Email address</span></li>
                    <li className="flex items-start gap-3"><span className="text-primary mt-1.5">•</span><span>Phone number</span></li>
                    <li className="flex items-start gap-3"><span className="text-primary mt-1.5">•</span><span>Government-issued identification (for KYC/AML compliance)</span></li>
                  </ul>
                </div>

                <div className="pl-4 border-l-2 border-border">
                  <h3 className="font-medium text-foreground mb-3">b. Financial Information</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-start gap-3"><span className="text-primary mt-1.5">•</span><span>Bank account details</span></li>
                    <li className="flex items-start gap-3"><span className="text-primary mt-1.5">•</span><span>Transaction history</span></li>
                    <li className="flex items-start gap-3"><span className="text-primary mt-1.5">•</span><span>Payment methods</span></li>
                  </ul>
                </div>

                <div className="pl-4 border-l-2 border-border">
                  <h3 className="font-medium text-foreground mb-3">c. Technical Information</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-start gap-3"><span className="text-primary mt-1.5">•</span><span>IP address</span></li>
                    <li className="flex items-start gap-3"><span className="text-primary mt-1.5">•</span><span>Device information</span></li>
                    <li className="flex items-start gap-3"><span className="text-primary mt-1.5">•</span><span>Browser type</span></li>
                    <li className="flex items-start gap-3"><span className="text-primary mt-1.5">•</span><span>Operating system</span></li>
                    <li className="flex items-start gap-3"><span className="text-primary mt-1.5">•</span><span>Usage data and interaction with our platform</span></li>
                  </ul>
                </div>

                <div className="pl-4 border-l-2 border-border">
                  <h3 className="font-medium text-foreground mb-3">d. Cookies and Tracking Technologies</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    We use cookies and similar technologies to enhance user experience, analyze usage, and improve our Services.
                  </p>
                </div>
              </div>
            </section>

            {/* Section 3 */}
            <section>
              <h2 className="text-xl font-semibold mb-5 text-foreground">3. How We Use Your Information</h2>
              <p className="text-base leading-relaxed text-muted-foreground mb-6">
                We use your information to:
              </p>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start gap-3"><span className="text-primary mt-1.5">•</span><span>Provide and maintain our Services</span></li>
                <li className="flex items-start gap-3"><span className="text-primary mt-1.5">•</span><span>Process transactions and payments</span></li>
                <li className="flex items-start gap-3"><span className="text-primary mt-1.5">•</span><span>Verify your identity (KYC/AML compliance)</span></li>
                <li className="flex items-start gap-3"><span className="text-primary mt-1.5">•</span><span>Detect and prevent fraud or illegal activities</span></li>
                <li className="flex items-start gap-3"><span className="text-primary mt-1.5">•</span><span>Improve platform performance and user experience</span></li>
                <li className="flex items-start gap-3"><span className="text-primary mt-1.5">•</span><span>Communicate with you (including support and updates)</span></li>
                <li className="flex items-start gap-3"><span className="text-primary mt-1.5">•</span><span>Comply with legal and regulatory obligations</span></li>
              </ul>
            </section>

            {/* Section 4 */}
            <section>
              <h2 className="text-xl font-semibold mb-5 text-foreground">4. Legal Basis for Processing (Where Applicable)</h2>
              <p className="text-base leading-relaxed text-muted-foreground mb-6">
                Depending on your jurisdiction, we process your data based on:
              </p>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start gap-3"><span className="text-primary mt-1.5">•</span><span>Your consent</span></li>
                <li className="flex items-start gap-3"><span className="text-primary mt-1.5">•</span><span>Performance of a contract</span></li>
                <li className="flex items-start gap-3"><span className="text-primary mt-1.5">•</span><span>Compliance with legal obligations</span></li>
                <li className="flex items-start gap-3"><span className="text-primary mt-1.5">•</span><span>Legitimate business interests</span></li>
              </ul>
            </section>

            {/* Section 5 */}
            <section>
              <h2 className="text-xl font-semibold mb-5 text-foreground">5. Sharing and Disclosure of Information</h2>
              <p className="text-base leading-relaxed text-muted-foreground mb-6">
                We may share your information with:
              </p>
              
              <div className="space-y-6">
                <div className="p-5 rounded-lg bg-muted/30">
                  <h3 className="font-medium text-foreground mb-3">a. Service Providers</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Third-party vendors that support our operations (e.g., payment processors, cloud services, identity verification providers).
                  </p>
                </div>

                <div className="p-5 rounded-lg bg-muted/30">
                  <h3 className="font-medium text-foreground mb-3">b. Financial Institutions</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Banks and regulated entities necessary to facilitate transactions.
                  </p>
                </div>

                <div className="p-5 rounded-lg bg-muted/30">
                  <h3 className="font-medium text-foreground mb-3">c. Legal and Regulatory Authorities</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    When required by law, regulation, or legal process, including AML and fraud prevention.
                  </p>
                </div>

                <div className="p-5 rounded-lg bg-muted/30">
                  <h3 className="font-medium text-foreground mb-3">d. Business Transfers</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    In connection with a merger, acquisition, or sale of assets.
                  </p>
                </div>
              </div>
              
              <p className="text-base leading-relaxed text-foreground font-medium mt-6">
                We do not sell your personal data.
              </p>
            </section>

            {/* Section 6 */}
            <section>
              <h2 className="text-xl font-semibold mb-5 text-foreground">6. Data Retention</h2>
              <p className="text-base leading-relaxed text-muted-foreground mb-6">
                We retain your personal data only as long as necessary to:
              </p>
              <ul className="space-y-3 text-muted-foreground mb-4">
                <li className="flex items-start gap-3"><span className="text-primary mt-1.5">•</span><span>Provide Services</span></li>
                <li className="flex items-start gap-3"><span className="text-primary mt-1.5">•</span><span>Comply with legal obligations</span></li>
                <li className="flex items-start gap-3"><span className="text-primary mt-1.5">•</span><span>Resolve disputes</span></li>
                <li className="flex items-start gap-3"><span className="text-primary mt-1.5">•</span><span>Enforce agreements</span></li>
              </ul>
              <p className="text-muted-foreground leading-relaxed">
                Retention periods may vary depending on regulatory requirements.
              </p>
            </section>

            {/* Section 7 */}
            <section>
              <h2 className="text-xl font-semibold mb-5 text-foreground">7. Data Security</h2>
              <p className="text-base leading-relaxed text-muted-foreground">
                We implement appropriate technical and organizational measures to protect your data. However, no system is completely secure, and we cannot guarantee absolute security.
              </p>
            </section>

            {/* Section 8 */}
            <section>
              <h2 className="text-xl font-semibold mb-5 text-foreground">8. Your Rights</h2>
              <p className="text-base leading-relaxed text-muted-foreground mb-6">
                Depending on your location, you may have the right to:
              </p>
              <ul className="space-y-3 text-muted-foreground mb-6">
                <li className="flex items-start gap-3"><span className="text-primary mt-1.5">•</span><span>Access your personal data</span></li>
                <li className="flex items-start gap-3"><span className="text-primary mt-1.5">•</span><span>Correct inaccurate data</span></li>
                <li className="flex items-start gap-3"><span className="text-primary mt-1.5">•</span><span>Request deletion of your data</span></li>
                <li className="flex items-start gap-3"><span className="text-primary mt-1.5">•</span><span>Restrict or object to processing</span></li>
                <li className="flex items-start gap-3"><span className="text-primary mt-1.5">•</span><span>Request data portability</span></li>
              </ul>
              <p className="text-muted-foreground leading-relaxed">
                To exercise your rights, contact us at <a href="mailto:comms@u-topia.com" className="text-primary hover:underline">comms@u-topia.com</a>.
              </p>
            </section>

            {/* Section 9 */}
            <section>
              <h2 className="text-xl font-semibold mb-5 text-foreground">9. International Data Transfers</h2>
              <p className="text-base leading-relaxed text-muted-foreground">
                Your information may be transferred to and processed in the United States or other jurisdictions where our partners operate. By using our Services, you consent to such transfers.
              </p>
            </section>

            {/* Section 10 */}
            <section>
              <h2 className="text-xl font-semibold mb-5 text-foreground">10. Cookies Policy</h2>
              <p className="text-base leading-relaxed text-muted-foreground mb-6">
                We use cookies to:
              </p>
              <ul className="space-y-3 text-muted-foreground mb-4">
                <li className="flex items-start gap-3"><span className="text-primary mt-1.5">•</span><span>Authenticate users</span></li>
                <li className="flex items-start gap-3"><span className="text-primary mt-1.5">•</span><span>Remember preferences</span></li>
                <li className="flex items-start gap-3"><span className="text-primary mt-1.5">•</span><span>Analyze traffic and usage</span></li>
              </ul>
              <p className="text-muted-foreground leading-relaxed">
                You can control cookies through your browser settings. Disabling cookies may affect functionality.
              </p>
            </section>

            {/* Section 11 */}
            <section>
              <h2 className="text-xl font-semibold mb-5 text-foreground">11. Third-Party Links</h2>
              <p className="text-base leading-relaxed text-muted-foreground">
                Our platform may contain links to third-party websites. We are not responsible for their privacy practices or content.
              </p>
            </section>

            {/* Section 12 */}
            <section>
              <h2 className="text-xl font-semibold mb-5 text-foreground">12. Children's Privacy</h2>
              <p className="text-base leading-relaxed text-muted-foreground">
                Our Services are not intended for individuals under 18. We do not knowingly collect data from minors.
              </p>
            </section>

            {/* Section 13 */}
            <section>
              <h2 className="text-xl font-semibold mb-5 text-foreground">13. Changes to This Privacy Policy</h2>
              <p className="text-base leading-relaxed text-muted-foreground">
                We may update this Privacy Policy from time to time. Continued use of the Services after updates constitutes acceptance of the revised policy.
              </p>
            </section>

            {/* Section 14 */}
            <section>
              <h2 className="text-xl font-semibold mb-5 text-foreground">14. Contact Information</h2>
              <p className="text-base leading-relaxed text-muted-foreground mb-6">
                If you have any questions about this Privacy Policy, contact us at:
              </p>
              <div className="p-6 rounded-lg bg-muted/30 space-y-2">
                <p className="text-foreground">
                  <strong>Email:</strong> <a href="mailto:comms@u-topia.com" className="text-primary hover:underline">comms@u-topia.com</a>
                </p>
                <p className="text-muted-foreground">
                  <strong className="text-foreground">Address:</strong><br />
                  3 Calle Tulane Cond. University Plaza Apt. 29<br />
                  00927, SAN JUAN, PR, 00927<br />
                  United States of America
                </p>
              </div>
            </section>

            {/* Section 15 */}
            <section>
              <h2 className="text-xl font-semibold mb-5 text-foreground">15. Regulatory Compliance (Fintech-Specific)</h2>
              <p className="text-base leading-relaxed text-muted-foreground mb-6">
                As a financial technology provider, we may be subject to various regulations, including:
              </p>
              <ul className="space-y-3 text-muted-foreground mb-6">
                <li className="flex items-start gap-3"><span className="text-primary mt-1.5">•</span><span>Anti-Money Laundering (AML) laws</span></li>
                <li className="flex items-start gap-3"><span className="text-primary mt-1.5">•</span><span>Know Your Customer (KYC) requirements</span></li>
                <li className="flex items-start gap-3"><span className="text-primary mt-1.5">•</span><span>Financial reporting obligations</span></li>
              </ul>
              <p className="text-muted-foreground leading-relaxed">
                We may collect and share information as necessary to comply with these obligations.
              </p>
            </section>

            {/* End */}
            <div className="pt-8 border-t border-border">
              <p className="text-center text-foreground font-medium">End of Privacy Policy</p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
