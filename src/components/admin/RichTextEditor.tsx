import { useState, useRef, useCallback, useEffect } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/hooks/use-toast';
import {
  Bold,
  Italic,
  Underline,
  AlignLeft,
  AlignCenter,
  AlignRight,
  AlignJustify,
  List,
  ListOrdered,
  Heading1,
  Heading2,
  Heading3,
  Image,
  Link,
  Quote,
  Code,
  Minus,
  Undo,
  Redo,
} from 'lucide-react';

interface RichTextEditorProps {
  value: string;
  onChange: (value: string) => void;
}

const RichTextEditor = ({ value, onChange }: RichTextEditorProps) => {
  const editorRef = useRef<HTMLDivElement>(null);
  const lastHtmlRef = useRef<string>(value || '');
  const [isUploading, setIsUploading] = useState(false);
  const { toast } = useToast();

  const updateContent = useCallback(() => {
    const html = editorRef.current?.innerHTML ?? '';
    if (html !== lastHtmlRef.current) {
      lastHtmlRef.current = html;
      onChange(html);
    }
  }, [onChange]);

  const execCommand = useCallback(
    (command: string, commandValue?: string) => {
      document.execCommand(command, false, commandValue);
      editorRef.current?.focus();
      updateContent();
    },
    [updateContent]
  );

  // Keep editor content in sync when switching posts / loading saved content,
  // without resetting the caret while typing.
  useEffect(() => {
    if (!editorRef.current) return;
    const isFocused = document.activeElement === editorRef.current;
    if (isFocused) return;

    const next = value || '';
    if (editorRef.current.innerHTML !== next) {
      editorRef.current.innerHTML = next;
      lastHtmlRef.current = next;
    }
  }, [value]);

  const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setIsUploading(true);
    try {
      const fileExt = file.name.split('.').pop();
      const fileName = `${Date.now()}-${Math.random().toString(36).substring(7)}.${fileExt}`;
      const filePath = `content/${fileName}`;

      const { error: uploadError } = await supabase.storage
        .from('blog-images')
        .upload(filePath, file);

      if (uploadError) throw uploadError;

      const { data: { publicUrl } } = supabase.storage
        .from('blog-images')
        .getPublicUrl(filePath);

      execCommand('insertHTML', `<img src="${publicUrl}" alt="Blog image" class="max-w-full h-auto rounded-lg my-4" />`);
      
      toast({
        title: "Image uploaded",
        description: "Image has been inserted into the content.",
      });
    } catch (error: any) {
      toast({
        title: "Upload failed",
        description: error.message,
        variant: "destructive",
      });
    } finally {
      setIsUploading(false);
      e.target.value = '';
    }
  };

  const insertLink = () => {
    const url = prompt('Enter URL:');
    if (url) {
      execCommand('createLink', url);
    }
  };

  const formatBlock = (tag: string) => {
    execCommand('formatBlock', tag);
  };

  const ToolbarButton = ({ 
    onClick, 
    children, 
    title 
  }: { 
    onClick: () => void; 
    children: React.ReactNode; 
    title: string;
  }) => (
    <button
      type="button"
      onClick={onClick}
      title={title}
      className="p-2 hover:bg-secondary rounded-md transition-colors text-foreground-light hover:text-primary"
    >
      {children}
    </button>
  );

  const ToolbarDivider = () => (
    <div className="w-px h-6 bg-border-light mx-1" />
  );

  return (
    <div className="border border-border-light rounded-xl overflow-hidden bg-white">
      {/* Toolbar */}
      <div className="flex flex-wrap items-center gap-1 p-2 border-b border-border-light bg-card-light">
        {/* Undo/Redo */}
        <ToolbarButton onClick={() => execCommand('undo')} title="Undo">
          <Undo className="h-4 w-4" />
        </ToolbarButton>
        <ToolbarButton onClick={() => execCommand('redo')} title="Redo">
          <Redo className="h-4 w-4" />
        </ToolbarButton>
        
        <ToolbarDivider />
        
        {/* Headings */}
        <ToolbarButton onClick={() => formatBlock('h1')} title="Heading 1">
          <Heading1 className="h-4 w-4" />
        </ToolbarButton>
        <ToolbarButton onClick={() => formatBlock('h2')} title="Heading 2">
          <Heading2 className="h-4 w-4" />
        </ToolbarButton>
        <ToolbarButton onClick={() => formatBlock('h3')} title="Heading 3">
          <Heading3 className="h-4 w-4" />
        </ToolbarButton>
        <ToolbarButton onClick={() => formatBlock('p')} title="Paragraph">
          <span className="text-xs font-bold">P</span>
        </ToolbarButton>
        
        <ToolbarDivider />
        
        {/* Text formatting */}
        <ToolbarButton onClick={() => execCommand('bold')} title="Bold">
          <Bold className="h-4 w-4" />
        </ToolbarButton>
        <ToolbarButton onClick={() => execCommand('italic')} title="Italic">
          <Italic className="h-4 w-4" />
        </ToolbarButton>
        <ToolbarButton onClick={() => execCommand('underline')} title="Underline">
          <Underline className="h-4 w-4" />
        </ToolbarButton>
        
        <ToolbarDivider />
        
        {/* Alignment */}
        <ToolbarButton onClick={() => execCommand('justifyLeft')} title="Align Left">
          <AlignLeft className="h-4 w-4" />
        </ToolbarButton>
        <ToolbarButton onClick={() => execCommand('justifyCenter')} title="Align Center">
          <AlignCenter className="h-4 w-4" />
        </ToolbarButton>
        <ToolbarButton onClick={() => execCommand('justifyRight')} title="Align Right">
          <AlignRight className="h-4 w-4" />
        </ToolbarButton>
        <ToolbarButton onClick={() => execCommand('justifyFull')} title="Justify">
          <AlignJustify className="h-4 w-4" />
        </ToolbarButton>
        
        <ToolbarDivider />
        
        {/* Lists */}
        <ToolbarButton onClick={() => execCommand('insertUnorderedList')} title="Bullet List">
          <List className="h-4 w-4" />
        </ToolbarButton>
        <ToolbarButton onClick={() => execCommand('insertOrderedList')} title="Numbered List">
          <ListOrdered className="h-4 w-4" />
        </ToolbarButton>
        
        <ToolbarDivider />
        
        {/* Insert elements */}
        <ToolbarButton onClick={insertLink} title="Insert Link">
          <Link className="h-4 w-4" />
        </ToolbarButton>
        <ToolbarButton onClick={() => formatBlock('blockquote')} title="Quote">
          <Quote className="h-4 w-4" />
        </ToolbarButton>
        <ToolbarButton onClick={() => formatBlock('pre')} title="Code Block">
          <Code className="h-4 w-4" />
        </ToolbarButton>
        <ToolbarButton onClick={() => execCommand('insertHorizontalRule')} title="Horizontal Rule">
          <Minus className="h-4 w-4" />
        </ToolbarButton>
        
        <ToolbarDivider />
        
        {/* Image upload */}
        <label className="p-2 hover:bg-secondary rounded-md transition-colors cursor-pointer text-foreground-light hover:text-primary">
          <input
            type="file"
            accept="image/*"
            onChange={handleImageUpload}
            className="hidden"
            disabled={isUploading}
          />
          <Image className="h-4 w-4" />
        </label>
        
        {isUploading && (
          <span className="text-xs text-muted-foreground-light ml-2">Uploading...</span>
        )}
      </div>

      {/* Editor */}
      <div
        ref={editorRef}
        contentEditable
        dir="ltr"
        suppressContentEditableWarning
        className="min-h-[400px] p-4 text-foreground-light focus:outline-none prose prose-sm max-w-none [&>*]:text-left"
        onInput={updateContent}
        onBlur={updateContent}
        style={{
          lineHeight: '1.8',
          textAlign: 'left',
          direction: 'ltr',
          unicodeBidi: 'plaintext',
        }}
      />
    </div>
  );
};

export default RichTextEditor;
