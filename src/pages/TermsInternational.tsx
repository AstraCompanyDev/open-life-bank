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
          <h1 className="text-3xl md:text-4xl font-semibold mb-3">U-TOPIA Spend Card Terms</h1>
          <p className="text-muted-foreground text-lg mb-2">
            Region: International · Program Type: Consumer · Flow of Funds: Rain-Managed
          </p>
          <p className="text-muted-foreground mb-16">Effective as of: May 20, 2026</p>

          <div className="space-y-12 text-base leading-relaxed text-muted-foreground">
            <section>
              <p>
                These U-TOPIA Spend Card Terms (the "<strong>Card Terms</strong>") are a binding agreement between you ("<strong>you</strong>" or "<strong>your</strong>") and the Issuer ("<strong>we</strong>", "<strong>us</strong>", or "<strong>our</strong>") that governs your use of the U-TOPIA Spend Cards, including the process for obtaining and managing U-TOPIA Spend Cards, access to which is provided to you by U-TOPIA CORP. ("<strong>U-TOPIA</strong>").
              </p>
            </section>

            <Section title="Important Disclosures">
              <p className="uppercase text-sm tracking-wide">
                Please review the arbitration clause and notices set forth below in Section 16. By using the Card, you are agreeing to the arbitration clause and notices set forth in that section. The arbitration clause will have a substantial effect on your rights in the event of a dispute, including your right to bring or participate in a class proceeding.
              </p>
              <p>
                Rates, fees, and other important information about your U-TOPIA Spend Card ("<strong>U-TOPIA Card</strong>" or "<strong>Card</strong>") are set forth in these Important Disclosures.
              </p>
              <p>Effective as of May 20, 2026</p>

              <SubHeading>Interest Rates and Interest Charges [0%]</SubHeading>
              <p><strong className="text-foreground">Annual Percentage Rate (APR) for Purchases [0%]</strong></p>
              <p>
                Your U-TOPIA Spend Card is currently Zero [0]% interest on all purchases. Issuer and U-TOPIA reserve the right to implement interest in the future, for new purchases. U-TOPIA will disclose any changes to this agreement prior to the introduction of interest and other charges associated with your U-TOPIA Card.
              </p>

              <SubHeading>Fees</SubHeading>
              <p><strong className="text-foreground">Transaction Fee — Foreign Purchases</strong></p>
              <ul className="space-y-3">
                <Bullet>Foreign Exchange Fee (non USD): up to 1.5%</Bullet>
                <Bullet>Cross Border Fee: up to 1.5%</Bullet>
              </ul>
              <p><strong className="text-foreground">Penalty Fees</strong></p>
              <ul className="space-y-3">
                <Bullet>Late payment: Up to $40</Bullet>
                <Bullet>Returned payment: Up to $35</Bullet>
              </ul>
              <p className="uppercase text-sm tracking-wide">
                When you apply for a Card account, activate a Card, or otherwise participate in the program in any way, you represent that you have read, understand, and agree to these Card Terms.
              </p>
            </Section>

            <Section title="Background">
              <p>
                The U-TOPIA Card is provided to you on behalf of U-TOPIA in connection with your status as a U-TOPIA customer and pursuant to your separate User Agreement between you and U-TOPIA (the "<strong>User Agreement</strong>"). The Issuer is not a party to the User Agreement and disclaims any liability for the performance of services covered therein.
              </p>
              <p>
                U-TOPIA has opened a U-TOPIA Account for purposes of facilitating transactions you make using a Card based on a limit established by U-TOPIA pursuant to the User Agreement. You understand that you have access to the Services and U-TOPIA Card only to the extent authorized by U-TOPIA. You acknowledge and agree that U-TOPIA will satisfy obligations created through your use of the U-TOPIA Card and you will repay U-TOPIA based on the terms of your User Agreement, subject to the terms below. In the event of a conflict between these Card Terms and your User Agreement, these Card Terms will control.
              </p>
              <p>
                Details on U-TOPIA's collection, use, and handling of your personal data are described in{" "}
                <Link to="/privacy-policy" className="text-primary hover:underline">our Privacy Policy</Link>.
                Please review it carefully and contact U-TOPIA if you have any questions. By opening, using, or maintaining a Card, you consent to and direct Issuer to share information relating to transactions, including receipt information or other personal data, in order to deliver the Services.
              </p>
            </Section>

            <Section title="Issuer">
              <p>
                The card program is issued by the Issuer under license from Visa. The information about the cost of the Card described in the above table is accurate as of May 20, 2026. This information may change after that date. To find out what may have changed, call or write the servicer at{" "}
                <a href="mailto:support@u-topia.com" className="text-primary hover:underline">support@u-topia.com</a>.
              </p>
              <p>
                Issuer reserves the right to amend these Card Terms or impose additional obligations or restrictions on you at any time with or without notice to you. By continuing to use the Services, you agree to be bound by such amendments or additional obligations or restrictions. The date on the top of this page shows when the Card Terms were last updated. Capitalized terms that are not defined here have the definitions provided in the User Agreement.
              </p>
              <p>
                U-TOPIA provides technology services in connection with the U-TOPIA Card, and is not a bank, credit union, or money services business and does not itself extend credit, set interest rates, determine repayment terms or hold Collateral. Nothing in these Card Terms shall be construed as creating a lender-borrower relationship between you and U-TOPIA.
              </p>
              <p>You acknowledge and agree that U-TOPIA:</p>
              <ul className="space-y-3">
                <Bullet>(i) is an express third-party beneficiary of these Card Terms, with the limited right to enforce obligations that directly relate to its role;</Bullet>
                <Bullet>(ii) is not responsible for any decisions by the Issuer to approve, decline, suspend or close your Card account. U-TOPIA may, at the request of the Issuer, the payment network or a regulatory authority, suspend or restrict your access to the U-TOPIA platform or certain features, to protect against fraud, comply with applicable laws or manage program risk;</Bullet>
                <Bullet>(iii) does not control and is not responsible for the operation, security, or performance of the smart contracts used to hold your Collateral; and</Bullet>
                <Bullet>(iv) is not responsible for merchant acceptance of your U-TOPIA Card or for resolving disputes about goods or services purchased with the U-TOPIA Card.</Bullet>
              </ul>
            </Section>

            <Section title="Defined Terms">
              <ul className="space-y-3">
                <Bullet><strong className="text-foreground">"Card Networks"</strong> means the payment card networks including Visa or Mastercard.</Bullet>
                <Bullet><strong className="text-foreground">"Charge"</strong> means a payment for goods or services made to a merchant that accepts payments on the applicable Card Network.</Bullet>
                <Bullet><strong className="text-foreground">"Chargeback"</strong> means a dispute that you initiate against a merchant for an unresolved dispute with the merchant or where a Charge is unauthorized.</Bullet>
                <Bullet><strong className="text-foreground">"Fee"</strong> means charges we impose on you for use of Services or your use of a U-TOPIA Card.</Bullet>
                <Bullet><strong className="text-foreground">"Issuer"</strong> refers to Third National, including its affiliates, successors, and assigns.</Bullet>
                <Bullet><strong className="text-foreground">"Periodic Statement"</strong> means the periodic statements that reflect activity for all Cards issued to you identifying charges, fees, refunds, or other amounts owed or credited to your U-TOPIA Account during the time covered by that statement.</Bullet>
                <Bullet><strong className="text-foreground">"Supported Blockchains"</strong> means the Ethereum Blockchain, Polygon Blockchain, Optimism Blockchain, Arbitrum Blockchain and other blockchain networks which may be added at the sole discretion of Issuer. We may update this list of Supported Blockchains at any time and at our sole discretion.</Bullet>
              </ul>
            </Section>

            <Section title="1. Accepting this Agreement & Eligibility">
              <p>
                These Card Terms become effective and legally binding when you activate or create your Card by following the instructions on the U-TOPIA platform. You and we agree to comply with, and be bound by, this entire agreement. You should retain and carefully review these Card Terms. By creating a Card, you agree to the Arbitration Clause below as it pertains to these Card Terms, even if you do not use the Account or the Card.
              </p>
              <p>By using a Card you represent and warrant in your individual capacity that:</p>
              <ul className="space-y-3">
                <Bullet>You are not a person who is blocked or sanctioned by the United States Government, including those identified by the United States Office of Foreign Asset Controls (OFAC).</Bullet>
                <Bullet>You will use the Services exclusively for purposes permitted by these Card Terms.</Bullet>
                <Bullet>All information you provide to us, either directly or through U-TOPIA, is and will be true, correct, and complete.</Bullet>
                <Bullet>You will use the U-TOPIA Card for personal, family, or household use.</Bullet>
                <Bullet>You will only use the U-TOPIA Card in compliance with applicable law.</Bullet>
                <Bullet>You attest that you are not a United States citizen, and that you are signing up for a card that is intended for those outside of the United States.</Bullet>
                <Bullet>You attest that you were not solicited for this Card.</Bullet>
              </ul>
            </Section>

            <Section title="2. Issuer Terms">
              <p>
                The Issuer is identified on the back of the U-TOPIA Card issued to you and is responsible for funding your payments for goods and services you purchase at a merchant through your U-TOPIA Card and based on information provided by Partner. Please note that the Issuer may require you to accept additional terms in addition to the agreements you have with U-TOPIA, and your use of the U-TOPIA Cards will then also be subject to such additional terms.
              </p>
            </Section>

            <Section title="3. Collateral">
              <p>
                This Account is a secured Account. Either your primary Linked Wallet or any Additional Wallets may provide the collateral that will secure the Charges made by you on any Card (the "<strong>Collateral</strong>"). The Collateral must be held in a wallet on a Supported Blockchain. By entering into these Card Terms, you are furnishing and granting us a security interest in the Collateral, as well as any additions to, substitutions or renewals of the Collateral. No portion of the Collateral may be used by you to secure other loans.
              </p>
              <p>
                A "<strong>Liquidation Event</strong>" will occur (a) if you have an outstanding payment obligation to U-TOPIA or the Issuer, as applicable, and such payment obligation has not been paid in full by you within one (1) calendar day; or (b) the Market Value of your Collateral drops below the value of the existing charges on your U-TOPIA Card(s) and you do not add additional collateral or reduce the value of the existing charges to less than the Market Value of the Collateral by making a payment. U-TOPIA and Issuer may allow for an additional grace period at their discretion.
              </p>
              <p>
                "<strong>Market Value</strong>" of the Collateral will be determined by U-TOPIA and/or Issuer using the net redemption value provided by a centralized stablecoin issuer and/or the real time price posted on a reputable and recognized exchange or price aggregator, or by reference to a price oracle, subject to U-TOPIA or Issuer's discretion. You agree to pay all transaction costs or "gas" fees relating to any Liquidation transaction and that all such costs or fees will be paid from your Collateral and will not be credited to your Account. You agree that the market value of your collateral is determined solely by Issuer through the above methods. You further agree that the Market Value is determined at the time of a Liquidation Event and any change in or fluctuation in value of the Collateral before or after a Liquidation Event will have no bearing on obligations owed to U-TOPIA and/or Issuer.
              </p>
              <p>
                You, through one or more of your Linked Wallet or Additional Wallets, must ensure that the Collateral has a Market Value in United States Dollars ("<strong>USD</strong>") that is greater than or equal to the value of all unpaid Charges to all of your U-TOPIA Cards. For example, if you provide Digital Assets with a Market Value equal to $100 of value in USD, and that Market Value does not change, your spending limit will be equal to $100 USD across all your U-TOPIA Cards. Once $100 USD has been charged to your U-TOPIA Cards, you will be required to either make a payment or to provide additional Collateral in order to make any additional Charges. If, at any time, the Market Value of your Collateral becomes less than the value of all unpaid Charges, we may require you to add to the Collateral or you may be subject to a Liquidation Event, at our discretion. If the Market Value of your Collateral is subject to a Liquidation Event when the Market Value is below your existing charges, you still owe U-TOPIA and Issuer any difference between the USD value of the charges, and the USD value of the collateral at the time of the Liquidation Event.
              </p>
              <p>Your withdrawal of any Collateral will not terminate any outstanding payment obligations you may have on your U-TOPIA Cards.</p>
              <p>
                U-TOPIA and Issuer will not, in any circumstance, be holding custody of your Collateral. U-TOPIA is not a custodian or owner of your Collateral. You authorize and consent to U-TOPIA or Issuer liquidating the Collateral upon a Liquidation Event through a third party or by other means in order to satisfy payment obligations owed by you to U-TOPIA, the Issuer or other third party, as applicable.
              </p>
              <p>
                You acknowledge and agree that the Supported Blockchains, including any Supported Blockchains that consist of or include tokenized assets, are issued and managed by third parties, and are subject to their own terms, conditions, and risks. We and U-TOPIA make no representations or warranties regarding any Supported Blockchain, or any underlying Collateral related to such Supported Blockchain, including but not limited to their value, liquidity, stability, yield, rewards, or any other attributes. We and U-TOPIA expressly disclaim all responsibility and liability for any losses, fluctuations, or other outcomes arising from the ownership, use, performance, or characteristics of any Supported Blockchain and/or Collateral. You are responsible for evaluating and accepting the risks associated with any Supported Blockchain you use to provide Collateral.
              </p>
              <p>
                You waive any right to require us to: (a) proceed against any other person; (b) proceed against or exhaust any security held under these Card Terms; or (c) pursue any other remedy available to us under applicable law. We may, without prior notice, and from time to time: (a) renew, compromise, extend, accelerate or otherwise change the terms relating to the Account; (b) take and hold security (other than the Collateral) for payment of the Account and enforce, exchange and release the security in any manner that we determine is proper; (c) release or substitute any person, guarantor, or endorser of the Account; and (d) increase or lower the Credit Limit on your Account, and no such action shall change the fact that the Collateral shall at all times serve as security for the Account.
              </p>
            </Section>

            <Section title="4. Spending Limits">
              <p>
                Your spending limit is generally set by U-TOPIA pursuant to the terms of the U-TOPIA Terms and the amount of Collateral. Issuer may additionally set spending limits on each U-TOPIA Card or an aggregate spending limit across all U-TOPIA Cards, at its sole discretion. U-TOPIA Account Spending limits are dynamic and may be modified at any time with or without notice to you, including temporary increases or decreases or reducing spending limits to $0. Any authorized Charge or fee on a U-TOPIA Card may reduce your spending limit by a corresponding amount.
              </p>
              <p>
                When you use your U-TOPIA Card to initiate a transaction at certain merchants where the amount of the final transaction is unknown at the time of authorization, Issuer may assess a value to such a Charge for an amount higher or lower than the final Charges. This initial "hold" Charge will reduce your spending limit until the final Charge is determined.
              </p>
            </Section>

            <Section title="5. Purchases & Restrictions">
              <p>
                U-TOPIA and Issuer reserve the right to block and terminate transactions and suspend access to your Account, unless prohibited by applicable law, at any time and for any reason, including if we believe that you are using the Card or your Account for non-consumer purposes. You may use your Account to purchase or lease goods or services (each, a "<strong>Purchase</strong>") by presenting your Card or providing to participating merchants and establishments that honor the Card your Card number and additional information by any other means (for example, over the phone, online or through a mobile app). We will not be liable to you (or anyone else) if any merchant or other person cannot or will not process a purchase permitted under these Card Terms. Unless prohibited by applicable law, we may from time to time limit the type, number and dollar amount of any purchase, including any cash-like transaction, even if you have sufficient available credit to complete the purchase. Cash-like transactions include, but are not limited to, the following transactions to the extent they are accepted:
              </p>
              <ul className="space-y-3">
                <Bullet>purchasing travelers checks, foreign currency, money orders, wire transfers, cryptocurrency, other similar digital or virtual currency and other similar transactions;</Bullet>
                <Bullet>purchasing lottery tickets, casino gaming chips, race track wagers, and similar offline and online betting transactions;</Bullet>
                <Bullet>person-to-person money transfers and account-funding transactions that transfer currency; and</Bullet>
                <Bullet>making a payment using a third-party service including bill payment transactions not made directly with the merchant or their service provider.</Bullet>
              </ul>
              <p>
                We reserve the right to deny any purchase for any reason, such as account default, suspected fraudulent or unlawful activity, internet gambling, or any indication of increased risk related to the purchase. We may terminate or suspend your use of the Card or the Account, with or without notice to you before or at the time we take such action. Cash advances and balance transfers are not available under these Card Terms.
              </p>
              <p>
                You acknowledge and agree that you have read and understood the{" "}
                <Link to="/prohibited-activities" className="text-primary hover:underline">Prohibited Activities Policy</Link>{" "}
                and that you will not engage in any such activities when using the Services or the U-TOPIA Card.
              </p>
              <p>
                You acknowledge and agree that you will not use the U-TOPIA Card (1) for any expense which is not an expense incurred by you; (2) for any purpose prohibited by these Card Terms; or (3) for, with, or for the benefit of any individual or entity who is blocked or sanctioned by the United States, including those identified by the United States Department of Treasury's Office of Foreign Assets Control (OFAC).
              </p>
              <p>
                You will use all reasonable means to protect your U-TOPIA Cards and log-in credentials to the U-TOPIA Account from unauthorized use. You will not allow any other person or third party to use the Services or the U-TOPIA Card on your behalf. You will immediately notify us where you know or suspect that access to your U-TOPIA Account has been compromised or your U-TOPIA Card has been lost, stolen, or compromised in any way.
              </p>
            </Section>

            <Section title="6. Payments">
              <SubHeading>6.1 Promise to Pay</SubHeading>
              <p>
                While you will generally repay U-TOPIA for amounts transacted with your Card, you also promise to pay Issuer or its assignees for all amounts charged to the Account not repaid to Issuer by Partner, including all purchases, interest, and charges charged to your Account. Except as prohibited by applicable law, you are obligated to repay U-TOPIA or its assignees, for all transactions made using your Card by people you have authorized to use the Card even if their use of the Card exceeds the authorization which you gave them.
              </p>
              <SubHeading>6.2 Periodic Statements</SubHeading>
              <p>
                You are responsible for payment in full of all Charges and Fees. Your U-TOPIA Account may furnish to you Periodic Statements identifying Charges, Fees, refunds, the amount of your Collateral, any other Card transactions, or other amounts owed or credited to your U-TOPIA Account. Periodic Statements may be made accessible to you on your U-TOPIA Account daily, monthly, or as otherwise prescribed by Issuer. You must notify us promptly if you believe that there are any errors on your Periodic Statement, and submit any disputes or Chargebacks in accordance with these Card Terms. We are not obligated to send you a monthly statement if we deem your Account to be uncollectible or applicable law does not require us to send you a monthly statement for other reasons. Your failure to get a statement will have no bearing on your obligations and U-TOPIA and Issuer may still liquidate your collateral per Section 3 of this agreement.
              </p>
              <SubHeading>6.3 Repayment</SubHeading>
              <p>
                Where applicable, you may make a repayment for a balance on one or more of your U-TOPIA Cards by any means that are permitted by U-TOPIA and as provided in your U-TOPIA Account.
              </p>
              <p>
                Any failure to pay the full amount owed to U-TOPIA or the Issuer, as applicable, when required is a breach of these Card Terms. You are responsible for all costs or expenses that we may incur in collecting amounts owed but not timely paid, including legal or collections fees and any interest at the maximum rate permitted under law.
              </p>
              <SubHeading>6.4 Prepayment</SubHeading>
              <p>
                At any time and where applicable, you may pay all or any part of your outstanding Account balance, without penalty. Payment of more than the payment due in one billing cycle will not relieve you of the obligation to pay the entire payment due in subsequent billing cycles.
              </p>
            </Section>

            <Section title="7. Fees">
              <p>
                A. The Fees applicable to your Account are described above. You are responsible for Fees in addition to Charges.
              </p>
              <p>
                B. Returned Payment fees become payable by you each time a payment on your Account is returned or reversed for any reason or we must return any check, instrument, or transaction you send us because it is incomplete or faulty; we will charge you a returned payment fee of [$00.00]. However, we will not charge a returned payment fee if we are charging a late fee with respect to the same minimum payment due and will never charge a returned payment fee exceeding the minimum payment due that was due immediately prior to the date on which the payment was returned to us.
              </p>
              <p>
                C. Foreign Currency Transactions. If you make a transaction using your Account in a foreign currency (including, for example, online purchases from a merchant located outside of the U.S.), the credit card association will convert any transaction in foreign currency into U.S. dollars using an exchange rate for the applicable central processing date that is (1) selected by the association from the range of rates available in wholesale currency markets, which rate may vary from the rate the association receives, or (2) the government mandated rate. The conversion rate you get may differ from the rate on the transaction date or the posting date, and from the rate that the credit card association gets. A merchant or other third party may convert a transaction into U.S. dollars or another currency, using a rate they select, before sending it to the credit card association.
              </p>
              <p>
                D. Additional Services. We may, from time to time, make additional services available to you directly or through affiliated or non-affiliated third parties. Without limitation, such services may include providing you with virtual accounts in order to enable you to use your Account or otherwise engage in various financial transactions that we do not directly provide. Each such service is subject to its own terms and conditions, and we shall not be responsible to you for any aspect of those services. We may permit you to charge any applicable fees for such services to your Account. You acknowledge and agree that we may receive compensation or otherwise benefit as a result of making such services available to you.
              </p>
            </Section>

            <Section title="8. Managing Your U-TOPIA Cards">
              <SubHeading>8.1 Requesting and Replacing Cards</SubHeading>
              <p>
                We or U-TOPIA may decide not to grant requests for U-TOPIA Cards or limit the number of physical or virtual U-TOPIA Cards provided to you.
              </p>
              <p>
                You are responsible for securing U-TOPIA Cards, account numbers, and U-TOPIA Card security features. You will promptly notify us and take appropriate measures to prevent unauthorized transactions when a U-TOPIA Card is lost, stolen, breached, or needs to be replaced. In such cases, you may request the issuance of replacement U-TOPIA Cards through your U-TOPIA Account. Replacement Cards may have new account numbers that could require you to update the U-TOPIA Card on file for any scheduled or recurring payments. You are solely responsible for updating U-TOPIA Card information stored with merchants where account numbers have been changed.
              </p>
              <SubHeading>8.2 Permitted and Unauthorized Use</SubHeading>
              <p>
                You agree to establish and maintain controls designed to ensure that the U-TOPIA Cards are only used by you and your permitted authorized users for bona fide purposes and in compliance with these Card Terms, any Issuer terms, and applicable law. You are responsible for Charges and transactions made by any person given access to U-TOPIA Cards even if they are not the person associated with or named on the U-TOPIA Card.
              </p>
              <p>
                U-TOPIA, Issuer, Card Networks, or other intermediary third-party service providers (including merchant acquirers) may deny or reverse Charges for any reason. Issuer is not responsible for any losses, damages, or harm caused by any Charges that are denied or reversed.
              </p>
              <SubHeading>8.3 Lost or Stolen Cards</SubHeading>
              <p>
                If your Card is lost or stolen or if you think someone may be using your Card or Account without your permission, you must notify us promptly by emailing us at{" "}
                <a href="mailto:support@u-topia.com" className="text-primary hover:underline">support@u-topia.com</a>.
                You will not be liable for any unauthorized use that occurs after you notify us. You may, however, be liable for unauthorized use that occurs before receipt of your notice by us. You have an obligation to assist us in our investigation if your U-TOPIA Card is lost or stolen or you believe someone is using your U-TOPIA Card or your U-TOPIA Account without your permission.
              </p>
            </Section>

            <Section title="9. Chargebacks">
              <p>
                You are responsible for reviewing your Periodic Statements promptly and identifying any Charges that you believe are unauthorized or that you dispute.
              </p>
              <p>
                If you and a merchant have a dispute regarding a Charge identified on your Periodic Statement, such as delivery of incorrect goods or services or being charged the wrong amount, you should first attempt to resolve the dispute with the merchant. If the dispute is not resolved to your satisfaction or if you believe the Charge is unauthorized, you may initiate a Chargeback through your U-TOPIA Account. You must report any disputed Charge or error no more than 60 days after the disputed Charge is posted on your Periodic Statement. We may require additional details on the transaction and our review of your disputed Charge will be conditioned on you providing all of the information we may require to review the disputed Charge.
              </p>
              <p>
                You understand that the U-TOPIA Card is subject to Card Network rules regarding chargebacks. The Card Networks have additional established procedures for resolving chargebacks that may require you to provide further details of the disputed Charge or associated documentation.
              </p>
              <p>
                Charges relating to disputed Charges and Chargebacks that are pending resolution may still be due and owing as of the date that payment is due as provided in the applicable Periodic Statement. Chargebacks resolved in your favor will be credited to your U-TOPIA Account on either the current or a future Periodic Statement. We may impose Fees, reduce your spending limits, or suspend access to your U-TOPIA Account or the Services if you fail to pay Charges relating to Chargebacks that are pending resolution on the payment date.
              </p>
            </Section>

            <Section title="10. Termination">
              <p>
                Subject to applicable law, we may suspend, revoke or cancel your Account privileges, your right to use the Card or deny any transaction, in our sole discretion at any time, with or without cause and with or without giving you notice. Any termination of credit privileges, whether initiated by us or by you, will not affect any of our rights or your obligations under these Card Terms, including your obligation to repay any amounts you owe us according to the terms of these Card Terms. On our demand or upon termination of credit privileges, you agree to surrender to us or destroy the Card. If you attempt to use the Card after the termination of credit privileges (whether or not we have provided notice of such termination), the Card may be retained by a merchant, ATM or financial institution where you attempt to use the Card.
              </p>
            </Section>

            <Section title="11. Change of Terms">
              <p>
                Subject to applicable law, we may at any time change, add to or delete terms and conditions of these Card Terms, including interest rates and this Change of Terms provision. Such changes may be based on our anti-fraud policies and procedures, your level of compliance with these Card Terms, prevailing economic conditions and/or any other factors. We will give you notice of any change, addition or deletion as required by applicable law. As of the effective date, the changed terms, at our option, will apply to new purchases and the outstanding balances of your Account, to the extent permitted by applicable law.
              </p>
            </Section>

            <Section title="12. Default and Remedies">
              <p>We may consider you in default of these Card Terms if:</p>
              <ul className="space-y-3">
                <Bullet>You do not make any payment when it is due;</Bullet>
                <Bullet>Any payment you make is rejected, not paid or cannot be processed;</Bullet>
                <Bullet>You exceed a credit limit;</Bullet>
                <Bullet>A bankruptcy or other insolvency proceeding is filed by or against you;</Bullet>
                <Bullet>We determine that you made a false, incomplete or misleading statement on any of your Account documentation, or you otherwise tried to defraud us;</Bullet>
                <Bullet>We reasonably believe that you are or may become unable to pay all of your financial obligations; or</Bullet>
                <Bullet>You do not comply with any term of these Card Terms or any other agreement with us.</Bullet>
              </ul>
              <p>
                In the event of your default under these Card Terms, we may, subject to applicable law (including any applicable notice requirement): (a) declare all or any portion of your outstanding Account balance to be immediately due and payable; (b) instead allow you to repay your Account balance by paying the minimum payment due each billing cycle, without waiving any rights under subsection (a); and/or (c) commence a collection action against you and charge you for any court costs and/or any reasonable attorneys' fees and costs we are charged in connection with such action by any attorney who is not our salaried employee. After a default, interest charges will continue to accrue until your total Account balance, including accrued interest charges, is paid in full, subject to applicable law.
              </p>
            </Section>

            <Section title="13. Delay in Enforcement">
              <p>
                We may at any time and in our sole discretion delay or waive enforcing any of our rights or remedies under these Card Terms or under applicable law without losing any of those or any other rights or remedies. Even if we do not enforce our rights or remedies at any one time, we may enforce them at a later date. For example, we may accept late payments without losing any of our rights under these Card Terms.
              </p>
            </Section>

            <Section title="14. Communications and Call Recording">
              <p>
                You authorize U-TOPIA, Issuer and their partners (each of Issuer's affiliates, agents, assigns, and service providers (collectively, the "<strong>Messaging Parties</strong>") to use automatic telephone dialing systems, artificial or prerecorded voice message systems, text messaging systems and automated email systems, or any system capable of storing and dialing telephone numbers to deliver messages relating to these Card Terms, your Account, or your relationship with the Messaging Parties more generally (including but not limited to: messages about upcoming payment due dates, missed payments and returned payments) to any telephone number(s) you provide to the Messaging Parties. You also agree that these messages may deliver prerecorded and/or artificial voice messages. You understand that telephone messages may be played by a machine automatically when the telephone is answered, whether answered by you or someone else, and that these messages may also be recorded by your answering machine. You also authorize the Messaging Parties to deliver messages to you via mail or email at any addresses you supply to them or that they obtain through any legal means.
              </p>
              <p>
                By accepting these Card Terms or using your Card, you acknowledge that you have received, reviewed, and agree to be bound by the Issuer's{" "}
                <Link to="/esign" className="text-primary hover:underline">E-Sign & Electronic Communications Notice</Link>{" "}
                (the "<strong>E-Sign Notice</strong>"), which is incorporated herein by reference. You consent to receive all disclosures, notices, agreements, and other communications from Issuer and the Messaging Parties in electronic form, in accordance with the E-Sign Notice. You agree that such electronic communications satisfy any legal requirement that such communications be in writing. The E-Sign Notice may be amended by Issuer from time to time, and your continued use of the Card after any such amendment constitutes your acceptance of the amended E-Sign Notice.
              </p>
              <p>
                You understand that anyone with access to your mail, telephone or email account may listen to or read the messages the Messaging Parties leave or send you, and you agree that the Messaging Parties will have no liability for anyone accessing such messages. You further understand that, when you receive a telephone call, text message or email, you may incur a charge from the company that provides you with telecommunications, wireless and/or internet services, and you agree that the Messaging Parties will have no liability for such charges except to the extent required by applicable law. You expressly authorize the Messaging Parties to monitor and record your calls with the Messaging Parties. If any telephone number you have provided to the Messaging Parties changes, or if you cease to be the owner, subscriber, or primary user of any such telephone number, you agree to immediately give notice to the Messaging Party who delivered the messages of such facts so that the Messaging Party can update its records.
              </p>
              <p>
                This authorization is part of our bargain concerning these Card Terms, and we do not intend it to be revocable. However, to the extent you have the right to revoke your consent to communications by autodialed calls and text messages to your mobile number under applicable law, you may exercise this right by contacting the applicable Messaging Party directly or by sending a request by email to{" "}
                <a href="mailto:support@u-topia.com" className="text-primary hover:underline">support@u-topia.com</a>{" "}
                with the subject line "END COMMUNICATIONS." You may opt-out of receiving most of these messages at any time by sending us a request to{" "}
                <a href="mailto:support@u-topia.com" className="text-primary hover:underline">support@u-topia.com</a>{" "}
                or by responding "STOP" to any text message. To stop emails only, you can follow the opt-out instructions included at the bottom of the Messaging Parties' emails.
              </p>
            </Section>

            <Section title="15. Governing Law">
              <p>
                These Card Terms will be interpreted in accordance with the laws of Puerto Rico without regard to conflict-of-law provisions. Judicial proceedings (other than small claims actions) that are excluded from the Arbitration section below must be brought in state or federal court in Puerto Rico, unless we both agree in writing to some other location, and you hereby consent to the venue and personal jurisdiction of such court.
              </p>
            </Section>

            <Section title="16. Dispute Resolution & Arbitration">
              <p className="uppercase text-sm tracking-wide">
                Please read this "Dispute Resolution and Arbitration" provision very carefully. It limits your rights in the event of a dispute between you and Issuer. U-TOPIA is the technology provider for the Card but is not the Issuer, creditor or lender. U-TOPIA is not a party to these Card Terms and has no liability for the Issuer's obligations under it. However, U-TOPIA is an express third-party beneficiary of these Card Terms with respect to any provisions that allocate risk, disclaim liability, limit remedies or require disputes to be resolved through arbitration. Accordingly, to the extent a dispute involves U-TOPIA, U-TOPIA shall be entitled to invoke and benefit from the same protections, limitations and dispute resolution procedures as the Issuer. To the extent you have any dispute you may have with U-TOPIA relating solely to services provided to you under your separate User Terms with U-TOPIA, such disputes will be governed exclusively in accordance with the U-TOPIA User Terms.
              </p>
              <SubHeading>Binding Arbitration</SubHeading>
              <p>
                (a) You and Issuer agree that any and all past, present and future Disputes (defined below) shall be determined by arbitration, unless your Dispute is subject to an exception to this agreement to arbitrate set forth below. You and Issuer further agree that any arbitration pursuant to this section shall not proceed as a class, group or representative action. The award of the arbitrator may be entered in any court having jurisdiction. "<strong>Dispute</strong>" means any dispute, claim, or controversy between you and Issuer that arises out of or relates to (i) these Card Terms (including any addenda hereto or other terms incorporated herein by reference), (ii) the breach, termination, enforcement, interpretation or validity hereof, including the determination of the scope or applicability of the agreement to arbitrate hereunder, or (iii) any Services (including, without limitation, the U-TOPIA Card).
              </p>
              <p>
                (b) This agreement to arbitrate shall be construed under and be subject to the Federal Arbitration Act, notwithstanding any other choice of law set out in these Card Terms.
              </p>
              <SubHeading>Arbitration Procedure</SubHeading>
              <p>
                (a) Before filing a claim against Issuer, you agree to try to resolve the Dispute informally by providing written notice to Issuer of the actual or potential Dispute. Similarly, Issuer will provide written notice to you of any actual or potential Dispute to endeavor to resolve any claim we may possess informally before taking any formal action. The party that provides the notice of the actual or potential Dispute (the "<strong>Notifying Party</strong>") will include in that notice (a "<strong>Notice of Dispute</strong>") your name, the Notifying Party's contact information for any communications relating to such Dispute, and sufficient details regarding such Dispute to enable the other party (the "<strong>Notified Party</strong>") to understand the basis of and evaluate the concerns raised. If the Notified Party responds within ten (10) business days after receiving the Notice of Dispute that it is ready and willing to engage in good faith discussions in an effort to resolve the Dispute informally, then each party shall promptly participate in such discussions in good faith.
              </p>
              <p>
                (b) If, notwithstanding the Notifying Party's compliance with all of its obligations under the preceding paragraph, a Dispute is not resolved within thirty (30) days after the Notice of Dispute is sent (or if the Notified Party fails to respond to the Notice of Dispute within ten (10) business days), the Notifying Party may initiate an arbitration proceeding as described below. If either party purports to initiate arbitration without first providing a Notice of Dispute and otherwise complying with all of its obligations under the preceding paragraph, then, notwithstanding any other provision of these Card Terms, the arbitrator(s) will promptly dismiss the claim with prejudice and will award the other party all of its costs and expenses (including, without limitation, reasonable attorneys' fees) incurred in connection with such Dispute.
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
                To the extent applicable law permits, any dispute arising out of or relating to these Card Terms, whether in arbitration or in court, will be conducted only on an individual basis and not in a class, consolidated or representative action. Notwithstanding any other provision of these Card Terms or the AAA Rules, disputes regarding the interpretation, applicability, or enforceability of this class waiver may be resolved only by a court and not by an arbitrator. If this waiver of class or consolidated actions is deemed invalid or unenforceable, neither party is entitled to arbitration.
              </p>
              <SubHeading>No Jury Trial</SubHeading>
              <p>
                If for any reason a claim or dispute proceeds in court rather than through arbitration, each party knowingly and irrevocably waives any right to trial by jury in any action, proceeding or counterclaim arising out of or relating to these Card Terms.
              </p>
              <SubHeading>Venue and Jurisdiction for Judicial Proceedings</SubHeading>
              <p>
                Except as otherwise required by applicable law or provided in these Card Terms, in the event that the agreement to arbitrate is found not to apply to you or your Dispute, you and Issuer agree that any judicial proceeding may only be brought in a court of competent jurisdiction in Puerto Rico. Both you and Issuer irrevocably consent to venue and personal jurisdiction in Puerto Rico; provided that either party may bring any action to confirm an arbitral award in any court having jurisdiction.
              </p>
              <SubHeading>Confidentiality</SubHeading>
              <p>
                The existence of all information regarding any Dispute will be held in strict confidence by the parties and will not be disclosed by either party except as reasonably necessary in connection with the conduct of the arbitration or the confirmation or enforcement of any arbitral award. Any such permitted disclosure will, to the maximum extent reasonably practicable, be made subject to obligations of confidentiality at least as stringent as the provisions of this paragraph. If any disclosure of information regarding any Dispute is required under applicable law, the parties shall reasonably cooperate with one another to obtain protective orders or otherwise to preserve the confidentiality of such information.
              </p>
            </Section>

            <Section title="17. Survival">
              <p>
                The following provisions of these Card Terms shall survive any termination or expiration of these Card Terms and shall remain in full force and effect until all of your obligations to us have been fully and finally satisfied: (a) all of your payment obligations and our right to collect all amounts owed by you; (b) all security interest, collateral, and setoff provisions, including our rights in any Collateral; (c) any indemnification obligations; (d) the limitation of liability provisions; (e) the disclaimer of warranties provisions; (f) the dispute resolution and arbitration provisions, including the class waiver; (g) our communications and contact rights; (h) our assignment rights; (k) any waiver provisions; (l) all representations and warranties made by you; (m) any accrued rights, remedies, or causes of action in favor of either party; and (n) any other provision that by its nature or express terms is intended to survive.
              </p>
            </Section>

            <Section title="18. Severability">
              <p>
                If any provision of these Card Terms is found to be invalid, illegal, or unenforceable by a court or arbitrator of competent jurisdiction, such provision shall be modified to the minimum extent necessary to make it valid and enforceable while preserving its intent, or if such modification is not possible, such provision shall be severed from these Card Terms. The remaining provisions shall remain in full force and effect.
              </p>
              <p>
                Notwithstanding the foregoing paragraph, in the event that a court finds the prohibition of Collective Arbitration in Section 16 to be invalid or unenforceable, then all provisions in Section 16 shall be deemed void, except for any portion of any provision in Section 16 related to the resolution of Disputes through litigation in court.
              </p>
            </Section>

            <Section title="19. Assignment">
              <p>
                These Card Terms will be binding on, and benefit, any of your and our successors and assigns. You may not transfer your Account or your Agreement to someone else without our written permission. We may transfer your Account, these Card Terms, or any of our rights or obligations therein, to another company or person at any time, without your permission and without prior notice to you. If we do, they will take our place under these Card Terms. You must pay them and perform all of your obligations to them and not us. If you pay us after you are informed or learn that we have transferred your Account or this Agreement, we can handle your payment in any way we think is reasonable. This includes returning the payment to you or forwarding the payment to the other company or person.
              </p>
            </Section>

            <Section title="20. Entire Agreement">
              <p>
                These Card Terms constitute the entire agreement between you and Issuer regarding the subject matter hereof and supersede all prior or contemporaneous agreements, understandings, representations, and communications whether written or oral, regarding such subject matter.
              </p>
            </Section>

            <Section title="21. Force Majeure">
              <p>
                We shall not be liable for any delay or failure to perform any obligation under these Card Terms to the extent that such delay or failure is caused by circumstances beyond our reasonable control, including but not limited to acts of God, natural disasters, war, terrorism, civil unrest, labor disputes, government actions, epidemics or pandemics, internet or telecommunications failures, or failures of third-party service providers.
              </p>
            </Section>

            <Section title="22. Disclaimer of Warranties">
              <p className="uppercase text-sm tracking-wide">
                To the maximum extent permitted by applicable law, we expressly disclaim all warranties, including but not limited to implied warranties of merchantability, fitness for a particular purpose, title, non-infringement, accuracy, reliability, and any warranties arising from course of dealing or usage of trade.
              </p>
            </Section>

            <Section title="23. Limitation of Liability">
              <p className="uppercase text-sm tracking-wide">
                To the maximum extent permitted by applicable law, in no event shall Issuer, its affiliates, or its officers, directors, employees, agents, service providers, or licensors be liable to you for any indirect, incidental, consequential, special, exemplary, punitive, or other similar damages, including but not limited to lost profits, lost revenue, lost data, loss of goodwill, business interruption, or loss of business opportunity, whether arising in contract, tort, negligence, strict liability, or otherwise.
              </p>
              <p className="uppercase text-sm tracking-wide">
                In no event shall Issuer's total liability to you for all claims arising out of or relating to this agreement or your Account exceed the lesser of (a) your actual direct damages proven or (b) the total amounts paid by you in the twelve (12) months immediately preceding the event giving rise to the claim.
              </p>
            </Section>

            <Section title="24. Indemnity">
              <p>
                You will indemnify and defend Issuer, its affiliates, and its partners, directors, officers, employees, agents, trustees, administrators, managers, advisors, and representatives (each an "<strong>Indemnitee</strong>") against, and hold each Indemnitee harmless from, any and all claims, litigation, investigations, proceedings, losses, damages, fines, penalties, liabilities, settlements, costs, fees, and expenses incurred by any Indemnitee or asserted against any Indemnitee by any person arising out of, in connection with, related to, or as a result of your (i) breach of any of the representations, warranties, or covenants contained in these Card Terms; or (ii) gross negligence, fraud, or violation of any applicable law or rights of any third-party. Issuer may defend any claim subject to indemnification hereunder, using counsel of its choice, and you will pay or promptly reimburse Issuer for the reasonable fees of such counsel and all related costs and reasonable expenses. If you are a user from a jurisdiction that does not allow certain indemnification obligations, you agree that this indemnity is intended to be as broad as permitted under the laws of such jurisdiction.
              </p>
            </Section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default TermsInternational;
