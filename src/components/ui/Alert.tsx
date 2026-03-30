import React from 'react';
import { AlertCircle, CheckCircle, Info, XCircle, X } from 'lucide-react';
import { cn } from '@/src/lib/utils';

export interface AlertProps {
  title?: string;
  children?: React.ReactNode;
  status?: 'info' | 'success' | 'warning' | 'error';
  size?: 'sm' | 'lg';
  icon?: boolean;
  cta?: React.ReactNode;
  onClose?: () => void;
  className?: string;
}

export const Alert: React.FC<AlertProps> = ({
  title,
  children,
  status = 'info',
  size = 'lg',
  icon = true,
  cta,
  onClose,
  className,
}) => {
  const icons = {
    info: Info,
    success: CheckCircle,
    warning: AlertCircle,
    error: XCircle,
  };

  const variants = {
    info: 'bg-blue-50 text-blue-600 border-blue-100',
    success: 'bg-success-bg text-success border-success-border',
    warning: 'bg-warning-bg text-warning border-warning-border',
    error: 'bg-error-bg text-error border-error-border',
  };

  const Icon = icons[status];

  return (
    <div className={cn(
      "flex gap-3 rounded-2xl border transition-all",
      size === 'lg' ? "p-4" : "p-3",
      variants[status],
      className
    )}>
      {icon && <Icon className={cn("shrink-0", size === 'lg' ? "w-5 h-5 mt-0.5" : "w-4 h-4 mt-0")} />}
      
      <div className="flex-1 min-w-0">
        <div className="flex flex-col gap-1">
          {title && (
            <h4 className={cn(
              "font-bold leading-tight tracking-tight",
              size === 'lg' ? "text-sm" : "text-xs"
            )}>
              {title}
            </h4>
          )}
          {children && (
            <div className={cn(
              "opacity-90 leading-relaxed font-medium",
              size === 'lg' ? "text-sm" : "text-[11px]"
            )}>
              {children}
            </div>
          )}
          {cta && (
            <div className={cn(
              "mt-2",
              size === 'lg' ? "block" : "inline-block"
            )}>
              {cta}
            </div>
          )}
        </div>
      </div>

      {onClose && (
        <button 
          onClick={onClose} 
          className="shrink-0 w-8 h-8 flex items-center justify-center hover:bg-black/5 rounded-xl transition-all active:scale-90 self-start -mr-1 -mt-1 outline-none focus-visible:ring-2 focus-visible:ring-black/10"
        >
          <X className={cn(size === 'lg' ? "w-4 h-4" : "w-3.5 h-3.5")} />
        </button>
      )}
    </div>
  );
};
