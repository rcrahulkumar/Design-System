import React from 'react';
import { cn } from '@/src/lib/utils';
import { Minus, Plus, Trash2 } from 'lucide-react';

export interface CartItemProps extends React.HTMLAttributes<HTMLDivElement> {
  name: string;
  price: number | string;
  quantity: number;
  image?: string;
  variant?: 'default' | 'compact';
  onIncrement?: () => void;
  onDecrement?: () => void;
  onRemove?: () => void;
}

export const CartItem = React.forwardRef<HTMLDivElement, CartItemProps>(
  ({ className, name, price, quantity, image, variant = 'default', onIncrement, onDecrement, onRemove, ...props }, ref) => {
    return (
      <div 
        ref={ref}
        className={cn(
          "flex items-center bg-white rounded-xl border border-gray-100 transition-all hover:shadow-sm", 
          variant === 'compact' ? "p-3 gap-3" : "p-4 gap-4",
          className
        )}
        {...props}
      >
        {image && (
          <img 
            src={image} 
            alt={name} 
            className={cn(
              "rounded-lg object-cover bg-gray-50 border border-gray-100",
              variant === 'compact' ? "w-12 h-12" : "w-16 h-16"
            )} 
          />
        )}
        
        <div className="flex-1 min-w-0">
          <p className="text-sm font-medium text-gray-900 truncate">{name}</p>
          <p className="font-semibold text-gray-900 mt-0.5">${price}</p>
        </div>

        <div className="flex flex-col items-end gap-2">
          {(onIncrement || onDecrement) ? (
            <div className="flex items-center gap-3 bg-gray-50 rounded-lg p-1 border border-gray-100">
              <button 
                onClick={onDecrement}
                disabled={quantity <= 1 && !onRemove}
                className="w-6 h-6 flex items-center justify-center rounded-md bg-white text-gray-500 hover:text-gray-900 hover:shadow-sm disabled:opacity-50 transition-all"
              >
                {quantity <= 1 && onRemove ? <Trash2 className="w-3.5 h-3.5 text-red-500" /> : <Minus className="w-3.5 h-3.5" />}
              </button>
              <span className="text-sm font-medium w-4 text-center">{quantity}</span>
              <button 
                onClick={onIncrement}
                className="w-6 h-6 flex items-center justify-center rounded-md bg-white text-gray-500 hover:text-gray-900 hover:shadow-sm transition-all"
              >
                <Plus className="w-3.5 h-3.5" />
              </button>
            </div>
          ) : (
            <p className="text-sm text-gray-500 bg-gray-50 px-2 py-1 rounded-md border border-gray-100">Qty: {quantity}</p>
          )}
          
          {onRemove && !onDecrement && (
            <button onClick={onRemove} className="text-xs text-red-500 hover:text-red-600 font-medium">
              Remove
            </button>
          )}
        </div>
      </div>
    );
  }
);
CartItem.displayName = "CartItem";
