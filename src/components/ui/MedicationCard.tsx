import React from 'react';
import { Card, CardContent } from './Card';
import { Button } from './Button';
import { Pill, Clock } from 'lucide-react';
import { cn } from '@/src/lib/utils';

export interface MedicationCardProps {
  name: string;
  dosage: string;
  schedule: string;
  taken?: boolean;
  onTake?: () => void;
  onSkip?: () => void;
  className?: string;
}

export const MedicationCard: React.FC<MedicationCardProps> = ({
  name,
  dosage,
  schedule,
  taken = false,
  onTake,
  onSkip,
  className,
}) => {
  return (
    <Card className={cn("transition-all", taken && "opacity-60 bg-gray-50", className)}>
      <CardContent className="p-5 flex items-center justify-between gap-4">
        <div className="flex items-center gap-4">
          <div className={cn(
            "w-12 h-12 rounded-2xl flex items-center justify-center shrink-0",
            taken ? "bg-gray-200 text-gray-500" : "bg-blue-50 text-blue-500"
          )}>
            <Pill className="w-6 h-6" />
          </div>
          <div>
            <h4 className={cn("font-bold leading-tight text-base", taken ? "text-gray-500 line-through" : "text-gray-900")}>
              {name}
            </h4>
            <div className="flex items-center gap-2 mt-1.5">
              <span className="text-xs font-bold text-gray-500">{dosage}</span>
              <span className="w-1 h-1 rounded-full bg-gray-300" />
              <div className="flex items-center gap-1.5 text-xs font-bold text-gray-500">
                <Clock className="w-3.5 h-3.5" />
                {schedule}
              </div>
            </div>
          </div>
        </div>
        
        {!taken && (onTake || onSkip) && (
          <div className="flex items-center gap-2 shrink-0">
            {onSkip && (
              <Button variant="tertiary" size="sm" onClick={onSkip} className="text-gray-500 hover:text-gray-700">
                Skip
              </Button>
            )}
            {onTake && (
              <Button size="sm" onClick={onTake}>
                Take
              </Button>
            )}
          </div>
        )}
        {taken && (
          <span className="text-xs font-bold text-success uppercase tracking-wider shrink-0">Taken</span>
        )}
      </CardContent>
    </Card>
  );
};
