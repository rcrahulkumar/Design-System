import React from 'react';
import { cn } from '@/src/lib/utils';

export interface BadgeProps {
  children: React.ReactNode;
  variant?: 'light' | 'outline' | 'dark' | 'nobg';
  status?: 'success' | 'warning' | 'error' | 'inactive' | 'primary';
  size?: 'sm' | 'md';
  className?: string;
  icon?: React.ReactNode;
}

export const Badge: React.FC<BadgeProps> = ({
  children,
  variant = 'light',
  status = 'inactive',
  size = 'md',
  className,
  icon,
}) => {
  const baseStyles = 'inline-flex items-center justify-center font-bold uppercase tracking-[0.1em] rounded-full';
  
  const sizes = {
    sm: 'px-2 py-0.5 text-[9px]',
    md: 'px-3 py-1 text-[11px]',
  };

  const statusColors = {
    success: {
      light: 'bg-success/10 text-success',
      outline: 'bg-transparent text-success border border-success/20',
      dark: 'bg-success text-white',
      nobg: 'bg-transparent text-success',
    },
    warning: {
      light: 'bg-warning/10 text-warning',
      outline: 'bg-transparent text-warning border border-warning/20',
      dark: 'bg-warning text-white',
      nobg: 'bg-transparent text-warning',
    },
    error: {
      light: 'bg-error/10 text-error',
      outline: 'bg-transparent text-error border border-error/20',
      dark: 'bg-error text-white',
      nobg: 'bg-transparent text-error',
    },
    inactive: {
      light: 'bg-gray-100 text-gray-500',
      outline: 'bg-transparent text-gray-500 border border-gray-200',
      dark: 'bg-gray-500 text-white',
      nobg: 'bg-transparent text-gray-500',
    },
    primary: {
      light: 'bg-primary/10 text-primary',
      outline: 'bg-transparent text-primary border border-primary/20',
      dark: 'bg-primary text-white',
      nobg: 'bg-transparent text-primary',
    },
  };

  return (
    <span
      className={cn(
        baseStyles,
        sizes[size],
        statusColors[status][variant],
        className
      )}
    >
      {icon && <span className="mr-1">{icon}</span>}
      {children}
    </span>
  );
};
