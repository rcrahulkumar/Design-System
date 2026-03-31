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
    sm: "text-lg",
    md: "text-xl",
    lg: "text-3xl",
  };

  return (
    <div className={cn(
      "flex flex-col",
      align === 'center' ? "items-center text-center" : "items-start text-left",
      className
    )}>
      <div className="flex items-center justify-between w-full gap-6">
        <h1 className={cn(
          "font-semibold text-gray-900 tracking-tight",
          sizes[size]
        )}>
          {title}
        </h1>
        {cta && <div className="shrink-0">{cta}</div>}
      </div>
      {description && (
        <p className={cn(
          "text-gray-500 mt-2 max-w-xl",
          size === 'lg' ? "text-base" : "text-sm"
        )}>
          {description}
        </p>
      )}
    </div>
  );
};
