import React from 'react';
import { cn } from '@/src/lib/utils';
import { X } from 'lucide-react';

export interface ChipProps {
  label: string;
  type?: 'selection' | 'tag';
  selected?: boolean;
  disabled?: boolean;
  size?: 'sm' | 'md';
  color?: 'orange' | 'blue' | 'green' | 'red' | 'gray';
  onSelect?: () => void;
  onRemove?: () => void;
  className?: string;
}

export const Chip: React.FC<ChipProps> = ({
  label,
  type = 'selection',
  selected = false,
  disabled = false,
  size = 'md',
  color = 'gray',
  onSelect,
  onRemove,
  className,
}) => {
  const isSelection = type === 'selection';

  const sizes = {
    sm: 'h-7 px-2.5 text-[11px]',
    md: 'h-9 px-4 text-sm',
  };

  const selectionStyles = selected
    ? 'bg-primary text-white border-primary shadow-sm'
    : 'bg-white text-gray-600 border-gray-200 hover:border-gray-300 hover:bg-gray-50';

  const tagStyles = {
    orange: 'bg-primary/10 text-primary border-primary/20',
    blue: 'bg-blue-50 text-blue-600 border-blue-100',
    green: 'bg-success/10 text-success border-success/20',
    red: 'bg-error/10 text-error border-error/20',
    gray: 'bg-gray-100 text-gray-600 border-gray-200',
  };

  const disabledStyles = 'opacity-40 cursor-not-allowed grayscale border-gray-100';

  return (
    <div
      onClick={!disabled && isSelection ? onSelect : undefined}
      onKeyDown={(e) => {
        if (!disabled && isSelection && (e.key === 'Enter' || e.key === ' ')) {
          e.preventDefault();
          onSelect?.();
        }
      }}
      tabIndex={!disabled && isSelection ? 0 : undefined}
      role={isSelection ? "button" : undefined}
      aria-pressed={isSelection ? selected : undefined}
      className={cn(
        'inline-flex items-center gap-2 rounded-full border font-medium transition-all select-none active:scale-95 outline-none focus-visible:ring-4 focus-visible:ring-primary/20',
        isSelection ? 'cursor-pointer' : 'cursor-default',
        sizes[size],
        isSelection ? selectionStyles : tagStyles[color],
        disabled && disabledStyles,
        className
      )}
    >
      <span className="tracking-tight">{label}</span>
      {onRemove && (
        <button
          onClick={(e) => {
            e.stopPropagation();
            onRemove();
          }}
          className="w-5 h-5 flex items-center justify-center hover:bg-black/5 rounded-full transition-colors -mr-1.5 outline-none focus-visible:ring-2 focus-visible:ring-black/20"
        >
          <X className="w-3.5 h-3.5" />
        </button>
      )}
    </div>
  );
};
