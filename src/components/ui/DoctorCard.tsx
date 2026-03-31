import React from 'react';
import { cn } from '@/src/lib/utils';

export interface DoctorCardProps extends React.HTMLAttributes<HTMLDivElement> {
  name: string;
  specialty: string;
  image: string;
  price?: string | number;
  selected?: boolean;
  onClick?: () => void;
}

export const DoctorCard = React.forwardRef<HTMLDivElement, DoctorCardProps>(
  ({ className, name, specialty, image, price, selected, onClick, ...props }, ref) => {
    return (
      <div 
        ref={ref}
        onClick={onClick}
        className={cn(
          "flex gap-3 p-4 rounded-2xl cursor-pointer transition-all bg-white shadow-sm border items-center",
          selected ? "border-brand ring-1 ring-brand bg-brand/5" : "border-gray-100 hover:shadow-md hover:border-gray-200",
          className
        )}
        {...props}
      >
        <img src={image} alt={name} className="w-12 h-12 rounded-full object-cover" />

        <div className="flex-1">
          <p className="font-medium text-sm text-gray-900">{name}</p>
          <p className="text-xs text-gray-500">{specialty}</p>
        </div>

        {price && (
          <span className="text-sm font-semibold text-gray-900">${price}</span>
        )}
      </div>
    );
  }
);
DoctorCard.displayName = "DoctorCard";
