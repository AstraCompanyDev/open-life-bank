import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const ESign = () => {
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
            E-Sign & Electronic Communications Notice
          </h1>
          <p className="text-muted-foreground text-lg mb-16">
            Last updated: April 22, 2026
          </p>

          <div className="space-y-12 text-base leading-relaxed text-muted-foreground">
            <section>
              <h2 className="text-xl font-semibold mb-5 text-foreground">
                Your Consent to Electronic Delivery ("Consent Statement")
              </h2>
              <div className="space-y-4">
                <p>
                  You are applying for a U-topia Card. If you consent to this Consent Statement for this Program, it applies even if you do not obtain (or are not offered) a U-topia Card.
                </p>
                <p>
                  Your affirmative consent to this E-sign & Electronic Communications Notice ("Consent") permits Us to provide you such Communications electronically, enables you to sign and authorize Communications electronically through the use of the Dashboard or API's provided by U-topia (the "Dashboard", "Platform" or "Service"), and allows U-topia and its partners to collect such e-signings. If you do not consent to electronic delivery of Communications, you will not be able to use the Service. By registering for a U-topia Account, applying for a card, or accessing U-topia Dashboard, you agree that such registration constitutes your electronic signature, and you consent to us providing notices to you, your Company Administrators, and Company Users, including in each case those required by law, and you shall ensure that all Company Administrators and Company Users consent to receiving User Notifications, electronically. You understand that this consent has the same legal effect as a physical signature.
                </p>
                <p>
                  You have the right to receive legal disclosures, notices, and communications (together, the "Covered Items") in paper form by mail. We may instead provide these Covered Items to you electronically if you: give us your Consent to do so and satisfy the System Requirements below. For purposes of this Consent Statement, the Covered Items include all servicing and collection communications on your account, as well as all legal disclosures, notices, and communications that U-topia is required to provide in writing regarding the account.
                </p>
                <p>
                  In this Consent Statement, "we," "us," and "our" refer to: Third National and our service providers.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-5 text-foreground">Duration of Consent</h2>
              <p>
                Your Consent will remain effective until: (1) you or we have terminated the Program or your Card; (2) you opt out of electronic communications. If you terminate your Card, your Consent will still continue with respect to the pre-termination rights of U-topia (including rights created by your Consent to this Consent Statement). See your cardholder agreement for information on how to terminate your Card.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-5 text-foreground">Methods of Providing Covered Items</h2>
              <p>
                In this document, "provide" means to deliver, make available, send, notify, or a similar term. We may provide the Covered Items electronically through files, including those in PDF format, downloaded from our website. It is your responsibility to review the Covered Items promptly, so you can take appropriate action.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-5 text-foreground">Access to Paper Copies</h2>
              <div className="space-y-4">
                <p>
                  You may make copies of the Covered Items by using the "print" or "save" functionality of the application in which you are viewing the Covered Items (e.g., Web browser, Adobe® Reader® software). We retain copies of the Covered Items for the time periods required by law and will provide you with copies upon request within those time periods. We do not necessarily retain copies for longer than is required by law. Save or print copies of Covered Items to ensure you have them when needed.
                </p>
                <p>
                  You may request a paper copy of any Covered Item at no cost by emailing us at{" "}
                  <a href="mailto:support@u-topia.com" className="text-primary hover:underline">
                    support@u-topia.com
                  </a>
                  .
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-5 text-foreground">Our Right to Send Paper</h2>
              <p>
                We reserve the right to provide the Covered Items in paper form at all times at our discretion, even if you have given us Consent to provide them electronically. For example, but without limitation, we may do this if we have a system outage or if we suspect fraud.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-5 text-foreground">Hardware and Software Requirements</h2>
              <p className="mb-6">To access and retain the Covered Items, you must have a computing or communications device with:</p>
              <ul className="space-y-3 mb-4">
                <li className="flex items-start gap-3"><span className="text-primary mt-1.5">•</span><span>working Internet access</span></li>
                <li className="flex items-start gap-3"><span className="text-primary mt-1.5">•</span><span>a Web browser that supports 128-bit encryption (we support the latest version of Chrome®, Firefox®, Microsoft Edge®, or Safari®)</span></li>
                <li className="flex items-start gap-3"><span className="text-primary mt-1.5">•</span><span>16 MB of available memory (32 MB of RAM recommended)</span></li>
                <li className="flex items-start gap-3"><span className="text-primary mt-1.5">•</span><span>a program that can view, save, and print PDF files (such as Adobe® Reader® 4.0 or higher).</span></li>
              </ul>
              <p>
                You can download Adobe® Reader® from Adobe's website. By providing us with your Consent, you confirm that you meet all of the above System Requirements.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-5 text-foreground">Withdrawing Consent</h2>
              <p>
                You are free to withdraw Your Consent at any time and at no charge to you. If you do withdraw Your Consent prior to the approval of your application, this will prevent you from receiving credit from us over the Internet. If at any time you wish to withdraw Your Consent, you may do so by emailing us at{" "}
                <a href="mailto:support@u-topia.com" className="text-primary hover:underline">
                  support@u-topia.com
                </a>
                . If you decide to withdraw Your Consent, the legal effectiveness, validity, and/or enforceability of any prior electronic Disclosures will not be affected.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-5 text-foreground">
                Acknowledging Ability to Access and Consenting to Electronic Communications
              </h2>
              <p>
                By confirming that you have read and agreed to these terms, you are confirming that (1) you have access to a computer system that meets the requirements set forth above; (2) you agree to receive Covered Items electronically; and (3) you are able to access and print or store information presented to you.
              </p>
            </section>

            <div className="pt-8 border-t border-border">
              <p className="text-center text-foreground font-medium">End of E-Sign Notice</p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ESign;
