import React from 'react';
import { cn } from "@/src/lib/utils";
import { Star, MapPin } from "lucide-react";

export interface DoctorListItemProps {
  name: string;
  specialty: string;
  rating: number;
  distance: string;
  availability: string;
  avatar: string;
  onSelect?: () => void;
  className?: string;
}

export const DoctorListItem = ({
  name,
  specialty,
  rating,
  distance,
  availability,
  avatar,
  onSelect,
  className,
}: DoctorListItemProps) => {
  return (
    <div
      onClick={onSelect}
      className={cn(
        "flex gap-4 p-5 bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md hover:border-primary/20 transition-all cursor-pointer group",
        className
      )}
    >
      <div className="relative">
        <img 
          src={avatar} 
          alt={name} 
          className="w-16 h-16 rounded-full object-cover border-2 border-white shadow-sm group-hover:border-primary/10 transition-colors" 
        />
        <div className="absolute bottom-0 right-0 w-4 h-4 bg-emerald-500 border-2 border-white rounded-full" />
      </div>

      <div className="flex-1 flex flex-col justify-center">
        <div className="flex justify-between items-start">
          <div>
            <h3 className="font-semibold text-gray-900 text-lg leading-tight">{name}</h3>
            <p className="text-sm font-medium text-primary mt-0.5">{specialty}</p>
          </div>
        </div>

        <div className="flex items-center gap-4 mt-2.5 text-sm font-medium text-gray-500">
          <div className="flex items-center gap-1 text-amber-500">
            <Star className="w-4 h-4 fill-current" />
            <span className="text-gray-700">{rating.toFixed(1)}</span>
          </div>
          <div className="flex items-center gap-1">
            <MapPin className="w-4 h-4 text-gray-400" />
            <span>{distance}</span>
          </div>
        </div>

        <div className="mt-3 inline-flex items-center px-2.5 py-1 rounded-md bg-emerald-50 text-emerald-600 text-xs font-semibold self-start">
          {availability}
        </div>
      </div>
    </div>
  );
};
