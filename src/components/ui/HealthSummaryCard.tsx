import React from 'react';
import { cn } from "@/src/lib/utils";

export interface HealthSummaryCardProps {
  icon: React.ReactNode;
  title: string;
  subtitle: string;
  value?: string | number;
  color?: "blue" | "red" | "green" | "purple" | "primary";
  className?: string;
}

export const HealthSummaryCard = ({
  icon,
  title,
  subtitle,
  value,
  color = "blue",
  className,
}: HealthSummaryCardProps) => {
  const colors = {
    blue: "bg-blue-50 text-blue-600",
    red: "bg-red-50 text-red-600",
    green: "bg-green-50 text-green-600",
    purple: "bg-purple-50 text-purple-600",
    primary: "bg-primary/10 text-primary",
  };

  return (
    <div className={cn("p-4 rounded-2xl bg-white shadow-sm border border-gray-100 transition-all hover:shadow-md", className)}>
      <div className="flex items-center gap-3">
        <div className={cn("p-2.5 rounded-xl flex items-center justify-center", colors[color])}>
          {icon}
        </div>
        <p className="font-semibold text-gray-900">{title}</p>
      </div>

      <p className="text-sm text-gray-500 mt-3 font-medium">{subtitle}</p>

      {value && (
        <div className="mt-2 text-xl font-bold text-gray-900">{value}</div>
      )}
    </div>
  );
};
