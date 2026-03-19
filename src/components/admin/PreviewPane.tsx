import { Eye } from 'lucide-react';
import BlogPreview from './BlogPreview';
import type { PartialBlogPost } from './types';

interface PreviewPaneProps {
  post: PartialBlogPost | null;
}

const PreviewPane = ({ post }: PreviewPaneProps) => {
  return (
    <div className="hidden lg:block lg:w-1/2 border border-border rounded-2xl overflow-hidden bg-background">
      <div className="sticky top-0 z-10 flex items-center justify-between px-4 py-3 bg-card/95 backdrop-blur-xl border-b border-border">
        <div className="flex items-center gap-2">
          <Eye className="h-4 w-4 text-primary" />
          <span className="text-sm font-medium text-foreground">Live Preview</span>
        </div>
        <div className="flex items-center gap-1.5">
          <div className="w-3 h-3 rounded-full bg-destructive/60" />
          <div className="w-3 h-3 rounded-full bg-accent/60" />
          <div className="w-3 h-3 rounded-full bg-primary/60" />
        </div>
      </div>
      <div className="h-[calc(100%-52px)] overflow-y-auto">
        <BlogPreview
          title={post?.title || ''}
          excerpt={post?.excerpt || ''}
          content={post?.content || ''}
          imageUrl={post?.image_url || ''}
          category={post?.category || ''}
          author={post?.author || ''}
          readTime={post?.read_time || ''}
          publishedAt={post?.published_at || ''}
        />
      </div>
    </div>
  );
};

export default PreviewPane;
