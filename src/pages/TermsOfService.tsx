import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const TermsOfService = () => {
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
          
          <h1 className="text-3xl md:text-4xl font-semibold mb-3">Terms of Service</h1>
          <p className="text-muted-foreground text-lg mb-16">
            Effective Date: April 18, 2026
          </p>
          
          <div className="space-y-16">
            {/* Section 1 */}
            <section>
              <h2 className="text-xl font-semibold mb-5 text-foreground">1. Introduction</h2>
              <div className="space-y-4 text-base leading-relaxed text-muted-foreground">
                <p>
                  Welcome to U-TOPIA CORP ("Company", "we", "our", or "us"). These Terms of Service ("Terms") govern your access to and use of our website, platform, and related services (collectively, the "Services").
                </p>
                <p>
                  By accessing or using our Services, you agree to be bound by these Terms. If you do not agree, you must not use the Services.
                </p>
              </div>
            </section>

            {/* Section 2 */}
            <section>
              <h2 className="text-xl font-semibold mb-5 text-foreground">2. Eligibility</h2>
              <p className="text-base leading-relaxed text-muted-foreground">
                You must be at least 18 years old (or the legal age in your jurisdiction) to use our Services. By using the platform, you represent and warrant that you meet these requirements.
              </p>
            </section>

            {/* Section 3 */}
            <section>
              <h2 className="text-xl font-semibold mb-5 text-foreground">3. Description of Services</h2>
              <p className="text-base leading-relaxed text-muted-foreground mb-6">
                U-TOPIA CORP provides financial technology services, which may include:
              </p>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start gap-3"><span className="text-primary mt-1.5">•</span><span>Digital wallets</span></li>
                <li className="flex items-start gap-3"><span className="text-primary mt-1.5">•</span><span>Payments and transfers</span></li>
                <li className="flex items-start gap-3"><span className="text-primary mt-1.5">•</span><span>Financial data tools</span></li>
                <li className="flex items-start gap-3"><span className="text-primary mt-1.5">•</span><span>Account management features</span></li>
                <li className="flex items-start gap-3"><span className="text-primary mt-1.5">•</span><span>Integration with third-party financial providers</span></li>
              </ul>
              <p className="text-muted-foreground leading-relaxed mt-6">
                We reserve the right to modify, suspend, or discontinue any part of the Services at any time.
              </p>
            </section>

            {/* Section 4 */}
            <section>
              <h2 className="text-xl font-semibold mb-5 text-foreground">4. Account Registration</h2>
              <p className="text-base leading-relaxed text-muted-foreground mb-6">
                To access certain features, you must create an account. You agree to:
              </p>
              <ul className="space-y-3 text-muted-foreground mb-6">
                <li className="flex items-start gap-3"><span className="text-primary mt-1.5">•</span><span>Provide accurate and complete information</span></li>
                <li className="flex items-start gap-3"><span className="text-primary mt-1.5">•</span><span>Keep your login credentials secure</span></li>
                <li className="flex items-start gap-3"><span className="text-primary mt-1.5">•</span><span>Notify us immediately of any unauthorized access</span></li>
              </ul>
              <p className="text-foreground font-medium leading-relaxed">
                You are fully responsible for all activities under your account.
              </p>
            </section>

            {/* Section 5 */}
            <section>
              <h2 className="text-xl font-semibold mb-5 text-foreground">5. Compliance and KYC</h2>
              <div className="space-y-4 text-base leading-relaxed text-muted-foreground">
                <p>
                  You agree to comply with all applicable laws, including anti-money laundering (AML) and counter-terrorist financing regulations.
                </p>
                <p>
                  We may require identity verification ("KYC") at any time. Failure to comply may result in account suspension or termination.
                </p>
              </div>
            </section>

            {/* Section 6 */}
            <section>
              <h2 className="text-xl font-semibold mb-5 text-foreground">6. Prohibited Activities</h2>
              <p className="text-base leading-relaxed text-muted-foreground mb-6">
                You agree not to:
              </p>
              <ul className="space-y-3 text-muted-foreground mb-6">
                <li className="flex items-start gap-3"><span className="text-primary mt-1.5">•</span><span>Use the Services for illegal or fraudulent purposes</span></li>
                <li className="flex items-start gap-3"><span className="text-primary mt-1.5">•</span><span>Engage in money laundering or financial crime</span></li>
                <li className="flex items-start gap-3"><span className="text-primary mt-1.5">•</span><span>Interfere with system security or integrity</span></li>
                <li className="flex items-start gap-3"><span className="text-primary mt-1.5">•</span><span>Attempt unauthorized access to accounts or data</span></li>
                <li className="flex items-start gap-3"><span className="text-primary mt-1.5">•</span><span>Use the platform to transmit harmful code</span></li>
              </ul>
              <p className="text-foreground font-medium leading-relaxed">
                We reserve the right to investigate and take legal action for violations.
              </p>
            </section>

            {/* Section 7 */}
            <section>
              <h2 className="text-xl font-semibold mb-5 text-foreground">7. Payments and Fees</h2>
              <p className="text-base leading-relaxed text-muted-foreground mb-6">
                Certain features may involve fees. By using paid services, you agree to:
              </p>
              <ul className="space-y-3 text-muted-foreground mb-6">
                <li className="flex items-start gap-3"><span className="text-primary mt-1.5">•</span><span>Pay all applicable fees</span></li>
                <li className="flex items-start gap-3"><span className="text-primary mt-1.5">•</span><span>Authorize us to process transactions</span></li>
                <li className="flex items-start gap-3"><span className="text-primary mt-1.5">•</span><span>Accept that fees may change with notice</span></li>
              </ul>
              <p className="text-foreground font-medium leading-relaxed">
                All transactions are final unless otherwise stated.
              </p>
            </section>

            {/* Section 8 */}
            <section>
              <h2 className="text-xl font-semibold mb-5 text-foreground">8. Third-Party Services</h2>
              <p className="text-base leading-relaxed text-muted-foreground mb-6">
                Our platform may integrate with third-party providers (e.g., banks, payment processors). We are not responsible for:
              </p>
              <ul className="space-y-3 text-muted-foreground mb-6">
                <li className="flex items-start gap-3"><span className="text-primary mt-1.5">•</span><span>Third-party service availability</span></li>
                <li className="flex items-start gap-3"><span className="text-primary mt-1.5">•</span><span>Errors or delays caused by third parties</span></li>
                <li className="flex items-start gap-3"><span className="text-primary mt-1.5">•</span><span>Their terms or policies</span></li>
              </ul>
              <p className="text-foreground font-medium leading-relaxed">
                You use third-party services at your own risk.
              </p>
            </section>

            {/* Section 9 */}
            <section>
              <h2 className="text-xl font-semibold mb-5 text-foreground">9. Data and Privacy</h2>
              <p className="text-base leading-relaxed text-muted-foreground mb-6">
                Your use of the Services is also governed by our <Link to="/privacy" className="text-primary hover:underline">Privacy Policy</Link>. By using our platform, you consent to:
              </p>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start gap-3"><span className="text-primary mt-1.5">•</span><span>Data collection and processing</span></li>
                <li className="flex items-start gap-3"><span className="text-primary mt-1.5">•</span><span>Sharing data with regulated partners where required</span></li>
                <li className="flex items-start gap-3"><span className="text-primary mt-1.5">•</span><span>Compliance reporting obligations</span></li>
              </ul>
            </section>

            {/* Section 10 */}
            <section>
              <h2 className="text-xl font-semibold mb-5 text-foreground">10. Security</h2>
              <p className="text-base leading-relaxed text-muted-foreground">
                We implement reasonable security measures, but we do not guarantee absolute security. You are responsible for safeguarding your credentials and devices.
              </p>
            </section>

            {/* Section 11 */}
            <section>
              <h2 className="text-xl font-semibold mb-5 text-foreground">11. Intellectual Property</h2>
              <p className="text-base leading-relaxed text-muted-foreground mb-6">
                All content, branding, and technology on the platform are owned by or licensed to U-TOPIA CORP. You may not:
              </p>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start gap-3"><span className="text-primary mt-1.5">•</span><span>Copy, modify, or distribute our content</span></li>
                <li className="flex items-start gap-3"><span className="text-primary mt-1.5">•</span><span>Reverse engineer the platform</span></li>
                <li className="flex items-start gap-3"><span className="text-primary mt-1.5">•</span><span>Use our brand without permission</span></li>
              </ul>
            </section>

            {/* Section 12 */}
            <section>
              <h2 className="text-xl font-semibold mb-5 text-foreground">12. Suspension and Termination</h2>
              <p className="text-base leading-relaxed text-muted-foreground mb-6">
                We may suspend or terminate your account if:
              </p>
              <ul className="space-y-3 text-muted-foreground mb-6">
                <li className="flex items-start gap-3"><span className="text-primary mt-1.5">•</span><span>You violate these Terms</span></li>
                <li className="flex items-start gap-3"><span className="text-primary mt-1.5">•</span><span>We are required to do so by law</span></li>
                <li className="flex items-start gap-3"><span className="text-primary mt-1.5">•</span><span>There is suspicious or fraudulent activity</span></li>
              </ul>
              <p className="text-muted-foreground leading-relaxed">
                You may also close your account at any time.
              </p>
            </section>

            {/* Section 13 */}
            <section>
              <h2 className="text-xl font-semibold mb-5 text-foreground">13. Disclaimers</h2>
              <p className="text-base leading-relaxed text-muted-foreground mb-6">
                The Services are provided "as is" and "as available." We do not guarantee:
              </p>
              <ul className="space-y-3 text-muted-foreground mb-6">
                <li className="flex items-start gap-3"><span className="text-primary mt-1.5">•</span><span>Continuous or error-free operation</span></li>
                <li className="flex items-start gap-3"><span className="text-primary mt-1.5">•</span><span>Accuracy of financial data</span></li>
                <li className="flex items-start gap-3"><span className="text-primary mt-1.5">•</span><span>Suitability for specific financial outcomes</span></li>
              </ul>
              <p className="text-foreground font-medium leading-relaxed">
                We do not provide financial, legal, or investment advice.
              </p>
            </section>

            {/* Section 14 */}
            <section>
              <h2 className="text-xl font-semibold mb-5 text-foreground">14. Limitation of Liability</h2>
              <p className="text-base leading-relaxed text-muted-foreground mb-6">
                To the fullest extent permitted by law, U-TOPIA CORP shall not be liable for:
              </p>
              <ul className="space-y-3 text-muted-foreground mb-6">
                <li className="flex items-start gap-3"><span className="text-primary mt-1.5">•</span><span>Indirect or consequential damages</span></li>
                <li className="flex items-start gap-3"><span className="text-primary mt-1.5">•</span><span>Loss of profits, data, or business</span></li>
                <li className="flex items-start gap-3"><span className="text-primary mt-1.5">•</span><span>Unauthorized access or use of your account</span></li>
              </ul>
              <p className="text-foreground font-medium leading-relaxed">
                Our total liability shall not exceed the amount you paid us in the last 12 months.
              </p>
            </section>

            {/* Section 15 */}
            <section>
              <h2 className="text-xl font-semibold mb-5 text-foreground">15. Indemnification</h2>
              <p className="text-base leading-relaxed text-muted-foreground mb-6">
                You agree to indemnify and hold harmless U-TOPIA CORP from any claims, damages, or losses arising from:
              </p>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start gap-3"><span className="text-primary mt-1.5">•</span><span>Your use of the Services</span></li>
                <li className="flex items-start gap-3"><span className="text-primary mt-1.5">•</span><span>Your violation of these Terms</span></li>
                <li className="flex items-start gap-3"><span className="text-primary mt-1.5">•</span><span>Your breach of applicable laws</span></li>
              </ul>
            </section>

            {/* Section 16 */}
            <section>
              <h2 className="text-xl font-semibold mb-5 text-foreground">16. Governing Law</h2>
              <p className="text-base leading-relaxed text-muted-foreground">
                These Terms are governed by the laws of the United States of America. Any disputes shall be resolved in the appropriate courts within the United States unless otherwise required by law.
              </p>
            </section>

            {/* Section 17 */}
            <section>
              <h2 className="text-xl font-semibold mb-5 text-foreground">17. Changes to Terms</h2>
              <p className="text-base leading-relaxed text-muted-foreground">
                We may update these Terms at any time. Continued use of the Services after changes constitutes acceptance.
              </p>
            </section>

            {/* Section 18 */}
            <section>
              <h2 className="text-xl font-semibold mb-5 text-foreground">18. Contact Information</h2>
              <p className="text-base leading-relaxed text-muted-foreground mb-6">
                If you have questions about these Terms, contact us at:
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

            {/* Section 19 */}
            <section>
              <h2 className="text-xl font-semibold mb-5 text-foreground">19. Risk Disclosure (Fintech-Specific)</h2>
              <p className="text-base leading-relaxed text-muted-foreground mb-6">
                By using our Services, you acknowledge:
              </p>
              <ul className="space-y-3 text-muted-foreground mb-6">
                <li className="flex items-start gap-3"><span className="text-primary mt-1.5">•</span><span>Financial transactions carry inherent risks</span></li>
                <li className="flex items-start gap-3"><span className="text-primary mt-1.5">•</span><span>Digital assets (if applicable) may be volatile</span></li>
                <li className="flex items-start gap-3"><span className="text-primary mt-1.5">•</span><span>Regulatory environments may change</span></li>
              </ul>
              <p className="text-foreground font-medium leading-relaxed">
                You assume full responsibility for your financial decisions.
              </p>
            </section>

            {/* Section 20 */}
            <section>
              <h2 className="text-xl font-semibold mb-5 text-foreground">20. Entire Agreement</h2>
              <p className="text-base leading-relaxed text-muted-foreground">
                These Terms constitute the entire agreement between you and U-TOPIA CORP regarding the Services and supersede all prior agreements.
              </p>
            </section>

            {/* End */}
            <div className="pt-8 border-t border-border">
              <p className="text-center text-foreground font-medium">End of Terms</p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default TermsOfService;
