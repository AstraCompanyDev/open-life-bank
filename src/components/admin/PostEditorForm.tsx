import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import RichTextEditor from './RichTextEditor';
import StatusSelector from './StatusSelector';
import {
  Edit,
  Image,
  FileText,
  Settings2,
} from 'lucide-react';
import type { PartialBlogPost, PostStatus } from './types';

interface PostEditorFormProps {
  post: PartialBlogPost | null;
  onUpdate: (updates: PartialBlogPost) => void;
  onImageUpload: (e: React.ChangeEvent<HTMLInputElement>) => void;
  isUploading: boolean;
  generateSlug: (title: string) => string;
}

const PostEditorForm = ({
  post,
  onUpdate,
  onImageUpload,
  isUploading,
  generateSlug,
}: PostEditorFormProps) => {
  const handleFieldChange = (field: keyof PartialBlogPost, value: string | boolean | null) => {
    onUpdate({ ...post, [field]: value });
  };

  const handleStatusChange = (status: PostStatus, scheduledAt?: string) => {
    onUpdate({ 
      ...post, 
      status, 
      scheduled_at: status === 'scheduled' ? scheduledAt || null : null 
    });
  };

  const handleTitleChange = (title: string) => {
    onUpdate({
      ...post,
      title,
      slug: post?.slug || generateSlug(title),
    });
  };

  return (
    <div className="space-y-6">
      {/* Basic Info Card */}
      <div className="bg-card border border-border rounded-2xl p-6">
        <div className="flex items-center gap-2 mb-5">
          <Settings2 className="h-5 w-5 text-primary" />
          <h2 className="text-lg font-semibold text-foreground">Basic Information</h2>
        </div>
        
        <div className="grid gap-5">
          {/* Title */}
          <div>
            <label className="block text-sm font-medium text-foreground mb-2">
              Title <span className="text-primary">*</span>
            </label>
            <Input
              value={post?.title || ''}
              onChange={(e) => handleTitleChange(e.target.value)}
              placeholder="Enter post title"
              className="h-12 bg-secondary/50 border-border text-foreground"
            />
          </div>

          {/* Slug */}
          <div>
            <label className="block text-sm font-medium text-foreground mb-2">
              URL Slug <span className="text-primary">*</span>
            </label>
            <div className="flex">
              <span className="inline-flex items-center px-4 bg-secondary border border-r-0 border-border rounded-l-lg text-sm text-muted-foreground">
                /blog/
              </span>
              <Input
                value={post?.slug || ''}
                onChange={(e) => handleFieldChange('slug', e.target.value)}
                placeholder="post-url-slug"
                className="h-12 bg-secondary/50 border-border text-foreground rounded-l-none"
              />
            </div>
          </div>

          {/* Excerpt */}
          <div>
            <label className="block text-sm font-medium text-foreground mb-2">
              Excerpt
            </label>
            <Textarea
              value={post?.excerpt || ''}
              onChange={(e) => handleFieldChange('excerpt', e.target.value)}
              placeholder="Brief description of the post (shown on blog listing)"
              rows={3}
              className="bg-secondary/50 border-border text-foreground resize-none"
            />
          </div>
        </div>
      </div>

      {/* Featured Image Card */}
      <div className="bg-card border border-border rounded-2xl p-6">
        <div className="flex items-center gap-2 mb-5">
          <Image className="h-5 w-5 text-primary" />
          <h2 className="text-lg font-semibold text-foreground">Featured Image</h2>
        </div>

        <div className="flex gap-5 items-start">
          <div className="w-32 h-20 bg-secondary rounded-xl flex items-center justify-center overflow-hidden border border-border flex-shrink-0">
            {post?.image_url ? (
              <img
                src={post.image_url}
                alt="Featured"
                className="w-full h-full object-cover"
              />
            ) : (
              <Image className="h-8 w-8 text-muted-foreground/30" />
            )}
          </div>
          <div className="flex-1 space-y-3">
            <Input
              value={post?.image_url || ''}
              onChange={(e) => handleFieldChange('image_url', e.target.value)}
              placeholder="https://example.com/image.jpg"
              className="h-10 bg-secondary/50 border-border text-foreground text-sm"
            />
            <label className="inline-flex items-center gap-2 px-4 py-2 bg-secondary hover:bg-secondary/80 rounded-lg cursor-pointer transition-colors text-sm">
              <input
                type="file"
                accept="image/*"
                onChange={onImageUpload}
                className="hidden"
                disabled={isUploading}
              />
              <Image className="h-4 w-4" />
              {isUploading ? 'Uploading...' : 'Upload Image'}
            </label>
          </div>
        </div>
      </div>

      {/* Meta Info Card */}
      <div className="bg-card border border-border rounded-2xl p-6">
        <div className="flex items-center gap-2 mb-5">
          <FileText className="h-5 w-5 text-primary" />
          <h2 className="text-lg font-semibold text-foreground">Post Details</h2>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-foreground mb-2">
              Category
            </label>
            <Input
              value={post?.category || ''}
              onChange={(e) => handleFieldChange('category', e.target.value)}
              placeholder="e.g., Finance"
              className="h-10 bg-secondary/50 border-border text-foreground"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-foreground mb-2">
              Author
            </label>
            <Input
              value={post?.author || ''}
              onChange={(e) => handleFieldChange('author', e.target.value)}
              placeholder="Author name"
              className="h-10 bg-secondary/50 border-border text-foreground"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-foreground mb-2">
              Read Time
            </label>
            <Input
              value={post?.read_time || ''}
              onChange={(e) => handleFieldChange('read_time', e.target.value)}
              placeholder="5 min read"
              className="h-10 bg-secondary/50 border-border text-foreground"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-foreground mb-2">
              Published Date
            </label>
            <Input
              type="date"
              value={post?.published_at?.split('T')[0] || ''}
              onChange={(e) => handleFieldChange('published_at', new Date(e.target.value).toISOString())}
              className="h-10 bg-secondary/50 border-border text-foreground"
            />
          </div>
        </div>

        {/* Featured checkbox */}
        <div className="flex items-center gap-3 mt-5 pt-5 border-t border-border">
          <input
            type="checkbox"
            id="featured"
            checked={post?.featured || false}
            onChange={(e) => handleFieldChange('featured', e.target.checked)}
            className="w-4 h-4 rounded border-border accent-primary"
          />
          <label htmlFor="featured" className="text-sm text-foreground">
            Featured post <span className="text-muted-foreground">(shown prominently on blog page)</span>
          </label>
        </div>
      </div>

      {/* Status Selector Card */}
      <StatusSelector
        status={post?.status || 'draft'}
        scheduledAt={post?.scheduled_at || null}
        onStatusChange={handleStatusChange}
      />

      {/* Content Editor Card */}
      <div className="bg-card border border-border rounded-2xl p-6">
        <div className="flex items-center gap-2 mb-5">
          <Edit className="h-5 w-5 text-primary" />
          <h2 className="text-lg font-semibold text-foreground">Content</h2>
        </div>

        <RichTextEditor
          value={post?.content || ''}
          onChange={(content) => handleFieldChange('content', content)}
        />
      </div>
    </div>
  );
};

export default PostEditorForm;
