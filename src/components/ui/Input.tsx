import React from 'react';
import { cn } from '@/src/lib/utils';

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  helperText?: string;
  sizeVariant?: 'sm' | 'md' | 'lg';
}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, label, error, helperText, sizeVariant = 'md', ...props }, ref) => {
    const sizes = {
      sm: 'h-10 px-3 text-xs rounded-lg',
      md: 'h-[var(--input-height)] px-4 text-sm rounded-xl',
      lg: 'h-14 px-5 text-base rounded-2xl',
    };

    const stateClasses = error
      ? 'border-error bg-error-bg text-error focus:ring-error/20'
      : 'border-gray-200 bg-white focus:border-primary focus:ring-primary/10 hover:border-gray-300';

    const disabledClasses = props.disabled
      ? 'bg-gray-50 text-gray-400 cursor-not-allowed border-gray-100'
      : '';

    const readOnlyClasses = props.readOnly
      ? 'bg-gray-50 text-gray-500 cursor-default border-gray-100'
      : '';

    return (
      <div className="flex flex-col gap-2 w-full">
        {label && (
          <label className="text-xs font-bold text-gray-400 uppercase tracking-widest ml-1">
            {label}
          </label>
        )}
        <input
          ref={ref}
          className={cn(
            'w-full border transition-all outline-none focus:ring-4 font-medium placeholder:text-gray-300',
            sizes[sizeVariant],
            stateClasses,
            disabledClasses,
            readOnlyClasses,
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

Input.displayName = 'Input';
