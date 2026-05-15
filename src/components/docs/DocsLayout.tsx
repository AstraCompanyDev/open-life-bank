import { useEffect, useMemo, useState } from "react";
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import { Menu, Search, X, ChevronRight } from "lucide-react";
import Fuse from "fuse.js";
import { docsStructure, flatPages } from "@/docs/structure";
import { docsContent } from "@/docs/content";
import { cn } from "@/lib/utils";
import utopiaLogo from "@/assets/logo-utopia.avif";

interface Props {
  children: React.ReactNode;
  toc?: { id: string; text: string }[];
  sectionTitle?: string;
  pageTitle?: string;
}

const searchIndex = flatPages.map((p) => ({
  ...p,
  body: (docsContent[p.slug] || [])
    .map((b: any) => (b.text ? b.text : b.items ? b.items.join(" ") : b.steps ? b.steps.join(" ") : ""))
    .join(" "),
}));

const fuse = new Fuse(searchIndex, {
  keys: ["title", "subtitle", "body", "section"],
  threshold: 0.35,
  ignoreLocation: true,
});

export default function DocsLayout({ children, toc, sectionTitle, pageTitle }: Props) {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [query, setQuery] = useState("");

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "/" && document.activeElement?.tagName !== "INPUT") {
        e.preventDefault();
        setSearchOpen(true);
      }
      if (e.key === "Escape") setSearchOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  useEffect(() => setMobileOpen(false), [pathname]);

  const results = useMemo(() => (query ? fuse.search(query).slice(0, 8) : []), [query]);

  const currentIdx = flatPages.findIndex((p) => pathname.endsWith(p.slug));
  const prev = currentIdx > 0 ? flatPages[currentIdx - 1] : null;
  const next = currentIdx >= 0 && currentIdx < flatPages.length - 1 ? flatPages[currentIdx + 1] : null;

  return (
    <div className="min-h-screen bg-background text-foreground font-[Gotham,sans-serif]">
      {/* Top navbar */}
      <header className="sticky top-0 z-40 border-b border-border bg-background/80 backdrop-blur">
        <div className="flex items-center h-14 px-4 gap-4">
          <button className="md:hidden" onClick={() => setMobileOpen(true)} aria-label="Open menu">
            <Menu className="h-5 w-5" />
          </button>
          <Link to="/docs" className="flex items-center gap-2 shrink-0">
            <img src={utopiaLogo} alt="U-topia" className="h-6 w-auto" />
            <span className="text-sm font-semibold tracking-tight hidden sm:inline">Docs</span>
          </Link>
          <div className="flex-1 flex justify-center max-w-2xl mx-auto">
            <button
              onClick={() => setSearchOpen(true)}
              className="w-full max-w-md flex items-center gap-2 h-9 px-3 rounded-lg border border-border bg-secondary/40 text-muted-foreground text-sm hover:bg-secondary"
            >
              <Search className="h-4 w-4" />
              <span className="flex-1 text-left">Search documentation…</span>
              <kbd className="text-xs px-1.5 py-0.5 rounded border border-border bg-background">/</kbd>
            </button>
          </div>
          <nav className="hidden md:flex items-center gap-5 text-sm">
            <a href="https://www.u-topia.com" className="text-muted-foreground hover:text-foreground">u-topia.com</a>
            <a href="https://www.u-topia.com/contact" className="text-muted-foreground hover:text-foreground">Contact</a>
            <Link to="/docs/roadmap-may-june" className="text-muted-foreground hover:text-foreground">Roadmap</Link>
          </nav>
        </div>
      </header>

      <div className="flex">
        {/* Sidebar */}
        <aside
          className={cn(
            "fixed md:sticky top-14 z-30 w-72 h-[calc(100vh-3.5rem)] overflow-y-auto border-r border-border bg-background transition-transform",
            mobileOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0",
          )}
        >
          <div className="md:hidden flex justify-end p-3">
            <button onClick={() => setMobileOpen(false)}><X className="h-5 w-5" /></button>
          </div>
          <nav className="px-4 pb-12 pt-4 space-y-6">
            {docsStructure.map((section) => (
              <div key={section.title}>
                <div className="text-[11px] font-bold tracking-wider uppercase text-muted-foreground mb-2 px-2">
                  {section.title}
                </div>
                <ul className="space-y-0.5">
                  {section.pages.map((page) => (
                    <li key={page.slug}>
                      <NavLink
                        to={`/docs/${page.slug}`}
                        className={({ isActive }) =>
                          cn(
                            "block px-2 py-1.5 text-sm rounded-md transition-colors border-l-2",
                            isActive
                              ? "border-accent text-foreground bg-accent/5 font-medium"
                              : "border-transparent text-muted-foreground hover:text-foreground hover:bg-secondary/40",
                          )
                        }
                      >
                        {page.title}
                      </NavLink>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </nav>
        </aside>

        {mobileOpen && (
          <div className="fixed inset-0 z-20 bg-black/40 md:hidden" onClick={() => setMobileOpen(false)} />
        )}

        {/* Content */}
        <main className="flex-1 min-w-0">
          <div className="flex">
            <div className="flex-1 min-w-0 px-6 lg:px-12 py-8 max-w-[860px] mx-auto w-full">
              {sectionTitle && pageTitle && (
                <nav className="text-xs text-muted-foreground mb-4 flex items-center gap-1.5">
                  <Link to="/docs" className="hover:text-foreground">Docs</Link>
                  <ChevronRight className="h-3 w-3" />
                  <span>{sectionTitle}</span>
                  <ChevronRight className="h-3 w-3" />
                  <span className="text-foreground">{pageTitle}</span>
                </nav>
              )}
              {children}

              {/* Prev/Next */}
              {(prev || next) && (
                <div className="grid grid-cols-2 gap-4 mt-16 pt-8 border-t border-border">
                  <div>
                    {prev && (
                      <Link to={`/docs/${prev.slug}`} className="block p-4 rounded-xl border border-border hover:border-accent transition-colors">
                        <div className="text-xs text-muted-foreground">← Previous</div>
                        <div className="text-sm font-medium mt-1">{prev.title}</div>
                      </Link>
                    )}
                  </div>
                  <div>
                    {next && (
                      <Link to={`/docs/${next.slug}`} className="block p-4 rounded-xl border border-border hover:border-accent transition-colors text-right">
                        <div className="text-xs text-muted-foreground">Next →</div>
                        <div className="text-sm font-medium mt-1">{next.title}</div>
                      </Link>
                    )}
                  </div>
                </div>
              )}
            </div>

            {/* TOC */}
            {toc && toc.length > 0 && (
              <aside className="hidden xl:block w-60 shrink-0 sticky top-14 self-start h-[calc(100vh-3.5rem)] overflow-y-auto py-8 pr-6">
                <div className="text-[11px] font-bold tracking-wider uppercase text-muted-foreground mb-3">On this page</div>
                <ul className="space-y-2 text-sm">
                  {toc.map((h) => (
                    <li key={h.id}>
                      <a href={`#${h.id}`} className="text-muted-foreground hover:text-foreground block">
                        {h.text}
                      </a>
                    </li>
                  ))}
                </ul>
              </aside>
            )}
          </div>

          <Footer />
        </main>
      </div>

      {/* Search modal */}
      {searchOpen && (
        <div className="fixed inset-0 z-50 bg-black/60 flex items-start justify-center pt-24 px-4" onClick={() => setSearchOpen(false)}>
          <div className="bg-background rounded-2xl border border-border w-full max-w-xl shadow-2xl overflow-hidden" onClick={(e) => e.stopPropagation()}>
            <div className="flex items-center gap-2 p-4 border-b border-border">
              <Search className="h-4 w-4 text-muted-foreground" />
              <input
                autoFocus
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search documentation…"
                className="flex-1 bg-transparent outline-none text-sm"
              />
              <kbd className="text-xs px-1.5 py-0.5 rounded border border-border">esc</kbd>
            </div>
            <div className="max-h-96 overflow-y-auto">
              {results.length === 0 && query && (
                <div className="p-6 text-sm text-muted-foreground text-center">No results.</div>
              )}
              {results.map((r) => (
                <button
                  key={r.item.slug}
                  onClick={() => { navigate(`/docs/${r.item.slug}`); setSearchOpen(false); setQuery(""); }}
                  className="w-full text-left p-3 hover:bg-secondary border-b border-border last:border-0"
                >
                  <div className="text-xs text-muted-foreground">{r.item.section}</div>
                  <div className="text-sm font-medium">{r.item.title}</div>
                  <div className="text-xs text-muted-foreground line-clamp-1">{r.item.subtitle}</div>
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
