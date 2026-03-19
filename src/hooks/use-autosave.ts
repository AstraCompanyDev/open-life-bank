import { useState, useEffect, useRef, useCallback } from 'react';

export type AutosaveStatus = 'idle' | 'saving' | 'saved' | 'error';

interface UseAutosaveOptions<T> {
  data: T;
  onSave: (data: T) => Promise<void>;
  delay?: number;
  enabled?: boolean;
}

export function useAutosave<T>({ data, onSave, delay = 3000, enabled = true }: UseAutosaveOptions<T>) {
  const [status, setStatus] = useState<AutosaveStatus>('idle');
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const lastSavedRef = useRef<string>('');
  const isMountedRef = useRef(true);

  // Store onSave in a ref to avoid dependency issues
  const onSaveRef = useRef(onSave);
  onSaveRef.current = onSave;

  const dataString = JSON.stringify(data);

  const save = useCallback(async () => {
    if (!enabled || !data) return;
    
    // Skip if data hasn't changed
    if (dataString === lastSavedRef.current) return;
    
    setStatus('saving');
    try {
      await onSaveRef.current(data);
      if (isMountedRef.current) {
        lastSavedRef.current = dataString;
        setStatus('saved');
        // Reset to idle after 2 seconds
        setTimeout(() => {
          if (isMountedRef.current) {
            setStatus('idle');
          }
        }, 2000);
      }
    } catch (error) {
      if (isMountedRef.current) {
        setStatus('error');
      }
    }
  }, [data, dataString, enabled]);

  // Debounced autosave
  useEffect(() => {
    if (!enabled) return;

    // Clear existing timeout
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    // Don't autosave if nothing has changed
    if (dataString === lastSavedRef.current) return;

    // Set new timeout
    timeoutRef.current = setTimeout(() => {
      save();
    }, delay);

    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [dataString, delay, enabled, save]);

  // Cleanup on unmount
  useEffect(() => {
    isMountedRef.current = true;
    return () => {
      isMountedRef.current = false;
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  // Initialize lastSavedRef when data first loads (for editing existing posts)
  useEffect(() => {
    if (data && lastSavedRef.current === '') {
      lastSavedRef.current = dataString;
    }
  }, [data, dataString]);

  const resetSavedState = useCallback(() => {
    lastSavedRef.current = '';
  }, []);

  return { status, save, resetSavedState };
}
