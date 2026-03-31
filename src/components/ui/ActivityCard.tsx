import React from 'react';
import { Card, CardContent } from './Card';
import { cn } from '@/src/lib/utils';

export interface ActivityCardProps {
  title: string;
  value: string | number;
  target: string | number;
  unit: string;
  icon?: React.ReactNode;
  iconBg?: string;
  iconColor?: string;
  progressColor?: string;
  className?: string;
}

export const ActivityCard: React.FC<ActivityCardProps> = ({
  title,
  value,
  target,
  unit,
  icon,
  iconBg = 'bg-primary-subtle',
  iconColor = 'text-primary',
  progressColor = 'bg-primary',
  className,
}) => {
  const numericValue = typeof value === 'string' ? parseFloat(value.replace(/,/g, '')) : value;
  const numericTarget = typeof target === 'string' ? parseFloat(target.replace(/,/g, '')) : target;
  const progressPercentage = Math.min(100, Math.max(0, (numericValue / numericTarget) * 100));

  return (
    <Card className={cn(className)}>
      <CardContent className="p-5">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-3">
            {icon && (
              <div className={cn("w-10 h-10 rounded-xl flex items-center justify-center shrink-0", iconBg, iconColor)}>
                {icon}
              </div>
            )}
            <h4 className="font-bold text-gray-900 leading-tight text-base">{title}</h4>
          </div>
        </div>

        <div className="flex items-end justify-between mb-3">
          <div className="flex items-baseline gap-1.5">
            <span className="text-3xl font-bold tracking-tight text-gray-900">
              {value}
            </span>
            <span className="text-sm font-bold text-gray-500">{unit}</span>
          </div>
          <div className="text-right">
            <span className="text-[10px] font-bold text-gray-400 uppercase tracking-[0.15em]">Target</span>
            <p className="text-sm font-bold text-gray-700">{target} <span className="text-gray-500 font-medium">{unit}</span></p>
          </div>
        </div>

        <div className="w-full h-2.5 bg-gray-100 rounded-full overflow-hidden">
          <div 
            className={cn("h-full rounded-full transition-all duration-1000 ease-out", progressColor)}
            style={{ width: `${progressPercentage}%` }}
          />
        </div>
      </CardContent>
    </Card>
  );
};
