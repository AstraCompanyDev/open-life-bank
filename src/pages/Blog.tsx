import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Calendar, Clock, User, CheckCircle, Loader2 } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { useQuery } from "@tanstack/react-query";
import { toast } from "sonner";
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
  featured: boolean;
}

const fetchBlogPosts = async (): Promise<BlogPost[]> => {
  const { data, error } = await supabase
    .from("blog_posts")
    .select("id, title, excerpt, slug, category, author, published_at, read_time, image_url, source_url, featured, status")
    .eq("status", "published")
    .order("published_at", { ascending: false });

  if (error) throw error;
  return data || [];
};

const Blog = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [newsletterEmail, setNewsletterEmail] = useState("");
  const [isSubscribing, setIsSubscribing] = useState(false);
  const [isSubscribed, setIsSubscribed] = useState(false);

  const { data: posts = [], isLoading, error } = useQuery({
    queryKey: ["blog-posts"],
    queryFn: fetchBlogPosts,
    staleTime: 5 * 60 * 1000, // 5 minutes
    gcTime: 10 * 60 * 1000, // 10 minutes
  });

  if (error) {
    toast.error("Failed to load blog posts");
  }

  const handleNewsletterSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!newsletterEmail || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(newsletterEmail)) {
      toast.error("Please enter a valid email address");
      return;
    }

    setIsSubscribing(true);
    try {
      const { error } = await supabase.functions.invoke("send-newsletter-signup", {
        body: { email: newsletterEmail },
      });

      if (error) throw error;

      setIsSubscribed(true);
      toast.success("Successfully subscribed to the newsletter!");
    } catch (error: any) {
      console.error("Newsletter signup error:", error);
      toast.error("Failed to subscribe. Please try again.");
    } finally {
      setIsSubscribing(false);
    }
  };

  const categories = ["All", ...new Set(posts.map(post => post.category))];
  const filteredPosts = selectedCategory === "All" 
    ? posts 
    : posts.filter(post => post.category === selectedCategory);

  const featuredPost = posts.find(post => post.featured);
  const regularPosts = filteredPosts.filter(post => !post.featured);

  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-36 pb-16 relative overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent" />
        <div className="absolute top-20 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute top-40 right-1/4 w-64 h-64 bg-accent/10 rounded-full blur-3xl" />
        
        <div className="container mx-auto px-6 sm:px-8 lg:px-12 xl:px-16 relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6 animate-fade-in">
              U-topia Blog
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-foreground mb-6 animate-fade-in" style={{ animationDelay: "0.1s" }}>
              Insights & Updates
            </h1>
            <p className="text-lg text-muted-foreground animate-fade-in" style={{ animationDelay: "0.2s" }}>
              Stay informed with the latest news, guides, and insights from the U-topia ecosystem.
            </p>
          </div>
        </div>
      </section>

      {/* Loading State */}
      {isLoading ? (
        <section className="py-16">
          <div className="container mx-auto px-6 sm:px-8 lg:px-12 xl:px-16">
            <div className="flex items-center justify-center py-16">
              <Loader2 className="w-8 h-8 animate-spin text-primary" />
              <span className="ml-3 text-muted-foreground">Loading posts...</span>
            </div>
          </div>
        </section>
      ) : (
        <>
          {/* Featured Post */}
          {featuredPost && selectedCategory === "All" && (
            <section className="pb-16 relative">
              <div className="container mx-auto px-6 sm:px-8 lg:px-12 xl:px-16">
                <Link 
                  to={`/blog/${featuredPost.slug}`}
                  className="group block rounded-2xl overflow-hidden animate-fade-in border border-white/10 bg-card/80 backdrop-blur-xl hover:shadow-2xl hover:shadow-primary/20 transition-all duration-500"
                  style={{ animationDelay: "0.3s" }}
                >
                  <div className="grid md:grid-cols-2 gap-0">
                    <div className="relative h-64 md:h-[400px] overflow-hidden">
                      <img 
                        src={featuredPost.image_url || "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=800&auto=format&fit=crop&q=60"} 
                        alt={featuredPost.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        loading="eager"
                      />
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-card md:block hidden" />
                      <span className="absolute top-4 left-4 px-3 py-1.5 rounded-full bg-primary text-primary-foreground text-xs font-medium shadow-lg shadow-primary/30">
                        Featured
                      </span>
                    </div>
                    <div className="p-8 md:p-12 flex flex-col justify-center bg-card/50">
                      <span className="text-primary text-sm font-medium mb-3">{featuredPost.category}</span>
                      <h2 className="text-2xl md:text-3xl font-display font-bold text-foreground mb-4 group-hover:text-primary transition-colors">
                        {featuredPost.title}
                      </h2>
                      <p className="text-muted-foreground mb-6">{featuredPost.excerpt}</p>
                      <div className="flex flex-wrap items-center gap-4 md:gap-6 text-sm text-muted-foreground mb-6">
                        <span className="flex items-center gap-2">
                          <User className="w-4 h-4 text-primary/70" />
                          {featuredPost.author}
                        </span>
                        <span className="flex items-center gap-2">
                          <Calendar className="w-4 h-4 text-primary/70" />
                          {new Date(featuredPost.published_at).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                        </span>
                        <span className="flex items-center gap-2">
                          <Clock className="w-4 h-4 text-primary/70" />
                          {featuredPost.read_time}
                        </span>
                      </div>
                      <div className="flex items-center gap-2 text-primary font-medium group-hover:gap-4 transition-all">
                        Read Article <ArrowRight className="w-4 h-4" />
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            </section>
          )}

          {/* Category Filter */}
          <section className="pb-8">
            <div className="container mx-auto px-6 sm:px-8 lg:px-12 xl:px-16">
              <div className="flex flex-wrap gap-3 justify-center">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                      selectedCategory === category
                        ? "bg-primary text-primary-foreground shadow-lg shadow-primary/25"
                        : "bg-card/50 text-muted-foreground hover:bg-card hover:text-foreground border border-border"
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>
          </section>

          {/* Blog Grid */}
          <section className="py-16">
            <div className="container mx-auto px-6 sm:px-8 lg:px-12 xl:px-16">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {regularPosts.map((post, index) => (
                  <Link
                    key={post.id}
                    to={`/blog/${post.slug}`}
                    className="group relative rounded-2xl overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-primary/20 border border-white/10 bg-card/80 backdrop-blur-xl animate-fade-in"
                    style={{ animationDelay: `${index * 50}ms` }}
                  >
                    {/* Glow effect on hover */}
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/0 via-primary/0 to-primary/0 group-hover:from-primary/5 group-hover:via-transparent group-hover:to-accent/5 transition-all duration-500" />
                    
                    <div className="relative h-52 overflow-hidden">
                      <img 
                        src={post.image_url || "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=800&auto=format&fit=crop&q=60"} 
                        alt={post.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent" />
                      <span className="absolute top-4 left-4 px-3 py-1.5 rounded-full bg-primary text-primary-foreground text-xs font-medium shadow-lg shadow-primary/30">
                        {post.category}
                      </span>
                    </div>
                    <div className="relative p-6">
                      <h3 className="text-lg font-display font-bold text-foreground mb-3 line-clamp-2 group-hover:text-primary transition-colors">
                        {post.title}
                      </h3>
                      <p className="text-sm text-muted-foreground mb-4 line-clamp-2">{post.excerpt}</p>
                      <div className="flex items-center justify-between text-xs text-muted-foreground pt-4 border-t border-white/10">
                        <span className="flex items-center gap-1.5">
                          <Calendar className="w-3.5 h-3.5 text-primary/70" />
                          {new Date(post.published_at).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                        </span>
                        <span className="flex items-center gap-1.5">
                          <Clock className="w-3.5 h-3.5 text-primary/70" />
                          {post.read_time}
                        </span>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>

              {filteredPosts.length === 0 && !isLoading && (
                <div className="text-center py-16">
                  <p className="text-muted-foreground text-lg">No posts found in this category.</p>
                </div>
              )}
            </div>
          </section>
        </>
      )}

      {/* Newsletter CTA */}
      <section className="py-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-accent/5 to-primary/10" />
        <div className="container mx-auto px-6 sm:px-8 lg:px-12 xl:px-16 relative z-10">
          <div className="rounded-3xl p-8 md:p-12 text-center max-w-2xl mx-auto border border-white/10 bg-card/80 backdrop-blur-xl">
            {isSubscribed ? (
              <div className="py-8 animate-fade-in">
                <CheckCircle className="w-16 h-16 text-primary mx-auto mb-4" />
                <h2 className="text-2xl md:text-3xl font-display font-bold text-foreground mb-4">
                  You're Subscribed!
                </h2>
                <p className="text-muted-foreground">
                  Thank you for subscribing. You'll receive the latest updates from U-topia.
                </p>
              </div>
            ) : (
              <>
                <h2 className="text-2xl md:text-3xl font-display font-bold text-foreground mb-4">
                  Stay Updated
                </h2>
                <p className="text-muted-foreground mb-8">
                  Get the latest insights and updates from U-topia delivered directly to your inbox.
                </p>
                <form onSubmit={handleNewsletterSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                  <input 
                    type="email" 
                    placeholder="Enter your email"
                    value={newsletterEmail}
                    onChange={(e) => setNewsletterEmail(e.target.value)}
                    disabled={isSubscribing}
                    className="flex-1 px-5 py-3 rounded-full bg-background/50 border border-white/10 text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all disabled:opacity-50"
                  />
                  <button 
                    type="submit"
                    disabled={isSubscribing}
                    className="px-8 py-3 rounded-full bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-colors shadow-lg shadow-primary/25 disabled:opacity-50 flex items-center justify-center gap-2"
                  >
                    {isSubscribing ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin" />
                        Subscribing...
                      </>
                    ) : (
                      "Subscribe"
                    )}
                  </button>
                </form>
              </>
            )}
          </div>
        </div>
      </section>

      <Footer />
      <ScrollToTop />
    </main>
  );
};

export default Blog;
