import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Bullet = ({ children }: { children: React.ReactNode }) => (
  <li className="flex items-start gap-3"><span className="text-primary mt-1.5">•</span><span>{children}</span></li>
);

const Section = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <section>
    <h2 className="text-xl font-semibold mb-5 text-foreground">{title}</h2>
    <div className="space-y-4">{children}</div>
  </section>
);

const SubHeading = ({ children }: { children: React.ReactNode }) => (
  <h3 className="text-base font-semibold text-foreground mt-6 mb-2">{children}</h3>
);

const TermsUS = () => {
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

          <p className="text-sm uppercase tracking-wider text-primary font-semibold mb-3">US Consumers</p>
          <h1 className="text-3xl md:text-4xl font-semibold mb-3">U-TOPIA Cardholder Agreement — Set Line of Credit</h1>
          <p className="text-muted-foreground text-lg mb-2">
            Region: United States · Program Type: Consumer · Flow of Funds: Rain-managed
          </p>
          <p className="text-muted-foreground mb-16">Last Updated: May 20, 2026</p>

          <div className="space-y-12 text-base leading-relaxed text-muted-foreground">

            <Section title="Account Opening Disclosures — Set Credit Limit">
              <SubHeading>Interest Rate and Interest Charges</SubHeading>
              <div className="overflow-x-auto">
                <table className="w-full text-sm border border-border rounded-lg overflow-hidden">
                  <tbody>
                    <tr className="border-b border-border">
                      <td className="p-3 font-medium text-foreground w-2/5">Annual Percentage Rate (APR) for Purchases</td>
                      <td className="p-3 font-semibold text-foreground">0.00%</td>
                    </tr>
                    <tr className="border-b border-border">
                      <td className="p-3 font-medium text-foreground">APR for Balance Transfers</td>
                      <td className="p-3">N/A</td>
                    </tr>
                    <tr className="border-b border-border">
                      <td className="p-3 font-medium text-foreground">APR for Cash Advances</td>
                      <td className="p-3">N/A</td>
                    </tr>
                    <tr className="border-b border-border">
                      <td className="p-3 font-medium text-foreground align-top">Paying Interest</td>
                      <td className="p-3">You will not be charged interest on purchases. Your due date for payment of amounts owed on your Card is 21 days after the close of each billing cycle.</td>
                    </tr>
                    <tr className="border-b border-border">
                      <td className="p-3 font-medium text-foreground align-top">Minimum Interest Charge</td>
                      <td className="p-3">There is no interest chargeable to this Credit Card.</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-medium text-foreground align-top">For Credit Card Tips from the CFPB</td>
                      <td className="p-3">To learn more about factors to consider when applying for or using a credit card, visit the website of the Consumer Financial Protection Bureau.</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <SubHeading>Fees</SubHeading>
              <div className="overflow-x-auto">
                <table className="w-full text-sm border border-border rounded-lg overflow-hidden">
                  <tbody>
                    <tr className="border-b border-border">
                      <td className="p-3 font-medium text-foreground w-2/5">Annual Fees</td>
                      <td className="p-3">None</td>
                    </tr>
                    <tr className="border-b border-border">
                      <td className="p-3 font-medium text-foreground align-top">Transaction Fees</td>
                      <td className="p-3">
                        <div>Balance Transfer: N/A</div>
                        <div>Cash Advance: None</div>
                        <div>International Transaction: 1% of each transaction in U.S. dollars.</div>
                      </td>
                    </tr>
                    <tr>
                      <td className="p-3 font-medium text-foreground align-top">Penalty Fees</td>
                      <td className="p-3">
                        <div>Late Payment: 2% of the current outstanding card balance</div>
                        <div>Over the Credit Line: None</div>
                        <div>Returned Payment: None</div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <p>
                <strong className="text-foreground">How We Will Calculate Your Balance:</strong> We use a method called "average daily balance". See your Cardholder Agreement for more details.
              </p>
              <p>
                <strong className="text-foreground">Billing Rights:</strong> Information on your rights to dispute transactions and how to exercise those rights is provided in your Card Regulations.
              </p>
              <p className="text-sm">
                <strong className="text-foreground">Military Lending Act Disclosure:</strong> The following disclosure applies to persons covered by the Military Lending Act — other governmental programs and laws may also govern or apply to this transaction but are not described in the following disclosure. The following disclosure is required by the Military Lending Act. Federal law provides important protections to members of the Armed Forces and their dependents relating to extensions of consumer credit. In general, the cost of consumer credit to a member of the Armed Forces and his or her dependent may not exceed an annual percentage rate of 36 percent. This rate must include, as applicable to the credit transaction or account: the costs associated with credit insurance premiums; fees for ancillary products sold in connection with the credit transaction; any application fee charged (other than certain application fees for specified credit transactions or accounts); and any participation fee charged (other than certain participation fees for a credit card account). To learn if you are covered by the Military Lending Act or about the applicable rate, email us at{" "}
                <a href="mailto:support@u-topia.com" className="text-primary hover:underline">support@u-topia.com</a>. The Arbitration and Class Waiver sections of your Agreement will not apply to you if you are covered by the Military Lending Act, nor do any provisions of the Agreement that waive any right to legal recourse under any state or federal law to the extent required by the Military Lending Act.
              </p>
            </Section>

            <Section title="U-TOPIA Cardholder Agreement — Set Line of Credit">
              <p className="uppercase text-sm tracking-wide">
                Arbitration Clause; Notices: Please review the arbitration clause and notices set forth below in the section titled Dispute Resolution and Arbitration. By using the U-TOPIA Card, you are agreeing to the arbitration clause and notices set forth in that section. The arbitration clause will have a substantial effect on your rights in the event of a dispute, including your right to bring or participate in a class proceeding.
              </p>
              <p>
                This U-TOPIA Cardholder Agreement ("<strong>Agreement</strong>") is a binding agreement between you ("<strong>you</strong>" or "<strong>your</strong>") and the Issuer ("<strong>we</strong>", "<strong>us</strong>", or "<strong>our</strong>") that governs your use of the card account ("<strong>Account</strong>") and U-TOPIA card ("<strong>U-TOPIA Card</strong>" or "<strong>Card</strong>"). The U-TOPIA Card is provided to you on behalf of U-TOPIA in connection with your status as a U-TOPIA customer and pursuant to your separate User Agreement between you and U-TOPIA (the "<strong>User Terms</strong>"). We are not a party to the User Terms and disclaim any liability for the performance of services covered therein. In the event of any conflict between this Agreement and the User Terms, this Agreement shall be controlling.
              </p>
            </Section>

            <Section title="Additional Definitions">
              <p>
                The term "<strong>Card</strong>" means any card we issue associated with your Account, including renewal and substitute cards. The term "Card" also means any other access device that allows you to obtain Account credit from us, including your Account number. Other capitalized terms that are not defined here are generally defined the first time we use those terms. The term "<strong>Issuer</strong>" refers to Third National, including its affiliates, successors, and assigns. The term "<strong>Supported Blockchain</strong>" means the Ethereum Blockchain, Polygon Blockchain, Optimism Blockchain, Arbitrum Blockchain and other blockchain networks. We may update this list of Supported Blockchains at any time and at our sole discretion.
              </p>
              <p>
                The terms "you" and "your" mean each and all of the persons who are granted, accept or use the Account and any person who has guaranteed payment of the Account.
              </p>
            </Section>

            <Section title="Overview of Account Agreement">
              <p>
                We reserve the right to amend this Agreement or impose additional obligations or restrictions on you at any time with or without notice to you, except where required by applicable law. By continuing to use the Cards, you agree to be bound by such amendments or additional obligations or restrictions. We will notify you of any amendment to this Agreement by{" "}
                <a href="mailto:info@u-topia.com" className="text-primary hover:underline">info@u-topia.com</a>. If any amendment to this Agreement allows you to reject such amendment, and if you reject the amendment in the manner described in such amendment, we may terminate your Account. If an amendment to this Agreement increases the applicable Interest Charges applicable to your Account, any existing unpaid balances may be subject to such increase to the Interest Charges.
              </p>
              <p>
                You agree that this Agreement becomes effective the first time you use any Card or the Account. You agree that you were not solicited for this product. You also agree that we may keep and use an image or copy of the Agreement to enforce its terms against you. When the Agreement states we "may" take an action, it means we are authorized to take that action in our sole discretion, subject only to any limitations or requirements established by law and the express terms of the Agreement. Please read this Agreement carefully and keep them for future reference. We may make new offers to you in the future or forward offers from others that may interest you. If these offers have new or different terms, those terms will be provided with the offer. If you accept the offer, the previously disclosed terms in the Agreement will still apply, except as modified by the offer.
              </p>
              <p>
                U-TOPIA provides technology services in connection with the U-TOPIA Card, and is not a bank, credit union, or money services business and does not itself extend credit, set interest rates, determine repayment terms or hold Collateral. Nothing in this Agreement shall be construed as creating a lender-borrower relationship between you and U-TOPIA.
              </p>
              <p>You acknowledge and agree that U-TOPIA:</p>
              <ul className="space-y-3">
                <Bullet>(i) is an express third-party beneficiary of this Agreement, with the limited right to enforce obligations that directly relate to its role;</Bullet>
                <Bullet>(ii) is not responsible for any decisions by the Issuer to approve, decline, suspend or close your Card account. U-TOPIA may, at the request of the Issuer, the payment network or a regulatory authority, suspend or restrict your access to the U-TOPIA platform or certain features, to protect against fraud, comply with applicable laws or manage program risk;</Bullet>
                <Bullet>(iii) does not control and is not responsible for the operation, security, or performance of the smart contracts used to hold your Collateral; and</Bullet>
                <Bullet>(iv) is not responsible for merchant acceptance of your U-TOPIA Card or for resolving disputes about goods or services purchased with the U-TOPIA Card.</Bullet>
              </ul>
            </Section>

            <Section title="Account Information We Need">
              <p>
                We need and will request complete, current and valid information about you to manage your Account. Such information may include but is not limited to: your legal name; your address(es); your telephone number(s); your date(s) of birth; your employment and income information; and your Social Security number(s); or other government identification number(s). You must tell us when this information changes, and, if we agree to issue additional Cards, you must notify us of any changes to this information for each additional cardholder. You may update your address as described on your most recent Statement, through the website we maintain for your Account, or by calling us at the telephone number shown on your most recent Statement or the back of your Card. We may require that you provide additional documents that are acceptable to us so that we can verify this information and any changes. We may restrict or close your Account if we are unable to verify your information or if you do not provide the additional information we request, at our sole discretion.
              </p>
              <p className="uppercase text-sm tracking-wide">
                To help the government fight the funding of terrorism and money laundering activities, federal law requires us to obtain, verify, and record information that identifies each person who opens an account. What this means for you: when you open an account, we will ask for the name, address, employer identification number and organizational documents of the account owner and the names, addresses, dates of birth, and other information concerning each principal owner that will allow us to identify the account owner and its principal owners. We may also ask to see a copy of each principal owners' driver's licenses or other identification documents.
              </p>
            </Section>

            <Section title="Balance Categories of Your Account">
              <p>
                "<strong>Balance Categories</strong>" are the different Account segments we may establish with unique pricing, grace periods or other terms. The Balance Categories of your Account may include Purchases, Cash Advances, and Special Offers. We reserve the right to decide which Balance Category applies for each Account transaction and our decision will be final.
              </p>
              <p>
                A "<strong>Purchase</strong>" means the property, rights, goods and services we allow you to purchase, rent, or otherwise obtain directly from merchants and vendors by using your Card.
              </p>
              <p>
                A "<strong>Special Offer</strong>" means transactions and balances that post to your Account, subject to unique pricing, grace periods, or other terms we disclose from time to time for promotional and other reasons. Our Special Offer disclosures, if any, will explain when any unpaid Special Offer balances may be transferred to and combined with a different Balance Category after any temporary rate period ends.
              </p>
            </Section>

            <Section title="Your Promises To Us">
              <p>
                You promise to do everything the Agreement requires of you, as long as your Account has a balance or remains open. Each of you and all of you promise, individually and together, to pay us all amounts due on your Account, now and in the future. This includes amounts where you did not sign a purchase slip or other documents for the transaction. If you use your Card number without presenting your actual Card (such as for mail, telephone or Internet purchases), these transactions will be treated as if you used the Card in person. The amounts due on your Account include all transactions in each Balance Category made by any of you, plus all Fees and all Interest Charges, as described in this Agreement. Your "<strong>Interest Charges</strong>" are the charges we add to your Account based on the Annual Percentage Rates we apply to your Account balances. Your "<strong>Fees</strong>" are the charges we add to your Account that are not based on the Annual Percentage Rates, if any. If you allow someone else to use your Card, you are responsible for all transactions made by that person and all associated Fees and Interest Charges. If you die, your promise to pay us will apply to your estate, as permitted by law.
              </p>
            </Section>

            <Section title="Using Your Account and Card">
              <p>
                You may use your Card and the Account for making Purchases and for obtaining any Special Offers that we may provide, as permitted by this Agreement and applicable law.
              </p>
              <p>
                You agree to sign the Card immediately after you receive it. The Card is valid during the dates shown on the front. The Card is our property and you agree to return it to us or destroy it, if we ask. You agree to take reasonable steps to prevent the unauthorized use of your Card and Account.
              </p>
              <p>
                We are not responsible to you if someone refuses to accept your Card for any reason. We may reject any transaction for any reason. We may limit the combined dollar amount or the total number of certain Account transactions allowed during a single day or other time periods. We may restrict or delay the availability of Account credit, to protect you and us against potential fraud, unauthorized transactions, Account misconduct or misuse, or for other risk management reasons. We will not be liable to you if this happens. Except as otherwise required by applicable law or regulation, we will not be responsible for merchandise or services purchased or leased through the use of any Card or the Account.
              </p>
              <p>
                You agree not to use, try to use, or permit use of the Card or Account for any Internet gambling transactions or any other transactions that are illegal or not permitted by us. Even if you do, you must still pay us for these transactions, and they remain subject to all other terms of our Agreement. You must reimburse us for all damages and expenses associated with these transactions. You acknowledge and agree that you have read and understood the{" "}
                <Link to="/prohibited-activities" className="text-primary hover:underline">Prohibited Activities Policy</Link>{" "}
                and that you will not engage in any such activities when using the Services or the U-TOPIA Card.
              </p>
              <p>
                From time to time, Account services may be unavailable to you, due to circumstances beyond our control, such as system failures, fires, floods, natural disasters or other unpredictable events. When this happens, you may be unable to use your Card or obtain Account information. We will not be responsible or liable to you if this happens.
              </p>
            </Section>

            <Section title="Using a PIN">
              <p>
                We may give you a personal identification number ("<strong>PIN</strong>"). For security reasons, you may have to provide the PIN before you are able to complete some transactions using the Card. With a PIN, you may, if enabled by us, use your Card to obtain cash from certain automated teller machines ("<strong>ATM</strong>") or make Purchases at certain merchant point-of-sale devices ("<strong>POS</strong>"). Where enabled, you may do these things if the ATM or POS requires entry of a PIN and displays the logo of the Payment Card Network on your Card. We will treat any allowed ATM transactions as Cash Advances and all POS transactions as Purchases. Keep your PIN secure and do not write it down, give it to anyone, or keep it with your Card. If you lose your Card or believe someone has gained unauthorized access to your PIN, you must contact us immediately.
              </p>
            </Section>

            <Section title="Statements and Billing Cycles">
              <p>
                The documents or information we provide after each Billing Cycle through your Statement will disclose important information about your Account, including your Account transactions, payments, Fees, Interest Charges, unpaid balances in each Balance Category, and payment requirements. The intervals of time between your regular Statements (each, a "<strong>Billing Cycle</strong>") are generally equal (approximately 30 days), but may vary slightly in length. Your first Billing Cycle may be more or less than 30 days. You must pay any Minimum Interest Charge and any Fees due after your first Billing Cycle, even if it is for a period less than 30 days. Your Statements disclose the specific length of each Billing Cycle. Your Account will continue to have Billing Cycles, even if a Statement is not required after any Billing Cycle.
              </p>
              <p>
                We will send a single Statement to you for all Cards on your Account, except when we are not required or permitted by law to send a Statement. We will send a Statement at the end of each Billing Cycle when your Account has a debit or credit balance of more than $0.01, if we have charged any Interest Charges to your Account, or as otherwise required by law.
              </p>
            </Section>

            <Section title="Disputed Transactions">
              <p>
                You must promptly inspect each Statement you receive and tell us about any errors or questions you have, as described in the "Billing Rights" section of your Statement and this Agreement. If you do not notify us as provided in these disclosures, we may assume that all information in the Statement is correct. If you dispute a transaction made by you or someone else on your Account, and we later credit your Account for all or part of the disputed amount, you agree to:
              </p>
              <ul className="space-y-3">
                <Bullet>Give us all of your rights against that other person;</Bullet>
                <Bullet>Give us any merchandise or other purchases you received in connection with the disputed amount, if we ask;</Bullet>
                <Bullet>Not pursue any claim or reimbursement from the merchant and other person; and</Bullet>
                <Bullet>Help us pursue and obtain reimbursement from the merchant and that other person, by promptly returning documents with any signatures we may request and otherwise providing us with reasonable cooperation.</Bullet>
              </ul>
            </Section>

            <Section title="No Warranties">
              <p className="uppercase text-sm tracking-wide">
                To the maximum extent permitted by applicable law and except as otherwise provided in the "Billing Rights" section of your Statements and this Agreement, we expressly disclaim all warranties, including but not limited to implied warranties of merchantability, fitness for a particular purpose, title, non-infringement, accuracy, reliability, and any warranties arising from course of dealing or usage of trade.
              </p>
            </Section>

            <Section title="Lost or Stolen Cards; Unauthorized Use; Replacement Cards">
              <p>
                <strong className="text-foreground">For Consumers:</strong> You must take reasonable steps to prevent the unauthorized use of your Card and Account. If you notice the loss or theft of your Card, or a possible unauthorized use of your Card, you should write to us immediately at the address provided on your Statement or call us at the telephone number provided on your Statement. You will not be liable for any unauthorized use that occurs after you notify us. You may, however, be liable for unauthorized use that occurs before your notice to us. In any case, your liability will not exceed $50 (or any lesser amount required by law or as provided under the express terms of a benefit provided by a Payment Card Network). If we reimburse your Account for unauthorized charges made using your Card, you agree to help us investigate, pursue and obtain reimbursement from the wrongdoer. Your help includes giving us documents that we ask for and that are acceptable to us. Unless canceled, a Card will be valid through the expiration date which is printed on the Card. We may replace a Card at any time and we may continue to issue renewal or replacement Cards until you notify us to cancel the Account.
              </p>
              <p>
                You are responsible for canceling any lost, misused or stolen Cards or the Account that you suspect may have been the subject of fraud, unauthorized use or misuse, whether as a result of termination of employment or otherwise. You are responsible for retrieving the canceled Card and destroying it to prevent further use. You may also cancel a Card by calling our customer service center. You understand that we will require a reasonable amount of time to act on any request made by telephone.
              </p>
              <p>
                You will not be liable for any unauthorized use of your Card after you notify us orally or in writing of the loss, theft, or possible unauthorized use and you meet the following conditions: (1) you have exercised reasonable care with the Card; (2) you have not reported two or more incidents of unauthorized Card use within the previous 12 months; and (3) you have maintained your Account(s) in good standing. The foregoing liability limitation does not apply to ATM cash advance transactions. In any case, your maximum liability for unauthorized use of a Card will not exceed $50 and you will not be liable for any unauthorized use that occurs after you notify us (or our designee) at the address or telephone number above.
              </p>
            </Section>

            <Section title="Credit Limits">
              <p>
                The credit limit will be determined, in part, by the amount of available Collateral (as defined below). We may assign different credit limits for the different Balance Categories of your Account. For example, your credit limit for any Cash Advances or Special Offers may be lower than your credit limit for Purchases or the overall credit limit of your Account. We may raise, lower, restrict, or cancel your credit limit on any Balance Category or the Account at any time and for any reason, subject to any notices that are required by law. This will not affect your obligation to pay us. You are responsible for keeping track of your Account balances and available credit. You agree not to allow your Account to go over any credit limit. We may honor transactions above your credit limits, but, if we do, this will not increase your credit limit and you must pay us the full amount of these transactions. Provided you maintain sufficient collateral to cover a Purchase, U-TOPIA reserves the right to set a daily or monthly spending limit at their sole discretion. The limit could be temporary or permanent. We will tell you if we do this, but we won't always notify you in advance. Any limits set will also apply to Authorized Users. We may set and vary limits and restrictions on certain uses of the Card or certain transactions. For example, contactless purchases may have their own limits.
              </p>
            </Section>

            <Section title="Interest Charges">
              <p>
                We may charge Interest Charges to your Account as shown in the Agreement, including your Account Opening Disclosures and Statements. If we charge Interest Charges to your Account, we calculate the Interest Charges by applying a Daily Periodic Rate to an "<strong>Average Daily Balance</strong>" of each Balance Category in your Account.
              </p>
              <p>
                To get the "Average Daily Balance," we take the beginning balance of your Account each day (including any previously billed and unpaid transactions, Interest Charges and Fees), add any new Fees and Account transactions (including Purchases, Special Offers, or debit adjustments), and then subtract any unbilled Interest Charges and any payments or credits. This gives us the "Daily Balance" in each Balance Category. Then, we add up all the Daily Balances in each Balance Category for the Billing Cycle and divide the total by the number of days in the Billing Cycle. This gives us the "Average Daily Balance." Your Statements disclose the "Average Daily Balance" of each Balance Category as the "Balance Subject To Interest Rate."
              </p>
              <p>
                Interest Charges begin to accrue from the earlier of the date of the transaction, the date the transaction is processed and first posts to your Account, or the first day of the Billing Cycle, except as prohibited by law or as otherwise described in the Agreement. Interest Charges accrue on each unpaid amount until it is paid in full. Billed and unpaid Interest Charges are added to the proper Balance Category of your Account.
              </p>
              <p>
                We will not assess Interest Charges during a Billing Cycle for any new Purchases made during that Billing Cycle, if you pay the previous month's New Balance in full by its payment due date or if your previous month's New Balance was zero or a credit amount. If you have been paying your Account in full with no Interest Charges applied to Purchases, and you do not pay the next New Balance of your Account in full, we will assess prorated Interest Charges on the unpaid balance of your Purchases, as permitted or required by law. There is no grace period on any new Purchase transaction when there is an unpaid balance from a previous Statement. A Special Offer transaction is not subject to a grace period, unless the terms we provided with the Special Offer expressly state that these transactions are subject to a grace period.
              </p>
              <p>
                To determine the "Daily Periodic Rate" that applies to each Balance Category, we divide the corresponding Annual Percentage Rates by the number of days in a year. The resulting Daily Periodic Rate is carried three places past the decimal point and the last digit is rounded. We calculate your total Interest Charges by multiplying the Average Daily Balance of each Balance Category by its Daily Periodic Rate and then multiplying the result by the number of days in the Billing Cycle. This calculation may vary slightly from the Interest Charges we actually charge after a Billing Cycle, due to the effects of rounding or as a result of any Minimum Interest Charge that applies.
              </p>
              <p>
                Your Account Opening Disclosures disclose the Daily Periodic Rates and the corresponding Annual Percentage Rates that apply to each Balance Category. Your Account Opening Disclosures disclose the Minimum Interest Charges that will be due if any Balance Category of your Account is subject to Interest Charges after a Billing Cycle. Your Account Opening Disclosures also disclose which Annual Percentage Rates and Daily Periodic Rates may vary from Billing Cycle to Billing Cycle, based on changes to a published index rate. These Account Opening Disclosures identify the index rate we use, and the different margins we add to the index rate to determine the variable Annual Percentage Rates.
              </p>
            </Section>

            <Section title="Fees">
              <p>
                You must pay the following Fees we charge to your Account, in the amounts shown on your Account Opening Disclosures, shown in this Agreement, or disclosed to you at the time you ask us to provide particular services to you or on your behalf.
              </p>
              <p><strong className="text-foreground">Annual Fee:</strong> We may charge you this Fee for making the Account available and issuing Cards to you. We will post and treat this Fee as a Purchase transaction.</p>
              <p><strong className="text-foreground">Late Payment Fee:</strong> We may charge you this Fee if we do not receive your payment in time to credit it by the due date shown on your Statement. We will post and treat this Fee as a Purchase transaction.</p>
              <p><strong className="text-foreground">Returned Payment Fee:</strong> We may charge you this Fee each time any payment you make to us is not paid by your financial institution for any reason, even if that institution later pays it. We will post and treat this Fee as a Purchase transaction.</p>
              <p><strong className="text-foreground">Copying Fee:</strong> We may charge you a Fee of $10.00 for each paper copy of a transaction document or a Statement you request, unless they are required to resolve a billing dispute. We will post and treat this Fee as a Purchase transaction.</p>
              <p><strong className="text-foreground">Fees for Faster Payment Services:</strong> We may make services available that allow you to make faster payments through a customer service representative using a telephone, the Internet or other payment system. We will describe the terms for using these services before you use them. You do not have to use these other payment services, and we may charge you a Fee for using them. If we do, we will tell you the amount of the Fee at the time you request the service. We are not responsible if a payment made using our payment services is rejected or not paid. Even if it is, we may still keep the Fee. We will post and treat these Fees as a Purchase transaction.</p>
              <p><strong className="text-foreground">Foreign Transaction Fee:</strong> We may charge you this Fee each time you make a transaction in a currency other than US Dollars or make a transaction in a country outside the United States. This Fee will post to the same Balance Category as the transaction (for example, as a Purchase), and be treated as other transactions that post to this Balance Category.</p>
            </Section>

            <Section title="Transactions Made in Foreign Currencies">
              <p>
                If you make a transaction in a foreign currency, the Payment Card Network will convert it into a U.S. dollar amount. The Payment Card Network will use its currency conversion procedures in effect when it processes the transaction. The conversion rate in effect on the processing date might differ from the rate in effect on the transaction or posting date. We do not currently adjust the currency exchange rate.
              </p>
            </Section>

            <Section title="Making Payments">
              <p>
                You are responsible for payment in full of all transactions and fees identified on your Statement at the end of each Billing Cycle. You make a payment to U-TOPIA through any means permitted by U-TOPIA as disclosed when you log into your Account. You agree to follow the payment requirements we disclose on Statements from time to time. You may pay all or any part of your outstanding Account balance early, without penalty.
              </p>
              <p>
                If your due date occurs on a day on which we do not receive payments, any payment received the next day that conforms to the above requirements will not be treated as late. Please allow at least five (5) days for postal delivery. Unless we or our agents specifically instruct you to remit payment in a different manner, payments received at any other location or in any other form may not be credited for up to five (5) days. This may cause you to be charged Late Payment Fees and additional Interest Charges.
              </p>
              <p>
                If you give your Account number or other Account information to someone else to make a payment for you, we may provide Account information to them and process their payment as if you made it. We may refuse to accept any payment made by someone else for your Account. If we accept a payment made by someone else for your Account, you will be responsible for the payment made, even if that payment is rejected or not paid.
              </p>
            </Section>

            <Section title="Collateral and Security Agreement">
              <p>
                This Account is a secured Account. Either your primary linked wallet or any additional wallets may provide the collateral that will secure the charges made by you on any Card (the "<strong>Collateral</strong>"). The Collateral must be in a wallet on a Supported Blockchain. By entering into this Agreement, you are furnishing and granting us a security interest in the Collateral, as well as any additions to, substitutions or renewals of the Collateral. No portion of the Collateral may be used by you to secure other loans.
              </p>
              <p>
                In addition to the Collateral serving as collateral for your obligations to us, you also authorize U-TOPIA to liquidate Collateral pursuant to this section in the event of a "<strong>Liquidation Event</strong>." A Liquidation Event will occur at a period set by U-TOPIA, (a) in accordance with the terms of any "smart-contract" or other electronic code pursuant to which one or more transactions will be triggered with respect to some or all of the Collateral; (b) if you fail to make a payment of the full amount owed to U-TOPIA within 21 calendar days of the due date on your Statement provided to you; or (c) the Market Value of your Collateral drops below the value of the existing charges on your U-TOPIA card(s) and you do not add additional collateral or reduce the value of the existing charges to less than the Market Value of your Collateral by making a payment.
              </p>
              <p>
                "<strong>Market Value</strong>" of the Collateral will be determined by U-TOPIA using the net redemption value provided by a centralized stablecoin issuer and/or the real time price posted on a reputable and recognized exchange or price aggregator, or by reference to a price oracle, subject to U-TOPIA's sole discretion. You agree to pay all transaction costs or "gas" fees relating to any Liquidation transaction and that all such costs or fees will be paid from your Collateral and will not be credited to your Account. You agree that the market value of your collateral is determined solely by U-TOPIA through the above methods. You further agree that the Market Value is determined at the time of a Liquidation Event and any change in or fluctuation in value of the collateral before or after a Liquidation Event will have no bearing on obligations owed to U-TOPIA.
              </p>
              <p>
                You, through one or more of your linked wallet or additional wallets, must ensure that the Collateral has Market Value in United States Dollars ("<strong>USD</strong>") that is greater than or equal to the value of all unpaid charges to all of your Cards. For example, if you provide Collateral with a Market Value equal to $100 of value in USD, and that Market Value does not change, your spending limit will be equal to $100 USD. Once $100 USD has been charged to your Card, you will be required to either make a payment or to provide additional Collateral in order to be able to make any additional Charges. If, at any time, the Market Value of the Collateral is less than the value of all unpaid charges, we may require you to add to the Collateral or you may be subject to a Liquidation Event, at our sole discretion. If the Market Value of your collateral is subject to a liquidation event when the Market Value is below your existing charges, you still owe us any difference between the USD value of the charges, and the USD value of the collateral at the time of Liquidation.
              </p>
              <p>
                The Collateral will be owned by you at all times and held in your custody. You authorize U-TOPIA and its designees to liquidate the Collateral upon a Liquidation Event and use the amounts to satisfy your payment obligations owed to U-TOPIA. You agree that U-TOPIA will not be required to notify you prior to such liquidation and you acknowledge and agree that, because of the nature of the blockchain technology and smart contract infrastructure, U-TOPIA may not be in a position to stop a liquidation from occurring.
              </p>
              <p>
                To withdraw your Collateral, you must provide U-TOPIA at least three (3) business days prior notice. You agree that any Collateral that has been provided to us within the three (3) business days of your notice to us may be subject to liquidation notwithstanding your notice to us of your withdrawal of the prior Collateral. Your withdrawal of any Collateral will not terminate any outstanding payment obligations you may have on your Card.
              </p>
              <p>
                We will not, in any circumstance, be holding custody of your Collateral. U-TOPIA is not a custodian or owner of your Collateral. If a Liquidation Event occurs, only the amount required to repay your outstanding financial obligations to U-TOPIA will be liquidated from your Collateral. Any unencumbered Collateral balances shall remain freely accessible. You authorize and consent to U-TOPIA liquidating the Collateral upon a Liquidation Event through a third party or by other means in order to satisfy payment obligations owed by you to U-TOPIA, the Issuer or other third party, as applicable.
              </p>
              <p>
                You acknowledge and agree that the Supported Blockchains that we accept as Collateral, including any Supported Blockchains that consist of or include tokenized assets, are issued and managed by third parties, and are subject to their own terms, conditions, and risks. We and U-TOPIA make no representations or warranties regarding any Supported Blockchain, or any underlying collateral related to such Supported Blockchain, including but not limited to their value, liquidity, stability, yield, rewards, or any other attributes. We and U-TOPIA expressly disclaim all responsibility and liability for any losses, fluctuations, or other outcomes arising from the ownership, use, performance, or characteristics of any Supported Blockchain and/or Collateral. You are responsible for evaluating and accepting the risks associated with any Supported Blockchain you choose to use as Collateral.
              </p>
              <p>
                You waive any right to require us to: (a) proceed against any Cardholder or any other person; (b) proceed against or exhaust any security held under this Agreement; or (c) pursue any other remedy available to us under applicable law. Issuer or U-TOPIA, without prior notice, and from time to time, may: (a) renew, compromise, extend, accelerate or otherwise change the terms relating to the Account; (b) take and hold security (other than the Collateral) for payment of the Account and enforce, exchange and release the security in any manner that we determine is proper; (c) release or substitute any Cardholder, guarantor, or endorser of the Account; and (d) increase or lower the Credit Limit on your Account, and no such action shall change the fact that the Collateral shall at all times serve as security for the Account.
              </p>
            </Section>

            <Section title="Payment Processing">
              <p>
                We may accept and process payments without losing any of our rights. Even if we credit your payment to your Account, we may delay the availability of Account credit until we confirm that your payment has cleared. We may resubmit and electronically collect returned payments. We may also adjust your Account as necessary to correct errors, to process returned and reversed payments, and to handle similar issues.
              </p>
              <p>
                An "<strong>Item</strong>" means a check, draft, money order or other negotiable instrument you use to pay your Account. This includes any image of these instruments. When you provide an Item as payment, you authorize us either to use information from your Item to make a one time electronic fund transfer from your deposit account or to process the payment as a check transaction. When we use information from your Item to make an electronic funds transfer, funds may be withdrawn from your deposit account as soon as the same day your payment is received and you will not receive your Item back from your financial institution. You may contact us and ask that we not process your future Items in this way. If we process the payment as a check transaction, you understand and agree that we may convert your Item into an electronic image that can be collected from your depository institution as a substitute check. We will not be responsible if an Item you provide has physical features that, when imaged, result in it not being processed as you intended.
              </p>
            </Section>

            <Section title="Items with Restrictive Words, Conditions or Instructions">
              <p>
                All Items that have restrictive words, conditions, limitations or special instructions added (including Items marked with the words "Paid in Full" or similar language), and all accompanying communications, must be mailed to and received at: Card Services, U-TOPIA, [Partner Mailing Address]. If you make your payment or send any accompanying communications to any other address, we may accept and process the payment, without losing any of our rights.
              </p>
            </Section>

            <Section title="Credit Balances">
              <p>
                We may reject and return to you any portion of a payment that creates a credit balance on your Account. Any credit balance we allow will not be available to you until we confirm that the payment creating the credit balance has cleared. We may reduce the amount of any credit balance by any new amounts billed to your Account. You may contact us as provided on your Statement and request a refund of any available credit balance. If you contact us in writing, we will refund your credit balance within seven (7) business days from our receipt of your written request. A business day means any day in which our offices are open for the processing of Account payments and credits.
              </p>
            </Section>

            <Section title="Account Default">
              <p>We may consider you in default of your Agreement with us if:</p>
              <ul className="space-y-3">
                <Bullet>you do not make any payment when it is due;</Bullet>
                <Bullet>any payment you make is rejected, not paid or cannot be processed;</Bullet>
                <Bullet>you exceed a credit limit;</Bullet>
                <Bullet>a bankruptcy or other insolvency proceeding is filed by or against you;</Bullet>
                <Bullet>you die or are legally declared incompetent or incapacitated;</Bullet>
                <Bullet>we determine that you made a false, incomplete or misleading statement on any of your Account documentation, or you otherwise tried to defraud us;</Bullet>
                <Bullet>you do not comply with any term of this Agreement or any other agreement with us; or</Bullet>
                <Bullet>you permanently reside outside the United States.</Bullet>
              </ul>
              <p>
                Paying the Interest Charges and Fees charged in connection with a default will not, by itself, cure the default. If you are in default, we may take the following actions without notifying you, after providing you with any notices that may be required by applicable law:
              </p>
              <ul className="space-y-3">
                <Bullet>close or suspend your Account;</Bullet>
                <Bullet>lower your credit limits;</Bullet>
                <Bullet>demand that you immediately pay the entire balance owing on your Account;</Bullet>
                <Bullet>continue to charge you Interest Charges and Fees as long as your balances remain outstanding; and/or</Bullet>
                <Bullet>pursue any other action against you that the law allows, which includes the filing of a lawsuit against you.</Bullet>
                <Bullet>You agree to pay us all of our collection expenses, attorneys' fees, and court costs, unless the law does not allow us to collect these amounts.</Bullet>
              </ul>
            </Section>

            <Section title="Communications">
              <p>
                By accepting these Card Terms or using your Card, you acknowledge that you have received, reviewed, and agree to be bound by the Issuer's{" "}
                <Link to="/esign" className="text-primary hover:underline">E-Sign & Electronic Communications Notice</Link>{" "}
                (the "<strong>E-Sign Notice</strong>"), which is incorporated herein by reference. You consent to receive all disclosures, notices, agreements, and other communications from Issuer and its service providers in electronic form, in accordance with the E-Sign Notice. You agree that such electronic communications satisfy any legal requirement that such communications be in writing. The E-Sign Notice may be amended by Issuer from time to time, and your continued use of the Card after any such amendment constitutes your acceptance of the amended E-Sign Notice.
              </p>
              <p>We may contact you from time to time about your Account. We may contact you in any manner we choose, unless the law says that we cannot. For example, we may:</p>
              <ul className="space-y-3">
                <Bullet>contact you by mail, telephone, email, fax, recorded message, text message or personal visit;</Bullet>
                <Bullet>contact you using an automated dialing or similar device ("Autodialer");</Bullet>
                <Bullet>contact you at your home and at your place of employment;</Bullet>
                <Bullet>contact you on your mobile telephone;</Bullet>
                <Bullet>contact you at any time, including weekends and holidays;</Bullet>
                <Bullet>contact you with any frequency;</Bullet>
                <Bullet>leave recorded and other messages on your answering machine/service and with others; and</Bullet>
                <Bullet>identify ourselves, your relationship with us, and our purpose for contacting you, even if others might hear or read it.</Bullet>
              </ul>
              <p>
                Our contacts with you about your Account are not unsolicited and may result from information we obtain from you or others. We may monitor or record any conversation or other communication with you. Unless the law prohibits us from doing so, we may modify or suppress caller identification and similar services and identify ourselves on these services in any manner we choose. When you give us or we obtain your mobile telephone number, we may contact you at this number using an Autodialer and can also leave recorded and other messages. We may do these things, whether we contact you or you contact us. If you ask us to discuss your Account with someone else, you must provide us with documents and authorization that we ask for and that are acceptable to us.
              </p>
            </Section>

            <Section title="Credit Reports">
              <p>
                We may provide information about you and the Account to consumer credit reporting agencies. We may also provide information about you and the Account to others as described in our Privacy Notices.
              </p>
              <p>
                We may report information about your account to credit bureaus. Late payments, missed payments, or other defaults on your account may be reflected in your credit report. We may obtain and use credit and income information about you from consumer credit reporting agencies and others as the law allows. If you believe we have reported inaccurate information about you to a credit reporting agency, notify us in writing at: Card Services, U-TOPIA, [Partner Mailing Address]. In doing so, identify yourself, your Account, the information you believe is inaccurate, and tell us why you believe the information is incorrect. If you have supporting documents or information, such as a copy of a credit report that includes information you believe is inaccurate, send us the supporting documents and information, too.
              </p>
            </Section>

            <Section title="Closing or Suspending Your Account">
              <p>
                You may ask us to close your Account by calling or writing us as described on your Statement. If you do, we may provide you with additional details about this process and request certain information from you, including payment information. If you use your Card or charges post to your Account after you ask us to close it, we may keep your Account open or reopen it. We may close or suspend your Account and your right to obtain credit from us. We may do this at any time and for any reason, as permitted by law, even if you are not in default. A suspension of your Account might be permanent or temporary.
              </p>
              <p>
                If your Account is closed or suspended for any reason, you must stop using your Card. You must also cancel all recurring charges or similar billing arrangements connected with the Account. We will not do this for you. If we close or permanently suspend your Account, you must also destroy all Cards.
              </p>
              <p>
                You must still pay us all amounts you owe on the Account, even if these amounts are charged after your Account is closed or suspended.
              </p>
            </Section>

            <Section title="Additional Services">
              <p>
                We may, from time to time, make additional services available to you directly or through affiliated or non-affiliated third parties. Without limitation, such services may include providing you with virtual accounts in order to enable you to use your Account or otherwise engage in various financial transactions that we do not directly provide. Each such service is subject to its own terms and conditions, and we shall not be responsible to you for any aspect of those services. We may permit you to charge any applicable fees for such services to your Account. You acknowledge and agree that we may receive compensation or otherwise benefit as a result of making such services available to you.
              </p>
            </Section>

            <Section title="The Law that Applies to Your Agreement">
              <p>
                This Agreement will be interpreted using Puerto Rican law. Federal law shall govern the Arbitration provisions of this Agreement, and as otherwise applicable. You waive any applicable statute of limitations, as the law allows. Otherwise, the applicable statute of limitations period for all provisions and purposes under this Agreement (including the right to collect debt) will be the longer of the time period provided by Puerto Rico law or the law of the jurisdiction where you live. If any part of this Agreement is found to be unenforceable, the remaining parts will remain in effect.
              </p>
            </Section>

            <Section title="Waiver">
              <p>
                We will not lose any of our rights if we delay taking any action for any reason or if we do not notify you. For example, we may waive your Interest Charges or Fees without notifying you and without losing our right to charge them in the future. We may always enforce our rights later and may take other actions not listed in this Agreement if the law allows them. You do not have to receive notice from us of any waiver, delay, demand or dishonor. We may proceed against you before proceeding against someone else.
              </p>
            </Section>

            <Section title="Assignment">
              <p>
                This Agreement will be binding on, and benefit, any of your and our successors and assigns. You may not transfer your Account or your Agreement to someone else without our written permission. We may transfer your Account, this Agreement, or any of our rights or obligations therein, to another company or person at any time, without your permission and without prior notice to you. If we do, they will take our place under this Agreement. You must pay them and perform all of your obligations to them and not us. If you pay us after you are informed or learn that we have transferred your Account or this Agreement, we can handle your payment in any way we think is reasonable. This includes returning the payment to you or forwarding the payment to the other company or person.
              </p>
            </Section>

            <Section title="Dispute Resolution and Arbitration">
              <p className="uppercase text-sm tracking-wide">
                Please read this "Dispute Resolution and Arbitration" provision very carefully. It limits your rights in the event of a dispute between you and Issuer. U-TOPIA is the technology provider for the Card but is not the Issuer, creditor or lender. U-TOPIA is not a party to this Agreement and has no liability for the Issuer's obligations under it. However, U-TOPIA is an express third-party beneficiary of this Agreement with respect to any provisions that allocate risk, disclaim liability, limit remedies or require disputes to be resolved through arbitration. Accordingly, to the extent a dispute involves U-TOPIA, U-TOPIA shall be entitled to invoke and benefit from the same protections, limitations and dispute resolution procedures as the Issuer. To the extent you have any dispute you may have with U-TOPIA relating solely to services provided to you under your separate User Terms with U-TOPIA, such disputes will be governed exclusively in accordance with the U-TOPIA User Terms.
              </p>

              <SubHeading>Binding Arbitration</SubHeading>
              <p>
                (a) You and Issuer agree that any and all past, present and future Disputes (defined below) shall be determined by arbitration, unless your Dispute is subject to an exception to this agreement to arbitrate set forth below. You and Issuer further agree that any arbitration pursuant to this section shall not proceed as a class, group or representative action. The award of the arbitrator may be entered in any court having jurisdiction. "<strong>Dispute</strong>" means any dispute, claim, or controversy between you and Issuer that arises out of or relates to (i) this Agreement (including, without limitation, the Issuer Card, your Account, any addenda hereto or other terms incorporated herein by reference), (ii) the breach, termination, enforcement, interpretation or validity hereof, including the determination of the scope or applicability of the agreement to arbitrate hereunder, or (iii) any additional services we may provide to you in connection with this Agreement.
              </p>
              <p>
                (b) This agreement to arbitrate shall be construed under and be subject to the Federal Arbitration Act, notwithstanding any other choice of law set out in this Agreement.
              </p>
              <p>
                (c) The Binding Arbitration and Class Waiver sections of this Agreement do not apply to you if you are covered by the Military Lending Act nor do any provisions of the Agreement that waive any right to legal recourse under any state or federal law to the extent required by the Military Lending Act.
              </p>

              <SubHeading>Arbitration Procedure</SubHeading>
              <p>
                (a) Before filing a claim against Issuer, you agree to try to resolve the Dispute informally by providing written notice to Issuer of the actual or potential Dispute. Similarly, Issuer will provide written notice to you of any actual or potential Dispute to endeavor to resolve any claim we may possess informally before taking any formal action. The party that provides the notice of the actual or potential Dispute (the "<strong>Notifying Party</strong>") will include in that notice (a "<strong>Notice of Dispute</strong>") the name of Company, the Notifying Party's contact information for any communications relating to such Dispute, and sufficient details regarding such Dispute to enable the other party (the "<strong>Notified Party</strong>") to understand the basis of and evaluate the concerns raised. If the Notified Party responds within ten (10) business days after receiving the Notice of Dispute that it is ready and willing to engage in good faith discussions in an effort to resolve the Dispute informally, then each party shall promptly participate in such discussions in good faith.
              </p>
              <p>
                (b) If, notwithstanding the Notifying Party's compliance with all of its obligations under the preceding paragraph, a Dispute is not resolved within thirty (30) days after the Notice of Dispute is sent (or if the Notified Party fails to respond to the Notice of Dispute within ten (10) business days), the Notifying Party may initiate an arbitration proceeding as described below. If either party purports to initiate arbitration without first providing a Notice of Dispute and otherwise complying with all of its obligations under the preceding paragraph, then, notwithstanding any other provision of this Card Agreement, the arbitrator(s) will promptly dismiss the claim with prejudice and will award the other party all of its costs and expenses (including, without limitation, reasonable attorneys' fees) incurred in connection with such Dispute.
              </p>
              <p>
                (c) You and Issuer each agree to resolve any Disputes that are not resolved informally as described above through final and binding arbitration as discussed herein, except as set forth under Section 12.3 below. You and Issuer agree that the American Arbitration Association ("<strong>AAA</strong>") will administer the arbitration under its Consumer Arbitration Rules (the "<strong>Rules</strong>"). The Rules are available at www.adr.org or by calling the AAA at 1-800-778-7879. A party who desires to initiate arbitration must provide the other party with a written Demand for Arbitration as specified in the AAA Rules. Arbitration will proceed on an individual basis and will be handled by a sole arbitrator. The single arbitrator will be either a retired judge or an attorney licensed to practice law and will be selected by the parties from the AAA's roster of arbitrators. If the parties are unable to agree upon an arbitrator within fourteen (14) days of delivery of the Demand for Arbitration, then the AAA will appoint the arbitrator in accordance with the AAA Rules. The arbitrator(s) shall be authorized to award any remedies, including injunctive relief, that would be available to you in an individual lawsuit, subject to any effective and enforceable limitations of liability or exclusions of remedies set forth herein. Notwithstanding any language to the contrary in this paragraph, if a party seeks injunctive relief that would significantly impact other Issuer users as reasonably determined by either party, the parties agree that such arbitration will proceed on an individual basis but will be handled by a panel of three (3) arbitrators. Each party shall select one arbitrator, and the two party-selected arbitrators shall select the third, who shall serve as chair of the arbitral panel. That chairperson shall be a retired judge or an attorney licensed to practice law and with experience arbitrating or mediating disputes. In the event of disagreement as to whether the threshold for a three-arbitrator panel has been met, the sole arbitrator appointed in accordance with this Section shall make that determination. If the arbitrator determines a three-person panel is appropriate, the arbitrator may — if selected by either party or as the chair by the two party-selected arbitrators — participate in the arbitral panel. Except as and to the extent otherwise may be required by law, the arbitration proceeding and any award shall be confidential.
              </p>
              <p>
                (d) You and Issuer further agree that the arbitration will be held in the English language in New York, New York, or, if you so elect, all proceedings can be conducted via videoconference, telephonically or via other remote electronic means.
              </p>
              <p>
                (e) Filing costs and administrative fees shall be paid in accordance with the AAA Rules; provided that the prevailing party will be entitled to recover its reasonable attorneys' fees, expert witness fees, and out-of-pocket costs incurred in connection with the arbitration proceeding, in addition to any other relief it may be awarded.
              </p>
              <p>
                (f) You and Issuer agree that, notwithstanding anything to the contrary in the Rules, the arbitration of any Dispute shall proceed on an individual basis, and neither you nor Issuer may bring a claim as a part of a class, group, collective, coordinated, consolidated or mass arbitration (each, a "<strong>Collective Arbitration</strong>"). Without limiting the generality of the foregoing, a claim to resolve any Dispute against Issuer will be deemed a Collective Arbitration if (i) two (2) or more similar claims for arbitration are filed concurrently by or on behalf of one or more claimants; and (ii) counsel for the claimants are the same, share fees or coordinate across the arbitrations. "Concurrently" for purposes of this provision means that both arbitrations are pending (filed but not yet resolved) at the same time.
              </p>
              <p className="uppercase text-sm tracking-wide">
                To the maximum extent permitted by applicable law, neither you nor Issuer shall be entitled to consolidate, join or coordinate Disputes by or against other individuals or entities, or arbitrate or litigate any Dispute in a representative capacity, including as a representative member of a class or in a private attorney general capacity. In connection with any Dispute, any and all such rights are hereby expressly and unconditionally waived. Without limiting the foregoing, any challenge to the validity of this paragraph shall be determined exclusively by the arbitrator.
              </p>

              <SubHeading>Small Claims</SubHeading>
              <p>
                Notwithstanding your and Issuer's agreement to arbitrate Disputes, you and Issuer retain the right to bring an individual action in small claims court.
              </p>

              <SubHeading>Class Waiver</SubHeading>
              <p>
                To the extent applicable law permits, any dispute arising out of or relating to this Card Agreement, whether in arbitration or in court, will be conducted only on an individual basis and not in a class, consolidated or representative action. Notwithstanding any other provision of this Agreement or the AAA Rules, disputes regarding the interpretation, applicability, or enforceability of this class waiver may be resolved only by a court and not by an arbitrator. If this waiver of class or consolidated actions is deemed invalid or unenforceable, neither party is entitled to arbitration.
              </p>

              <SubHeading>No Jury Trial</SubHeading>
              <p>
                If for any reason a claim or dispute proceeds in court rather than through arbitration, each party knowingly and irrevocably waives any right to trial by jury in any action, proceeding or counterclaim arising out of or relating to this Card Agreement.
              </p>

              <SubHeading>Venue and Jurisdiction for Judicial Proceedings</SubHeading>
              <p>
                Except as otherwise required by applicable law or provided in this Card Agreement, in the event that the agreement to arbitrate is found not to apply to you or your Dispute, you and Issuer agree that any judicial proceeding may only be brought in a court of competent jurisdiction in Puerto Rico. Both you and Issuer irrevocably consent to venue and personal jurisdiction there; provided that either party may bring any action to confirm an arbitral award in any court having jurisdiction.
              </p>

              <SubHeading>Confidentiality</SubHeading>
              <p>
                The existence of and all information regarding any Dispute will be held in strict confidence by the parties and will not be disclosed by either party except as reasonably necessary in connection with the conduct of the arbitration or the confirmation or enforcement of any arbitral award. Any such permitted disclosure will, to the maximum extent reasonably practicable, be made subject to obligations of confidentiality at least as stringent as the provisions of this paragraph. If any disclosure of information regarding any Dispute is required under applicable law, the parties shall reasonably cooperate with one another to obtain protective orders or otherwise to preserve the confidentiality of such information.
              </p>
            </Section>

            <Section title="Survival">
              <p>
                The following provisions of this Agreement shall survive any termination or expiration of this Agreement and shall remain in full force and effect until all of your obligations to us have been fully and finally satisfied: (a) all of your payment obligations and our right to collect all amounts owed by you; (b) all security interest, collateral, and setoff provisions, including our rights in any Collateral; (c) any indemnification obligations; (d) the limitation of liability provisions; (e) the disclaimer of warranties provisions; (f) the dispute resolution and arbitration provisions, including the class waiver; (g) our communications and contact rights; (h) our credit reporting rights and your consent thereto; (i) the governing law and jurisdiction provisions; (j) our assignment rights; (k) any waiver provisions; (l) all representations and warranties made by you; (m) any accrued rights, remedies, or causes of action in favor of either party; and (n) any other provision that by its nature or express terms is intended to survive.
              </p>
            </Section>

            <Section title="Severability">
              <p>
                If any provision of this Agreement is found to be invalid, illegal, or unenforceable by a court or arbitrator of competent jurisdiction, such provision shall be modified to the minimum extent necessary to make it valid and enforceable while preserving its intent, or if such modification is not possible, such provision shall be severed from this Agreement. The remaining provisions shall remain in full force and effect.
              </p>
              <p>
                Notwithstanding the foregoing paragraph, in the event that a court finds the prohibition of Collective Arbitration under the Dispute Resolution and Arbitration Section to be invalid or unenforceable, then all provisions related to arbitration in that section shall be deemed void, except for any portion of any provision in that section related to the resolution of Disputes through litigation in court.
              </p>
            </Section>

            <Section title="Entire Agreement">
              <p>
                This Agreement constitutes the entire agreement between you and Issuer regarding the subject matter hereof and supersede all prior or contemporaneous agreements, understandings, representations, and communications whether written or oral, regarding such subject matter.
              </p>
            </Section>

            <Section title="Limitation of Liability">
              <p className="uppercase text-sm tracking-wide">
                To the maximum extent permitted by applicable law, in no event shall Issuer, its affiliates, or its officers, directors, employees, agents, service providers, or licensors be liable to you for any indirect, incidental, consequential, special, exemplary, punitive, or other similar damages, including but not limited to lost profits, lost revenue, lost data, loss of goodwill, business interruption, or loss of business opportunity, whether arising in contract, tort, negligence, strict liability, or otherwise, even if Issuer has been advised of the possibility of such damages.
              </p>
              <p className="uppercase text-sm tracking-wide">
                In no event shall Issuer's total liability to you for all claims arising out of or relating to this Agreement or your Account exceed the lesser of (a) your actual direct damages proven or (b) the total amounts paid by you in connection with this Agreement in the twelve (12) months immediately preceding the event giving rise to the claim.
              </p>
            </Section>

            <Section title="Indemnity">
              <p>
                You will indemnify and defend Issuer, its affiliates, and its partners, directors, officers, employees, agents, trustees, administrators, managers, advisors, and representatives (each an "<strong>Indemnitee</strong>") against, and hold each Indemnitee harmless from, any and all claims, litigation, investigations, proceedings, losses, damages, fines, penalties, liabilities, settlements, costs, fees, and expenses incurred by any Indemnitee or asserted against any Indemnitee by any person arising out of, in connection with, related to, or as a result of your (i) breach of any of the representations, warranties, or covenants contained in this Agreement; or (ii) gross negligence, fraud, or violation of any applicable law or rights of any third-party. Issuer may defend any claim subject to indemnification hereunder, using counsel of its choice, and you will pay or promptly reimburse Issuer for the reasonable fees of such counsel and all related costs and reasonable expenses. If you are a user from a jurisdiction that does not allow certain indemnification obligations, you agree that this indemnity is intended to be as broad as permitted under the laws of such jurisdiction.
              </p>
            </Section>

            <Section title="Your Billing Rights: Keep This Document For Future Use">
              <p>
                This notice is for Consumers using the Card Account and tells you about your rights and our responsibilities under the Fair Credit Billing Act.
              </p>

              <SubHeading>What To Do If You Find A Mistake On Your Statement</SubHeading>
              <p>If you think there is an error on your statement, write to us at:</p>
              <p className="text-foreground">
                Card Services<br />
                U-TOPIA CORP.<br />
                <a href="mailto:support@u-topia.com" className="text-primary hover:underline">support@u-topia.com</a>
              </p>
              <p>In your letter, give us the following information:</p>
              <ul className="space-y-3">
                <Bullet><strong className="text-foreground">Account information:</strong> Your name and account number.</Bullet>
                <Bullet><strong className="text-foreground">Dollar amount:</strong> The dollar amount of the suspected error.</Bullet>
                <Bullet><strong className="text-foreground">Description of problem:</strong> If you think there is an error on your bill, describe what you believe is wrong and why you believe it is a mistake.</Bullet>
              </ul>
              <p>You must contact us:</p>
              <ul className="space-y-3">
                <Bullet>Within 60 days after the error appeared on your statement.</Bullet>
                <Bullet>At least 3 business days before an automated payment is scheduled, if you want to stop payment on the amount you think is wrong.</Bullet>
              </ul>
              <p>You must notify us of any potential errors in writing. You may call us or notify us electronically, but if you do we are not required to investigate any potential errors and you may have to pay the amount in question.</p>

              <SubHeading>What Will Happen After We Receive Your Letter</SubHeading>
              <p>When we receive your letter, we must do two things:</p>
              <ul className="space-y-3">
                <Bullet>Within 30 days of receiving your letter, we must tell you that we received your letter. We will also tell you if we have already corrected the error.</Bullet>
                <Bullet>Within 90 days of receiving your letter, we must either correct the error or explain to you why we believe the bill is correct.</Bullet>
              </ul>
              <p>While we investigate whether or not there has been an error:</p>
              <ul className="space-y-3">
                <Bullet>We cannot try to collect the amount in question, or report you as delinquent on that amount.</Bullet>
                <Bullet>The charge in question may remain on your statement, and we may continue to charge you interest on that amount.</Bullet>
                <Bullet>While you do not have to pay the amount in question, you are responsible for the remainder of your balance.</Bullet>
                <Bullet>We can apply any unpaid amount against your credit limit (where applicable).</Bullet>
              </ul>
              <p>After we finish our investigation, one of two things will happen:</p>
              <ul className="space-y-3">
                <Bullet><strong className="text-foreground">If we made a mistake:</strong> You will not have to pay the amount in question or any interest or other fees related to that amount.</Bullet>
                <Bullet><strong className="text-foreground">If we do not believe there was a mistake:</strong> You will have to pay the amount in question, along with applicable interest and fees. We will send you a statement of the amount you owe and the date payment is due. We may then report you as delinquent if you do not pay the amount we think you owe.</Bullet>
              </ul>
              <p>
                If you receive our explanation but still believe your bill is wrong, you must write to us within 10 days telling us that you still refuse to pay. If you do so, we cannot report you as delinquent without also reporting that you are questioning your bill. We must tell you the name of anyone to whom we reported you as delinquent, and we must let those organizations know when the matter has been settled between us.
              </p>
              <p>
                If we do not follow all of the rules above, you do not have to pay the first $50 of the amount you question even if your bill is correct.
              </p>

              <SubHeading>Your Rights If You Are Dissatisfied With Your Credit Card Purchases</SubHeading>
              <p>
                If you are dissatisfied with the goods or services that you have purchased with your credit card, and you have tried in good faith to correct the problem with the merchant, you may have the right not to pay the remaining amount due on the purchase.
              </p>
              <p>To use this right, all of the following must be true:</p>
              <ul className="space-y-3">
                <Bullet>The purchase must have been made in your home state or within 100 miles of your current mailing address, and the purchase price must have been more than $50. (Note: Neither of these are necessary if your purchase was based on an advertisement we mailed to you, or if we own the company that sold you the goods or services.)</Bullet>
                <Bullet>You must have used your credit card for the purchase. Purchases made with cash advances from an ATM do not qualify.</Bullet>
                <Bullet>You must not yet have fully paid for the purchase.</Bullet>
              </ul>
              <p>If all of the criteria above are met and you are still dissatisfied with the purchase, contact us in writing at:</p>
              <p className="text-foreground">
                Card Services<br />
                U-TOPIA CORP.<br />
                <a href="mailto:support@u-topia.com" className="text-primary hover:underline">support@u-topia.com</a>
              </p>
              <p>
                While we investigate, the same rules apply to the disputed amount as discussed above. After we finish our investigation, we will tell you our decision. At that point, if we think you owe an amount and you do not pay, we may report you as delinquent.
              </p>
            </Section>

            <Section title="Additional Disclosures for Residents of Certain States">
              <SubHeading>Maryland Residents</SubHeading>
              <ul className="space-y-3">
                <Bullet>This Agreement is governed by the Credit Grantor Revolving Credit Provisions in Subtitle 9 of Title 12 (Credit Regulations) of the Maryland Commercial Law, Md. Commercial Law Code Ann. § 12-901, <em>et. seq.</em></Bullet>
                <Bullet>Upon your default pursuant to the terms of this Agreement, we may recover from you our attorneys' fees and all court or other collection costs actually incurred by us in connection with your default.</Bullet>
                <Bullet>You acknowledge that you received a copy of this Agreement.</Bullet>
              </ul>

              <SubHeading>South Dakota Residents</SubHeading>
              <p>
                Any improprieties regarding this loan or our lending practices may be referred to the South Dakota Division of Banking at: Division of Banking, South Dakota Department of Labor and Regulation, 1714 Lincoln Ave., Suite 2, Pierre, SD 57501. Phone: 605.773.3421.
              </p>

              <SubHeading>Wisconsin Residents</SubHeading>
              <ul className="space-y-3">
                <Bullet>Notwithstanding anything to the contrary in this Agreement, we will not be entitled to recover our attorneys' fees from you upon default.</Bullet>
                <Bullet>Notwithstanding anything to the contrary in this Agreement, this Agreement shall be governed by Wisconsin law and any legal action that we bring against you, if any, will be in Wisconsin.</Bullet>
                <Bullet>By accepting this Agreement, you are certifying that this Account is being incurred by you in the interest of your marriage or family.</Bullet>
                <Bullet>No provision of any marital property agreement (including any premarital agreement), unilateral statement under §766.59 of the Wisconsin Statutes, or court decree under §766.70 of the Wisconsin Statutes adversely affects our interest unless we, prior to the time that the loan is approved, are furnished with a copy of the marital property agreement, a statement, or a decree or have actual knowledge of the adverse provision.</Bullet>
                <Bullet>You must notify us if you have a spouse and provide us with their name and address so that we can provide a copy of this Agreement or otherwise notify your spouse of this Account.</Bullet>
                <Bullet>Your spouse may terminate the Account by requesting termination in writing, in which case we may require you to pay the entire amount due to us immediately. Termination of the Account by your spouse does not reduce or remove any of your liability to us in connection with the Account.</Bullet>
              </ul>
            </Section>

          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default TermsUS;
