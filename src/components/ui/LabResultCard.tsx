import React from 'react';
import { Card, CardContent } from './Card';
import { Badge } from './Badge';
import { FileText, AlertCircle, CheckCircle2 } from 'lucide-react';
import { cn } from '@/src/lib/utils';

export interface LabResultCardProps {
  testName: string;
  date: string;
  value: string | number;
  unit: string;
  referenceRange: string;
  status?: 'normal' | 'abnormal' | 'critical';
  className?: string;
}

export const LabResultCard: React.FC<LabResultCardProps> = ({
  testName,
  date,
  value,
  unit,
  referenceRange,
  status = 'normal',
  className,
}) => {
  const isAbnormal = status === 'abnormal' || status === 'critical';
  
  return (
    <Card className={cn(className)}>
      <CardContent className="p-6">
        <div className="flex items-start justify-between mb-6">
          <div className="flex items-center gap-4">
            <div className={cn(
              "w-12 h-12 rounded-2xl flex items-center justify-center shrink-0",
              isAbnormal ? "bg-error-bg text-error" : "bg-success-bg text-success"
            )}>
              <FileText className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-bold text-gray-900 leading-tight text-base">{testName}</h4>
              <p className="text-xs font-medium text-gray-500 mt-1">{date}</p>
            </div>
          </div>
          <Badge 
            status={status === 'normal' ? 'success' : 'error'} 
            variant="light" 
            size="sm"
            icon={status === 'normal' ? <CheckCircle2 className="w-3.5 h-3.5" /> : <AlertCircle className="w-3.5 h-3.5" />}
          >
            {status}
          </Badge>
        </div>

        <div className="flex items-end justify-between border-t border-gray-100 pt-5">
          <div>
            <p className="text-[10px] font-bold text-gray-400 uppercase tracking-[0.15em] mb-1.5">Result</p>
            <div className="flex items-baseline gap-1.5">
              <span className={cn(
                "text-3xl font-bold tracking-tight",
                isAbnormal ? "text-error" : "text-gray-900"
              )}>
                {value}
              </span>
              <span className="text-sm font-bold text-gray-500">{unit}</span>
            </div>
          </div>
          <div className="text-right">
            <p className="text-[10px] font-bold text-gray-400 uppercase tracking-[0.15em] mb-1.5">Reference Range</p>
            <p className="text-sm font-bold text-gray-700">{referenceRange} <span className="text-gray-500 font-medium">{unit}</span></p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
