import React from 'react';
import { cn } from '@/src/lib/utils';
import { Button } from './Button';
import { LucideIcon } from 'lucide-react';

export interface PermissionCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  status?: 'default' | 'allowed' | 'blocked';
  onAllow: () => void;
  onDecline?: () => void;
  className?: string;
}

export const PermissionCard: React.FC<PermissionCardProps> = ({
  title,
  description,
  icon: Icon,
  status = 'default',
  onAllow,
  onDecline,
  className,
}) => {
  return (
    <div
      className={cn(
        "p-[var(--permission-padding)] rounded-[var(--permission-radius)] border transition-all flex flex-col items-center text-center",
        status === 'default' && "bg-white border-gray-100 shadow-sm",
        status === 'allowed' && "bg-success-bg border-success-border",
        status === 'blocked' && "bg-error-bg border-error-border",
        className
      )}
    >
      <div className={cn(
        "w-20 h-20 rounded-3xl flex items-center justify-center mb-8 transition-all duration-500",
        status === 'default' && "bg-primary-subtle text-primary",
        status === 'allowed' && "bg-success text-white rotate-[360deg]",
        status === 'blocked' && "bg-error text-white"
      )}>
        <Icon size={40} strokeWidth={status === 'default' ? 2 : 2.5} />
      </div>

      <h3 className="text-xl font-bold text-gray-900 mb-3 tracking-tight">
        {title}
      </h3>
      <p className="text-sm font-medium text-gray-500 mb-10 leading-relaxed max-w-[260px]">
        {description}
      </p>

      <div className="flex flex-col gap-3 w-full">
        <Button 
          onClick={onAllow} 
          className="w-full" 
          variant={status === 'allowed' ? 'secondary' : 'primary'}
          size="lg"
        >
          {status === 'allowed' ? 'Access Granted' : 'Allow Access'}
        </Button>
        {onDecline && status === 'default' && (
          <Button variant="tertiary" onClick={onDecline} className="w-full" size="lg">
            Not Now
          </Button>
        )}
      </div>
    </div>
  );
};
