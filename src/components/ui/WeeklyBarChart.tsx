import React from 'react';
import { cn } from "@/src/lib/utils";

export interface WeeklyBarChartProps {
  data: number[];
  highlightIndex?: number;
  className?: string;
  labels?: string[];
}

export const WeeklyBarChart = ({
  data = [],
  highlightIndex,
  className,
  labels = ['M', 'T', 'W', 'T', 'F', 'S', 'S'],
}: WeeklyBarChartProps) => {
  const max = Math.max(...data, 1); // Avoid division by zero

  return (
    <div className={cn("flex flex-col gap-2", className)}>
      <div className="flex items-end justify-between h-24 gap-1.5">
        {data.map((value, i) => (
          <div
            key={i}
            className="flex-1 flex justify-center h-full relative group"
          >
            <div
              className={cn(
                "w-full max-w-[12px] rounded-full transition-all duration-500 absolute bottom-0",
                i === highlightIndex ? "bg-brand" : "bg-gray-200 group-hover:bg-gray-300"
              )}
              style={{ height: `${(value / max) * 100}%` }}
            />
          </div>
        ))}
      </div>
      <div className="flex items-center justify-between gap-1.5">
        {labels.map((label, i) => (
          <div key={i} className="flex-1 text-center">
            <span className={cn(
              "text-[10px] font-medium",
              i === highlightIndex ? "text-brand font-bold" : "text-gray-400"
            )}>
              {label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};
