import { useState, useEffect, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';
import { useAuth } from '@/hooks/use-auth';
import { supabase } from '@/integrations/supabase/client';
import { LogOut, FileText } from 'lucide-react';
import { useAutosave } from '@/hooks/use-autosave';

// Admin components
import AdminHeader from '@/components/admin/AdminHeader';
import EditorHeader from '@/components/admin/EditorHeader';
import PostList from '@/components/admin/PostList';
import PostEditorForm from '@/components/admin/PostEditorForm';
import PreviewPane from '@/components/admin/PreviewPane';
import type { BlogPost, PartialBlogPost, PostStatus } from '@/components/admin/types';

const Admin = () => {
  const { user, isAdmin, loading, adminLoading, signOut } = useAuth();
  const navigate = useNavigate();
  const { toast } = useToast();
  
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [isEditing, setIsEditing] = useState(false);
  const [currentPost, setCurrentPost] = useState<PartialBlogPost | null>(null);
  const [isUploading, setIsUploading] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showPreview, setShowPreview] = useState(true);

  // Autosave functionality
  const handleAutosave = useCallback(async (post: PartialBlogPost | null) => {
    if (!post?.id || !post.title) return;
    
    await supabase
      .from('blog_posts')
      .update({
        title: post.title,
        slug: post.slug,
        excerpt: post.excerpt,
        content: post.content,
        image_url: post.image_url,
        category: post.category,
        author: post.author,
        featured: post.featured,
        published_at: post.published_at,
        read_time: post.read_time,
        status: post.status || 'draft',
        scheduled_at: post.scheduled_at,
      })
      .eq('id', post.id);
  }, []);

  const { status: autosaveStatus, resetSavedState } = useAutosave({
    data: currentPost,
    onSave: handleAutosave,
    delay: 3000,
    enabled: isEditing && !!currentPost?.id,
  });

  useEffect(() => {
    if (!loading && !user) {
      navigate('/admin/auth');
    }
  }, [user, loading, navigate]);

  useEffect(() => {
    if (user && isAdmin) {
      fetchPosts();
    }
  }, [user, isAdmin]);

  const fetchPosts = async () => {
    const { data, error } = await supabase
      .from('blog_posts')
      .select('*')
      .order('published_at', { ascending: false });
    
    if (error) {
      toast({
        title: "Error",
        description: "Failed to fetch posts",
        variant: "destructive",
      });
    } else {
      // Cast status to PostStatus
      const typedPosts = (data || []).map(post => ({
        ...post,
        status: post.status as PostStatus,
      }));
      setPosts(typedPosts);
    }
  };

  const handleNewPost = useCallback(() => {
    resetSavedState();
    setCurrentPost({
      title: '',
      slug: '',
      excerpt: '',
      content: '',
      image_url: '',
      category: 'General',
      author: 'U-topia Team',
      featured: false,
      published_at: new Date().toISOString(),
      read_time: '5 min read',
      status: 'draft',
      scheduled_at: null,
    });
    setIsEditing(true);
  }, [resetSavedState]);

  const handleEditPost = useCallback((post: BlogPost) => {
    setCurrentPost(post);
    setIsEditing(true);
  }, []);

  const handleDeletePost = useCallback(async (id: string) => {
    if (!confirm('Are you sure you want to delete this post?')) return;

    const { error } = await supabase
      .from('blog_posts')
      .delete()
      .eq('id', id);

    if (error) {
      toast({
        title: "Error",
        description: "Failed to delete post",
        variant: "destructive",
      });
    } else {
      toast({
        title: "Success",
        description: "Post deleted successfully",
      });
      fetchPosts();
    }
  }, [toast]);

  const handleToggleFeatured = useCallback(async (post: BlogPost) => {
    const { error } = await supabase
      .from('blog_posts')
      .update({ featured: !post.featured })
      .eq('id', post.id);

    if (error) {
      toast({
        title: "Error",
        description: "Failed to update post",
        variant: "destructive",
      });
    } else {
      fetchPosts();
    }
  }, [toast]);

  const handleImageUpload = useCallback(async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setIsUploading(true);
    try {
      const fileExt = file.name.split('.').pop();
      const fileName = `${Date.now()}-${Math.random().toString(36).substring(7)}.${fileExt}`;
      const filePath = `featured/${fileName}`;

      const { error: uploadError } = await supabase.storage
        .from('blog-images')
        .upload(filePath, file);

      if (uploadError) throw uploadError;

      const { data: { publicUrl } } = supabase.storage
        .from('blog-images')
        .getPublicUrl(filePath);

      setCurrentPost(prev => prev ? { ...prev, image_url: publicUrl } : null);
      
      toast({
        title: "Image uploaded",
        description: "Featured image has been uploaded successfully.",
      });
    } catch (error: any) {
      toast({
        title: "Upload failed",
        description: error.message,
        variant: "destructive",
      });
    } finally {
      setIsUploading(false);
    }
  }, [toast]);

  const generateSlug = useCallback((title: string) => {
    return title
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/(^-|-$)/g, '');
  }, []);

  const handleSavePost = useCallback(async () => {
    if (!currentPost?.title || !currentPost?.slug) {
      toast({
        title: "Error",
        description: "Title and slug are required",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);
    try {
      const postData = {
        title: currentPost.title,
        slug: currentPost.slug,
        excerpt: currentPost.excerpt,
        content: currentPost.content,
        image_url: currentPost.image_url,
        category: currentPost.category || 'General',
        author: currentPost.author || 'U-topia Team',
        featured: currentPost.featured || false,
        published_at: currentPost.published_at || new Date().toISOString(),
        read_time: currentPost.read_time || '5 min read',
        status: currentPost.status || 'draft',
        scheduled_at: currentPost.scheduled_at || null,
      };

      if (currentPost.id) {
        const { error } = await supabase
          .from('blog_posts')
          .update(postData)
          .eq('id', currentPost.id);

        if (error) throw error;
        toast({
          title: "Success",
          description: currentPost.status === 'published' 
            ? "Post published successfully" 
            : currentPost.status === 'scheduled'
            ? "Post scheduled successfully"
            : "Draft saved successfully",
        });
      } else {
        const { error } = await supabase
          .from('blog_posts')
          .insert(postData);

        if (error) throw error;
        toast({
          title: "Success",
          description: currentPost.status === 'published' 
            ? "Post published successfully" 
            : currentPost.status === 'scheduled'
            ? "Post scheduled successfully"
            : "Draft created successfully",
        });
      }

      setIsEditing(false);
      setCurrentPost(null);
      fetchPosts();
    } catch (error: any) {
      toast({
        title: "Error",
        description: error.message,
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  }, [currentPost, toast]);

  const handleSignOut = useCallback(async () => {
    await signOut();
    navigate('/admin/auth');
  }, [signOut, navigate]);

  const handleCancelEdit = useCallback(() => {
    resetSavedState();
    setIsEditing(false);
    setCurrentPost(null);
  }, [resetSavedState]);

  const handleUpdatePost = useCallback((updates: PartialBlogPost) => {
    setCurrentPost(updates);
  }, []);

  // Loading state
  if (loading || adminLoading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary mx-auto mb-4"></div>
          <p className="text-muted-foreground">Loading...</p>
        </div>
      </div>
    );
  }

  // Access denied state
  if (!isAdmin) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center px-4">
        <div className="text-center max-w-md">
          <FileText className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
          <h1 className="text-2xl font-bold text-foreground mb-2">Access Denied</h1>
          <p className="text-muted-foreground mb-6">
            You don't have admin privileges. Please contact an administrator to request access.
          </p>
          <Button onClick={handleSignOut} variant="outline">
            <LogOut className="mr-2 h-4 w-4" />
            Sign Out
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <AdminHeader userEmail={user?.email} onSignOut={handleSignOut} />

      <main className="container mx-auto px-6 py-8">
        {isEditing ? (
          <div className="h-[calc(100vh-140px)]">
            <EditorHeader
              isNewPost={!currentPost?.id}
              showPreview={showPreview}
              onTogglePreview={() => setShowPreview(!showPreview)}
              onCancel={handleCancelEdit}
              onSave={handleSavePost}
              isSubmitting={isSubmitting}
              autosaveStatus={autosaveStatus}
              postStatus={currentPost?.status || 'draft'}
            />

            <div className={`flex gap-6 h-[calc(100%-60px)]`}>
              <div className={`${showPreview ? 'lg:w-1/2' : 'w-full'} overflow-y-auto pr-2`}>
                <PostEditorForm
                  post={currentPost}
                  onUpdate={handleUpdatePost}
                  onImageUpload={handleImageUpload}
                  isUploading={isUploading}
                  generateSlug={generateSlug}
                />
              </div>

              {showPreview && <PreviewPane post={currentPost} />}
            </div>
          </div>
        ) : (
          <PostList
            posts={posts}
            onNewPost={handleNewPost}
            onEditPost={handleEditPost}
            onDeletePost={handleDeletePost}
            onToggleFeatured={handleToggleFeatured}
          />
        )}
      </main>
    </div>
  );
};

export default Admin;
