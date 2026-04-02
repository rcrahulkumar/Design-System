import React from 'react';
import { cn } from '@/src/lib/utils';

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: 'primary' | 'secondary' | 'elevated';
  padding?: 'none' | 'sm' | 'md' | 'lg';
}

export const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ className, variant = 'primary', padding = 'md', onClick, children, ...props }, ref) => {
    const paddings = {
      none: "",
      sm: "p-[var(--card-padding-sm)]",
      md: "p-[var(--card-padding-md)]",
      lg: "p-[var(--card-padding-lg)]",
    };

    const variants = {
      primary: "bg-white shadow-sm border border-gray-100",
      secondary: "bg-gray-50/80 border border-gray-200/60",
      elevated: "bg-white shadow-md border border-gray-100/50",
    };

    return (
      <div
        ref={ref}
        onClick={onClick}
        onKeyDown={(e) => {
          if (onClick && (e.key === 'Enter' || e.key === ' ')) {
            e.preventDefault();
            onClick(e as any);
          }
        }}
        tabIndex={onClick ? 0 : undefined}
        role={onClick ? "button" : undefined}
        className={cn(
          "rounded-[var(--card-radius)] transition-all duration-200 outline-none focus-visible:ring-4 focus-visible:ring-primary/10",
          variants[variant],
          paddings[padding],
          onClick && "cursor-pointer hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98]",
          className
        )}
        {...props}
      >
        {children}
      </div>
    );
  }
);
Card.displayName = "Card";

export const CardHeader = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn("flex flex-col space-y-1.5 mb-4", className)}
      {...props}
    />
  )
);
CardHeader.displayName = "CardHeader";

export const CardTitle = React.forwardRef<HTMLParagraphElement, React.HTMLAttributes<HTMLHeadingElement>>(
  ({ className, ...props }, ref) => (
    <h3
      ref={ref}
      className={cn("text-lg font-bold leading-none tracking-tight text-gray-900", className)}
      {...props}
    />
  )
);
CardTitle.displayName = "CardTitle";

export const CardDescription = React.forwardRef<HTMLParagraphElement, React.HTMLAttributes<HTMLParagraphElement>>(
  ({ className, ...props }, ref) => (
    <p
      ref={ref}
      className={cn("text-sm font-medium text-gray-500", className)}
      {...props}
    />
  )
);
CardDescription.displayName = "CardDescription";

export const CardContent = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn("", className)} {...props} />
  )
);
CardContent.displayName = "CardContent";

export const CardFooter = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn("flex items-center mt-4 pt-4 border-t border-gray-100", className)}
      {...props}
    />
  )
);
CardFooter.displayName = "CardFooter";
