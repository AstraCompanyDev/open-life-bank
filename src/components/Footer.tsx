import { Link } from "react-router-dom";
import { Linkedin, Instagram } from "lucide-react";
import utopiaLogo from "@/assets/logo-utopia.avif";

const XIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" className={className} fill="currentColor">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

const socialLinks = [
  { label: "Twitter", href: "https://x.com/UCoinOfficial", icon: XIcon },
  { label: "LinkedIn", href: "https://www.linkedin.com/company/u-topia/", icon: Linkedin },
  { label: "Instagram", href: "https://www.instagram.com/ucoinofficial", icon: Instagram },
];

const legalLinks = [
  { label: "Privacy Policy", href: "https://docsend.com/view/3wjptrvw2c35gj8p" },
  { label: "Terms of Service", href: "https://docsend.com/view/pehz2xqa23xw3pyc" },
];

const Footer = () => {
  return (
    <footer className="py-16 bg-background border-t border-border">
      <div className="container mx-auto px-6 sm:px-8 lg:px-12 xl:px-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <img src={utopiaLogo} alt="U-topia" className="h-10 w-auto brightness-0 invert" />
            </Link>
            <p className="text-muted-foreground mb-6 max-w-xs">
              U-topia puts YOU first - connecting modern banking, digital assets, and cross-chain opportunities in one universal wallet.
            </p>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="font-semibold mb-4">Follow U-topia</h4>
            <ul className="space-y-3">
              {socialLinks.map((link) => {
                const Icon = link.icon;
                return (
                  <li key={link.label}>
                    <a href={link.href} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors group">
                      <Icon className="w-4 h-4 group-hover:scale-110 transition-transform" />
                      {link.label}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-semibold mb-4">Legal</h4>
            <ul className="space-y-3">
              {legalLinks.map((link) => (
                <li key={link.label}>
                  <a href={link.href} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                    {link.label}
                  </a>
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
