import { Link } from "react-router-dom";
import { ArrowLeft, Globe2, Flag, ArrowRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const variants = [
  {
    icon: Globe2,
    title: "International Consumers",
    description: "Terms of Service applicable to consumers outside the United States.",
    to: "/terms-of-service/international",
  },
  {
    icon: Flag,
    title: "US Consumers",
    description: "Terms of Service applicable to consumers in the United States.",
    to: "/terms-of-service/us",
  },
];

const TermsOfService = () => {
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

          <h1 className="text-3xl md:text-4xl font-semibold mb-3">Terms of Service</h1>
          <p className="text-muted-foreground text-lg mb-16">
            Select the version of the Terms of Service that applies to you.
          </p>

          <div className="space-y-4">
            {variants.map((v) => {
              const Icon = v.icon;
              return (
                <Link
                  key={v.to}
                  to={v.to}
                  className="group flex items-start gap-5 p-6 rounded-xl border border-border bg-muted/20 hover:bg-muted/40 hover:border-primary/40 transition-all"
                >
                  <div className="flex-shrink-0 w-11 h-11 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                    <Icon className="h-5 w-5" />
                  </div>
                  <div className="flex-grow">
                    <h2 className="text-lg font-semibold text-foreground mb-1">{v.title}</h2>
                    <p className="text-muted-foreground text-sm leading-relaxed">{v.description}</p>
                  </div>
                  <ArrowRight className="h-5 w-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all flex-shrink-0 mt-3" />
                </Link>
              );
            })}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default TermsOfService;
