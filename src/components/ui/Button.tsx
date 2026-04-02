import React from 'react';
import { cn } from '@/src/lib/utils';

import { LucideIcon } from 'lucide-react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'tertiary';
  size?: 'sm' | 'md' | 'lg';
  isLoading?: boolean;
  icon?: LucideIcon;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'md', isLoading, icon: Icon, children, ...props }, ref) => {
    const variants = {
      primary: 'bg-primary text-text-on-primary hover:bg-primary-hover hover:shadow-md hover:-translate-y-0.5 active:bg-primary-pressed active:translate-y-0 shadow-sm disabled:bg-gray-200 disabled:text-white disabled:shadow-none disabled:translate-y-0',
      secondary: 'bg-secondary-subtle text-secondary border border-secondary/20 hover:bg-secondary-subtle/80 hover:shadow-md hover:-translate-y-0.5 active:bg-secondary active:text-white active:translate-y-0 shadow-sm disabled:bg-gray-100 disabled:text-gray-400 disabled:border-gray-200 disabled:shadow-none disabled:translate-y-0',
      tertiary: 'bg-transparent text-primary hover:bg-primary-subtle active:bg-primary-subtle/50 disabled:text-gray-300',
    };

    const sizes = {
      sm: 'h-[var(--button-height-sm)] px-4 text-xs gap-1.5 rounded-lg',
      md: 'h-[var(--button-height-md)] px-6 text-sm gap-2 rounded-xl',
      lg: 'h-[var(--button-height-lg)] px-8 text-base gap-2.5 rounded-2xl',
    };

    return (
      <button
        ref={ref}
        className={cn(
          'inline-flex items-center justify-center font-semibold transition-all active:scale-[0.98] disabled:pointer-events-none tracking-tight outline-none focus-visible:ring-4 focus-visible:ring-primary/20',
          variants[variant],
          sizes[size],
          className
        )}
        disabled={isLoading || props.disabled}
        {...props}
      >
        {isLoading ? (
          <div className="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin mr-2" />
        ) : null}
        {!isLoading && Icon && (
          <Icon className={cn("w-4 h-4", children ? "mr-2" : "")} />
        )}
        {children}
      </button>
    );
  }
);
