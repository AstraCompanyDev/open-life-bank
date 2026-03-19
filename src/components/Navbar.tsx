import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import logoUtopia from "@/assets/logo-utopia.avif";

const navLinks = [
  { label: "About", to: "/about" },
  { label: "Cards", to: "/cards" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-2 z-50 left-10 right-10 sm:left-16 sm:right-16 lg:left-24 lg:right-24 xl:left-32 xl:right-32 transition-all duration-300 rounded-2xl ${
        scrolled ? "bg-white/90 backdrop-blur-md shadow-lg" : ""
      }`}
    >
      <div className="mx-auto px-5 sm:px-6">
        <div className="flex items-center h-24">
          {/* Logo (left) */}
          <div className="hidden md:flex items-center">
            <Link to="/" className="flex items-center gap-2">
              <img
                src={logoUtopia}
                alt="U-topia"
                className={`h-7 w-auto transition-all duration-300 ${
                  scrolled ? "brightness-0" : "brightness-0 invert"
                }`}
              />
            </Link>
          </div>

          {/* Mobile logo */}
          <Link to="/" className="md:hidden flex items-center gap-2">
            <img
              src={logoUtopia}
              alt="U-topia"
              className={`h-7 w-auto transition-all duration-300 ${
                scrolled ? "brightness-0" : "brightness-0 invert"
              }`}
            />
          </Link>

          {/* Right side: nav links + CTA */}
          <div className="hidden md:flex items-center gap-8 ml-auto">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={`text-lg font-medium transition-colors ${
                  scrolled
                    ? location.pathname === link.to
                      ? "text-foreground"
                      : "text-muted-foreground hover:text-foreground"
                    : location.pathname === link.to
                      ? "text-white"
                      : "text-white/70 hover:text-white"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              to="/blog"
              className={`text-lg font-medium transition-colors ${
                scrolled
                  ? location.pathname === "/blog"
                    ? "text-foreground"
                    : "text-muted-foreground hover:text-foreground"
                  : location.pathname === "/blog"
                    ? "text-white"
                    : "text-white/70 hover:text-white"
              }`}
            >
              Blog
            </Link>
            <Link
              to="/open-account"
              className={`inline-flex items-center px-6 py-3 rounded-full text-lg font-semibold hover:opacity-90 transition-all duration-300 ${
                scrolled
                  ? "bg-foreground text-background"
                  : "bg-white text-black"
              }`}
            >
              Open an account
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden ml-auto"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen
              ? <X size={24} className={scrolled ? "text-foreground" : "text-white"} />
              : <Menu size={24} className={scrolled ? "text-foreground" : "text-white"} />
            }
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
