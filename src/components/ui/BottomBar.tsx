import React from 'react';
import { cn } from '@/src/lib/utils';

export interface BottomBarProps {
  children: React.ReactNode;
  layout?: 'row' | 'column' | 'price';
  className?: string;
  price?: string;
  priceLabel?: string;
  sticky?: boolean;
}

export const BottomBar: React.FC<BottomBarProps> = ({
  children,
  layout = 'row',
  className,
  price,
  priceLabel,
  sticky = true,
}) => {
  return (
    <div
      className={cn(
        "left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-t border-gray-100 px-8 py-5 shadow-xl transition-all",
        sticky ? "fixed bottom-0" : "relative",
        layout === 'column' ? "flex flex-col gap-4 h-auto" : "flex items-center justify-between h-[var(--bottom-bar-height)]",
        className
      )}
    >
      {layout === 'price' && (
        <div className="flex flex-col flex-1">
          {priceLabel && <span className="text-[11px] text-gray-400 uppercase font-bold leading-none mb-2 tracking-[0.15em]">{priceLabel}</span>}
          <span className="text-2xl font-bold text-gray-900 leading-none tracking-tight">{price}</span>
        </div>
      )}
      
      <div className={cn(
        "flex items-center gap-4",
        layout === 'row' ? "flex-1 w-full" : "",
        layout === 'column' ? "flex-col w-full" : "",
        layout === 'price' ? "flex-none" : ""
      )}>
        {children}
      </div>
    </div>
  );
};
