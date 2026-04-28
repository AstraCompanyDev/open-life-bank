import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const ProhibitedActivities = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      <main className="flex-grow pt-32 pb-24 px-6 sm:px-8 lg:px-12">
        <div className="max-w-3xl mx-auto">
          <Link
            to="/legal"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-10"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Legal
          </Link>

          <h1 className="text-3xl md:text-4xl font-semibold mb-3">
            U-topia Card — Prohibited and Restricted Activities Policy
          </h1>
          <p className="text-muted-foreground text-lg mb-16">
            Last updated: April 28, 2026
          </p>

          <div className="space-y-12 text-base leading-relaxed text-muted-foreground">
            <section>
              <h2 className="text-xl font-semibold mb-5 text-foreground">1. Introduction</h2>
              <div className="space-y-4">
                <p>
                  This Prohibited and Restricted Activities Policy ("<strong>Policy</strong>") is issued by <strong>U-TOPIA CORP.</strong> ("<strong>U-TOPIA CORP.,” “Company,” “we,” “us,” or “our</strong>") and governs the permissible use of the <strong>U-topia Card</strong>, associated accounts, and all related services (collectively, the "<strong>Services</strong>").
                </p>
                <p>
                  This Policy is designed to ensure compliance with applicable laws and regulations, including but not limited to anti-money laundering, counter-terrorist financing, sanctions compliance, and fraud prevention requirements, as well as to align with the requirements of U-TOPIA CORP.'s issuing and infrastructure partners.
                </p>
                <p>
                  By accessing or using the Services, each user ("<strong>User</strong>" or "<strong>you</strong>") agrees to comply with this Policy.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-5 text-foreground">2. Scope and Applicability</h2>
              <p className="mb-4">This Policy applies to:</p>
              <ul className="space-y-3 mb-4">
                <li className="flex items-start gap-3"><span className="text-primary mt-1.5">•</span><span>All Users of the U-topia Card</span></li>
                <li className="flex items-start gap-3"><span className="text-primary mt-1.5">•</span><span>All transactions conducted through the Services</span></li>
                <li className="flex items-start gap-3"><span className="text-primary mt-1.5">•</span><span>All integrations, applications, and APIs operated by or on behalf of U-TOPIA CORP.</span></li>
                <li className="flex items-start gap-3"><span className="text-primary mt-1.5">•</span><span>All third parties acting on behalf of or through a User</span></li>
              </ul>
              <p>
                U-TOPIA CORP. reserves the right to interpret and enforce this Policy at its sole discretion, subject to applicable law.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-5 text-foreground">3. Prohibited Activities</h2>
              <p className="mb-6">
                Users shall not, directly or indirectly, use the Services in connection with, or for the benefit of, any of the following activities:
              </p>

              <h3 className="text-lg font-semibold mb-4 text-foreground">3.1 Illegal or Unlawful Activities</h3>
              <p className="mb-4">Any activity that violates applicable laws, regulations, or governmental orders, including but not limited to:</p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-3"><span className="text-primary mt-1.5">•</span><span>The manufacture, distribution, or sale of controlled substances without appropriate authorization</span></li>
                <li className="flex items-start gap-3"><span className="text-primary mt-1.5">•</span><span>The sale, transfer, or facilitation of weapons, firearms, ammunition, or related components</span></li>
                <li className="flex items-start gap-3"><span className="text-primary mt-1.5">•</span><span>The creation, distribution, or facilitation of illegal or exploitative content</span></li>
                <li className="flex items-start gap-3"><span className="text-primary mt-1.5">•</span><span>Gambling, betting, lotteries, or games of chance, whether online or offline</span></li>
                <li className="flex items-start gap-3"><span className="text-primary mt-1.5">•</span><span>Prostitution, escort services, or other unlawful adult services</span></li>
                <li className="flex items-start gap-3"><span className="text-primary mt-1.5">•</span><span>The distribution of counterfeit, stolen, or unauthorized goods</span></li>
                <li className="flex items-start gap-3"><span className="text-primary mt-1.5">•</span><span>Any fraudulent scheme, including Ponzi schemes, pyramid schemes, or deceptive financial practices</span></li>
              </ul>

              <h3 className="text-lg font-semibold mb-4 text-foreground">3.2 Intellectual Property Infringement</h3>
              <p className="mb-4">Any activity that infringes upon the intellectual property or proprietary rights of others, including but not limited to:</p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-3"><span className="text-primary mt-1.5">•</span><span>Distribution or sale of pirated software, media, or digital goods</span></li>
                <li className="flex items-start gap-3"><span className="text-primary mt-1.5">•</span><span>Unauthorized use of trademarks, trade names, or branding</span></li>
                <li className="flex items-start gap-3"><span className="text-primary mt-1.5">•</span><span>Sale or distribution of counterfeit goods</span></li>
                <li className="flex items-start gap-3"><span className="text-primary mt-1.5">•</span><span>Violation of copyrights, patents, trade secrets, or privacy rights</span></li>
              </ul>

              <h3 className="text-lg font-semibold mb-4 text-foreground">3.3 Violent, Abusive, or Harmful Conduct</h3>
              <p className="mb-4">Any activity that promotes, supports, or facilitates:</p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-3"><span className="text-primary mt-1.5">•</span><span>Violence or physical harm against individuals or property</span></li>
                <li className="flex items-start gap-3"><span className="text-primary mt-1.5">•</span><span>Hate speech or discrimination against any individual or group based on protected characteristics</span></li>
                <li className="flex items-start gap-3"><span className="text-primary mt-1.5">•</span><span>Extremist, terrorist, or otherwise harmful organizations or activities</span></li>
              </ul>

              <h3 className="text-lg font-semibold mb-4 text-foreground">3.4 Financial Misconduct and Fraud</h3>
              <p className="mb-4">Any activity involving deception, misrepresentation, or financial abuse, including but not limited to:</p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-3"><span className="text-primary mt-1.5">•</span><span>Providing false, misleading, or incomplete information to U-TOPIA CORP.</span></li>
                <li className="flex items-start gap-3"><span className="text-primary mt-1.5">•</span><span>Use of stolen, unauthorized, or compromised financial instruments</span></li>
                <li className="flex items-start gap-3"><span className="text-primary mt-1.5">•</span><span>Money laundering, structuring, layering, or any attempt to disguise the origin of funds</span></li>
                <li className="flex items-start gap-3"><span className="text-primary mt-1.5">•</span><span>Acting as an intermediary, proxy, or pass-through for undisclosed third parties</span></li>
                <li className="flex items-start gap-3"><span className="text-primary mt-1.5">•</span><span>Circumventing transaction limits, monitoring systems, or compliance controls</span></li>
              </ul>

              <h3 className="text-lg font-semibold mb-4 text-foreground">3.5 Misuse of Services</h3>
              <p className="mb-4">Users shall not misuse the Services, including but not limited to:</p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3"><span className="text-primary mt-1.5">•</span><span>Using the Services for purposes not disclosed during onboarding or subsequently approved by U-TOPIA CORP.</span></li>
                <li className="flex items-start gap-3"><span className="text-primary mt-1.5">•</span><span>Granting access to the Services to unauthorized third parties</span></li>
                <li className="flex items-start gap-3"><span className="text-primary mt-1.5">•</span><span>Misrepresenting affiliation with U-TOPIA CORP. or its partners</span></li>
                <li className="flex items-start gap-3"><span className="text-primary mt-1.5">•</span><span>Attempting to exploit, reverse engineer, interfere with, or bypass system safeguards or security controls</span></li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-5 text-foreground">4. Restricted Activities</h2>
              <p className="mb-4">
                Certain activities may be permitted only with prior approval and subject to enhanced due diligence ("EDD"), ongoing monitoring, and additional controls. These include:
              </p>
              <ul className="space-y-3 mb-4">
                <li className="flex items-start gap-3"><span className="text-primary mt-1.5">•</span><span>Financial services activities (including brokerage, lending, or investment services)</span></li>
                <li className="flex items-start gap-3"><span className="text-primary mt-1.5">•</span><span>Pharmaceutical or medical product sales requiring regulatory authorization</span></li>
                <li className="flex items-start gap-3"><span className="text-primary mt-1.5">•</span><span>High-risk cross-border transactions or jurisdictions</span></li>
                <li className="flex items-start gap-3"><span className="text-primary mt-1.5">•</span><span>Digital asset-related services, including custody, exchange, or yield-generating products</span></li>
              </ul>
              <p>
                U-TOPIA CORP. reserves the right to approve, restrict, or deny such activities at its sole discretion.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-5 text-foreground">5. Monitoring and Compliance</h2>
              <p className="mb-4">
                U-TOPIA CORP. employs a range of compliance and risk management measures, including but not limited to:
              </p>
              <ul className="space-y-3 mb-4">
                <li className="flex items-start gap-3"><span className="text-primary mt-1.5">•</span><span>Identity verification and due diligence procedures</span></li>
                <li className="flex items-start gap-3"><span className="text-primary mt-1.5">•</span><span>Transaction monitoring and behavioral analysis</span></li>
                <li className="flex items-start gap-3"><span className="text-primary mt-1.5">•</span><span>Risk scoring and merchant category controls</span></li>
                <li className="flex items-start gap-3"><span className="text-primary mt-1.5">•</span><span>Integration with third-party compliance and issuance partners</span></li>
              </ul>
              <p>Users acknowledge and consent to such monitoring as a condition of using the Services.</p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-5 text-foreground">6. Enforcement and Remedies</h2>
              <p className="mb-6">
                In the event of actual or suspected violations of this Policy, U-TOPIA CORP. may, at its sole discretion and without prior notice, take any action it deems appropriate, including but not limited to:
              </p>

              <h3 className="text-lg font-semibold mb-4 text-foreground">6.1 Operational Actions</h3>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-3"><span className="text-primary mt-1.5">•</span><span>Blocking or declining transactions</span></li>
                <li className="flex items-start gap-3"><span className="text-primary mt-1.5">•</span><span>Suspending or terminating card functionality</span></li>
                <li className="flex items-start gap-3"><span className="text-primary mt-1.5">•</span><span>Restricting or closing user accounts</span></li>
              </ul>

              <h3 className="text-lg font-semibold mb-4 text-foreground">6.2 Financial Actions</h3>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-3"><span className="text-primary mt-1.5">•</span><span>Freezing or holding funds</span></li>
                <li className="flex items-start gap-3"><span className="text-primary mt-1.5">•</span><span>Reversing or canceling transactions where permitted</span></li>
                <li className="flex items-start gap-3"><span className="text-primary mt-1.5">•</span><span>Enforcing collateral liquidation or recovery mechanisms, where applicable</span></li>
              </ul>

              <h3 className="text-lg font-semibold mb-4 text-foreground">6.3 Legal and Regulatory Actions</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3"><span className="text-primary mt-1.5">•</span><span>Reporting to the relevant regulatory authorities</span></li>
                <li className="flex items-start gap-3"><span className="text-primary mt-1.5">•</span><span>Cooperating with law enforcement agencies</span></li>
                <li className="flex items-start gap-3"><span className="text-primary mt-1.5">•</span><span>Pursuing legal remedies, including recovery of losses or damages</span></li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-5 text-foreground">7. Partner and Third-Party Obligations</h2>
              <p className="mb-4">Any third party, integrator, or partner utilizing the Services must:</p>
              <ul className="space-y-3 mb-4">
                <li className="flex items-start gap-3"><span className="text-primary mt-1.5">•</span><span>Ensure that all end-users comply with this Policy</span></li>
                <li className="flex items-start gap-3"><span className="text-primary mt-1.5">•</span><span>Implement controls to prevent prohibited activities</span></li>
                <li className="flex items-start gap-3"><span className="text-primary mt-1.5">•</span><span>Promptly report any suspected violations</span></li>
              </ul>
              <p>
                Failure to comply may result in suspension or termination of access to the Services and associated agreements.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-5 text-foreground">8. Amendments</h2>
              <div className="space-y-4">
                <p>
                  U-TOPIA CORP. reserves the right to amend or update this Policy at any time. Any such changes shall become effective upon publication or notification, unless otherwise required by applicable law.
                </p>
                <p>
                  Continued use of the Services following any such update constitutes acceptance of the revised Policy.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-5 text-foreground">9. Interpretation</h2>
              <p>
                This Policy shall be interpreted in a manner consistent with applicable laws, regulatory expectations, and partner requirements. In the event of ambiguity, U-TOPIA CORP.'s interpretation shall prevail, subject to applicable legal constraints.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-5 text-foreground">10. Contact</h2>
              <p>
                For questions regarding this Policy or to report potential violations, Users may contact U-TOPIA CORP. through official support channels at{" "}
                <a href="mailto:support@u-topia.com" className="text-primary hover:underline">
                  support@u-topia.com
                </a>
                .
              </p>
            </section>

            <div className="pt-8 border-t border-border">
              <p className="text-center text-foreground font-medium">End of Policy</p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ProhibitedActivities;
