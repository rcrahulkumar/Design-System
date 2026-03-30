import React from 'react';
import { cn } from '@/src/lib/utils';
import { Button } from './Button';

export interface BannerProps {
  title: string;
  description: string;
  image?: string;
  imagePosition?: 'left' | 'right' | 'center';
  variant?: 'withBG' | 'noBG';
  primaryCTA?: { label: string; onClick: () => void };
  secondaryCTA?: { label: string; onClick: () => void };
  alert?: React.ReactNode;
  className?: string;
}

export const Banner: React.FC<BannerProps> = ({
  title,
  description,
  image,
  imagePosition = 'right',
  variant = 'withBG',
  primaryCTA,
  secondaryCTA,
  alert,
  className,
}) => {
  const isCenter = imagePosition === 'center';

  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-[var(--banner-radius)] transition-all",
        variant === 'withBG' ? "bg-primary-subtle border border-primary/10" : "bg-transparent",
        isCenter ? "flex flex-col items-center text-center p-10" : "flex items-center p-[var(--banner-padding)]",
        imagePosition === 'left' && "flex-row-reverse",
        className
      )}
    >
      <div className={cn(
        "flex-1 z-10",
        isCenter ? "w-full max-w-md" : "max-w-[65%]"
      )}>
        {alert && <div className="mb-6">{alert}</div>}
        
        <h2 className="text-2xl font-bold text-gray-900 mb-3 leading-tight tracking-tight">
          {title}
        </h2>
        <p className="text-sm font-medium text-gray-600 mb-8 leading-relaxed">
          {description}
        </p>

        <div className={cn(
          "flex items-center gap-4",
          isCenter && "justify-center"
        )}>
          {primaryCTA && (
            <Button onClick={primaryCTA.onClick} size="lg">
              {primaryCTA.label}
            </Button>
          )}
          {secondaryCTA && (
            <Button variant="secondary" onClick={secondaryCTA.onClick} size="lg">
              {secondaryCTA.label}
            </Button>
          )}
        </div>
      </div>

      {image && (
        <div className={cn(
          "flex-shrink-0",
          isCenter ? "mb-8 order-first" : "relative",
          imagePosition === 'left' ? "mr-10" : "ml-10"
        )}>
          <img
            src={image}
            alt={title}
            className={cn(
              "object-cover rounded-3xl shadow-xl",
              isCenter ? "w-40 h-40" : "w-48 h-48"
            )}
            referrerPolicy="no-referrer"
          />
        </div>
      )}
    </div>
  );
};
