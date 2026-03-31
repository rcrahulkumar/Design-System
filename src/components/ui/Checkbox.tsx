import React from 'react';
import { cn } from '@/src/lib/utils';
import { Check } from 'lucide-react';

export interface CheckboxProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  description?: string;
  error?: boolean;
}

export const Checkbox = React.forwardRef<HTMLInputElement, CheckboxProps>(
  ({ className, label, description, error, ...props }, ref) => {
    const id = React.useId();
    
    return (
      <label 
        htmlFor={id}
        className={cn(
          "group flex items-start gap-3 cursor-pointer select-none",
          props.disabled && "cursor-not-allowed opacity-50",
          className
        )}
      >
        <div className="relative flex items-center justify-center mt-0.5">
          <input
            type="checkbox"
            id={id}
            ref={ref}
            className="peer sr-only"
            {...props}
          />
          <div className={cn(
            "w-[var(--checkbox-size)] h-[var(--checkbox-size)] rounded-[var(--checkbox-radius)] border-2 transition-all",
            "border-gray-300 bg-white",
            "peer-checked:border-primary peer-checked:bg-primary",
            "peer-focus-visible:ring-2 peer-focus-visible:ring-offset-2 peer-focus-visible:ring-primary",
            error && "border-error",
            props.disabled && "border-gray-200 bg-gray-50"
          )} />
          <Check className={cn(
            "absolute w-3.5 h-3.5 text-white scale-0 transition-transform",
            "peer-checked:scale-100",
            props.disabled && "text-gray-300"
          )} strokeWidth={3} />
        </div>
        
        <div className="flex flex-col gap-0.5">
          {label && (
            <span className={cn(
              "text-sm font-medium text-gray-900",
              props.disabled && "text-gray-400"
            )}>
              {label}
            </span>
          )}
          {description && (
            <span className={cn(
              "text-xs text-gray-500",
              props.disabled && "text-gray-300"
            )}>
              {description}
            </span>
          )}
        </div>
      </label>
    );
  }
);

Checkbox.displayName = 'Checkbox';

export interface CheckboxGroupProps {
  children: React.ReactNode;
  label?: string;
  orientation?: 'horizontal' | 'vertical';
  className?: string;
  error?: string;
}

export const CheckboxGroup: React.FC<CheckboxGroupProps> = ({
  children,
  label,
  orientation = 'vertical',
  className,
  error
}) => {
  return (
    <div className={cn("flex flex-col gap-3", className)}>
      {label && (
        <span className="text-sm font-semibold text-gray-900 mb-1">
          {label}
        </span>
      )}
      <div className={cn(
        "flex",
        orientation === 'vertical' ? "flex-col gap-4" : "flex-row flex-wrap gap-8"
      )}>
        {children}
      </div>
      {error && (
        <span className="text-xs text-error font-medium mt-1">{error}</span>
      )}
    </div>
  );
};
