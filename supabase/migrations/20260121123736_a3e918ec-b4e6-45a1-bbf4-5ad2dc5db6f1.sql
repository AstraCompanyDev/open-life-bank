-- Add content column to store full article markdown
ALTER TABLE public.blog_posts 
ADD COLUMN content TEXT;