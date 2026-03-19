export type PostStatus = 'draft' | 'published' | 'scheduled';

export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string | null;
  content: string | null;
  image_url: string | null;
  category: string;
  author: string;
  featured: boolean;
  published_at: string;
  read_time: string | null;
  status: PostStatus;
  scheduled_at: string | null;
}

export type PartialBlogPost = Partial<BlogPost> & {
  title?: string;
};
