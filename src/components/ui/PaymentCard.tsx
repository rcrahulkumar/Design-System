import React from 'react';
import { cn } from '@/src/lib/utils';
import { CreditCard } from 'lucide-react';

export interface PaymentCardProps extends React.HTMLAttributes<HTMLDivElement> {
  method: string;
  selected?: boolean;
  disabled?: boolean;
  onSelect?: () => void;
  last4?: string;
  icon?: React.ReactNode;
}

export const PaymentCard = React.forwardRef<HTMLDivElement, PaymentCardProps>(
  ({ className, method, selected, disabled, onSelect, last4, icon, ...props }, ref) => {
    return (
      <div 
        ref={ref}
        onClick={!disabled ? onSelect : undefined}
        className={cn(
          "p-4 rounded-xl border transition-all flex items-center gap-3", 
          selected ? "border-primary bg-primary/5 ring-1 ring-primary" : "border-gray-200 bg-white",
          disabled ? "opacity-50 cursor-not-allowed" : "cursor-pointer hover:shadow-sm hover:border-gray-300",
          className
        )}
        {...props}
      >
        <div className={cn("p-2 rounded-lg", selected ? "bg-primary/10 text-primary" : "bg-gray-100 text-gray-500")}>
          {icon || <CreditCard className="w-5 h-5" />}
        </div>
        <div className="flex-1">
          <p className="text-sm font-medium text-gray-900">{method}</p>
          {last4 && <p className="text-xs text-gray-500">•••• {last4}</p>}
        </div>
        <div className={cn("w-4 h-4 rounded-full border flex items-center justify-center", selected ? "border-primary" : "border-gray-300")}>
          {selected && <div className="w-2 h-2 rounded-full bg-primary" />}
        </div>
      </div>
    );
  }
);
PaymentCard.displayName = "PaymentCard";
