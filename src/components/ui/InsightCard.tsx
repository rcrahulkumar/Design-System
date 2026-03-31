import React from 'react';
import { Card, CardHeader, CardTitle, CardContent, CardFooter, Badge, Button } from './index';
import { Sparkles, ArrowRight, TrendingUp, TrendingDown, Info } from 'lucide-react';
import { cn } from '@/src/lib/utils';

export interface InsightCardProps {
  title: string;
  description: string;
  trend?: 'up' | 'down' | 'neutral';
  trendValue?: string;
  metric?: string;
  cta?: { label: string; onClick: () => void };
  className?: string;
}

export const InsightCard: React.FC<InsightCardProps> = ({
  title,
  description,
  trend,
  trendValue,
  metric,
  cta,
  className,
}) => {
  return (
    <Card className={cn("border-none bg-gray-50 hover:bg-white hover:shadow-xl transition-all group", className)}>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-primary-subtle flex items-center justify-center text-primary">
            <Sparkles className="w-5 h-5" />
          </div>
          <span className="text-[11px] font-bold uppercase tracking-[0.15em] text-primary">AI Insight</span>
        </div>
        {trend && trendValue && (
          <Badge 
            status={trend === 'up' ? 'success' : trend === 'down' ? 'error' : 'inactive'} 
            variant="light"
            size="sm"
            icon={trend === 'up' ? <TrendingUp className="w-3.5 h-3.5" /> : trend === 'down' ? <TrendingDown className="w-3.5 h-3.5" /> : <Info className="w-3.5 h-3.5" />}
          >
            {trendValue}
          </Badge>
        )}
      </CardHeader>

      <CardContent>
        <CardTitle className="text-xl mb-3 group-hover:text-primary transition-colors">
          {title}
        </CardTitle>
        <p className="text-sm font-medium text-gray-600 leading-relaxed mb-6">
          {description}
        </p>

        {metric && (
          <div className="flex items-baseline gap-2">
            <span className="text-4xl font-bold text-gray-900 tracking-tighter">{metric}</span>
            <span className="text-xs font-bold text-gray-400 uppercase tracking-widest">avg / week</span>
          </div>
        )}
      </CardContent>

      {cta && (
        <CardFooter className="pt-6 border-t border-gray-100/50 mt-2">
          <Button 
            variant="tertiary" 
            size="sm" 
            onClick={cta.onClick}
            className="p-0 h-auto hover:bg-transparent text-primary font-bold gap-2 group/btn"
          >
            {cta.label} 
            <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
          </Button>
        </CardFooter>
      )}
    </Card>
  );
};
