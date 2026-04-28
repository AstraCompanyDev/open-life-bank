import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const SharingRow = ({ reason, shares, canLimit }: { reason: React.ReactNode; shares: string; canLimit: string }) => (
  <tr className="border-t border-border">
    <td className="p-4 align-top text-sm">{reason}</td>
    <td className="p-4 align-top text-sm font-semibold text-foreground text-center">{shares}</td>
    <td className="p-4 align-top text-sm font-semibold text-foreground text-center">{canLimit}</td>
  </tr>
);

const PrivacyNotice = () => {
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

          <h1 className="text-3xl md:text-4xl font-semibold mb-3">Privacy Notice</h1>
          <p className="text-muted-foreground text-lg mb-4">
            Region: United States · Program Type: Consumer · Flow of Funds: Rain-managed
          </p>
          <p className="text-muted-foreground mb-16">Last updated: April 28, 2026</p>

          <div className="space-y-12 text-base leading-relaxed text-muted-foreground">
            <section>
              <div className="rounded-xl border border-border overflow-hidden">
                <div className="bg-muted/40 p-5 border-b border-border">
                  <p className="text-xs uppercase tracking-wider text-muted-foreground mb-1">FACTS</p>
                  <p className="text-foreground font-semibold">
                    WHAT DOES THIRD NATIONAL ("ISSUER") DO WITH YOUR PERSONAL INFORMATION?
                  </p>
                </div>
                <div className="divide-y divide-border">
                  <div className="grid grid-cols-1 md:grid-cols-[140px_1fr]">
                    <div className="p-5 font-semibold text-foreground bg-muted/20">Why?</div>
                    <div className="p-5">
                      Financial companies choose how they share your personal information. Federal law gives consumers
                      the right to limit some but not all sharing. Federal law also requires us to tell you how we
                      collect, share, and protect your personal information. Please read this notice carefully to
                      understand what we do.
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-[140px_1fr] border-t border-border">
                    <div className="p-5 font-semibold text-foreground bg-muted/20">What?</div>
                    <div className="p-5">
                      <p className="mb-3">
                        The types of personal information we collect and share depend on the product or service you
                        have with us. This information can include:
                      </p>
                      <ul className="space-y-2 mb-3">
                        <li className="flex items-start gap-3"><span className="text-primary mt-1.5">•</span><span>Social Security number and date of birth</span></li>
                        <li className="flex items-start gap-3"><span className="text-primary mt-1.5">•</span><span>Account balances and payment history</span></li>
                        <li className="flex items-start gap-3"><span className="text-primary mt-1.5">•</span><span>Credit history and credit scores</span></li>
                      </ul>
                      <p>
                        When you are <em>no longer</em> our customer, we continue to share your information as
                        described in this notice.
                      </p>
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-[140px_1fr] border-t border-border">
                    <div className="p-5 font-semibold text-foreground bg-muted/20">How?</div>
                    <div className="p-5">
                      All financial companies need to share customers' personal information to run their everyday
                      business. In the section below, we list the reasons financial companies can share their
                      customers' personal information; the reasons Issuer chooses to share; and whether you can limit
                      this sharing.
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-5 text-foreground">Reasons we can share your personal information</h2>
              <div className="overflow-x-auto rounded-xl border border-border">
                <table className="w-full">
                  <thead className="bg-muted/40">
                    <tr>
                      <th className="p-4 text-left text-sm font-semibold text-foreground">Reason</th>
                      <th className="p-4 text-center text-sm font-semibold text-foreground">Does Issuer share?</th>
                      <th className="p-4 text-center text-sm font-semibold text-foreground">Can you limit this sharing?</th>
                    </tr>
                  </thead>
                  <tbody>
                    <SharingRow
                      reason={<><strong className="text-foreground">For our everyday business purposes</strong> — such as to process your transactions, maintain your account(s), respond to court orders and legal investigations, or report to credit bureaus</>}
                      shares="YES" canLimit="NO" />
                    <SharingRow
                      reason={<><strong className="text-foreground">For our marketing purposes</strong> — to offer our products and services to you</>}
                      shares="YES" canLimit="NO" />
                    <SharingRow
                      reason={<><strong className="text-foreground">For joint marketing with other financial companies</strong></>}
                      shares="YES" canLimit="NO" />
                    <SharingRow
                      reason={<><strong className="text-foreground">For our affiliates' everyday business purposes</strong> — information about your transactions and experiences</>}
                      shares="YES" canLimit="NO" />
                    <SharingRow
                      reason={<><strong className="text-foreground">For our affiliates' everyday business purposes</strong> — information about your creditworthiness</>}
                      shares="NO" canLimit="WE DON'T SHARE" />
                    <SharingRow
                      reason={<><strong className="text-foreground">For our affiliates to market to you</strong></>}
                      shares="NO" canLimit="WE DON'T SHARE" />
                    <SharingRow
                      reason={<><strong className="text-foreground">For nonaffiliates to market to you</strong></>}
                      shares="NO" canLimit="WE DON'T SHARE" />
                  </tbody>
                </table>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-5 text-foreground">Questions?</h2>
              <p>
                Go to{" "}
                <Link to="/contact" className="text-primary hover:underline">u-topia.com/contact</Link>.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-5 text-foreground">Who we are</h2>
              <div className="rounded-xl border border-border divide-y divide-border">
                <div className="grid grid-cols-1 md:grid-cols-[260px_1fr]">
                  <div className="p-5 font-semibold text-foreground bg-muted/20">Who is providing this notice?</div>
                  <div className="p-5">U-TOPIA CORP.</div>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-5 text-foreground">What we do</h2>
              <div className="rounded-xl border border-border divide-y divide-border">
                <div className="grid grid-cols-1 md:grid-cols-[260px_1fr]">
                  <div className="p-5 font-semibold text-foreground bg-muted/20">How does Issuer protect my personal information?</div>
                  <div className="p-5">
                    To protect your personal information from unauthorized access and use, we use security measures
                    that comply with federal law. These measures include computer safeguards and secured files and
                    buildings.
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-[260px_1fr]">
                  <div className="p-5 font-semibold text-foreground bg-muted/20">How does Issuer collect my personal information?</div>
                  <div className="p-5">
                    <p className="mb-3">We collect your personal information, for example, when you</p>
                    <ul className="space-y-2 mb-3">
                      <li className="flex items-start gap-3"><span className="text-primary mt-1.5">•</span><span>open an account or perform transactions</span></li>
                      <li className="flex items-start gap-3"><span className="text-primary mt-1.5">•</span><span>pay your bills or reload funds</span></li>
                      <li className="flex items-start gap-3"><span className="text-primary mt-1.5">•</span><span>use your card</span></li>
                    </ul>
                    <p>
                      We may also collect your personal information from others, such as credit bureaus, affiliates,
                      and other companies.
                    </p>
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-[260px_1fr]">
                  <div className="p-5 font-semibold text-foreground bg-muted/20">Why can't I limit all sharing?</div>
                  <div className="p-5">
                    <p className="mb-3">Federal law gives you the right to limit only</p>
                    <ul className="space-y-2 mb-3">
                      <li className="flex items-start gap-3"><span className="text-primary mt-1.5">•</span><span>sharing for affiliates' everyday business purposes — information about your creditworthiness</span></li>
                      <li className="flex items-start gap-3"><span className="text-primary mt-1.5">•</span><span>affiliates from using your information to market to you</span></li>
                      <li className="flex items-start gap-3"><span className="text-primary mt-1.5">•</span><span>sharing for nonaffiliates to market to you</span></li>
                    </ul>
                    <p>
                      State laws and individual companies may give you additional rights to limit sharing. See below
                      for more on your rights under state law.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-5 text-foreground">Definitions</h2>
              <div className="rounded-xl border border-border divide-y divide-border">
                <div className="grid grid-cols-1 md:grid-cols-[200px_1fr]">
                  <div className="p-5 font-semibold text-foreground bg-muted/20">Affiliates</div>
                  <div className="p-5">
                    <p className="mb-3">Companies related by common ownership or control. They can be financial and nonfinancial companies.</p>
                    <ul className="space-y-2"><li className="flex items-start gap-3"><span className="text-primary mt-1.5">•</span><span>Issuer does share with our affiliates.</span></li></ul>
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-[200px_1fr]">
                  <div className="p-5 font-semibold text-foreground bg-muted/20">Nonaffiliates</div>
                  <div className="p-5">
                    <p className="mb-3">Companies not related by common ownership or control. They can be financial and nonfinancial companies.</p>
                    <ul className="space-y-2"><li className="flex items-start gap-3"><span className="text-primary mt-1.5">•</span><span>Issuer does not share with nonaffiliates so they can market to you.</span></li></ul>
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-[200px_1fr]">
                  <div className="p-5 font-semibold text-foreground bg-muted/20">Joint marketing</div>
                  <div className="p-5">
                    <p className="mb-3">A formal agreement between nonaffiliated financial companies that together market financial products or services to you.</p>
                    <ul className="space-y-2"><li className="flex items-start gap-3"><span className="text-primary mt-1.5">•</span><span>Issuer may partner with certain non-affiliated financial companies to offer financial products and services to you.</span></li></ul>
                  </div>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-5 text-foreground">Other important information</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold mb-2 text-foreground">California and Vermont</h3>
                  <p>
                    In accordance with state law, we will not share your personal information with nonaffiliates
                    except as permitted by law, including for example, for our own marketing purposes, for everyday
                    business purposes, such as servicing your account, or with your consent.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2 text-foreground">Nevada</h3>
                  <p>
                    You are being provided this notice pursuant to Nevada law. You may be placed on our internal Do
                    Not Call List by following the directions in the To Limit our Sharing section above. Nevada law
                    requires that we provide you with the following contact information: Bureau of Consumer
                    Protection, Office of the Nevada Attorney General, 555 E. Washington Ave., Suite 3900, Las Vegas,
                    NV 89101; Phone number: 702-486-3132; email:{" "}
                    <a href="mailto:agInfo@ag.nv.gov" className="text-primary hover:underline">agInfo@ag.nv.gov</a>.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2 text-foreground">North Dakota</h3>
                  <p>
                    In accordance with North Dakota law, we will not share information we collect about you with
                    companies outside of our corporate family, except as permitted by law, including, for example,
                    with your consent, to service your account. Residents of North Dakota are opted out from
                    nonaffiliate marketing by default. We will limit sharing among our companies to the extent
                    required by North Dakota law.
                  </p>
                </div>
              </div>
            </section>

            <div className="pt-8 border-t border-border">
              <p className="text-center text-foreground font-medium">End of Notice</p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default PrivacyNotice;
