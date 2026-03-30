import React from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { oneLight } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { Copy, Check } from 'lucide-react';
import { cn } from '@/src/lib/utils';

interface ComponentPreviewProps {
  title: string;
  description?: string;
  children: React.ReactNode;
  code: string;
}

export function ComponentPreview({ title, description, children, code }: ComponentPreviewProps) {
  const [copied, setCopied] = React.useState(false);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="mb-12">
      <div className="mb-4">
        <h2 className="text-2xl font-semibold text-text-primary mb-2">{title}</h2>
        {description && <p className="text-text-secondary">{description}</p>}
      </div>
      
      <div className="border border-border rounded-2xl overflow-hidden bg-white shadow-sm">
        {/* Preview Area */}
        <div className="p-8 flex items-center justify-center bg-white border-b border-border min-h-[200px]">
          {children}
        </div>
        
        {/* Code Area */}
        <div className="relative group">
          <button
            onClick={copyToClipboard}
            className="absolute right-4 top-4 p-2 rounded-lg bg-white border border-border opacity-0 group-hover:opacity-100 transition-opacity hover:bg-gray-50"
            title="Copy code"
          >
            {copied ? <Check className="w-4 h-4 text-green-500" /> : <Copy className="w-4 h-4 text-text-secondary" />}
          </button>
          <div className="p-4 bg-gray-50 overflow-x-auto">
            <SyntaxHighlighter
              language="tsx"
              style={oneLight}
              customStyle={{
                margin: 0,
                padding: 0,
                background: 'transparent',
                fontSize: '14px',
              }}
            >
              {code}
            </SyntaxHighlighter>
          </div>
        </div>
      </div>
    </div>
  );
}
