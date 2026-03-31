import React from 'react';
import { cn } from "@/src/lib/utils";
import { Edit2 } from "lucide-react";

export interface ProfileHeaderCardProps {
  name: string;
  email: string;
  avatar: string;
  onEdit?: () => void;
  className?: string;
}

export const ProfileHeaderCard = ({
  name,
  email,
  avatar,
  onEdit,
  className,
}: ProfileHeaderCardProps) => {
  return (
    <div className={cn(
      "p-5 bg-white rounded-2xl flex items-center gap-4 shadow-sm border border-gray-100 transition-all hover:shadow-md group",
      className
    )}>
      <div className="relative">
        <img 
          src={avatar} 
          alt={name} 
          className="w-16 h-16 rounded-full object-cover border-2 border-white shadow-sm" 
        />
        <div className="absolute bottom-0 right-0 w-4 h-4 bg-emerald-500 border-2 border-white rounded-full" />
      </div>

      <div className="flex-1">
        <h2 className="text-xl font-bold text-gray-900">{name}</h2>
        <p className="text-sm font-medium text-gray-500 mt-0.5">{email}</p>
      </div>

      {onEdit && (
        <button
          onClick={onEdit}
          className="bg-amber-100/50 hover:bg-amber-100 text-amber-600 p-3 rounded-xl transition-colors focus:ring-2 focus:ring-amber-500 focus:outline-none"
          aria-label="Edit profile"
        >
          <Edit2 className="w-5 h-5" />
        </button>
      )}
    </div>
  );
};
