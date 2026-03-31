import React from 'react';
import { cn } from '@/src/lib/utils';

export interface ProgressBarProps extends React.HTMLAttributes<HTMLDivElement> {
  value: number;
  label?: string;
  showValue?: boolean;
  variant?: 'success' | 'warning' | 'critical' | 'brand';
  size?: 'sm' | 'md' | 'lg';
}

export const ProgressBar = React.forwardRef<HTMLDivElement, ProgressBarProps>(
  ({ className, value, label, showValue = true, variant = 'brand', size = 'md', ...props }, ref) => {
    const clampedValue = Math.min(100, Math.max(0, value));
    
    const colors = {
      success: "bg-green-500",
      warning: "bg-yellow-500",
      critical: "bg-red-500",
      brand: "bg-brand",
    };

    const sizes = {
      sm: "h-1",
      md: "h-2",
      lg: "h-3",
    };

    return (
      <div ref={ref} className={cn("w-full", className)} {...props}>
        {label && (
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm font-medium text-gray-700">{label}</span>
            {showValue && <span className="text-sm text-gray-500">{clampedValue}%</span>}
          </div>
        )}
        <div className={cn("bg-gray-200 rounded-full overflow-hidden", sizes[size])}>
          <div
            className={cn("h-full rounded-full transition-all duration-500 ease-in-out", colors[variant])}
            style={{ width: `${clampedValue}%` }}
          />
        </div>
        {!label && showValue && (
          <p className="text-sm mt-1 text-gray-500">{clampedValue}%</p>
        )}
      </div>
    );
  }
);
ProgressBar.displayName = "ProgressBar";
