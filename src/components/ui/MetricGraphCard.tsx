import React from 'react';
import { cn } from "@/src/lib/utils";

export interface MetricGraphCardProps {
  title: string;
  value: string | number;
  unit?: string;
  trend?: string;
  graph?: React.ReactNode;
  variant?: "default" | "elevated" | "glass";
  interactive?: boolean;
  className?: string;
}

export const MetricGraphCard = ({
  title,
  value,
  unit,
  trend,
  graph,
  variant = "default",
  interactive = false,
  className,
}: MetricGraphCardProps) => {
  const variants = {
    default: "bg-white border border-gray-100",
    elevated: "bg-white shadow-md border border-gray-50",
    glass: "bg-white/70 backdrop-blur border border-white/20",
  };

  return (
    <div
      className={cn(
        "p-4 rounded-2xl transition-all",
        variants[variant],
        interactive && "hover:shadow-lg cursor-pointer hover:-translate-y-0.5",
        className
      )}
    >
      <div className="flex justify-between items-center">
        <p className="text-sm text-gray-500 font-medium">{title}</p>
        <span className="text-gray-400">›</span>
      </div>

      <div className="mt-2">
        <p className="text-2xl font-semibold text-gray-900">
          {value} {unit && <span className="text-sm font-medium text-gray-500">{unit}</span>}
        </p>
        {trend && (
          <p className={cn(
            "text-xs mt-1 font-medium",
            trend.includes('+') || trend.includes('Up') ? "text-emerald-500" : "text-rose-500"
          )}>
            {trend}
          </p>
        )}
      </div>

      {graph && <div className="mt-4">{graph}</div>}
    </div>
  );
};
