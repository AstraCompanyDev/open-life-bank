-- Add status and scheduled_at columns to blog_posts
ALTER TABLE public.blog_posts 
ADD COLUMN status text NOT NULL DEFAULT 'draft' CHECK (status IN ('draft', 'published', 'scheduled')),
ADD COLUMN scheduled_at timestamp with time zone;

-- Update existing posts to be published (they were already visible)
UPDATE public.blog_posts SET status = 'published' WHERE status = 'draft';

-- Create index for efficient filtering
CREATE INDEX idx_blog_posts_status ON public.blog_posts(status);
CREATE INDEX idx_blog_posts_scheduled_at ON public.blog_posts(scheduled_at) WHERE status = 'scheduled';