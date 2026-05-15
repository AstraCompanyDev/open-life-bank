import { Link } from "react-router-dom";
import DocsLayout from "@/components/docs/DocsLayout";
import { Wallet, CreditCard, Coins, Globe, ShieldCheck, Map, ArrowRight } from "lucide-react";

const cards = [
  { icon: Wallet, title: "Web3 Wallet", desc: "Non-custodial design, user-controlled credentials, recovery models.", to: "/docs/non-custodial-meaning" },
  { icon: CreditCard, title: "Visa-Linked Access", desc: "Account and payment credentials via regulated partners.", to: "/docs/visa-linked-meaning" },
  { icon: Coins, title: "Fiat & Crypto", desc: "One experience for everyday spending and digital assets.", to: "/docs/fiat-features" },
  { icon: Globe, title: "Global Access", desc: "Eligibility, supported jurisdictions, financial inclusion.", to: "/docs/global-direction" },
  { icon: ShieldCheck, title: "Security & Compliance", desc: "KYC, AML, fraud monitoring, and risk controls.", to: "/docs/security-principles" },
  { icon: Map, title: "Roadmap", desc: "From May stabilization to October global launch.", to: "/docs/roadmap-may-june" },
];

export default function DocsHome() {
  return (
    <DocsLayout>
      <div className="py-8">
        <h1 className="text-5xl md:text-6xl font-bold tracking-tight mb-4">U-Topia Documentation</h1>
        <p className="text-xl text-muted-foreground max-w-2xl mb-8">
          Web3 wallet ownership and Visa-linked financial access in one app. Product and strategy documentation for the U-Topia Alpha.
        </p>
        <div className="flex flex-wrap gap-3 mb-16">
          <Link to="/docs/what-is-utopia" className="inline-flex items-center gap-2 h-12 px-7 rounded-full bg-primary text-primary-foreground font-semibold text-base tracking-tight shadow-sm hover:opacity-90 hover:scale-[1.02] active:scale-100 transition-all">
            Get Started <ArrowRight className="h-4 w-4" />
          </Link>
          <Link to="/docs/roadmap-may-june" className="inline-flex items-center gap-2 h-12 px-7 rounded-full border border-border bg-background text-foreground font-semibold text-base tracking-tight hover:bg-secondary hover:border-primary/50 transition-all">
            View Roadmap
          </Link>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {cards.map((c) => (
            <Link key={c.title} to={c.to} className="group p-6 rounded-2xl border border-border hover:border-accent transition-all hover:shadow-md">
              <c.icon className="h-6 w-6 text-accent mb-3" />
              <div className="font-semibold text-lg mb-1.5">{c.title}</div>
              <div className="text-sm text-muted-foreground mb-4">{c.desc}</div>
              <div className="text-sm text-accent font-medium inline-flex items-center gap-1 group-hover:gap-2 transition-all">
                Read <ArrowRight className="h-3.5 w-3.5" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </DocsLayout>
  );
}
