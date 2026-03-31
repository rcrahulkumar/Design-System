import React from 'react';
import { cn } from "@/src/lib/utils";

export interface MetricGridCardProps {
  children: React.ReactNode;
  className?: string;
  columns?: 2 | 3 | 4;
}

export const MetricGridCard = ({ 
  children, 
  className,
  columns = 2 
}: MetricGridCardProps) => {
  const gridCols = {
    2: "grid-cols-2",
    3: "grid-cols-3",
    4: "grid-cols-4",
  };

  return (
    <div className={cn("grid gap-4", gridCols[columns], className)}>
      {children}
    </div>
  );
};
