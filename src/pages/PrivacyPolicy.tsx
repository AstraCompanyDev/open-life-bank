import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Section = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <section>
    <h2 className="text-xl font-semibold mb-5 text-foreground">{title}</h2>
    <div className="space-y-4 text-base leading-relaxed text-muted-foreground">{children}</div>
  </section>
);

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
          <p className="text-muted-foreground text-lg mb-16">Last modified: 28/4/2026</p>

          <div className="space-y-12">
            <div className="space-y-4 text-base leading-relaxed text-muted-foreground">
              <p>
                U-TOPIA CORP., and its subsidiaries and affiliates (collectively, "U-TOPIA CORP", "U-topia", "us", "our" or "we"), offer WEB3-based developer tools and services for businesses, helping facilitate end users' access to financial accounts and authentication (the "Wallet Services").
              </p>
              <p>
                This Privacy Policy (the "Policy") explains how U-TOPIA CORP collects, stores and shares information of developers employing our Wallet Services (each a "Developer" and together "Developers"), as well as other users and visitors (collectively, "you" or "your"), visiting our website at <a href="https://www.u-topia.com/" className="text-primary hover:underline">https://www.u-topia.com/</a> or any associated subdomains (the "Website"), or anyone accessing any of our applications, products and services (collectively, our "Service").
              </p>
              <p>
                If you are a Developer, please note that it is your responsibility to ensure that your end users are aware of, and consent to, the processing of their personal data in accordance with this Policy.
              </p>
              <p>
                You are not legally required to provide us with any personal information and may decide to do so (or avoid doing so) at your own free will. If you do not wish to provide us with personal information, or to have it processed by us or any of our service providers, please do not visit our Website or use our Services.
              </p>
              <p>
                You may also choose not to provide us with "optional" information, such as how big your company is, but please keep in mind that without it, we may not be able to provide you with the full range of our Services or the best user experience when using them.
              </p>
              <p>
                By accessing or using the Service and/or accepting our Terms of Service, you confirm that you have read, understood, and agreed to the collection and use of your information as we have outlined in this Policy.
              </p>
              <p>
                Please note that this Policy only covers such information that we at U-TOPIA CORP collect, use, and share. It does not explain, nor does it cover, the collection, use, and disclosure of information by any other websites, products, or services provided by others.
              </p>
              <p>
                Capitalized terms used and not otherwise defined herein shall have the respective meanings ascribed to them under our Terms of Service.
              </p>
            </div>

            <Section title="1. The information we collect">
              <p>1.1. U-TOPIA CORP collects information that identifies individuals or that may, with reasonable effort, identify individuals, which may include (the "Personal Information"):</p>
              <p>1.1.1. Identifiers and contact information, such as first and last name, postal address, telephone numbers (including mobile numbers), e-mail address, wallet address (public keys), and other information you may provide to us when you use the Service.</p>
              <p>1.1.2. If you are a Developer - any personal data that you may require us to collect on your behalf from end users, as part of the customization process of the Services, such as, their preferred blockchain platform, the size of their T-Shirt, their account information, such as usernames that may be used to set an online account on the Service, financial information such as their choice of financial vendors, including their account names and numbers, balance, transactions history, etc.</p>
              <p>1.1.3. If you or your end user choose to set up an account when using the Service by logging through your Google, Facebook or other social network account (Single Sign On), we may receive personal information from the social network.</p>
              <p>1.1.4. Location information such as time-zone settings and device location.</p>
              <p>1.1.5. Online browsing activities through the Service such as webpages visited, and electronic network activity information such as type of device, software or hardware that may identify them, such as online identifiers, device unique identifiers (e.g., UDID, MAC address), IP address).</p>
              <p>1.1.6. Financial information such as your choice of financial vendors.</p>
              <p>1.1.7. If you are a prospective candidate applying for a job at U-TOPIA CORP, we may collect professional information about you such as your CV, information about your last employer(s), and other information you may provide.</p>
              <p>1.1.8. Preferences, feedback and survey responses.</p>
              <p>1.1.9. Correspondence and communications with U-TOPIA CORP.</p>
              <p>1.1.10. U-TOPIA CORP does not provide custodial wallet services and does not store or have access to users' private keys. Wallet functionality made available through the Service is provided by third-party infrastructure providers. As such, U-TOPIA CORP does not directly control, access, or store users' digital assets.</p>
              <p>U-TOPIA CORP may collect limited technical and account-related information necessary to enable access to wallet functionality, but does not collect or store transaction history, wallet balances, or private cryptographic credentials.</p>
              <p>Please note that transactions recorded on public blockchains may be publicly accessible and are not controlled or managed by U-TOPIA CORP.</p>
              <p className="font-medium text-foreground pt-2">1.2. Non-Personal Information.</p>
              <p>U-TOPIA CORP may also collect certain unidentified, non-personal information that relates to online browsing activities through the use of the Services (the "Non-Personal Information"). Non-Personal Information is non-identifiable information that, when taken alone, cannot be used to identify a specific individual. As such, we are not aware of the identity of the user from which the Non-Personal Information was collected. We also collect aggregate user data regarding the use of our Services. We may anonymize or de-identify the information collected through the Service or via other means so that the information cannot, on its own, personally identify a specific individual. Our use and disclosure of such aggregated or de-identified information is not subject to any restrictions under this Policy, and we may disclose it to others without limitation and for any purpose. For the avoidance of doubt, if we combine Personal Information with Non-personal Information (e.g., analytical data), the combined information will be treated as Personal Information so long as it remains combined.</p>
            </Section>

            <Section title="2. How do we collect your personal information?">
              <p>2.1. U-TOPIA CORP may collect Personal Information and/or Non-Personal Information (collectively, "Information") during your access and/or use of the Service, including through your interactions and communications with the Service, in the following ways:</p>
              <p>2.1.1. <span className="text-foreground font-medium">Information You Provide.</span> When you access and use the Services (whether as a visitor, Developer or a potential candidate applying for a job), we may get access to Information that is shared through your use of the Services. This may include, for example, your IP address, your wallet address (public keys) or your browsing activities on our Website, your first and last name, email address and other identifiers as relevant.</p>
              <p>2.1.2. <span className="text-foreground font-medium">Information Provided to U-TOPIA CORP by Developers.</span> U-TOPIA CORP also collects Information that was provided to it by Developers. The particular Information categories we shall processes when such Developers use our Services, and the reasons we process such Information, may vary, depending on the tools and features used by such Developers when utilizing our Services. This means that when the user is a Developer's end user, the scope of the Information collected by us will be defined by the Developer and in such cases, it is the Developer's exclusive responsibility to explain such end users which information will be collected and processed, how such information will be collected, processed and shared, and by whom, as well as obtaining their consent as legally required for such activities. Information that may be required by Developers, can include the end user's username, and in some cases, this may include their first and last name, date of birth, phone number, email address, security questions and answers, and one-time password (OTP) to help verify your identity and connect your accounts.</p>
              <p>2.2. <span className="text-foreground font-medium">Information Collected Automatically.</span> When you access or use the Services, we may automatically collect Information about you, including:</p>
              <p>2.2.1. <span className="text-foreground font-medium">Usage Information.</span> U-TOPIA CORP monitors users' activity in connection with the Services and may collect log information about you when you access and use the Services including your IP address, time of access, browser type and language, Internet Service Provider ("ISP"), information about the applications and features you use, the content you access, and any actions taken in connection with the access and use of your content in the Services.</p>
              <p>2.2.2. <span className="text-foreground font-medium">Device Information.</span> When you access the Services from a device, U-TOPIA CORP may collect information about the device, including the hardware model, operating system and version, unique device identifiers, mobile network information (as allowed by the mobile network) or platform information (as allowed by the specific platform type).</p>
              <p>2.2.3. <span className="text-foreground font-medium">Cookies and Other Tracking Technologies.</span></p>
              <p>2.2.3.1. Like most websites and online Services, our Service uses "cookies" to collect Information. "Cookies" are small text files containing strings of letters and numbers that are downloaded onto your device (such as, computer, tablet or smartphone) when you use the Service. These files allow to store Information about you. Some "cookies" will expire when you exit the Service, and others will be saved in your device's memory.</p>
              <p>If you want to disable or change your "cookies" settings, you will have to access your device's browser settings. Please note that if you disable all cookies, some (or all) of the features and functionality of the Service may not be available to you.</p>
              <p>2.2.3.2. Other than "cookies", when you use our Service, you consent to our use (and authorize third parties to use) of various technologies to collect Information, which may include web beacons (also known as "tracking pixels"), events and other technologies (collectively, "Tracking Technologies"). Such Tracking Technologies allow us to automatically collect Information about you, your device and your online behavior, in order to enhance your navigation and improve our Services' performance, perform analytics and customize your experience. In addition, we may merge data we have with Information collected through these Tracking Technologies and data we may obtain from other sources and, as a result, such combined data may constitute Personal Information.</p>
            </Section>

            <Section title="3. How we use your information">
              <p>3.1 U-TOPIA CORP uses your Information for the limited purpose of providing the Service and related functionality and services, or as otherwise specifically described in this Policy and as permitted by applicable laws, all of which serve the legitimate interests of U-TOPIA CORP, including:</p>
              <p>3.1.1. Providing, operating, maintaining, improving, developing, promoting and auditing the Service (by U-TOPIA CORP or any third party acting on its behalf), from time to time.</p>
              <p>3.1.2. Sending you transactional messages, technical notices, updates, security alerts and support and administrative messages.</p>
              <p>3.1.3. Identifying you, so that we can interact with you, as well as providing and delivering services and features you request, processing and completing transactions, and sending you related information.</p>
              <p>3.1.4. Responding to your comments, questions, and requests and provide customer service and support.</p>
              <p>3.1.5. Communicating with you about services, features, surveys, newsletters, offers, promotions, contests, draws and events, and provide other news or information about U-TOPIA CORP and our select partners.</p>
              <p>3.1.6. Personalizing the Service, deriving inferences, providing content, features, and/or advertisements that match your interests and preferences or otherwise customize the Services.</p>
              <p>3.1.7. Monitoring and analyzing trends, usage, and activities in connection with the Services for research, marketing or advertising purposes.</p>
              <p>3.1.8. Linking or combining the Information with other information we receive from third parties to help understand your needs and provide you with better service.</p>
              <p>3.1.9. For crime and fraud prevention, detection and related purposes.</p>
              <p>3.1.10. Where we have a legal right or duty to use or disclose your information (for example in relation to an investigation by a public authority or in a legal dispute).</p>
              <p>3.1.11. For customer relations, queries, complaints or disputes and Service's operations.</p>
              <p>3.1.12. Internal record keeping.</p>
              <p>3.1.13. To manage our recruiting and process employment applications. We may use personal information, such as information submitted to us in a job application, to facilitate our recruitment activities and process employment applications, such as by evaluating a job candidate for an employment activity, and monitoring recruitment statistics.</p>
              <p>3.1.14. For managing insurance claims by our customers.</p>
              <p>3.1.15. Cybersecurity needs, fraud detection and misuse of our website.</p>
              <p className="font-medium text-foreground pt-2">3.2. Marketing (Promotional communications)</p>
              <p>3.2.1. If you decide to subscribe for our mailing services, U-TOPIA CORP may use your email address to send you electronic mail, SMS/MMS messages, for marketing purposes and update you about promotional offers, products and services which we think may be of interest to you as an individual (the "Newsletters"), and by accepting the terms of this Policy you agree to U-TOPIA CORP sending you such Newsletters, from time to time.</p>
              <p>3.2.2. You are not obligated by law or otherwise to receive our Newsletters, and you have the right to opt out of receiving such communications, at any time, by:</p>
              <p>3.2.2.1. following the unsubscribe instructions included in each Newsletter; or</p>
              <p>3.2.2.2. contacting U-TOPIA CORP via <a href="mailto:support@u-topia.com" className="text-primary hover:underline">support@u-topia.com</a> and request to be removed from our mailing list.</p>
              <p>3.2.3. Nonetheless, please note that even if you choose to unsubscribe from our mailing list, we may continue sending you notices (a) to update you on revisions made to this Policy or our Terms of Service; and (b) related to the ongoing Service, for example, promotions regarding products and services used by you, notices concerning your accounts and any additional operational notices as required.</p>
              <p className="font-medium text-foreground pt-2">3.3. Sharing your Information with Third Parties</p>
              <p>3.3.1 We may share your Information with certain third parties that help us operate our Service (e.g., customer support, shipping couriers, newsletter distribution and other service providers). When U-TOPIA CORP uses such third parties, it restricts them from using or disclosing Personal Information, except as required to perform the services on behalf of U-TOPIA CORP or to comply with legal requirements. Specifically, we do not permit such third parties to use any Personal Information we share with them for their own marketing purposes or for any purpose other than in connection with the services they provide to us. Third parties with which we may share your Information will be required to meet our standards on processing information and security. Personal Information we provide them will only be provided in connection with the performance of their function.</p>
              <p>3.3.2. We may also share your Information with:</p>
              <p>3.3.2.1. Developers, to enable end users access to their services.</p>
              <p>3.3.2.2. Payment services companies such as Shop Pay, PayPal, etc., credit reference agencies and payment card issuers (such as Visa, Mastercard and American Express) where necessary for card payments, that process your payments when you make an online transaction with us.</p>
              <p>3.3.2.3. Governmental bodies, regulators, law enforcement agencies, courts/tribunals and insurers where we are required to do so (a) to comply with our legal obligations; (b) to exercise our legal rights (for example in court cases); (c) for the prevention, detection, investigation of crime or prosecution of offenders; and (d) for the protection of our employees and customers.</p>
              <p>3.3.2.4. If U-TOPIA CORP becomes involved in a merger, acquisition, or any form of sale of some or all of its assets, it may transfer all the Information that was collected from users in connection with such a transaction.</p>
              <p>3.4. <span className="text-foreground font-medium">International Transfer of Information.</span> To provide you with our Service, it may be necessary for U-TOPIA CORP to grant third parties from jurisdictions outside of your country of residency, with access to your Information. By agreeing to the terms of this Policy, you agree to U-TOPIA CORP sharing your Information outside of your country of residency.</p>
              <p>3.5. We reserve the right to disclose your Information as required by law and when we believe that disclosure is necessary to protect our rights and/or comply with a judicial proceeding, or court order.</p>
              <p>3.6. Also, please note that we may disclose general, aggregated, non-personal and non-identifiable information about our users to potential business partners, investors, or the public.</p>
            </Section>

            <Section title="4. How long do we keep your information?">
              <p>4.1. U-TOPIA CORP will retain your Information for as long as needed as part of our Service, or to comply with legal and regulatory obligations (e.g., audits, accounting and statutory retention terms), enforcing our Terms of Service, dispute resolutions and for the establishment, exercise or defence of legal claims in the countries where we do business. This is also the case for any third party with which we share your Information when they carry out services on our behalf.</p>
              <p>4.2. While different retention periods may apply with respect to different types of data, the longest we will normally hold Personal Information is ten (10) years. When we no longer need your Personal Information and there is no need for us to keep it to fulfil the purposes described in this Policy, we will either remove it from our systems or anonymize such Information so that it cannot identify you.</p>
              <p>4.3. When you send an email or other communication to <a href="mailto:support@u-topia.com" className="text-primary hover:underline">support@u-topia.com</a>, or any other correspondence that you have with us, we may retain those communications in order to process and respond to your requests and improve our Service.</p>
              <p>4.4. Please DO NOT send us any communication which contains confidential or sensitive information, since we are unable to evaluate whether your content constitutes as confidential or sensitive information, or not, and we may retain or use such communication as described hereinabove, and such retention or use shall not be deemed as a breach of any of our obligations pursuant to this Policy.</p>
            </Section>

            <Section title="5. Information security standard">
              <p>5.1. Because we value your privacy, U-TOPIA CORP uses industry standard measures to protect against unauthorized access to, or unauthorized alteration, disclosure or destruction of data which is stored in our records. These measures include internal reviews of our data collection, storage and processing practices and standard measures, sensitive information is transmitted via Secure Socket Layer (SSL) technology, making our systems accessible only by those authorized with special access rights to such systems, and are required to keep the information confidential.</p>
              <p>5.2. Nonetheless, we cannot guarantee a perfect and absolute security of your Information, as no method of transmission over the Internet and or electronic storage is perfectly secure or invulnerable. However, should we become aware of a security breach, we will notify any affected user, so that they can take appropriate protective steps. Such notifications shall be issued by U-TOPIA CORP in accordance with the applicable (local) laws and regulations, as well as U-TOPIA CORP's internal policies.</p>
            </Section>

            <Section title="6. How can you help to protect your data?">
              <p>6.1. First, please remember that U-TOPIA CORP will never ask you for any password, bank account or credit card details. If you receive such communicating asking you to provide such information, please ignore it and do not respond. You can let us know that you have received such communication via <a href="mailto:support@u-topia.com" className="text-primary hover:underline">support@u-topia.com</a>.</p>
              <p>6.2. If you are using your device in a public location, we highly recommend that you always log out and close the browser after completing your session.</p>
            </Section>

            <Section title="7. What rights you have in connection with your information?">
              <p>7.1. You have the right to ask that U-TOPIA CORP will provide you with a copy of any Personal Information that we keep about you.</p>
              <p>7.2. You have the right to ask that U-TOPIA CORP shall update and correct any outdated or inaccurate Personal Information that we keep about you. Should you find that the Personal Information related to you is not accurate, complete, or updated, then please provide us the necessary information to correct it.</p>
              <p>7.3. If you wish to exercise any of the rights described above, please notify us by email to <a href="mailto:support@u-topia.com" className="text-primary hover:underline">support@u-topia.com</a>, and we will use commercially reasonable efforts to accommodate your request. U-TOPIA CORP shall not charge you for requesting to exercise any of the aforementioned rights.</p>
            </Section>

            <Section title="8. Specific provisions for EU-residents">
              <p>8.1. This Section 8 applies to you, if you are from the European Union. U-TOPIA CORP adopted the following provisions, to comply with the EU 2016/679 Directive General Data Protection Regulation ("GDPR"), pursuant to which U-TOPIA CORP will be considered as a "Data Controller" with respect to our use of Personal Information of residents of the European Union.</p>
              <p>8.2. <span className="text-foreground font-medium">Legal Basis.</span> We base our processing of any personal data as "Data Controllers" based on the following lawful grounds:</p>
              <p>8.2.1. U-TOPIA CORP relies, primarily, on your consent to the terms of this Policy and the terms set forth under our Terms of Service, as a legal basis for processing any Personal Information related to you or communicating any other promotional material.</p>
              <p>8.2.2. U-TOPIA CORP may collect and use your Personal Information when it is necessary for one of the legitimate uses set out in Section 3 above, which we believe are not overridden by your fundamental rights.</p>
              <p>8.2.3. We may process your Personal Information to comply with a legal obligation and to protect our users' vital interests.</p>
              <p>8.2.4. If, at any time, you wish to exercise your rights in accordance with the provisions provided by law (including as provided under Section 7 of this Policy) you may send us an email to via <a href="mailto:support@u-topia.com" className="text-primary hover:underline">support@u-topia.com</a>, and request:</p>
              <p>8.2.4.1. to access your Personal Information together with information about how, and on what basis, such information is being processed. Should you desire to receive such information in a different format than the one that was provided to you, you can contact us via <a href="mailto:support@u-topia.com" className="text-primary hover:underline">support@u-topia.com</a> and we shall use commercially reasonable efforts to accommodate your request, if applicable.</p>
              <p>8.2.4.2. to rectify any of the Personal Information being held when such information is inaccurate.</p>
              <p>8.2.4.3. to delete or restrict access to your Personal Information in limited circumstances as described under the GDPR. Please note that if we need to delete any Personal Information related to you, as per your request, it can take time until we completely delete residual copies of such data from our servers and backup systems.</p>
              <p>8.2.4.4. to withdraw your consent to the processing of your Personal Information. However, please note that exercising this right will not affect the lawfulness of any previous processing activities based on consent that was lawfully obtained before its withdrawal.</p>
              <p>8.2.4.5. to obtain and reuse your Personal Information for your own purposes across different services, as part of your right to data portability.</p>
              <p>8.3. Please note that you have the right to complain to a Data Protection Authority about our collection and use of your Personal Information. For more information, please contact your local data protection authority in the European Economic Area (EEA).</p>
              <p>8.4. If you have any concerns with respect to our methods of processing any Personal Information related to you, or if wish to withdraw your consent, for any reason, kindly let us know by sending an email to <a href="mailto:support@u-topia.com" className="text-primary hover:underline">support@u-topia.com</a>.</p>
              <p>8.5. If you reside in a country from the European Economic Area, then, by agreeing to the terms of this Policy, you agree to U-TOPIA CORP sharing your Information outside of the European Economic Area. These transfers are subject to special rules under data protection laws. If this happens, we will ensure that the transfer will be compliant with data protection law and all personal data will be secure. Our standard practice is to use 'standard data protection clauses' which have been approved by the European Commission for such transfers. Those clauses can be accessed here.</p>
              <p>8.6. U-TOPIA CORP shall not charge you for requesting to exercise any of the aforementioned rights.</p>
            </Section>

            <Section title="9. Specific provision for California residents">
              <p>This Section 9 applies to you only if you reside in the State of California, United States. U-TOPIA CORP adopted the following provisions to comply with the California Consumer Privacy Act ("CCPA") and any terms defined in the CCPA have the same meaning when used in this Section 9.</p>
              <p>9.1. The following categories reflect the type of personal information which U-TOPIA CORP has collected within the last twelve (12) months:</p>
              <p>9.1.1. Identifiers and Personal information as listed in the California Customer Records statute (Cal. Civ. Code § 1798.80(e)), for example, first names, surnames, telephone numbers, address, online Identifier, Internet Protocol address, business or private email addresses, account usernames, as well as Personal Information as such term is defined in this Policy.</p>
              <p>9.1.2. Electronic network activity information, including, but not limited to, browsing history and any additional information related to your interaction with our Service.</p>
              <p>9.2. U-TOPIA CORP has obtained such information as set forth in Section 9.1 above and Personal Information as provided under Section 1.1 above (for the purpose of this Section 9, the "Personal Data").</p>
              <p>9.3. U-TOPIA CORP may use the Personal Data it collects or receives for its legitimate interests (as set out in Section 3 above), which U-TOPIA CORP believes are not overridden by your fundamental rights. U-TOPIA CORP may also disclose such Personal Data to third parties for its legitimate purposes as described in Section 3 above.</p>
              <p>9.4. In the preceding twelve (12) months, U-TOPIA CORP has disclosed the following Personal Data for our business purposes:</p>
              <p>9.4.1. Identifiers (including your name, email address, profession).</p>
              <p>9.4.2. Personal Data's categories as listed in the California Customer Records statute.</p>
              <p>9.4.3. Inferences.</p>
              <p>9.5. In the preceding twelve (12) months, U-TOPIA CORP has not sold any of your Personal Data.</p>
              <p>9.6. <span className="text-foreground font-medium">Your rights as a California Resident.</span> You are entitled to request the following specific rights under the CCPA, solely with respect to Personal Data related to you:</p>
              <p>9.6.1. Request to know (a) what categories and specific components of Personal Data we collect about you and from which sources; (b) categories of Personal Data that we disclosed for the purpose described in Section 3 above, and the categories of third parties with whom we have shared any particular category of your Personal Data. If we disclose any of your Personal Data to a third-party, we will provide you, after authenticating your identity, with a list that will identify the specific category of your Personal Data which was disclosed.</p>
              <p>9.6.2. Request that we delete any Personal Data we collect about you. After authenticating your identity, we will delete (and direct our service providers to delete) any Personal Data related to you from our records, unless an exception applies. Please note that if we need to delete any Personal Data related to you following your request, it can take time until we completely delete residual copies of Personal Data from our servers and backup systems.</p>
              <p>9.6.3. Instruct us not to sell any Personal Data related to you that was collected by us.</p>
              <p>9.6.4. You have the right not to be discriminated against by U-TOPIA CORP, for exercising your rights under the CCPA.</p>
              <p>9.7. If you have any concerns about how we process Personal Data related to you, or if you wish to withdraw your consent, for any reason, kindly let us know by sending an email to <a href="mailto:support@u-topia.com" className="text-primary hover:underline">support@u-topia.com</a>. Please note that exercising this right will not affect the lawfulness of any previous processing activities based on consent that was lawfully obtained before its withdrawal. Also, please note that U-TOPIA CORP shall not charge you for requesting to exercise any of the rights set forth in this Section 9.</p>
            </Section>

            <Section title="10. Children; children's privacy">
              <p>10.1. U-TOPIA CORP's Services are intended for the general public but are generally not directed at children under the age of 16. We do not knowingly collect or solicit personal information (as defined by the U.S. Children's Privacy Protection Act, or "COPPA") from anyone under the age of 18 in a manner prohibited by the COPPA. If you are a parent or guardian and you have reasons to believe that we have collected Personal Information from your underaged child in a manner not permitted by law, please contact us by sending an email to <a href="mailto:support@u-topia.com" className="text-primary hover:underline">support@u-topia.com</a>, stating "Minors Content Removal Request" in the subject line, and tell us what information you want us to remove. We will remove any such data to the extent required by applicable law.</p>
              <p>10.2. If you are a California resident under 18 years old and registered to use the Service, you can ask us to remove any content or information you have posted on the Service. To make such a request, email us to <a href="mailto:support@u-topia.com" className="text-primary hover:underline">support@u-topia.com</a> stating "California Under 18 Content Removal Request" in the subject line, and tell us what information you want us to remove. We will make reasonable good faith efforts to remove the post from prospective public view, although we cannot ensure the complete or comprehensive removal of the content and may retain the content as necessary to comply with our legal obligations, resolve disputes, and enforce our agreements.</p>
            </Section>

            <Section title="11. Links to other websites; third party services">
              <p>11.1. This Policy applies only to the Service offered by U-TOPIA CORP. Nonetheless, please note that the Service may contain links to other websites or applications not operated or controlled by U-TOPIA CORP. We are not responsible for the content, accuracy or opinions expressed in such websites or applications, and such websites or applications are not investigated, monitored or checked for accuracy or completeness by U-TOPIA CORP. Please note that when you use a link to go from U-TOPIA CORP's Service to another website or application, your access to and use of such websites or applications are governed by the websites or applications' own rules and policies.</p>
              <p>11.2. U-TOPIA CORP may make available through the Service, third-party content, applications, products and services solely as a convenience (the "Third Party Services"). You acknowledge and agree that U-TOPIA CORP is not, and shall not be, responsible for any Third Party Services, including their accuracy, completeness, timeliness, validity, copyright compliance, legality, decency, quality or any other aspect thereof. U-TOPIA CORP does not assume and shall not have any liability or responsibility to you or any other person or entity for any Third Party Services accessed and/or consumed by you or any third parties, and if you or any third party choses to access and use them, you do so at your own risk and subject to the rules and policies of such Third Party Services.</p>
            </Section>

            <Section title="12. Compliance">
              <p>If you believe that we have not adhered to our Policy as outlined herein, please notify us by email to <a href="mailto:support@u-topia.com" className="text-primary hover:underline">support@u-topia.com</a>. U-TOPIA CORP will examine any query and make commercially reasonable efforts to resolve any existing or potential dispute. Note that when you send us a request to exercise your rights, we will need to reasonably authenticate your identity and location, and therefore we may ask you to provide us credentials to make sure that you are who you claim to be and will further ask you questions to understand the nature and scope of your request.</p>
            </Section>

            <Section title="13. Changes to this policy">
              <p>We reserve the right to modify this Policy at any time. If we make a material change to this Policy, we will notify you by updating the date of this Policy and posting it on the Website. If required by law, we will also provide notification of changes in another way that we believe is reasonably likely to reach you, for example, by notifying our clients (i.e., the Developers). Any modifications to this Policy will be effective upon our posting the modified version (or as otherwise indicated at the time of posting). In all cases, your use of the Service after the effective date of any modified Policy indicates your acceptance of the modified Policy.</p>
            </Section>

            <Section title="14. Governing law">
              <p>This Policy shall be governed by and construed in accordance with the laws of the Commonwealth of Puerto Rico, without regard to its conflict of law principles.</p>
              <p>You agree that any dispute arising out of or in connection with this Policy shall be subject to the exclusive jurisdiction of the courts of Puerto Rico.</p>
            </Section>

            <Section title="15. Contact us">
              <p>If you have any questions about this Privacy Policy, our data practices, or our compliance with applicable law, please contact us:</p>
              <div className="p-6 rounded-lg bg-muted/30 space-y-4 mt-2">
                <p className="text-foreground font-medium">U-TOPIA CORP.</p>
                <div>
                  <p className="text-foreground font-medium">Street Address</p>
                  <p>3 Calle Tulane Cond. University Plaza Apt. 29<br />San Juan, PR 00927</p>
                </div>
                <div>
                  <p className="text-foreground font-medium">Mailing Address</p>
                  <p>PO Box 2454<br />Guaynabo, PR 00970</p>
                </div>
                <p>
                  <span className="text-foreground font-medium">Email:</span>{" "}
                  <a href="mailto:info@u-topia.com" className="text-primary hover:underline">info@u-topia.com</a>
                </p>
              </div>
            </Section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
