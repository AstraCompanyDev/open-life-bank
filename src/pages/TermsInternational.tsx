import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Bullet = ({ children }: { children: React.ReactNode }) => (
  <li className="flex items-start gap-3"><span className="text-primary mt-1.5">•</span><span>{children}</span></li>
);

const TermsInternational = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      <main className="flex-grow pt-32 pb-24 px-6 sm:px-8 lg:px-12">
        <div className="max-w-3xl mx-auto">
          <Link
            to="/terms-of-service"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-10"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Terms of Service
          </Link>

          <p className="text-sm uppercase tracking-wider text-primary font-semibold mb-3">International Consumers</p>
          <h1 className="text-3xl md:text-4xl font-semibold mb-3">U-TOPIA CORP. Card Authorized User Terms</h1>
          <p className="text-muted-foreground text-lg mb-2">
            Region: International · Program Type: Business · Flow of Funds: Rain-managed
          </p>
          <p className="text-muted-foreground mb-16">Last updated: April 28, 2026</p>

          <div className="space-y-12 text-base leading-relaxed text-muted-foreground">
            <section>
              <p>
                These U-TOPIA CORP. Card Authorized User Terms ("<strong>Authorized User Terms</strong>") are between you ("<strong>you</strong>" or "<strong>your</strong>"), U-TOPIA CORP. ("<strong>U-TOPIA CORP.</strong>", "<strong>we</strong>" or "<strong>us</strong>"), and Issuer (defined below) and govern your access to and use of the U-TOPIA CORP. Card and Card Services. These Authorized User Terms are incorporated by reference into the Card Terms and U-TOPIA CORP. Terms of Service.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-5 text-foreground">1. Definitions</h2>
              <ul className="space-y-3">
                <Bullet><strong className="text-foreground">"Card Services"</strong> means the ancillary services provided by Issuer and/or U-TOPIA CORP. that facilitate your use of the U-TOPIA CORP. Card and Card Account.</Bullet>
                <Bullet><strong className="text-foreground">"Card Terms"</strong> means the U-TOPIA CORP. Spend Card Terms entered into between Company, U-TOPIA CORP., and Issuer.</Bullet>
                <Bullet><strong className="text-foreground">"Company"</strong> means the company that is applying for or has opened a U-TOPIA CORP. Account to use the U-TOPIA CORP. Card Services, and is providing you access to these Card Services.</Bullet>
                <Bullet><strong className="text-foreground">"Company Administrator"</strong> means an individual at Company with the authority to grant you access to a U-TOPIA CORP. Card and Card Services.</Bullet>
                <Bullet><strong className="text-foreground">"U-TOPIA CORP. Card"</strong> means the Spend Card made available to you by a Company Administrator and which is linked to an Account Holder's U-TOPIA CORP. Wallet.</Bullet>
                <Bullet><strong className="text-foreground">"User"</strong> means you, an individual authorized to use the U-TOPIA CORP. Card and Card Services on the Company's behalf.</Bullet>
              </ul>
              <p className="mt-4">
                Capitalized terms that are not defined here have the definitions provided in the Card Terms and/or U-TOPIA CORP. Agreement.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-5 text-foreground">2. Background</h2>
              <div className="space-y-4">
                <p>
                  The U-TOPIA CORP. Card ("<strong>U-TOPIA CORP. Card</strong>") is a business card issued to the Company under the Card Terms. The U-TOPIA CORP. Card is issued by Third National ("<strong>Issuer</strong>").
                </p>
                <p>
                  You understand that you have access to the Card Services only to the extent authorized, and for the sole benefit of the Company. You understand that the U-TOPIA CORP. Card is not for personal use and that U-TOPIA CORP. does not directly provide the Card Services to you. You understand that Company is responsible for your compliance with the U-TOPIA CORP. Card Terms and that both you and Company are responsible for your compliance with this User Agreement. You acknowledge that the Company is a beneficiary of this User Agreement. You also consent to receive all communications from U-TOPIA CORP. electronically as described in the User Agreement. By using the Card Services available to you under the Company's U-TOPIA CORP. Account, you consent to and agree to this User Agreement. This User Agreement is part of, and incorporated by reference into, the U-TOPIA CORP. Card Terms and the U-TOPIA CORP. Terms of Service. You agree to abide by the terms of the Card Terms, these Authorized User Terms, the U-TOPIA CORP. Agreement, all applicable law, and Card Network rules in connection with your use of the Company's U-TOPIA CORP. Card Account and Card Services.
                </p>
                <p>
                  U-TOPIA CORP. reserves the right to amend these Authorized User Terms or impose additional obligations or restrictions on you at any time. We will use commercially reasonable efforts to notify you in advance of any changes that impose material obligations on you. Notwithstanding the foregoing, by continuing to use the Card Services, you agree to be bound by such amendments or additional obligations, or restrictions. The date at the top of this page shows when these Authorized User Terms were last updated.
                </p>
                <p>
                  Prior to using the U-TOPIA CORP. Card and Services on behalf of the Company, you will need a Company Administrator to add you as an authorized user via the U-TOPIA CORP. platform and provide you access to the U-TOPIA CORP. Card Account.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-5 text-foreground">3. Eligibility</h2>
              <p className="mb-4">By using the U-TOPIA CORP. Card and Card Services, you represent and warrant in your individual capacity that:</p>
              <ul className="space-y-3">
                <Bullet>You are not a person who is blocked or sanctioned by the United States Government, including those identified by the United States Office of Foreign Asset Controls (OFAC).</Bullet>
                <Bullet>You are an employee, contractor, or agent affiliated with and authorized to use the U-TOPIA CORP. Card and Card Services on the Company's behalf.</Bullet>
                <Bullet>You will use the U-TOPIA CORP. Card and U-TOPIA CORP. Services exclusively for purposes permitted by the U-TOPIA CORP. Card Terms, U-TOPIA CORP. Terms of Service and the U-TOPIA CORP. Privacy Policy.</Bullet>
                <Bullet>All information you provide to us, either directly or through a Company Administrator, is and will be true, correct, and complete.</Bullet>
                <Bullet>You will not use the Card for personal, family, or household use.</Bullet>
                <Bullet>You have reviewed the Card Terms, these Authorized User Terms, and the U-TOPIA CORP. Terms of Service and U-TOPIA CORP. Privacy Policy.</Bullet>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-5 text-foreground">4. Access to the U-TOPIA CORP. Card and Card Services</h2>
              <p>
                You may access the U-TOPIA CORP. Card and Card Services only to the extent and only as long as you are authorized to do so by the Company and us. The Company or we may limit or terminate your access to any of the foregoing at any time, without notice. You agree not to circumvent or attempt to circumvent the security of the U-TOPIA CORP. Card and Card Services for any purpose, including to gain access to any services to which you are not authorized.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-5 text-foreground">5. Electronic Signature</h2>
              <p>
                You acknowledge and consent to the Issuer's{" "}
                <Link to="/esign" className="text-primary hover:underline">E-Sign and Electronic Communications Notice</Link>.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-5 text-foreground">6. Use of your Personal Information</h2>
              <div className="space-y-4">
                <p>
                  To use the Card Services, you may be required to provide your personal data (including, for example, your name, email address, and date of birth) to the Company Administrator, the Company, or us. You acknowledge and agree that you have authorized the Company and/or the Company Administrator to share your personal data with U-TOPIA CORP. You agree that you have provided the Company and/or the Company Administrator with personal data that is true, complete, and correct. We will use your personal data to — among other permitted uses under U-TOPIA CORP.'s Privacy Policy — verify your identity, verify that you are not a person who is blocked or sanctioned by the United States Government, including those identified by the United States Department of Treasury's Office of Foreign Assets Control (OFAC) and other confirm that you are eligible to use a U-TOPIA CORP. Card.
                </p>
                <p>
                  You acknowledge that you have read U-TOPIA CORP.'s{" "}
                  <Link to="/privacy-policy" className="text-primary hover:underline">Privacy Policy</Link>{" "}
                  and understand how U-TOPIA CORP. may collect, use, and share your personal data. By using the U-TOPIA CORP. Card and Card Services, you agree that we may use your personal data in accordance with this User Agreement and the U-TOPIA CORP. Privacy Policy.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-5 text-foreground">7. Use of the U-TOPIA CORP. Card and Card Services</h2>
              <div className="space-y-4">
                <p>
                  You acknowledge and agree that you have read and understood the U-TOPIA CORP. Prohibitions available at the{" "}
                  <Link to="/prohibited-activities" className="text-primary hover:underline">Prohibited Activities List</Link>{" "}
                  and that you will at all times comply with the U-TOPIA CORP. Prohibitions at all times when using the U-TOPIA CORP. Card and Card Services.
                </p>
                <p>
                  You acknowledge and agree that you will not use the U-TOPIA CORP. Card and Card Services: (1) for any expense which is not a business expense incurred by you related to or for the benefit of the Company; (2) for any purpose prohibited by the U-TOPIA CORP. Terms of Service or the Card Terms; (3) for, with, or for the benefit of any individual or entity who is blocked or sanctioned by the United States, including those identified by the United States Department of Treasury's Office of Foreign Assets Control (OFAC); or (4) for personal, family, or household use.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-5 text-foreground">8. Security and Safeguards</h2>
              <p>
                You will use all reasonable means to protect your U-TOPIA CORP. Card and log-in credentials to the U-TOPIA CORP. Account from unauthorized use. You will not allow any other person or third party to use the U-TOPIA CORP. Card and Card Services. You will immediately notify U-TOPIA CORP. at{" "}
                <a href="mailto:support@u-topia.com" className="text-primary hover:underline">support@u-topia.com</a>{" "}
                if you know or suspect that access to your U-TOPIA CORP. Account has been compromised, or if your U-TOPIA CORP. Card has been lost, stolen, or compromised in any way.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-5 text-foreground">9. Communications</h2>
              <div className="space-y-4">
                <p>
                  U-TOPIA CORP. has an established business relationship with the Company. You will receive notices to the email and mobile numbers provided to U-TOPIA CORP. by you or the Company. These notices may include push notifications, and text or SMS messages providing information or alerts about Card Services, the Card, or transactions, and may allow you to provide information back to U-TOPIA CORP. (such as sending a receipt from a transaction). You may elect not to receive certain notices through the U-TOPIA CORP. Account, but doing so will limit the use of certain Card Services and may increase the financial risks to the Company.
                </p>
                <p>
                  You are required to maintain an updated web browser, computer, and mobile device operating systems to receive notices correctly. You are responsible for all costs imposed by internet or mobile service providers for sending or receiving Notices electronically. You consent to receiving notices electronically to your mobile device and understand that this consent has the same legal effect as a physical signature. If you wish to revoke this consent, please notify your Company Administrator.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-5 text-foreground">10. Commercial Use Only</h2>
              <p>
                U-TOPIA CORP. Card Account is commercial in nature, and you acknowledge and understand that certain consumer protection laws (including the Electronic Funds Transfer Act or Regulation E) and consumer-specific rules (including NACHA rules specific to consumers) do not apply to transactions on the Company's U-TOPIA CORP. Card Account or your use of the Card Services.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-5 text-foreground">11. Suspension and Termination</h2>
              <p>
                U-TOPIA CORP. may suspend or terminate your access to the Company's U-TOPIA CORP. Account or the Card Services at any time and for any reason, in our sole and absolute discretion, without prior notice, including if directed by the Company, the Company Administrator, or Issuer. In the event that the U-TOPIA CORP. Card Terms and/or Terms of Service with Company is terminated, these Authorized User Terms will immediately terminate (other than sections giving rise to continued obligations of the parties that survive termination).
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-5 text-foreground">12. Limitation of Liability</h2>
              <p className="uppercase text-sm tracking-wide">
                Notwithstanding anything to the contrary in the U-TOPIA CORP. Agreement, the Card Terms, or these Authorized User Terms and to the maximum extent permitted by law, Issuer, U-TOPIA CORP. and all of its affiliates' liability, taken together in the aggregate, arising out of or related to these Authorized User Terms, whether in contract, tort or under any other theory of liability, shall remain subject to the Limitation of Liability section of the U-TOPIA CORP. Terms of Service and any reference in such section to the liability of a party means the aggregate liability of that party and all of its affiliates under the Agreement.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-5 text-foreground">13. Dispute Resolution</h2>
              <p>
                You acknowledge and agree to the Dispute Resolution Provisions (Sections 18 and 19) of the Card Terms. These provisions may require you to arbitrate any disputes with Issuer and/or U-TOPIA CORP. arising out of or relating to these Authorized User Terms in an individual arbitration and not a class arbitration. It also includes a waiver of any right to trial by jury or judicial proceedings, including class actions and class proceedings, in connection with claims arising out of these Authorized User Terms. <strong className="text-foreground">PLEASE REVIEW THE DISPUTE RESOLUTION PROVISIONS OF THE CARD TERMS CAREFULLY.</strong>
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-5 text-foreground">14. Governing Law</h2>
              <p>
                These Authorized User Terms will be interpreted in accordance with the laws of Puerto Rico without regard to conflict-of-law provisions. Judicial proceedings (other than small claims actions) that are excluded from the Arbitration section above must be brought in state or federal court in Puerto Rico, unless we both agree to some other location, and you hereby consent to the venue and personal jurisdiction of such court.
              </p>
            </section>

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

export default TermsInternational;
