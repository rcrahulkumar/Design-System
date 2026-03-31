import React from 'react';
import { cn } from '@/src/lib/utils';

export interface MapPinProps extends React.HTMLAttributes<HTMLDivElement> {
  image: string;
  isActive?: boolean;
  label?: string;
}

export const MapPin = React.forwardRef<HTMLDivElement, MapPinProps>(
  ({ className, image, isActive, label, ...props }, ref) => {
    return (
      <div 
        ref={ref}
        className={cn(
          "relative flex flex-col items-center transition-transform cursor-pointer group",
          isActive ? "scale-110 z-10" : "hover:scale-105 z-0",
          className
        )}
        {...props}
      >
        {label && (
          <div className={cn(
            "absolute -top-10 px-3 py-1.5 rounded-lg text-xs font-bold shadow-md whitespace-nowrap transition-all",
            isActive ? "bg-brand text-white" : "bg-white text-gray-900 opacity-0 group-hover:opacity-100"
          )}>
            {label}
            <div className={cn(
              "absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 rotate-45",
              isActive ? "bg-brand" : "bg-white"
            )} />
          </div>
        )}
        <div className={cn(
          "w-12 h-12 rounded-full bg-white shadow-md flex items-center justify-center transition-all",
          isActive ? "ring-4 ring-brand/30" : ""
        )}>
          <img src={image} alt={label || "Map Pin"} className="w-10 h-10 rounded-full object-cover border border-gray-100" />
        </div>
      </div>
    );
  }
);
MapPin.displayName = "MapPin";
