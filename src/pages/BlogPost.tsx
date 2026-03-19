import { useParams, Link } from "react-router-dom";
import { ArrowLeft, Calendar, Clock, User, Loader2 } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { useQuery } from "@tanstack/react-query";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";

interface BlogPost {
  id: string;
  title: string;
  excerpt: string | null;
  slug: string;
  category: string;
  author: string;
  published_at: string;
  read_time: string | null;
  image_url: string | null;
  source_url: string | null;
  content: string | null;
  featured: boolean;
}

const fetchPost = async (slug: string): Promise<BlogPost | null> => {
  const { data, error } = await supabase
    .from("blog_posts")
    .select("*")
    .eq("slug", slug)
    .maybeSingle();

  if (error) throw error;
  return data;
};

interface RelatedPost {
  id: string;
  title: string;
  slug: string;
  category: string;
  image_url: string | null;
  published_at: string;
}

const fetchRelatedPosts = async (category: string, excludeId: string): Promise<RelatedPost[]> => {
  const { data, error } = await supabase
    .from("blog_posts")
    .select("id, title, slug, category, image_url, published_at")
    .eq("category", category)
    .neq("id", excludeId)
    .order("published_at", { ascending: false })
    .limit(3);

  if (error) throw error;
  return data || [];
};

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();

  const { data: post, isLoading: isLoadingPost } = useQuery({
    queryKey: ["blog-post", slug],
    queryFn: () => fetchPost(slug!),
    enabled: !!slug,
    staleTime: 5 * 60 * 1000,
  });

  const { data: relatedPosts = [] } = useQuery<RelatedPost[]>({
    queryKey: ["related-posts", post?.category, post?.id],
    queryFn: () => fetchRelatedPosts(post!.category, post!.id),
    enabled: !!post,
    staleTime: 5 * 60 * 1000,
  });

  if (isLoadingPost) {
    return (
      <main className="min-h-screen bg-background">
        <Navbar />
        <div className="pt-24 pb-16">
          <div className="container mx-auto px-6 sm:px-8 lg:px-12 xl:px-16">
            <div className="flex items-center justify-center py-32">
              <Loader2 className="w-8 h-8 animate-spin text-primary" />
              <span className="ml-3 text-muted-foreground">Loading article...</span>
            </div>
          </div>
        </div>
        <Footer />
      </main>
    );
  }

  if (!post) {
    return (
      <main className="min-h-screen bg-background">
        <Navbar />
        <div className="pt-24 pb-16">
          <div className="container mx-auto px-6 sm:px-8 lg:px-12 xl:px-16">
            <div className="text-center py-32">
              <h1 className="text-3xl font-display font-bold text-foreground mb-4">
                Article Not Found
              </h1>
              <p className="text-muted-foreground mb-8">
                The article you're looking for doesn't exist or has been removed.
              </p>
              <Link 
                to="/blog"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-colors"
              >
                <ArrowLeft className="w-4 h-4" />
                Back to Blog
              </Link>
            </div>
          </div>
        </div>
        <Footer />
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-24 pb-8 relative overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent" />
        <div className="absolute top-20 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute top-40 right-1/4 w-64 h-64 bg-accent/10 rounded-full blur-3xl" />
        
        <div className="container mx-auto px-6 sm:px-8 lg:px-12 xl:px-16 relative z-10">
          {/* Back Link */}
          <Link 
            to="/blog"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Blog
          </Link>

          <div className="max-w-4xl mx-auto">
            {/* Category Badge */}
            <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
              {post.category}
            </span>
            
            {/* Title */}
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground mb-6 leading-tight">
              {post.title}
            </h1>
            
            {/* Meta Info */}
            <div className="flex flex-wrap items-center gap-4 md:gap-6 text-sm text-muted-foreground mb-8">
              <span className="flex items-center gap-2">
                <User className="w-4 h-4 text-primary/70" />
                {post.author}
              </span>
              <span className="flex items-center gap-2">
                <Calendar className="w-4 h-4 text-primary/70" />
                {new Date(post.published_at).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
              </span>
              <span className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-primary/70" />
                {post.read_time}
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Image */}
      <section className="pb-12">
        <div className="container mx-auto px-6 sm:px-8 lg:px-12 xl:px-16">
          <div className="max-w-4xl mx-auto">
            <div className="relative rounded-2xl overflow-hidden border border-white/10">
              <img 
                src={post.image_url || "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=1200&auto=format&fit=crop&q=80"} 
                alt={post.title}
                className="w-full h-[300px] md:h-[400px] lg:h-[500px] object-cover"
                loading="eager"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/50 to-transparent" />
            </div>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="pb-16">
        <div className="container mx-auto px-6 sm:px-8 lg:px-12 xl:px-16">
          <div className="max-w-3xl mx-auto">
            {/* Full Article Content */}
            {post.content ? (
              <article className="blog-content">
                <ReactMarkdown 
                  remarkPlugins={[remarkGfm]}
                  components={{
                    h1: ({ children }) => (
                      <h1 className="text-3xl md:text-4xl font-display font-bold text-foreground mt-12 mb-6 first:mt-0">
                        {children}
                      </h1>
                    ),
                    h2: ({ children }) => (
                      <h2 className="text-2xl md:text-3xl font-display font-bold text-foreground mt-12 mb-6">
                        {children}
                      </h2>
                    ),
                    h3: ({ children }) => (
                      <h3 className="text-xl md:text-2xl font-display font-semibold text-foreground mt-10 mb-4">
                        {children}
                      </h3>
                    ),
                    h4: ({ children }) => (
                      <h4 className="text-lg font-display font-semibold text-foreground mt-8 mb-3">
                        {children}
                      </h4>
                    ),
                    p: ({ children }) => (
                      <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-6">
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
                      <ul className="my-6 ml-6 space-y-3 list-disc marker:text-primary">
                        {children}
                      </ul>
                    ),
                    ol: ({ children }) => (
                      <ol className="my-6 ml-6 space-y-3 list-decimal marker:text-primary">
                        {children}
                      </ol>
                    ),
                    li: ({ children }) => (
                      <li className="text-base md:text-lg text-muted-foreground leading-relaxed pl-2">
                        {children}
                      </li>
                    ),
                    blockquote: ({ children }) => (
                      <blockquote className="my-8 border-l-4 border-primary bg-card/50 py-4 px-6 rounded-r-lg">
                        {children}
                      </blockquote>
                    ),
                    hr: () => (
                      <hr className="my-10 border-t border-border" />
                    ),
                    table: ({ children }) => (
                      <div className="my-8 overflow-x-auto rounded-lg border border-border">
                        <table className="w-full text-left">
                          {children}
                        </table>
                      </div>
                    ),
                    thead: ({ children }) => (
                      <thead className="bg-card border-b border-border">
                        {children}
                      </thead>
                    ),
                    th: ({ children }) => (
                      <th className="px-4 py-3 text-foreground font-semibold">
                        {children}
                      </th>
                    ),
                    td: ({ children }) => (
                      <td className="px-4 py-3 text-muted-foreground border-t border-border">
                        {children}
                      </td>
                    ),
                    code: ({ children }) => (
                      <code className="px-1.5 py-0.5 rounded bg-card text-primary text-sm font-mono">
                        {children}
                      </code>
                    ),
                    pre: ({ children }) => (
                      <pre className="my-6 p-4 rounded-lg bg-card border border-border overflow-x-auto">
                        {children}
                      </pre>
                    ),
                  }}
                >
                  {post.content}
                </ReactMarkdown>
              </article>
            ) : (
              <div className="mb-12">
                <p className="text-xl text-muted-foreground leading-relaxed">
                  {post.excerpt}
                </p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <section className="py-16 border-t border-border">
          <div className="container mx-auto px-6 sm:px-8 lg:px-12 xl:px-16">
            <h2 className="text-2xl md:text-3xl font-display font-bold text-foreground mb-8 text-center">
              Related Articles
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {relatedPosts.map((relatedPost) => (
                <Link
                  key={relatedPost.id}
                  to={`/blog/${relatedPost.slug}`}
                  className="group relative rounded-2xl overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-primary/20 border border-white/10 bg-card/80 backdrop-blur-xl"
                >
                  <div className="relative h-40 overflow-hidden">
                    <img 
                      src={relatedPost.image_url || "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=800&auto=format&fit=crop&q=60"} 
                      alt={relatedPost.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent" />
                  </div>
                  <div className="relative p-5">
                    <span className="text-primary text-xs font-medium">{relatedPost.category}</span>
                    <h3 className="text-base font-display font-bold text-foreground mt-2 line-clamp-2 group-hover:text-primary transition-colors">
                      {relatedPost.title}
                    </h3>
                    <div className="flex items-center gap-3 text-xs text-muted-foreground mt-3">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3 h-3" />
                        {new Date(relatedPost.published_at).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <Footer />
      <ScrollToTop />
    </main>
  );
};

export default BlogPost;
