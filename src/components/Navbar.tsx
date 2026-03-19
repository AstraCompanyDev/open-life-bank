import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import logoUtopia from "@/assets/logo-utopia.avif";

const navLinks = [
  { label: "About", to: "/about" },
  { label: "Cards", to: "/cards" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50">
      <div className="mx-auto px-6 sm:px-8 lg:px-12 xl:px-16">
        <div className="flex items-center h-16">
          {/* Logo + Core Pages (left) */}
          <div className="hidden md:flex items-center gap-8">
            <Link to="/" className="flex items-center gap-2 mr-2">
              <img src={logoUtopia} alt="U-topia" className="h-5 w-auto brightness-0 invert" />
            </Link>
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={`text-sm font-medium transition-colors ${
                  location.pathname === link.to
                    ? "text-white"
                    : "text-white/70 hover:text-white"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Mobile logo */}
          <Link to="/" className="md:hidden flex items-center gap-2">
            <img src={logoUtopia} alt="U-topia" className="h-5 w-auto brightness-0 invert" />
          </Link>

          {/* Right side: secondary links + CTA */}
          <div className="hidden md:flex items-center gap-6 ml-auto">
            <Link
              to="/blog"
              className={`text-sm font-medium transition-colors ${
                location.pathname === "/blog"
                  ? "text-white"
                  : "text-white/70 hover:text-white"
              }`}
            >
              Blog
            </Link>
            <Link
              to="/open-account"
              className="inline-flex items-center px-5 py-2.5 rounded-full bg-foreground text-background text-sm font-semibold hover:opacity-90 transition-opacity"
            >
              Open an account
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-foreground"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden py-6 border-t border-border animate-fade-in">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className={`text-sm font-medium transition-colors py-2 ${
                    location.pathname === link.to
                      ? "text-primary"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <Link
                to="/open-account"
                className="inline-flex items-center justify-center px-5 py-2.5 rounded-full bg-foreground text-background text-sm font-semibold mt-2"
                onClick={() => setIsOpen(false)}
              >
                Open an account
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
