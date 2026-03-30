import React from 'react';
import { cn } from '@/src/lib/utils';
import { ChevronLeft } from 'lucide-react';

export interface HeaderProps {
  title?: string;
  subtitle?: string;
  leftAction?: React.ReactNode;
  rightActions?: React.ReactNode;
  showBack?: boolean;
  onBack?: () => void;
  className?: string;
  isScrolled?: boolean;
}

export const Header: React.FC<HeaderProps> = ({
  title,
  subtitle,
  leftAction,
  rightActions,
  showBack = false,
  onBack,
  className,
  isScrolled = false,
}) => {
  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full flex items-center justify-between h-[var(--header-height)] px-8 bg-white/80 backdrop-blur-xl transition-all",
        isScrolled ? "shadow-md border-b border-gray-100" : "border-b border-transparent",
        className
      )}
    >
      {/* Left Section */}
      <div className="flex items-center gap-4 min-w-[120px]">
        {showBack && (
          <button
            onClick={onBack}
            className="w-10 h-10 -ml-2 flex items-center justify-center hover:bg-gray-100 rounded-xl transition-all active:scale-90 outline-none focus-visible:ring-4 focus-visible:ring-primary/20"
            aria-label="Go back"
          >
            <ChevronLeft className="w-6 h-6 text-gray-900" />
          </button>
        )}
        {leftAction}
      </div>

      {/* Center Section */}
      <div className="flex flex-col items-center text-center overflow-hidden px-4">
        {title && (
          <h1 className="text-sm font-bold text-gray-900 truncate w-full tracking-tight">
            {title}
          </h1>
        )}
        {subtitle && (
          <span className="text-[10px] font-bold text-success uppercase tracking-[0.15em] mt-0.5">
            {subtitle}
          </span>
        )}
      </div>

      {/* Right Section */}
      <div className="flex items-center justify-end gap-4 min-w-[120px]">
        {rightActions}
      </div>
    </header>
  );
};
