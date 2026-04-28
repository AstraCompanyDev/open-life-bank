import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Bullet = ({ children }: { children: React.ReactNode }) => (
  <li className="flex items-start gap-3"><span className="text-primary mt-1.5">•</span><span>{children}</span></li>
);

const H2 = ({ children }: { children: React.ReactNode }) => (
  <h2 className="text-xl font-semibold mb-5 text-foreground">{children}</h2>
);

const H3 = ({ children }: { children: React.ReactNode }) => (
  <h3 className="text-lg font-semibold mb-3 mt-6 text-foreground">{children}</h3>
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
          <h1 className="text-3xl md:text-4xl font-semibold mb-3">U-TOPIA CORP. Spend Card Terms</h1>
          <p className="text-muted-foreground text-lg mb-2">
            Region: United States · Program Type: Business · Flow of Funds: Rain-managed
          </p>
          <p className="text-muted-foreground mb-16">Last updated: April 28, 2026</p>

          <div className="space-y-12 text-base leading-relaxed text-muted-foreground">
            <section>
              <p>
                These U-TOPIA CORP. Spend Card Terms (the "<strong>Card Terms</strong>") are a binding agreement between you ("<strong>you</strong>" or "<strong>your</strong>") and the Issuer ("<strong>we</strong>", "<strong>us</strong>", or "<strong>our</strong>") that governs your use of the U-TOPIA CORP. Spend Cards, including the process for obtaining and managing U-TOPIA CORP. Spend Cards, access to which is provided to you by U-TOPIA CORP. ("<strong>U-TOPIA CORP.</strong>").
              </p>
            </section>

            <section className="rounded-xl border border-border bg-muted/20 p-6">
              <H2>Important Disclosures</H2>
              <p className="mb-4 text-foreground font-medium uppercase text-sm tracking-wide">
                Please review the arbitration clause and notices set forth in Section 16. By using the Card, you are agreeing to the arbitration clause and notices set forth in that section. The arbitration clause will have a substantial effect on your rights in the event of a dispute, including your right to bring or participate in a class proceeding.
              </p>
              <p className="mb-6">
                Rates, fees, and other important information about your U-TOPIA CORP. Spend Card ("<strong>Card</strong>" or "<strong>U-TOPIA CORP. Card</strong>") are set forth in these Important Disclosures.
              </p>

              <H3>Interest Rates and Interest Charges</H3>
              <ul className="space-y-3 mb-6">
                <Bullet><strong className="text-foreground">Annual Percentage Rate (APR) for Purchases:</strong> 0%</Bullet>
              </ul>
              <p className="mb-6">
                Your U-TOPIA CORP. Card is currently offering zero (0%) interest on all purchases. Issuer and U-TOPIA CORP. reserve the right to implement interest in the future, for new purchases. U-TOPIA CORP. will disclose any changes to this agreement prior to the introduction of interest and other charges associated with your U-TOPIA CORP. Card.
              </p>

              <H3>Fees</H3>
              <p className="mb-3 text-foreground font-medium">Transaction Fee — Foreign Purchases</p>
              <ul className="space-y-3 mb-4">
                <Bullet>Foreign Exchange Fee (non-USD): up to 3%</Bullet>
                <Bullet>Cross Border Fee: up to 3%</Bullet>
              </ul>
              <p className="mb-3 text-foreground font-medium">Penalty Fees</p>
              <ul className="space-y-3">
                <Bullet>Late payment: Up to $40</Bullet>
                <Bullet>Returned payment: Up to $29</Bullet>
              </ul>

              <p className="mt-6 text-foreground font-medium uppercase text-sm tracking-wide">
                When you apply for a Card account, activate a Card, or otherwise participate in the program in any way, you represent that you have read, understand, and agree to these issuing terms.
              </p>
            </section>

            <section>
              <H2>Background</H2>
              <div className="space-y-4">
                <p>
                  The U-TOPIA CORP. Card is provided to you on behalf of U-TOPIA CORP. in connection with your status as a U-TOPIA CORP. customer. Your relationship with U-TOPIA CORP. in connection with platform access and related services ("<strong>Services</strong>") is governed solely by the U-TOPIA CORP. platform Terms of Service ("<strong>User Terms</strong>" or "<strong>U-TOPIA CORP. User Terms</strong>"), which constitute a separate agreement between you and U-TOPIA CORP. The Issuer is not a party to the U-TOPIA CORP. User Terms and disclaims any liability for the performance of services covered therein. In the event of a conflict between these Card Terms and your User Terms, these Card Terms will control.
                </p>
                <p>
                  U-TOPIA CORP. is providing access to a U-TOPIA CORP. Spend Account ("<strong>Account</strong>" or "<strong>U-TOPIA CORP. Account</strong>") for purposes of facilitating transactions you make using one or more Cards for transactions up to the applicable credit limit. You understand that you have access to the Services and U-TOPIA CORP. Card only to the extent authorized by U-TOPIA CORP. You acknowledge and agree that U-TOPIA CORP. will satisfy obligations created through your use of the U-TOPIA CORP. Card and you will repay Partner based on the terms of your User Terms, subject to these Card Terms.
                </p>
                <p>
                  You understand that the U-TOPIA CORP. Card is not intended for personal, consumer, or household use and you agree you will only use the U-TOPIA CORP. Card for commercial or business purposes.
                </p>
                <p>
                  Details on U-TOPIA CORP.'s collection, use, and handling of your personal data are described in our{" "}
                  <Link to="/privacy-policy" className="text-primary hover:underline">Privacy Policy</Link>. Please review it carefully and contact U-TOPIA CORP. if you have any questions. By opening, using, or maintaining a Card, you consent to and direct Issuer to share information relating to transactions, including receipt information or other personal data, in order to deliver the Services.
                </p>
              </div>
            </section>

            <section>
              <H2>Issuer</H2>
              <div className="space-y-4">
                <p>
                  The card program is issued by the Issuer under license from Visa. The information about the cost of the Card described above is accurate as of the date stated. This information may change after that date. To find out what may have changed, contact the servicer at{" "}
                  <a href="mailto:support@u-topia.com" className="text-primary hover:underline">support@u-topia.com</a>.
                </p>
                <p>
                  Issuer reserves the right to amend these Card Terms or impose additional obligations or restrictions on you at any time with or without notice to you. By continuing to use the Services, you agree to be bound by such amendments or additional obligations or restrictions. The date on the top of this page shows when the Card Terms were last updated. Capitalized terms that are not defined here have the definitions provided in the User Terms.
                </p>
                <p>
                  U-TOPIA CORP. provides technology services in connection with the U-TOPIA CORP. Card, and is not a bank, credit union, or money services business and does not itself extend credit, set interest rates, determine repayment terms or hold Collateral. Nothing in these Card Terms shall be construed as creating a lender-borrower relationship between you and U-TOPIA CORP.
                </p>
                <p className="mb-3">You acknowledge and agree that U-TOPIA CORP.:</p>
                <ul className="space-y-3">
                  <Bullet>(i) is an express third-party beneficiary of these Card Terms, with the limited right to enforce obligations that directly relate to its role;</Bullet>
                  <Bullet>(ii) is not responsible for any decisions by the Issuer to approve, decline, suspend or close your Card account. U-TOPIA CORP. may, at the request of the Issuer, the payment network or a regulatory authority, suspend or restrict your access to the U-TOPIA CORP. platform or certain features, to protect against fraud, comply with applicable laws or manage program risk;</Bullet>
                  <Bullet>(iii) does not control and is not responsible for the operation, security, or performance of the smart contracts used to hold your Collateral; and</Bullet>
                  <Bullet>(iv) is not responsible for merchant acceptance of your U-TOPIA CORP. Card or for resolving disputes about goods or services purchased with the U-TOPIA CORP. Card.</Bullet>
                </ul>
              </div>
            </section>

            <section>
              <H2>Defined Terms</H2>
              <ul className="space-y-3">
                <Bullet><strong className="text-foreground">"Authorized User(s)"</strong> means one or more individuals authorized to use the U-TOPIA CORP. Card and Account on your behalf.</Bullet>
                <Bullet><strong className="text-foreground">"Card Networks"</strong> means the payment card networks including Visa or Mastercard.</Bullet>
                <Bullet><strong className="text-foreground">"Charge"</strong> means a payment for goods or services made to a merchant that accepts payments on the applicable Card Network.</Bullet>
                <Bullet><strong className="text-foreground">"Chargeback"</strong> means a dispute that you initiate against a merchant for an unresolved dispute with the merchant or where a Charge is unauthorized.</Bullet>
                <Bullet><strong className="text-foreground">"Linked Wallet"</strong> means the primary wallet that is connected as a settlement source for your U-TOPIA CORP. Card and which may or may not enable you to access your U-TOPIA CORP. Account and U-TOPIA CORP. Card.</Bullet>
                <Bullet><strong className="text-foreground">"Fee"</strong> means charges we impose on you for use of Services or your use of a U-TOPIA CORP. Card.</Bullet>
                <Bullet><strong className="text-foreground">"Issuer"</strong> refers to Third National, including its affiliates, successors, and assigns.</Bullet>
                <Bullet><strong className="text-foreground">"Periodic Statement"</strong> means the periodic statements that reflect activity for all Cards issued to you identifying charges, fees, refunds, or other amounts owed or credited to your U-TOPIA CORP. Account during the time covered by that statement.</Bullet>
                <Bullet><strong className="text-foreground">"Supported Blockchains"</strong> means the Ethereum Blockchain, Polygon Blockchain, Optimism Blockchain, Arbitrum Blockchain and other blockchain networks. We may update this list of Supported Blockchains at any time and at our sole discretion.</Bullet>
              </ul>
            </section>

            <section>
              <H2>1. Accepting this Agreement & Eligibility</H2>
              <div className="space-y-4">
                <p>
                  These Card Terms become effective and legally binding when you activate or create your Card by following the instructions on the U-TOPIA CORP. platform. You and we agree to comply with, and be bound by, this entire agreement. You should retain and carefully review these Card Terms. By creating a Card, you agree to the Arbitration Clause below as it pertains to this agreement, even if you do not use the Account or the Card.
                </p>
                <p>By using a Card you represent and warrant in your individual capacity that:</p>
                <ul className="space-y-3">
                  <Bullet>You are not a person who is blocked or sanctioned by the United States Government, including those identified by the United States Office of Foreign Asset Controls (OFAC).</Bullet>
                  <Bullet>You will use the Services exclusively for purposes permitted by these Card Terms.</Bullet>
                  <Bullet>All information you provide to us, either directly or through Partner, is and will be true, correct, and complete.</Bullet>
                  <Bullet>You will not use the U-TOPIA CORP. Card for personal, family, or household use.</Bullet>
                  <Bullet>You will only use the U-TOPIA CORP. Card in compliance with applicable law.</Bullet>
                  <Bullet>You attest that you were not solicited for this product.</Bullet>
                </ul>
              </div>
            </section>

            <section>
              <H2>2. Issuer Terms</H2>
              <p>
                The Issuer is identified on the back of the U-TOPIA CORP. Card issued to you, as identified in these Card Terms, or any other agreements or materials provided to you. Issuer is the creditor responsible for funding your payments for goods and services you purchase at a merchant through your U-TOPIA CORP. Card and based on information provided by U-TOPIA CORP. Please note that the Issuer may require you to accept additional terms in addition to the agreements you have with U-TOPIA CORP., and your use of the U-TOPIA CORP. Cards will then also be subject to such additional terms.
              </p>
            </section>

            <section>
              <H2>3. Collateral</H2>
              <div className="space-y-4">
                <p>
                  This Account is secured by collateral. Either your primary Linked Wallet or any Additional Wallets may provide the collateral that will secure the Charges made by you on any U-TOPIA CORP. Card (the "<strong>Collateral</strong>"). The Collateral must be held in a wallet on a Supported Blockchain. By entering into these Card Terms, you are furnishing and granting us a security interest in the Collateral, as well as any additions to, substitutions or renewals of the Collateral. No portion of the Collateral may be used by you to secure other loans.
                </p>
                <p>
                  A "<strong>Liquidation Event</strong>" will occur if you have an outstanding payment obligation to U-TOPIA CORP. or the Issuer, as applicable, and such payment obligation has not been paid in full by you within the timeframe required. You acknowledge full responsibility and liability for any losses, fluctuations, or other outcomes arising from the ownership, use, performance, or characteristics of any Supported Blockchain and/or Collateral. You are responsible for evaluating and accepting the risks associated with any Supported Blockchain you use to provide collateral.
                </p>
                <p>
                  You waive any right to require us to: (a) proceed against any Cardholder or any other person; (b) proceed against or exhaust any security held under these Card Terms; or (c) pursue any other remedy available to us under applicable law. Issuer or U-TOPIA CORP. may, without prior notice, and from time to time: (a) renew, compromise, extend, accelerate or otherwise change the terms relating to the Account; (b) take and hold security (other than the Collateral) for payment of the Account and enforce, exchange and release the security in any manner that we determine is proper; (c) release or substitute any Cardholder, guarantor, or endorser of the Account; and (d) increase or lower the Credit Limit on your Account, and no such action shall change the fact that the Collateral shall at all times serve as security for the Account.
                </p>
              </div>
            </section>

            <section>
              <H2>4. Spending Limits</H2>
              <div className="space-y-4">
                <p>
                  Your spending limit is generally set by U-TOPIA CORP. pursuant to the terms of the U-TOPIA CORP. Terms as well as the amount of the Collateral. Issuer or U-TOPIA CORP. may additionally set spending limits on each U-TOPIA CORP. Card or an aggregate spending limit across all U-TOPIA CORP. Cards, at their sole discretion. U-TOPIA CORP. Account spending limits are dynamic and may be modified at any time with or without notice to you, including temporary increases or decreases or reducing spending limits to $0. Any authorized Charge or fee on a U-TOPIA CORP. Card may reduce your spending limit by a corresponding amount.
                </p>
                <p>
                  When you use U-TOPIA CORP. Card to initiate a transaction at certain merchants where the amount of the final transaction is unknown at the time of authorization, Issuer may assess a value to such a Charge for an amount higher or lower than the final Charges. The initial "hold" Charge will reduce your spending limit until the final Charge is determined.
                </p>
              </div>
            </section>

            <section>
              <H2>5. Purchases & Restrictions</H2>
              <div className="space-y-4">
                <p>
                  The primary purpose of your Account is to facilitate corporate expenses and other corporate purchases. U-TOPIA CORP. and Issuer reserve the right to block and terminate transactions and suspend access to your Account, unless prohibited by applicable law, for transactions and activity which presents patterns that do not conform with business purposes. You may use your Account to purchase or lease goods or services (each, a "<strong>purchase</strong>") by presenting your Card or providing to participating merchants and establishments that honor the Card your Card number and additional information by any other means. We will not be liable to you (or anyone else) if any merchant or other person cannot or will not process a purchase permitted under these Card Terms. Unless prohibited by applicable law, we may from time to time limit the type, number and dollar amount of any purchase, including any cash-like transaction. Cash-like transactions include, but are not limited to:
                </p>
                <ul className="space-y-3">
                  <Bullet>purchasing travelers checks, foreign currency, money orders, wire transfers, cryptocurrency, other similar digital or virtual currency and other similar transactions;</Bullet>
                  <Bullet>purchasing lottery tickets, casino gaming chips, race track wagers, and similar offline and online betting transactions;</Bullet>
                  <Bullet>person-to-person money transfers and account-funding transactions that transfer currency; and</Bullet>
                  <Bullet>making a payment using a third-party service including bill payment transactions not made directly with the merchant or their service provider.</Bullet>
                </ul>
                <p>
                  We reserve the right to deny any purchase for any reason, such as account default, suspected fraudulent or unlawful activity, internet gambling, or any indication of increased risk related to the purchase. We may terminate or suspend your use of the Card or the Account, with or without notice to you. Cash advances and balance transfers are not available under these Card Terms.
                </p>
                <p>
                  You acknowledge and agree that you have read and understood the{" "}
                  <Link to="/prohibited-activities" className="text-primary hover:underline">Prohibited Activities List</Link>{" "}
                  and that you will not engage in any such activities when using the Services or the U-TOPIA CORP. Card.
                </p>
                <p>
                  You acknowledge and agree that you will not use the U-TOPIA CORP. Card (1) for any expense which is not a business expense incurred by you; (2) for any purpose prohibited by these Card Terms; (3) for, with, or for the benefit of any individual or entity who is blocked or sanctioned by the United States, including those identified by the United States Department of Treasury's Office of Foreign Assets Control (OFAC); or (4) for personal, family, or household use.
                </p>
                <p>
                  You will use all reasonable means to protect your U-TOPIA CORP. Cards and log-in credentials to the U-TOPIA CORP. Account from unauthorized use. You will not allow any other person or third party to use the Services or the U-TOPIA CORP. Card on your behalf, except that Authorized Users, if any, may use your Account. You will immediately notify us where you know or suspect that access to your U-TOPIA CORP. Account has been compromised or your U-TOPIA CORP. Card has been lost, stolen, or compromised in any way. You are responsible for ensuring that only Authorized Users are issued the U-TOPIA CORP. Card and that each Authorized User has been provided with a copy of, and fully complies with, these Card Terms, U-TOPIA CORP.'s User Terms, the Prohibited Use Policy and all applicable laws.
                </p>
              </div>
            </section>

            <section>
              <H2>6. Payments</H2>
              <H3>6.1 Promise to Pay</H3>
              <p>
                While you will generally repay U-TOPIA CORP. for amounts transacted with your Card, you also promise to pay Issuer or its assignees for all amounts charged to the Account not repaid to Issuer by Partner, including all purchases, interest, and charges charged to your Account. Except as otherwise described in this Agreement, you are obligated to repay all transactions made using your Card by people you have authorized to use the Card even if their use of the Card exceeds the authorization which you gave them. You agree to bear the liability for all charges, fees, penalties, Collateral requirements, and repayment obligations incurred by your Authorized Users.
              </p>

              <H3>6.2 Periodic Statements</H3>
              <p>
                You are responsible for payment in full of all Charges and Fees. Your U-TOPIA CORP. Account may furnish to you Periodic Statements identifying Charges, Fees, refunds, the amount of your Collateral, any other Card transactions, or other amounts owed or credited to your U-TOPIA CORP. Account. Periodic Statements may be made accessible to you on your U-TOPIA CORP. Account daily, monthly, or otherwise. You must notify us promptly if you believe that there are any errors on your Periodic Statement, and submit any disputes or Chargebacks in accordance with these Card Terms. Your failure to get a Periodic Statement will have no bearing on your obligations and U-TOPIA CORP. and Issuer may still liquidate your collateral per Section 3 of this agreement.
              </p>

              <H3>6.3 Repayments</H3>
              <p>
                Where applicable, you may make a repayment for a balance on one or more of your U-TOPIA CORP. Cards by any means that are permitted by U-TOPIA CORP. and as provided in your U-TOPIA CORP. Account. Any failure to pay the full amount owed when required is a breach of these Card Terms. You are responsible for all costs or expenses that we may incur in collecting amounts owed but not timely paid, including legal or collections fees and any interest at the maximum rate permitted under law. Balances in your linked wallet and the Collateral may each be used as a source of funds for repayment for any spending on your Card, and you expressly authorize the use of your linked wallet and the Collateral for repayment any time you use your card for purchases.
              </p>

              <H3>6.4 Prepayment</H3>
              <p>
                At any time and where applicable, you may pay all or any part of your outstanding Account balance, without penalty. Payment of more than the payment due in one billing cycle will not relieve you of the obligation to pay the entire payment due in subsequent billing cycles.
              </p>

              <H3>6.5 Right of Setoff</H3>
              <p>
                If you default under these Card Terms, you agree and understand that, without prior notice or demand, U-TOPIA CORP. and Issuer have the absolute right to setoff all amounts due against the Collateral, any Linked Accounts, and any other of your funds that U-TOPIA CORP. or Issuer, and their respective affiliates and third-party service providers, may access.
              </p>
            </section>

            <section>
              <H2>7. Fees</H2>
              <p className="mb-4">Subject to applicable law you agree to pay the following fees:</p>
              <ul className="space-y-3">
                <Bullet><strong className="text-foreground">A.</strong> The Fees applicable to your Account are described above. You are responsible for Fees in addition to Charges.</Bullet>
                <Bullet><strong className="text-foreground">B. Returned Payment fees</strong> become payable by you each time a payment on your Account is returned or reversed for any reason, or we must return any check, instrument, or transaction you send us because it is incomplete or faulty. We will not charge a returned payment fee if we are charging a late fee with respect to the same minimum payment due, and will never charge a returned payment fee exceeding the minimum payment due that was due immediately prior to the date on which the payment was returned to us.</Bullet>
                <Bullet><strong className="text-foreground">C. Foreign Currency Transactions.</strong> If you make a transaction using your Account in a foreign currency, the credit card association will convert any transaction in foreign currency into U.S. dollars using an exchange rate for the applicable central processing date that is (1) selected by the association from the range of rates available in wholesale currency markets, or (2) the government mandated rate. The conversion rate you get may differ from the rate on the transaction date or the posting date. A merchant or other third party may convert a transaction into U.S. dollars or another currency, using a rate they select, before sending it to the credit card association.</Bullet>
              </ul>
            </section>

            <section>
              <H2>8. Managing Your U-TOPIA CORP. Cards</H2>

              <H3>8.1 Requesting and Replacing Cards</H3>
              <p>
                We or U-TOPIA CORP. may decide not to grant requests for U-TOPIA CORP. Cards or limit the number of physical or virtual U-TOPIA CORP. Cards provided to you. You are responsible for securing U-TOPIA CORP. Cards, account numbers, and U-TOPIA CORP. Card security features. You will promptly notify us and take appropriate measures to prevent unauthorized transactions when a U-TOPIA CORP. Card is lost, stolen, breached, or needs to be replaced. Replacement Cards may have new account numbers that could require you to update the U-TOPIA CORP. Card on file for any scheduled or recurring payments. You are solely responsible for updating U-TOPIA CORP. Card information stored with merchants where account numbers have been changed.
              </p>

              <H3>8.2 Permitted and Unauthorized Use</H3>
              <p className="mb-4">
                You may only use U-TOPIA CORP. Cards for bona fide business-related Charges and transactions, and not for personal, family, or household purposes. You understand that your U-TOPIA CORP. Account is commercial in nature and that certain consumer protection laws, such as the Credit Card Consumer Accountability, Responsibility, and Disclosure Act of 2009, do not apply to your U-TOPIA CORP. Account or the U-TOPIA CORP. Cards. You agree that all Charges and other transactions in your account will be treated as business transactions made solely for business purposes.
              </p>
              <p className="mb-4">
                You agree to establish and maintain controls designed to ensure that the U-TOPIA CORP. Cards are only used by you and your permitted authorized users for bona fide business purposes and in compliance with these Card Terms, any Issuer terms, and applicable law. You are responsible for Charges and transactions made by any person given access to U-TOPIA CORP. Cards even if they are not the person associated with or named on the U-TOPIA CORP. Card.
              </p>
              <p>
                U-TOPIA CORP., Issuers, Card Networks, or other intermediary third-party service providers (including merchant acquirers) may deny or reverse Charges for any reason. Issuer is not responsible for any losses, damages, or harm caused by any Charges that are denied or reversed.
              </p>

              <H3>8.3 Lost or Stolen Cards</H3>
              <p className="mb-4">
                If your Card is lost or stolen or if you think someone may be using your Card or Account without your permission, you must notify us promptly by emailing us at{" "}
                <a href="mailto:support@u-topia.com" className="text-primary hover:underline">support@u-topia.com</a>. You will not be liable for any unauthorized use that occurs after you notify us.
              </p>
              <p>
                If Unauthorized Use of the Account occurs, you agree to cooperate with U-TOPIA CORP., Issuer, and any applicable law enforcement authorities in identifying the unauthorized user. All claims of alleged loss, theft, or Unauthorized Use of a Card or the Account are subject to investigation. You agree to be fully liable for all Purchases, Fees, and any other amounts due on your Account in connection with any claimed Unauthorized Use, except for such amounts incurred after you provide actual notice to Issuer or U-TOPIA CORP. of such Unauthorized Use. "<strong>Unauthorized Use</strong>" means any use of a Card or the Account by a person who does not have actual, implied, or apparent authority for such use, and from which you received no benefit, directly or indirectly.
              </p>
            </section>

            <section>
              <H2>9. Chargebacks</H2>
              <div className="space-y-4">
                <p>
                  You are responsible for reviewing your Periodic Statements promptly and identifying any Charges that you believe are unauthorized or that you dispute.
                </p>
                <p>
                  If you and a merchant have a dispute regarding a Charge, you should first attempt to resolve the dispute with the merchant. If the dispute is not resolved to your satisfaction or if you believe the Charge is unauthorized, you may initiate a Chargeback through your U-TOPIA CORP. Account. You must report any disputed Charge or error no more than 60 days after the disputed Charge is posted on your Periodic Statement. We may require additional details on the transaction and our review of your disputed Charge will be conditioned on you providing all of the information we may require.
                </p>
                <p>
                  You understand that the U-TOPIA CORP. Card is subject to Card Network rules regarding chargebacks. Charges relating to disputed Charges and Chargebacks that are pending resolution may still be due and owing as of the date that payment is due. Chargebacks resolved in your favor will be credited to your U-TOPIA CORP. Account on either the current or a future Periodic Statement. We may impose Fees, reduce your spending limits, or suspend access to your U-TOPIA CORP. Account or the Services if you fail to pay Charges relating to Chargebacks that are pending resolution on the payment date.
                </p>
              </div>
            </section>

            <section>
              <H2>10. Termination</H2>
              <p>
                Subject to applicable law, we may suspend, revoke or cancel your Account privileges, your right to use the Card or deny any transaction, in our sole discretion at any time, with or without cause and with or without giving you notice. Any termination of credit privileges, whether initiated by us or by you, will not affect any of our rights or your obligations under these Card Terms, including your obligation to repay any amounts you owe us according to the terms of these Card Terms. On our demand or upon termination of credit privileges, you agree to surrender to us or destroy the Card.
              </p>
            </section>

            <section>
              <H2>11. Change of Terms</H2>
              <p>
                Subject to applicable law, we may at any time change, add to or delete terms and conditions of these Card Terms, including interest rates and this Change of Terms provision. Such changes may be based on our anti-fraud policies and procedures, your level of compliance with these Card Terms, prevailing economic conditions and/or any other factors. We will give you notice of any change, addition or deletion as required by applicable law. As of the effective date, the changed terms, at our option, will apply to new purchases and the outstanding balances of your Account, to the extent permitted by applicable law.
              </p>
            </section>

            <section>
              <H2>12. Default and Remedies</H2>
              <p className="mb-4">We may consider you in default of these Card Terms if:</p>
              <ul className="space-y-3 mb-4">
                <Bullet>You do not make any payment when it is due;</Bullet>
                <Bullet>Any payment you make is rejected, not paid or cannot be processed;</Bullet>
                <Bullet>You exceed a credit limit;</Bullet>
                <Bullet>A bankruptcy or other insolvency proceeding is filed by or against you;</Bullet>
                <Bullet>We determine that you made a false, incomplete or misleading statement on any of your Account documentation, or you otherwise tried to defraud us;</Bullet>
                <Bullet>We reasonably believe that you are or may become unable to pay all of your financial obligations; or</Bullet>
                <Bullet>You do not comply with any term of these Card Terms or any other agreement with us.</Bullet>
              </ul>
              <p>
                In the event of your default, we may, subject to applicable law: (a) declare all or any portion of your outstanding Account balance to be immediately due and payable; (b) instead allow you to repay your Account balance by paying the minimum payment due each billing cycle, without waiving any rights under subsection (a); and/or (c) commence a collection action against you and charge you for any court costs and/or any reasonable attorneys' fees and costs we are charged in connection with such action. After a default, interest charges will continue to accrue until your total Account balance, including accrued interest charges, is paid in full, subject to applicable law.
              </p>
            </section>

            <section>
              <H2>13. Delay in Enforcement</H2>
              <p>
                We may at any time and in our sole discretion delay or waive enforcing any of our rights or remedies under these Card Terms or under applicable law without losing any of those or any other rights or remedies. Even if we do not enforce our rights or remedies at any one time, we may enforce them at a later date. For example, we may accept late payments without losing any of our rights under these Card Terms.
              </p>
            </section>

            <section>
              <H2>14. Communications and Call Recording</H2>
              <div className="space-y-4">
                <p>
                  You authorize U-TOPIA CORP., Issuer and their partners (each of Issuer's affiliates, agents, assigns, and service providers (collectively, the "<strong>Messaging Parties</strong>")) to use automatic telephone dialing systems, artificial or prerecorded voice message systems, text messaging systems and automated email systems, or any system capable of storing and dialing telephone numbers to deliver messages relating to these Card Terms, your Account, or your relationship with the Messaging Parties more generally (including messages about upcoming payment due dates, missed payments and returned payments) to any telephone number(s) you provide to the Messaging Parties. You also authorize the Messaging Parties to deliver messages to you via mail or email at any addresses you supply to them or that they obtain through any legal means.
                </p>
                <p>
                  By accepting these Card Terms or using your Card, you acknowledge that you have received, reviewed, and agree to be bound by the Issuer's{" "}
                  <Link to="/esign" className="text-primary hover:underline">E-Sign & Electronic Communications Notice</Link>{" "}
                  (the "<strong>E-Sign Notice</strong>"), which is incorporated herein by reference. You consent to receive all disclosures, notices, agreements, and other communications from Issuer and the Messaging Parties in electronic form, in accordance with the E-Sign Notice.
                </p>
                <p>
                  This authorization is part of our bargain concerning these Card Terms, and we do not intend it to be revocable. However, to the extent you have the right to revoke your consent to communications by autodialed calls and text messages to your mobile number under applicable law, you may exercise this right by contacting the applicable Messaging Party directly or by sending a request by email to{" "}
                  <a href="mailto:support@u-topia.com" className="text-primary hover:underline">support@u-topia.com</a>{" "}
                  with the subject line "END COMMUNICATIONS." You may opt-out of receiving most of these messages at any time by responding "STOP" to any text message.
                </p>
              </div>
            </section>

            <section>
              <H2>15. Governing Law</H2>
              <p>
                These Card Terms will be interpreted in accordance with the laws of Puerto Rico without regard to conflict-of-law provisions. Judicial proceedings (other than small claims actions) that are excluded from the Arbitration section below must be brought in state or federal court in Puerto Rico, unless we both agree in writing to some other location, and you hereby consent to the venue and personal jurisdiction of such court.
              </p>
            </section>

            <section>
              <H2>16. Dispute Resolution & Arbitration</H2>
              <p className="mb-4 text-foreground font-medium uppercase text-sm tracking-wide">
                Please read this "Dispute Resolution and Arbitration" provision very carefully. It limits your rights in the event of a dispute between you and Issuer. U-TOPIA CORP. is the technology provider for the Card but is not the Issuer, creditor or lender. U-TOPIA CORP. is not a party to these Card Terms and has no liability for the Issuer's obligations under it. However, U-TOPIA CORP. is an express third-party beneficiary of these Card Terms with respect to any provisions that allocate risk, disclaim liability, limit remedies or require disputes to be resolved through arbitration.
              </p>

              <H3>Binding Arbitration</H3>
              <p className="mb-4">
                (a) You and Issuer agree that any and all past, present and future Disputes shall be determined by arbitration, unless your Dispute is subject to an exception to this agreement to arbitrate. You and Issuer further agree that any arbitration pursuant to this section shall not proceed as a class, group or representative action. The award of the arbitrator may be entered in any court having jurisdiction. "<strong>Dispute</strong>" means any dispute, claim, or controversy between you and Issuer that arises out of or relates to (i) these Card Terms, (ii) the breach, termination, enforcement, interpretation or validity hereof, or (iii) any Services (including the U-TOPIA CORP. Card).
              </p>
              <p>
                (b) This agreement to arbitrate shall be construed under and be subject to the Federal Arbitration Act, notwithstanding any other choice of law set out in these Card Terms.
              </p>

              <H3>Arbitration Procedure</H3>
              <p className="mb-4">
                (a) Before filing a claim against Issuer, you agree to try to resolve the Dispute informally by providing written notice to Issuer of the actual or potential Dispute. Similarly, Issuer will provide written notice to you of any actual or potential Dispute. The party that provides the notice (the "<strong>Notifying Party</strong>") will include in that notice (a "<strong>Notice of Dispute</strong>") your name, contact information, and sufficient details regarding such Dispute to enable the other party (the "<strong>Notified Party</strong>") to evaluate the concerns raised. If the Notified Party responds within ten (10) business days that it is ready and willing to engage in good faith discussions, then each party shall promptly participate in such discussions in good faith.
              </p>
              <p className="mb-4">
                (b) If a Dispute is not resolved within thirty (30) days after the Notice of Dispute is sent (or if the Notified Party fails to respond within ten business days), the Notifying Party may initiate an arbitration proceeding. If either party purports to initiate arbitration without first providing a Notice of Dispute, the arbitrator will promptly dismiss the claim with prejudice and will award the other party all of its costs and expenses (including reasonable attorneys' fees).
              </p>
              <p>
                (c) You and Issuer each agree to resolve any Disputes that are not resolved informally through final and binding arbitration. The American Arbitration Association ("<strong>AAA</strong>") will administer the arbitration under its Commercial Arbitration Rules. The Rules are available at www.adr.org or by calling the AAA at 1-800-778-7879.
              </p>

              <H3>No Jury Trial</H3>
              <p>
                If for any reason a claim or dispute proceeds in court rather than through arbitration, each party knowingly and irrevocably waives any right to trial by jury in any action, proceeding or counterclaim arising out of or relating to these Card Terms.
              </p>

              <H3>Venue and Jurisdiction for Judicial Proceedings</H3>
              <p>
                Except as otherwise required by applicable law or provided in these Card Terms, in the event that the agreement to arbitrate is found not to apply to you or your Dispute, you and Issuer agree that any judicial proceeding may only be brought in a court of competent jurisdiction in Puerto Rico. Both you and Issuer irrevocably consent to venue and personal jurisdiction in Puerto Rico.
              </p>

              <H3>Confidentiality</H3>
              <p>
                The existence of all information regarding any Dispute will be held in strict confidence by the parties and will not be disclosed except as reasonably necessary in connection with the conduct of the arbitration or the confirmation or enforcement of any arbitral award.
              </p>
            </section>

            <section>
              <H2>17. Survival</H2>
              <p>
                The following provisions shall survive any termination or expiration of these Card Terms and shall remain in full force and effect: (a) all of your payment obligations and our right to collect all amounts owed; (b) all security interest, collateral, and setoff provisions; (c) any indemnification obligations; (d) the limitation of liability provisions; (e) the disclaimer of warranties provisions; (f) the dispute resolution and arbitration provisions, including the class waiver; (g) our communications and contact rights; (h) our assignment rights; (i) any waiver provisions; (j) all representations and warranties made by you; (k) any accrued rights, remedies, or causes of action in favor of either party; and (l) any other provision that by its nature or express terms is intended to survive.
              </p>
            </section>

            <section>
              <H2>18. Severability</H2>
              <p>
                If any provision of these Card Terms is found to be invalid, illegal, or unenforceable, such provision shall be modified to the minimum extent necessary to make it valid and enforceable while preserving its intent, or if such modification is not possible, such provision shall be severed from these Card Terms. The remaining provisions shall remain in full force and effect. Notwithstanding the foregoing, in the event that a court finds the prohibition of Collective Arbitration in Section 16 to be invalid or unenforceable, then all provisions in Section 16 shall be deemed void, except for any portion related to the resolution of Disputes through litigation in court.
              </p>
            </section>

            <section>
              <H2>19. Assignment</H2>
              <p>
                These Card Terms will be binding on, and benefit, any of your and our successors and assigns. You may not transfer your Account or your Agreement to someone else without our written permission. We may transfer your Account, these Card Terms, or any of our rights or obligations therein, to another company or person at any time, without your permission and without prior notice to you.
              </p>
            </section>

            <section>
              <H2>20. Entire Agreement</H2>
              <p>
                These Card Terms constitute the entire agreement between you and Issuer regarding the subject matter hereof and supersede all prior or contemporaneous agreements, understandings, representations, and communications whether written or oral, regarding such subject matter.
              </p>
            </section>

            <section>
              <H2>21. Force Majeure</H2>
              <p>
                We shall not be liable for any delay or failure to perform any obligation under these Card Terms to the extent that such delay or failure is caused by circumstances beyond our reasonable control, including but not limited to acts of God, natural disasters, war, terrorism, civil unrest, labor disputes, government actions, epidemics or pandemics, internet or telecommunications failures, or failures of third-party service providers.
              </p>
            </section>

            <section>
              <H2>22. Disclaimer of Warranties</H2>
              <p className="uppercase text-sm tracking-wide">
                To the maximum extent permitted by applicable law, we expressly disclaim all warranties, including but not limited to implied warranties of merchantability, fitness for a particular purpose, title, non-infringement, accuracy, reliability, and any warranties arising from course of dealing or usage of trade.
              </p>
            </section>

            <section>
              <H2>23. Limitation of Liability</H2>
              <p className="uppercase text-sm tracking-wide mb-4">
                To the maximum extent permitted by applicable law, in no event shall Issuer, its affiliates, or its officers, directors, employees, agents, service providers, or licensors be liable to you for any indirect, incidental, consequential, special, exemplary, punitive, or other similar damages, including but not limited to lost profits, lost revenue, lost data, loss of goodwill, business interruption, or loss of business opportunity, whether arising in contract, tort, negligence, strict liability, or otherwise.
              </p>
              <p className="uppercase text-sm tracking-wide">
                In no event shall Issuer's total liability to you for all claims arising out of or relating to this agreement or your account exceed the lesser of (a) your actual direct damages proven or (b) the total amounts paid by you in the twelve (12) months immediately preceding the event giving rise to the claim.
              </p>
            </section>

            <section>
              <H2>24. Indemnity</H2>
              <p>
                You will indemnify and defend Issuer, its affiliates, and its partners, directors, officers, employees, agents, trustees, administrators, managers, advisors, and representatives (each an "<strong>Indemnitee</strong>") against, and hold each Indemnitee harmless from, any and all claims, litigation, investigations, proceedings, losses, damages, fines, penalties, liabilities, settlements, costs, fees, and expenses incurred by any Indemnitee arising out of, in connection with, related to, or as a result of your (i) breach of any of the representations, warranties, or covenants contained in these Card Terms; or (ii) gross negligence, fraud, or violation of any applicable law or rights of any third-party. Issuer may defend any claim subject to indemnification hereunder, using counsel of its choice, and you will pay or promptly reimburse Issuer for the reasonable fees of such counsel and all related costs and reasonable expenses.
              </p>
            </section>

            <section>
              <H2>25. Notification of Corporate Changes</H2>
              <p className="mb-4">You must notify U-TOPIA CORP. immediately upon any change to:</p>
              <ul className="space-y-3">
                <Bullet>Your company's ownership or beneficial owners, including any sale, merger or consolidation into another company.</Bullet>
                <Bullet>Any change to the company's address, phone number, email, or other contact information.</Bullet>
                <Bullet>If you become insolvent or if bankruptcy or other insolvency proceedings are commenced by or against you; or</Bullet>
                <Bullet>If a receiver or trustee for the benefit of creditors is appointed for the company.</Bullet>
              </ul>
            </section>

            <section>
              <H2>26. Obligation to Provide Financial and Other Company Information</H2>
              <p>
                From time to time and upon the reasonable request of U-TOPIA CORP. or Issuer, you agree to provide to the requesting party financial and other corporate information in form and detail satisfactory to the requesting party.
              </p>
            </section>

            <section>
              <H2>27. Additional Services</H2>
              <p>
                We may, from time to time, make additional services available to you directly or through affiliated or non-affiliated third parties. Without limitation, such services may include providing you with virtual accounts in order to enable you to use your Account or otherwise engage in various financial transactions that we do not directly provide. Each such service is subject to its own terms and conditions, and we shall not be responsible to you for any aspect of those services. We may permit you to charge any applicable fees for such services to your Account. You acknowledge and agree that we may receive compensation or otherwise benefit as a result of making such services available to you.
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

export default TermsUS;
