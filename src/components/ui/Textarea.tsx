import React from 'react';
import { cn } from '@/src/lib/utils';

export interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  error?: string;
  helperText?: string;
}

export const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, label, error, helperText, ...props }, ref) => {
    const stateClasses = error
      ? 'border-error bg-error-bg text-error focus:ring-error/20'
      : 'border-gray-200 bg-white focus:border-primary focus:ring-primary/10';

    const disabledClasses = props.disabled
      ? 'bg-gray-50 text-gray-400 cursor-not-allowed border-gray-100'
      : '';

    return (
      <div className="flex flex-col gap-2 w-full">
        {label && (
          <label className="text-xs font-bold text-gray-400 uppercase tracking-widest ml-1">
            {label}
          </label>
        )}
        <textarea
          ref={ref}
          className={cn(
            'w-full border rounded-xl transition-all outline-none focus:ring-4 p-4 text-sm min-h-[120px] font-medium placeholder:text-gray-300',
            stateClasses,
            disabledClasses,
            className
          )}
          {...props}
        />
        {error && (
          <span className="text-xs text-error font-medium">{error}</span>
        )}
        {!error && helperText && (
          <span className="text-xs text-gray-400">{helperText}</span>
        )}
      </div>
    );
  }
);

Textarea.displayName = 'Textarea';
