import { Cloud, CloudOff, Check, Loader2 } from 'lucide-react';
import type { AutosaveStatus } from '@/hooks/use-autosave';

interface AutosaveIndicatorProps {
  status: AutosaveStatus;
}

const AutosaveIndicator = ({ status }: AutosaveIndicatorProps) => {
  const getStatusDisplay = () => {
    switch (status) {
      case 'saving':
        return (
          <>
            <Loader2 className="h-3.5 w-3.5 animate-spin" />
            <span>Saving...</span>
          </>
        );
      case 'saved':
        return (
          <>
            <Check className="h-3.5 w-3.5 text-primary" />
            <span className="text-primary">Saved</span>
          </>
        );
      case 'error':
        return (
          <>
            <CloudOff className="h-3.5 w-3.5 text-destructive" />
            <span className="text-destructive">Error saving</span>
          </>
        );
      default:
        return (
          <>
            <Cloud className="h-3.5 w-3.5" />
            <span>Draft</span>
          </>
        );
    }
  };

  return (
    <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
      {getStatusDisplay()}
    </div>
  );
};

export default AutosaveIndicator;
