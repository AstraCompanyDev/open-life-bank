import { Button } from '@/components/ui/button';
import {
  Save,
  X,
  PanelLeftClose,
  PanelLeft,
} from 'lucide-react';
import AutosaveIndicator from './AutosaveIndicator';
import type { AutosaveStatus } from '@/hooks/use-autosave';
import type { PostStatus } from './types';

interface EditorHeaderProps {
  isNewPost: boolean;
  showPreview: boolean;
  onTogglePreview: () => void;
  onCancel: () => void;
  onSave: () => void;
  isSubmitting: boolean;
  autosaveStatus?: AutosaveStatus;
  postStatus?: PostStatus;
}

const EditorHeader = ({
  isNewPost,
  showPreview,
  onTogglePreview,
  onCancel,
  onSave,
  isSubmitting,
  autosaveStatus = 'idle',
  postStatus = 'draft',
}: EditorHeaderProps) => {
  const getSaveButtonLabel = () => {
    if (isSubmitting) return 'Saving...';
    switch (postStatus) {
      case 'published':
        return isNewPost ? 'Publish' : 'Update';
      case 'scheduled':
        return 'Schedule';
      default:
        return 'Save Draft';
    }
  };

  return (
    <div className="flex items-center justify-between mb-6">
      <div className="flex items-center gap-4">
        <h1 className="text-2xl font-bold text-foreground">
          {isNewPost ? 'New Post' : 'Edit Post'}
        </h1>
        {!isNewPost && <AutosaveIndicator status={autosaveStatus} />}
        <Button
          onClick={onTogglePreview}
          variant="outline"
          size="sm"
          className="gap-2 hidden lg:flex"
        >
          {showPreview ? <PanelLeftClose className="h-4 w-4" /> : <PanelLeft className="h-4 w-4" />}
          {showPreview ? 'Hide Preview' : 'Show Preview'}
        </Button>
      </div>
      <div className="flex gap-3">
        <Button
          onClick={onCancel}
          variant="outline"
          size="sm"
        >
          <X className="mr-2 h-4 w-4" />
          Cancel
        </Button>
        <Button
          onClick={onSave}
          disabled={isSubmitting}
          className="btn-metallic"
          size="sm"
        >
          <Save className="mr-2 h-4 w-4" />
          {getSaveButtonLabel()}
        </Button>
      </div>
    </div>
  );
};

export default EditorHeader;
