-- Create blog_posts table to store imported blog posts
CREATE TABLE public.blog_posts (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  title TEXT NOT NULL,
  excerpt TEXT,
  slug TEXT NOT NULL UNIQUE,
  category TEXT NOT NULL DEFAULT 'General',
  author TEXT NOT NULL DEFAULT 'U-topia Team',
  published_at TIMESTAMP WITH TIME ZONE NOT NULL,
  read_time TEXT DEFAULT '5 min read',
  image_url TEXT,
  source_url TEXT,
  featured BOOLEAN NOT NULL DEFAULT false,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE public.blog_posts ENABLE ROW LEVEL SECURITY;

-- Create policy for public read access (blog posts are public)
CREATE POLICY "Blog posts are publicly readable" 
ON public.blog_posts 
FOR SELECT 
USING (true);

-- Create index for faster queries
CREATE INDEX idx_blog_posts_published_at ON public.blog_posts(published_at DESC);
CREATE INDEX idx_blog_posts_category ON public.blog_posts(category);
CREATE INDEX idx_blog_posts_slug ON public.blog_posts(slug);

-- Create trigger for automatic timestamp updates
CREATE OR REPLACE FUNCTION public.update_blog_posts_updated_at()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SET search_path = public;

CREATE TRIGGER update_blog_posts_updated_at
BEFORE UPDATE ON public.blog_posts
FOR EACH ROW
EXECUTE FUNCTION public.update_blog_posts_updated_at();