import React from 'react';
import { cn } from '@/src/lib/utils';

export interface HeadingProps {
  title: string;
  description?: string;
  align?: 'left' | 'center';
  size?: 'sm' | 'md' | 'lg';
  cta?: React.ReactNode;
  className?: string;
}

export const Heading: React.FC<HeadingProps> = ({
  title,
  description,
  align = 'left',
  size = 'lg',
  cta,
  className,
}) => {
  const sizes = {
    sm: "text-base",
    md: "text-xl",
    lg: "text-2xl",
  };

  return (
    <div className={cn(
      "flex flex-col gap-2",
      align === 'center' ? "items-center text-center" : "items-start text-left",
      className
    )}>
      <div className="flex items-center justify-between w-full gap-6">
        <h2 className={cn(
          "font-bold text-gray-900 leading-tight tracking-tight",
          sizes[size]
        )}>
          {title}
        </h2>
        {cta && <div className="shrink-0">{cta}</div>}
      </div>
      {description && (
        <p className={cn(
          "text-gray-500 leading-relaxed max-w-2xl font-medium",
          size === 'lg' ? "text-sm" : "text-xs"
        )}>
          {description}
        </p>
      )}
    </div>
  );
};
