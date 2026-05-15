export type DocSection = {
  title: string;
  pages: { slug: string; title: string; subtitle: string }[];
};

export const docsStructure: DocSection[] = [
  {
    title: "Welcome",
    pages: [
      { slug: "what-is-utopia", title: "What Is U-Topia", subtitle: "Web3 wallet ownership and Visa-linked financial access in one app." },
      { slug: "why-utopia-exists", title: "Why U-Topia Exists", subtitle: "Closing the gap between Web3 ownership and modern banking." },
      { slug: "vision", title: "The U-Topia Vision", subtitle: "Global financial access for the next billion users." },
    ],
  },
  {
    title: "Product Overview",
    pages: [
      { slug: "core-pillars", title: "Core Product Pillars", subtitle: "The seven pillars U-Topia is built around." },
      { slug: "product-summary", title: "Product Summary Table", subtitle: "Each product layer, what it means, and why it matters." },
    ],
  },
  {
    title: "How It Works",
    pages: [
      { slug: "user-flow", title: "User Flow", subtitle: "How a typical user gets onboarded and active in U-Topia." },
      { slug: "user-journey", title: "User Journey Diagram", subtitle: "Visual map of the end-to-end user journey." },
    ],
  },
  {
    title: "Web3 Wallet",
    pages: [
      { slug: "non-custodial-meaning", title: "What Non-Custodial Means", subtitle: "User control instead of centralized custody." },
      { slug: "user-control", title: "User Control and Responsibility", subtitle: "What users control — and what they're responsible for." },
      { slug: "wallet-architecture", title: "Wallet Architecture", subtitle: "Common Web3 wallet patterns and trade-offs." },
      { slug: "wallet-security-diagram", title: "Wallet Security Diagram", subtitle: "How authentication, the wallet, and monitoring fit together." },
    ],
  },
  {
    title: "Visa-Linked Access",
    pages: [
      { slug: "visa-linked-meaning", title: "What Visa-Linked Access Means", subtitle: "How U-Topia connects to the Visa network." },
      { slug: "utopia-role", title: "U-Topia's Role", subtitle: "What U-Topia does — and what partners do." },
      { slug: "partner-model", title: "Partner-Powered Model", subtitle: "Specialized parties across the end-to-end experience." },
      { slug: "account-flow", title: "Visa-Linked Account Flow", subtitle: "From app onboarding to merchant acceptance." },
    ],
  },
  {
    title: "Banking & Issuing Partners",
    pages: [
      { slug: "banking-partners", title: "Banking Partners", subtitle: "Why regulated banking partners matter." },
      { slug: "issuing-partners", title: "Issuing Partners", subtitle: "Why issuing partners matter." },
      { slug: "partner-policy", title: "Partner Naming Policy", subtitle: "Do not name partners unless confirmed." },
    ],
  },
  {
    title: "Fiat & Crypto",
    pages: [
      { slug: "fiat-features", title: "Possible Fiat Features", subtitle: "Fiat functionality, subject to final approval." },
      { slug: "crypto-features", title: "Possible Crypto Features", subtitle: "Crypto functionality, subject to final approval." },
      { slug: "fiat-crypto-bridge", title: "Fiat–Crypto Bridge", subtitle: "Connecting digital assets to everyday payments." },
    ],
  },
  {
    title: "Global Access",
    pages: [
      { slug: "global-direction", title: "Global Access Direction", subtitle: "Broad reach for eligible users through partner expansion." },
      { slug: "eligibility", title: "Eligibility Matters", subtitle: "What access depends on." },
      { slug: "financial-inclusion", title: "Financial Inclusion", subtitle: "Mobile-first finance and digital ownership tools." },
    ],
  },
  {
    title: "Family Access",
    pages: [
      { slug: "supervised-features", title: "Supervised Access Features", subtitle: "Possible parent/guardian oversight features." },
      { slug: "supervised-restrictions", title: "Restrictions and Requirements", subtitle: "What's required for supervised access." },
    ],
  },
  {
    title: "Security & Risk",
    pages: [
      { slug: "security-principles", title: "Security Principles", subtitle: "Authentication, wallet protection, and monitoring." },
      { slug: "user-responsibilities", title: "User Responsibilities", subtitle: "What users need to do to stay safe." },
      { slug: "security-diagram", title: "Security Diagram", subtitle: "From login to data privacy controls." },
    ],
  },
  {
    title: "Compliance",
    pages: [
      { slug: "compliance-requirements", title: "Compliance Requirements", subtitle: "KYC, AML, sanctions, and more." },
      { slug: "compliance-flow", title: "Compliance Flow Diagram", subtitle: "Identity to approved access — visualized." },
      { slug: "risk-disclosures", title: "Risk Disclosures", subtitle: "Material risks users should understand." },
    ],
  },
  {
    title: "Partner Infrastructure",
    pages: [
      { slug: "infrastructure-map", title: "Infrastructure Map", subtitle: "How the pieces fit together." },
      { slug: "partner-roles", title: "Partner Roles", subtitle: "Who does what in the U-Topia ecosystem." },
    ],
  },
  {
    title: "Market Evidence",
    pages: [
      { slug: "me-visa-crypto", title: "Visa & Crypto Payment Infrastructure", subtitle: "Visa's exploration of crypto and stablecoin settlement." },
      { slug: "me-embedded-finance", title: "Embedded Finance", subtitle: "Embedded finance market growth." },
      { slug: "me-baas", title: "Banking-as-a-Service (BaaS)", subtitle: "Licensed banks delivering services via APIs." },
      { slug: "me-bank-fintech", title: "Bank–Fintech Partnerships", subtitle: "Regulator guidance on responsible partnerships." },
      { slug: "me-visa-developer", title: "Visa Developer / VisaNet", subtitle: "APIs and program-level access via partners." },
      { slug: "me-tokenization", title: "Digital Wallet Tokenization", subtitle: "Tokenization standards for digital wallets." },
      { slug: "me-non-custodial", title: "Non-Custodial Wallets", subtitle: "Design and user-control references." },
      { slug: "me-stablecoins", title: "Stablecoin Payments", subtitle: "Stablecoin usage in payments." },
      { slug: "me-inclusion", title: "Global Financial Inclusion", subtitle: "Public data on access to financial services." },
      { slug: "me-oversight", title: "Compliance & Bank–Fintech Oversight", subtitle: "Supervisory expectations for partnerships." },
    ],
  },
  {
    title: "Roadmap",
    pages: [
      { slug: "roadmap-may-june", title: "May–June: Product Stabilization", subtitle: "Getting the core product launch-ready." },
      { slug: "roadmap-jul-aug", title: "July–August: Closed Beta + Integration", subtitle: "Real users, real feedback, real partners." },
      { slug: "roadmap-sept", title: "September: Public Beta + Polish", subtitle: "Opening the door wider, getting launch-ready." },
      { slug: "roadmap-oct", title: "October: Global Launch + Flow Summit", subtitle: "Going live, in front of the world." },
      { slug: "roadmap-vision", title: "Product Vision & Strategic Pillars", subtitle: "The flywheel and the five pillars." },
    ],
  },
  {
    title: "Reference",
    pages: [
      { slug: "faqs", title: "FAQs", subtitle: "Frequently asked questions about U-Topia." },
      { slug: "glossary", title: "Glossary", subtitle: "Key terms used across U-Topia documentation." },
      { slug: "references", title: "References", subtitle: "External sources and supporting research." },
    ],
  },
];

export const flatPages = docsStructure.flatMap((s) =>
  s.pages.map((p) => ({ ...p, section: s.title })),
);
