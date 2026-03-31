import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './Card';
import { Badge } from './Badge';
import { cn } from '@/src/lib/utils';
import { TrendingUp, TrendingDown, Minus } from 'lucide-react';

export interface MetricCardProps {
  title: string;
  value: string | number;
  unit?: string;
  trend?: 'up' | 'down' | 'neutral';
  trendValue?: string;
  trendStatus?: 'success' | 'warning' | 'error' | 'inactive' | 'primary';
  trendLabel?: string;
  icon?: React.ReactNode;
  iconBg?: string;
  iconColor?: string;
  className?: string;
}

export const MetricCard: React.FC<MetricCardProps> = ({
  title,
  value,
  unit,
  trend,
  trendValue,
  trendStatus = 'inactive',
  trendLabel = 'vs last week',
  icon,
  iconBg = 'bg-primary-subtle',
  iconColor = 'text-primary',
  className,
}) => {
  return (
    <Card className={cn("hover:shadow-md transition-all", className)}>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium text-gray-500">{title}</CardTitle>
        {icon && (
          <div className={cn("w-10 h-10 rounded-xl flex items-center justify-center", iconBg, iconColor)}>
            {icon}
          </div>
        )}
      </CardHeader>
      <CardContent>
        <div className="flex items-baseline gap-1.5">
          <span className="text-3xl font-bold text-gray-900 tracking-tight">{value}</span>
          {unit && <span className="text-sm font-bold text-gray-500">{unit}</span>}
        </div>
        {trend && trendValue && (
          <div className="mt-4 flex items-center gap-2">
            <Badge 
              status={trendStatus} 
              variant="light"
              size="sm"
              icon={trend === 'up' ? <TrendingUp className="w-3.5 h-3.5" /> : trend === 'down' ? <TrendingDown className="w-3.5 h-3.5" /> : <Minus className="w-3.5 h-3.5" />}
            >
              {trendValue}
            </Badge>
            <span className="text-xs text-gray-400 font-medium">{trendLabel}</span>
          </div>
        )}
      </CardContent>
    </Card>
  );
};
