import React from 'react';
import { Upload as UploadIcon, X } from 'lucide-react';
import { cn } from '@/src/lib/utils';

export interface UploadProps {
  label?: string;
  error?: string;
  helperText?: string;
  onFileSelect?: (file: File | null) => void;
  accept?: string;
}

export const Upload: React.FC<UploadProps> = ({
  label,
  error,
  helperText,
  onFileSelect,
  accept,
}) => {
  const [dragActive, setDragActive] = React.useState(false);
  const [selectedFile, setSelectedFile] = React.useState<File | null>(null);
  const inputRef = React.useRef<HTMLInputElement>(null);

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      const file = e.dataTransfer.files[0];
      setSelectedFile(file);
      onFileSelect?.(file);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      setSelectedFile(file);
      onFileSelect?.(file);
    }
  };

  const removeFile = () => {
    setSelectedFile(null);
    onFileSelect?.(null);
    if (inputRef.current) inputRef.current.value = '';
  };

  return (
    <div className="flex flex-col gap-1.5 w-full">
      {label && (
        <label className="text-sm font-medium text-gray-900">
          {label}
        </label>
      )}
      
      {!selectedFile ? (
        <div
          role="button"
          tabIndex={0}
          className={cn(
            "relative flex flex-col items-center justify-center w-full p-8 border-2 border-dashed rounded-xl transition-all outline-none focus-visible:ring-4 focus-visible:ring-primary/20",
            dragActive ? "border-primary bg-primary-subtle" : "border-gray-200 bg-gray-50",
            error ? "border-error bg-error-bg" : "hover:border-primary hover:bg-gray-100"
          )}
          onDragEnter={handleDrag}
          onDragLeave={handleDrag}
          onDragOver={handleDrag}
          onDrop={handleDrop}
          onClick={() => inputRef.current?.click()}
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') {
              e.preventDefault();
              inputRef.current?.click();
            }
          }}
        >
          <input
            ref={inputRef}
            type="file"
            className="hidden"
            accept={accept}
            onChange={handleChange}
          />
          <UploadIcon className={cn("w-8 h-8 mb-3", error ? "text-error" : "text-gray-400")} />
          <p className="text-sm font-medium text-gray-900">Click to upload or drag and drop</p>
          <p className="text-xs text-gray-500 mt-1">Maximum file size 10MB</p>
        </div>
      ) : (
        <div className="flex items-center justify-between p-4 border border-gray-200 rounded-lg bg-white">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-primary-subtle rounded-md">
              <UploadIcon className="w-5 h-5 text-primary" />
            </div>
            <div className="flex flex-col">
              <span className="text-sm font-medium text-gray-900 truncate max-w-[200px]">
                {selectedFile.name}
              </span>
              <span className="text-xs text-gray-500">
                {(selectedFile.size / 1024 / 1024).toFixed(2)} MB
              </span>
            </div>
          </div>
          <button
            onClick={removeFile}
            className="w-8 h-8 flex items-center justify-center hover:bg-gray-100 rounded-xl transition-all outline-none focus-visible:ring-4 focus-visible:ring-primary/20"
          >
            <X className="w-4 h-4 text-gray-400" />
          </button>
        </div>
      )}

      {error && (
        <span className="text-xs text-error font-medium">{error}</span>
      )}
      {!error && helperText && (
        <span className="text-xs text-gray-400">{helperText}</span>
      )}
    </div>
  );
};
