import React from 'react';
import { cn } from '@/src/lib/utils';

export interface CardProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'elevated';
  padding?: 'sm' | 'md' | 'lg';
  className?: string;
  onClick?: () => void;
}

export const Card: React.FC<CardProps> = ({
  children,
  variant = 'primary',
  padding = 'md',
  className,
  onClick,
}) => {
  const paddings = {
    sm: "p-[var(--card-padding-sm)]",
    md: "p-[var(--card-padding-md)]",
    lg: "p-[var(--card-padding-lg)]",
  };

  const variants = {
    primary: "bg-white shadow-sm border border-gray-200/50",
    secondary: "bg-gray-50 border border-gray-200",
    elevated: "bg-white shadow-md border border-gray-100",
  };

  return (
    <div
      onClick={onClick}
      onKeyDown={(e) => {
        if (onClick && (e.key === 'Enter' || e.key === ' ')) {
          e.preventDefault();
          onClick();
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
    >
      {children}
    </div>
  );
};
