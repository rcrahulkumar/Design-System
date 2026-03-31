import React from 'react';
import { cn } from '@/src/lib/utils';
import { MoreHorizontal } from 'lucide-react';

export interface StatCardProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string;
  value: string | number;
  unit?: string;
  trend?: string;
  variant?: "default" | "success" | "warning" | "critical";
  size?: "sm" | "md" | "lg";
  loading?: boolean;
}

export const StatCard = React.forwardRef<HTMLDivElement, StatCardProps>(
  ({ className, title, value, unit, trend, variant = "default", size = "md", loading, ...props }, ref) => {
    const variants = {
      default: "bg-white border-gray-100",
      success: "bg-green-50 border-green-100",
      warning: "bg-yellow-50 border-yellow-100",
      critical: "bg-red-50 border-red-100",
    };

    const sizes = {
      sm: "p-3",
      md: "p-4",
      lg: "p-6",
    };

    const titleSizes = {
      sm: "text-xs",
      md: "text-sm",
      lg: "text-base",
    };

    const valueSizes = {
      sm: "text-xl",
      md: "text-2xl",
      lg: "text-3xl",
    };

    return (
      <div 
        ref={ref}
        className={cn(
          "rounded-2xl shadow-sm transition-all border",
          variants[variant],
          sizes[size],
          loading ? "animate-pulse opacity-70" : "",
          className
        )}
        {...props}
      >
        <div className={cn("flex justify-between text-gray-500", titleSizes[size])}>
          <span>{title}</span>
          <MoreHorizontal className="w-4 h-4 opacity-50" />
        </div>

        <div className="mt-3">
          <p className={cn("font-semibold text-gray-900", valueSizes[size])}>
            {loading ? "—" : value}{" "}
            {unit && <span className="text-sm text-gray-400 font-normal">{unit}</span>}
          </p>
        </div>

        {trend && !loading && (
          <div className="mt-2 text-xs text-green-600 font-medium">
            {trend}
          </div>
        )}
      </div>
    );
  }
);
StatCard.displayName = "StatCard";
