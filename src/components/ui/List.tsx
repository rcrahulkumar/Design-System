import React from 'react';
import { cn } from '@/src/lib/utils';

export interface ListItemProps {
  title: string;
  description?: string;
  left?: React.ReactNode;
  right?: React.ReactNode;
  meta?: string;
  onClick?: () => void;
  active?: boolean;
  className?: string;
  padding?: 'sm' | 'lg';
}

export const ListItem: React.FC<ListItemProps> = ({
  title,
  description,
  left,
  right,
  meta,
  onClick,
  active = false,
  className,
  padding = 'lg',
}) => {
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
        "flex items-center gap-4 transition-all group outline-none focus-visible:bg-gray-50 focus-visible:ring-4 focus-visible:ring-primary/10",
        padding === 'lg' ? "p-[var(--list-item-padding)]" : "p-3",
        onClick ? "cursor-pointer hover:bg-gray-50 active:bg-orange-50" : "cursor-default",
        active && "bg-orange-50 border-l-4 border-primary",
        className
      )}
    >
      {left && (
        <div className="flex-shrink-0 flex items-center justify-center">
          {left}
        </div>
      )}
      
      <div className="flex-1 min-w-0 flex flex-col gap-0.5">
        <div className="flex items-center justify-between gap-2">
          <h4 className={cn(
            "text-sm font-semibold truncate",
            active ? "text-primary" : "text-gray-900"
          )}>
            {title}
          </h4>
          {meta && (
            <span className="text-[10px] font-bold uppercase tracking-wider text-gray-400 whitespace-nowrap">
              {meta}
            </span>
          )}
        </div>
        {description && (
          <p className="text-xs text-gray-500 line-clamp-1">
            {description}
          </p>
        )}
      </div>

      {right && (
        <div className="flex-shrink-0 flex items-center justify-center">
          {right}
        </div>
      )}
    </div>
  );
};

export interface ListProps {
  children: React.ReactNode;
  className?: string;
  divider?: boolean;
  label?: string;
}

export const List: React.FC<ListProps> = ({
  children,
  className,
  divider = true,
  label,
}) => {
  return (
    <div className={cn("flex flex-col", className)}>
      {label && (
        <h3 className="px-4 mb-2 text-[10px] font-bold uppercase tracking-[0.15em] text-gray-400">
          {label}
        </h3>
      )}
      <div className={cn(
        "bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm",
        divider && "divide-y divide-gray-100"
      )}>
        {children}
      </div>
    </div>
  );
};
