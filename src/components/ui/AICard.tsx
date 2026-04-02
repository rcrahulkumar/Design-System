import React from 'react';
import { cn } from '@/src/lib/utils';

export interface AICardProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string;
  description: string;
  variant?: 'blue' | 'green' | 'purple' | 'primary';
  loading?: boolean;
  action?: React.ReactNode;
}

export const AICard = React.forwardRef<HTMLDivElement, AICardProps>(
  ({ className, title, description, variant = 'primary', loading, action, ...props }, ref) => {
    const variants = {
      blue: "from-blue-500 to-blue-400",
      green: "from-green-500 to-green-400",
      purple: "from-purple-500 to-purple-400",
      primary: "from-primary to-primary/80",
    };

    return (
      <div 
        ref={ref}
        className={cn(
          "bg-gradient-to-r text-white rounded-2xl p-4 flex justify-between items-center shadow-md transition-all",
          variants[variant],
          loading ? "opacity-70 animate-pulse" : "",
          className
        )}
        {...props}
      >
        <div className="pr-4">
          <p className="font-semibold">{title}</p>
          <p className="text-sm opacity-90 mt-0.5">{description}</p>
        </div>
        {!loading && action && (
          <div className="flex-shrink-0">
            {action}
          </div>
        )}
      </div>
    );
  }
);
AICard.displayName = "AICard";
