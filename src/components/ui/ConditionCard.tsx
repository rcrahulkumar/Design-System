import React from 'react';
import { Card, CardContent } from './Card';
import { Badge } from './Badge';
import { Activity, AlertTriangle, CheckCircle } from 'lucide-react';
import { cn } from '@/src/lib/utils';

export interface ConditionCardProps {
  condition: string;
  status: 'stable' | 'monitoring' | 'critical';
  lastChecked: string;
  notes?: string;
  className?: string;
}

export const ConditionCard: React.FC<ConditionCardProps> = ({
  condition,
  status,
  lastChecked,
  notes,
  className,
}) => {
  const statusConfig = {
    stable: {
      color: 'success',
      icon: <CheckCircle className="w-3.5 h-3.5" />,
      label: 'Stable',
    },
    monitoring: {
      color: 'warning',
      icon: <Activity className="w-3.5 h-3.5" />,
      label: 'Monitoring',
    },
    critical: {
      color: 'error',
      icon: <AlertTriangle className="w-3.5 h-3.5" />,
      label: 'Critical',
    },
  } as const;

  const config = statusConfig[status];

  return (
    <Card className={cn(className)}>
      <CardContent className="p-5">
        <div className="flex items-start justify-between mb-4">
          <div>
            <h4 className="font-bold text-gray-900 leading-tight text-base">{condition}</h4>
            <p className="text-xs font-medium text-gray-500 mt-1">Last checked: {lastChecked}</p>
          </div>
          <Badge 
            status={config.color} 
            variant="light" 
            size="sm"
            icon={config.icon}
          >
            {config.label}
          </Badge>
        </div>

        {notes && (
          <div className="bg-gray-50 rounded-xl p-3 border border-gray-100 mt-4">
            <p className="text-sm text-gray-600 leading-relaxed font-medium">
              {notes}
            </p>
          </div>
        )}
      </CardContent>
    </Card>
  );
};
