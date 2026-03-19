import { Button } from '@/components/ui/button';
import {
  Plus,
  Edit,
  Trash2,
  FileText,
  Star,
  StarOff,
  Eye,
} from 'lucide-react';
import type { BlogPost } from './types';

interface PostListProps {
  posts: BlogPost[];
  onNewPost: () => void;
  onEditPost: (post: BlogPost) => void;
  onDeletePost: (id: string) => void;
  onToggleFeatured: (post: BlogPost) => void;
}

const PostList = ({
  posts,
  onNewPost,
  onEditPost,
  onDeletePost,
  onToggleFeatured,
}: PostListProps) => {
  return (
    <div>
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-2xl font-bold text-foreground">Blog Posts</h1>
          <p className="text-sm text-muted-foreground mt-1">{posts.length} posts total</p>
        </div>
        <Button onClick={onNewPost} className="btn-metallic gap-2">
          <Plus className="h-4 w-4" />
          New Post
        </Button>
      </div>

      <div className="grid gap-4">
        {posts.map((post) => (
          <div
            key={post.id}
            className="flex items-center gap-5 p-5 bg-card border border-border rounded-2xl hover:border-primary/30 transition-colors group"
          >
            {/* Thumbnail */}
            <div className="w-24 h-16 bg-secondary rounded-xl overflow-hidden flex-shrink-0 border border-border">
              {post.image_url ? (
                <img
                  src={post.image_url}
                  alt={post.title}
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center">
                  <FileText className="h-6 w-6 text-muted-foreground/30" />
                </div>
              )}
            </div>
            
            {/* Content */}
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2 mb-1.5">
                {post.featured && (
                  <Star className="h-4 w-4 text-primary fill-primary flex-shrink-0" />
                )}
                <h3 className="font-semibold text-foreground truncate group-hover:text-primary transition-colors">
                  {post.title}
                </h3>
              </div>
              <div className="flex items-center gap-3 text-sm text-muted-foreground">
                <span className={`px-2 py-0.5 rounded-md text-xs font-medium ${
                  post.status === 'published' 
                    ? 'bg-primary/10 text-primary' 
                    : post.status === 'scheduled'
                    ? 'bg-accent/20 text-accent-foreground'
                    : 'bg-muted text-muted-foreground'
                }`}>
                  {post.status === 'published' ? post.category : post.status.charAt(0).toUpperCase() + post.status.slice(1)}
                </span>
                {post.status === 'published' && (
                  <span className="px-2 py-0.5 bg-muted rounded-md text-xs">
                    {post.category}
                  </span>
                )}
                <span>{post.author}</span>
                <span>•</span>
                <span>{new Date(post.published_at).toLocaleDateString()}</span>
              </div>
            </div>

            {/* Actions */}
            <div className="flex items-center gap-1 flex-shrink-0 opacity-60 group-hover:opacity-100 transition-opacity">
              <Button
                onClick={() => onToggleFeatured(post)}
                variant="ghost"
                size="icon"
                className="h-9 w-9"
                title={post.featured ? 'Unfeature' : 'Feature'}
              >
                {post.featured ? (
                  <StarOff className="h-4 w-4" />
                ) : (
                  <Star className="h-4 w-4" />
                )}
              </Button>
              <a
                href={`/blog/${post.slug}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="ghost" size="icon" className="h-9 w-9" title="Preview">
                  <Eye className="h-4 w-4" />
                </Button>
              </a>
              <Button
                onClick={() => onEditPost(post)}
                variant="ghost"
                size="icon"
                className="h-9 w-9"
                title="Edit"
              >
                <Edit className="h-4 w-4" />
              </Button>
              <Button
                onClick={() => onDeletePost(post.id)}
                variant="ghost"
                size="icon"
                className="h-9 w-9 text-destructive hover:text-destructive hover:bg-destructive/10"
                title="Delete"
              >
                <Trash2 className="h-4 w-4" />
              </Button>
            </div>
          </div>
        ))}

        {posts.length === 0 && (
          <div className="text-center py-16 bg-card border border-border rounded-2xl">
            <FileText className="h-12 w-12 text-muted-foreground/30 mx-auto mb-4" />
            <p className="text-muted-foreground mb-4">No posts yet</p>
            <Button onClick={onNewPost} variant="outline" size="sm" className="gap-2">
              <Plus className="h-4 w-4" />
              Create your first post
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default PostList;
