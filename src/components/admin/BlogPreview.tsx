import { Calendar, Clock, User } from 'lucide-react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

interface BlogPreviewProps {
  title: string;
  excerpt: string;
  content: string;
  imageUrl: string;
  category: string;
  author: string;
  readTime: string;
  publishedAt: string;
}

const BlogPreview = ({
  title,
  excerpt,
  content,
  imageUrl,
  category,
  author,
  readTime,
  publishedAt,
}: BlogPreviewProps) => {
  // Check if content looks like HTML (from rich text editor) or Markdown
  const isHtmlContent = content.startsWith('<') || content.includes('<p>') || content.includes('<h');

  return (
    <div className="bg-background min-h-full overflow-auto">
      {/* Hero Section */}
      <div className="relative pb-4">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent" />
        
        <div className="relative z-10 p-6">
          {/* Category Badge */}
          {category && (
            <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium mb-4">
              {category}
            </span>
          )}
          
          {/* Title */}
          <h1 className="text-2xl font-display font-bold text-foreground mb-4 leading-tight">
            {title || 'Untitled Post'}
          </h1>
          
          {/* Meta Info */}
          <div className="flex flex-wrap items-center gap-3 text-xs text-muted-foreground mb-6">
            <span className="flex items-center gap-1">
              <User className="w-3 h-3 text-primary/70" />
              {author || 'Author'}
            </span>
            <span className="flex items-center gap-1">
              <Calendar className="w-3 h-3 text-primary/70" />
              {publishedAt ? new Date(publishedAt).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' }) : 'Date'}
            </span>
            <span className="flex items-center gap-1">
              <Clock className="w-3 h-3 text-primary/70" />
              {readTime || '5 min read'}
            </span>
          </div>
        </div>
      </div>

      {/* Featured Image */}
      {imageUrl && (
        <div className="px-6 pb-6">
          <div className="relative rounded-xl overflow-hidden border border-white/10">
            <img 
              src={imageUrl} 
              alt={title}
              className="w-full h-48 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/50 to-transparent" />
          </div>
        </div>
      )}

      {/* Content */}
      <div className="px-6 pb-8">
        {isHtmlContent ? (
          <article 
            className="blog-content prose prose-sm max-w-none prose-headings:text-foreground prose-p:text-muted-foreground prose-a:text-primary prose-strong:text-foreground"
            dangerouslySetInnerHTML={{ __html: content }}
          />
        ) : content ? (
          <article className="blog-content">
            <ReactMarkdown 
              remarkPlugins={[remarkGfm]}
              components={{
                h1: ({ children }) => (
                  <h1 className="text-xl font-display font-bold text-foreground mt-8 mb-4 first:mt-0">
                    {children}
                  </h1>
                ),
                h2: ({ children }) => (
                  <h2 className="text-lg font-display font-bold text-foreground mt-8 mb-4">
                    {children}
                  </h2>
                ),
                h3: ({ children }) => (
                  <h3 className="text-base font-display font-semibold text-foreground mt-6 mb-3">
                    {children}
                  </h3>
                ),
                p: ({ children }) => (
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                    {children}
                  </p>
                ),
                strong: ({ children }) => (
                  <strong className="font-semibold text-foreground">{children}</strong>
                ),
                a: ({ href, children }) => (
                  <a 
                    href={href} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-primary underline underline-offset-4 hover:text-primary/80 transition-colors"
                  >
                    {children}
                  </a>
                ),
                ul: ({ children }) => (
                  <ul className="my-4 ml-4 space-y-2 list-disc marker:text-primary text-sm">
                    {children}
                  </ul>
                ),
                ol: ({ children }) => (
                  <ol className="my-4 ml-4 space-y-2 list-decimal marker:text-primary text-sm">
                    {children}
                  </ol>
                ),
                li: ({ children }) => (
                  <li className="text-sm text-muted-foreground leading-relaxed pl-1">
                    {children}
                  </li>
                ),
                blockquote: ({ children }) => (
                  <blockquote className="my-6 border-l-4 border-primary bg-card/50 py-3 px-4 rounded-r-lg text-sm">
                    {children}
                  </blockquote>
                ),
                code: ({ children }) => (
                  <code className="px-1 py-0.5 rounded bg-card text-primary text-xs font-mono">
                    {children}
                  </code>
                ),
                pre: ({ children }) => (
                  <pre className="my-4 p-3 rounded-lg bg-card border border-border overflow-x-auto text-xs">
                    {children}
                  </pre>
                ),
              }}
            >
              {content}
            </ReactMarkdown>
          </article>
        ) : excerpt ? (
          <p className="text-sm text-muted-foreground leading-relaxed">
            {excerpt}
          </p>
        ) : (
          <p className="text-sm text-muted-foreground/50 italic">
            Start writing content to see a preview...
          </p>
        )}
      </div>
    </div>
  );
};

export default BlogPreview;
