import { Link } from "react-router-dom";
import utopiaLogo from "@/assets/logo-utopia.avif";

const legalLinks = [
  { label: "Privacy Policy", to: "/privacy" },
  { label: "Terms of Service", to: "/terms" },
];

const Footer = () => {
  return (
    <footer className="py-16 bg-background border-t border-border">
      <div className="container mx-auto px-6 sm:px-8 lg:px-12 xl:px-16">
        <div className="grid md:grid-cols-2 gap-12">
          {/* Brand */}
          <div>
            <Link to="/" className="flex items-center gap-2 mb-4">
              <img src={utopiaLogo} alt="U-topia" className="h-10 w-auto brightness-0" />
            </Link>
            <p className="text-muted-foreground mb-6 max-w-xs">
              U-topia is built around you — bringing together modern banking, digital assets, and cross-chain access into one seamless, all-in-one wallet.
            </p>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-semibold mb-4">Legal</h4>
            <ul className="space-y-3">
              {legalLinks.map((link) => (
                <li key={link.label}>
                  {"to" in link ? (
                    <Link to={link.to} className="text-muted-foreground hover:text-primary transition-colors">
                      {link.label}
                    </Link>
                  ) : (
                    <a href={link.href} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                      {link.label}
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-border flex justify-center">
          <p className="text-sm text-muted-foreground">© U-topia 2026, All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
