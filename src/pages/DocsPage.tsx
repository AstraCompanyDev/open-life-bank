import { useParams, Navigate } from "react-router-dom";
import DocsLayout from "@/components/docs/DocsLayout";
import { docsContent, type Block } from "@/docs/content";
import { docsStructure, flatPages } from "@/docs/structure";
import { cn } from "@/lib/utils";
import { useEffect } from "react";

const slugify = (s: string) => s.toLowerCase().replace(/[^\w]+/g, "-").replace(/(^-|-$)/g, "");

function CalloutBox({ variant, title, text }: { variant: "warning" | "note" | "danger"; title?: string; text: string }) {
  const styles = {
    warning: "bg-amber-50 border-amber-300 text-amber-950 dark:bg-amber-950/30 dark:text-amber-100",
    note: "bg-blue-50 border-blue-300 text-blue-950 dark:bg-blue-950/30 dark:text-blue-100",
    danger: "bg-red-50 border-red-300 text-red-950 dark:bg-red-950/30 dark:text-red-100",
  } as const;
  const labels = { warning: "Disclaimer", note: "Note", danger: "Warning" };
  return (
    <div className={cn("my-6 rounded-xl border-l-4 p-4", styles[variant])}>
      <div className="text-xs font-bold uppercase tracking-wider mb-1">{title || labels[variant]}</div>
      <div className="text-sm leading-relaxed">{text}</div>
    </div>
  );
}

function FlowDiagram({ steps }: { steps: string[] }) {
  return (
    <div className="my-8 space-y-2">
      {steps.map((s, i) => (
        <div key={i} className="flex flex-col items-center">
          <div className="w-full max-w-md rounded-xl border-2 border-border bg-card px-5 py-3 text-center text-sm font-medium shadow-sm">
            {s}
          </div>
          {i < steps.length - 1 && (
            <div className="text-accent text-2xl leading-none my-1">↓</div>
          )}
        </div>
      ))}
    </div>
  );
}

function renderBlock(b: Block, idx: number) {
  switch (b.type) {
    case "p":
      return <p key={idx} className="my-4 leading-7 text-foreground/85">{b.text}</p>;
    case "h2": {
      const id = slugify(b.text);
      return <h2 key={idx} id={id} className="scroll-mt-20 text-2xl font-bold mt-10 mb-3 tracking-tight">{b.text}</h2>;
    }
    case "h3": {
      const id = slugify(b.text);
      return <h3 key={idx} id={id} className="scroll-mt-20 text-lg font-semibold mt-8 mb-2 tracking-tight">{b.text}</h3>;
    }
    case "ul":
      return <ul key={idx} className="my-4 space-y-2 list-disc pl-5 text-foreground/85">{b.items.map((it, i) => <li key={i} className="leading-7">{it}</li>)}</ul>;
    case "ol":
      return <ol key={idx} className="my-4 space-y-2 list-decimal pl-5 text-foreground/85">{b.items.map((it, i) => <li key={i} className="leading-7">{it}</li>)}</ol>;
    case "callout":
      return <CalloutBox key={idx} {...b} />;
    case "table":
      return (
        <div key={idx} className="my-6 overflow-x-auto rounded-xl border border-border">
          <table className="w-full text-sm">
            <thead className="bg-secondary/60">
              <tr>{b.headers.map((h) => <th key={h} className="text-left px-4 py-2.5 font-semibold border-b border-border">{h}</th>)}</tr>
            </thead>
            <tbody>
              {b.rows.map((r, i) => (
                <tr key={i} className={i % 2 ? "bg-secondary/20" : ""}>
                  {r.map((c, j) => <td key={j} className="px-4 py-2.5 border-b border-border last:border-0 align-top">{c}</td>)}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
    case "flow":
      return <FlowDiagram key={idx} steps={b.steps} />;
    case "quote":
      return <blockquote key={idx} className="my-6 border-l-4 border-accent pl-4 italic text-lg text-foreground/90">{b.text}</blockquote>;
    case "link":
      return (
        <p key={idx} className="my-2">
          <a href={b.href} target="_blank" rel="noopener noreferrer" className="text-accent hover:underline break-all">
            {b.label} ↗
          </a>
        </p>
      );
  }
}

export default function DocsPage() {
  const { slug } = useParams();
  const page = flatPages.find((p) => p.slug === slug);
  const blocks = slug ? docsContent[slug] : null;

  useEffect(() => { window.scrollTo(0, 0); }, [slug]);

  if (!page || !blocks) return <Navigate to="/utspecs" replace />;

  const section = docsStructure.find((s) => s.pages.some((p) => p.slug === slug));
  const toc = blocks
    .filter((b): b is Extract<Block, { type: "h2" | "h3" }> => b.type === "h2" || b.type === "h3")
    .map((b) => ({ id: slugify(b.text), text: b.text }));

  return (
    <DocsLayout toc={toc} sectionTitle={section?.title} pageTitle={page.title}>
      <h1 className="text-4xl font-bold tracking-tight mb-2">{page.title}</h1>
      <p className="text-lg text-muted-foreground mb-8">{page.subtitle}</p>
      <div className="prose-utopia">
        {blocks.map(renderBlock)}
      </div>
    </DocsLayout>
  );
}
