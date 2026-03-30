import React from 'react';
import { cn } from '@/src/lib/utils';

export interface RadioProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  description?: string;
  error?: boolean;
}

export const Radio = React.forwardRef<HTMLInputElement, RadioProps>(
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
            type="radio"
            id={id}
            ref={ref}
            className="peer sr-only"
            {...props}
          />
          <div className={cn(
            "w-[var(--radio-size)] h-[var(--radio-size)] rounded-full border-[var(--radio-border-width)] transition-all",
            "border-gray-200 bg-white",
            "peer-checked:border-primary peer-checked:bg-white",
            "peer-focus-visible:ring-4 peer-focus-visible:ring-primary/20",
            error && "border-error",
            props.disabled && "border-gray-200 bg-gray-50"
          )} />
          <div className={cn(
            "absolute w-[var(--radio-inner-size)] h-[var(--radio-inner-size)] rounded-full bg-primary scale-0 transition-transform",
            "peer-checked:scale-100",
            props.disabled && "bg-gray-300"
          )} />
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

Radio.displayName = 'Radio';

export interface RadioGroupProps {
  children: React.ReactNode;
  label?: string;
  orientation?: 'horizontal' | 'vertical';
  className?: string;
  error?: string;
}

export const RadioGroup: React.FC<RadioGroupProps> = ({
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
