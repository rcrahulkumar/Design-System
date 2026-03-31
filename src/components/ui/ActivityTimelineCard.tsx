import React from 'react';
import { cn } from "@/src/lib/utils";
import { Trash2, CheckCircle2 } from "lucide-react";

export interface ActivityTimelineCardProps {
  title: string;
  value: string;
  time: string;
  status?: "completed" | "pending" | "missed";
  onDelete?: () => void;
  className?: string;
}

export const ActivityTimelineCard = ({
  title,
  value,
  time,
  status = "pending",
  onDelete,
  className,
}: ActivityTimelineCardProps) => {
  return (
    <div className={cn(
      "flex justify-between items-center p-4 bg-white rounded-2xl border border-gray-100 shadow-sm transition-all hover:shadow-md group",
      className
    )}>
      <div className="flex flex-col gap-1">
        <p className="text-base font-semibold text-gray-900">{value}</p>
        <p className="text-sm font-medium text-gray-500">{title}</p>
      </div>

      <div className="flex items-center gap-4">
        <div className="text-right flex flex-col items-end gap-1">
          <p className="text-sm font-medium text-gray-600">{time}</p>

          {status === "completed" && (
            <div className="flex items-center gap-1 text-emerald-500">
              <CheckCircle2 className="w-3.5 h-3.5" />
              <p className="text-xs font-semibold">Done</p>
            </div>
          )}
          {status === "missed" && (
            <p className="text-rose-500 text-xs font-semibold">Missed</p>
          )}
        </div>

        {onDelete && (
          <button 
            onClick={onDelete} 
            className="text-gray-300 hover:text-rose-500 transition-colors p-2 rounded-full hover:bg-rose-50 opacity-0 group-hover:opacity-100 focus:opacity-100"
            aria-label="Delete activity"
          >
            <Trash2 className="w-4 h-4" />
          </button>
        )}
      </div>
    </div>
  );
};
