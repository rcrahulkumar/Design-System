import React from 'react';
import { 
  ResponsiveContainer, 
  AreaChart, 
  Area, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  BarChart, 
  Bar,
  Cell
} from 'recharts';
import { cn } from '@/src/lib/utils';

export interface ChartData {
  name: string;
  value: number;
  [key: string]: any;
}

export interface HealthChartProps {
  data: ChartData[];
  type?: 'area' | 'bar';
  metric?: 'heart-rate' | 'sleep' | 'steps' | 'weight' | 'calories';
  height?: number;
  showGrid?: boolean;
  className?: string;
  ariaLabel?: string;
}

export const HealthChart: React.FC<HealthChartProps> = ({
  data,
  type = 'area',
  metric = 'steps',
  height = 200,
  showGrid = true,
  className,
  ariaLabel,
}) => {
  const metricColors = {
    'heart-rate': 'var(--color-red-500)',
    'sleep': 'var(--color-blue-500)',
    'steps': 'var(--color-orange-500)',
    'weight': 'var(--color-green-500)',
    'calories': 'var(--color-yellow-500)',
  };

  const metricGradients = {
    'heart-rate': 'colorHeartRate',
    'sleep': 'colorSleep',
    'steps': 'colorSteps',
    'weight': 'colorWeight',
    'calories': 'colorCalories',
  };

  const color = metricColors[metric];
  const gradientId = metricGradients[metric];
  const defaultAriaLabel = `${metric.replace('-', ' ')} chart displaying ${data.length} data points`;

  const CustomTooltip = ({ active, payload, label }: any) => {
    if (active && payload && payload.length) {
      return (
        <div 
          className="bg-white p-4 border border-gray-100 rounded-2xl shadow-xl"
          role="tooltip"
          aria-live="polite"
        >
          <p className="text-[10px] font-bold uppercase tracking-[0.15em] text-gray-400 mb-2">{label}</p>
          <div className="flex items-baseline gap-1.5">
            <span className="text-lg font-bold text-gray-900 leading-none">
              {payload[0].value}
            </span>
            <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">units</span>
          </div>
        </div>
      );
    }
    return null;
  };

  return (
    <div 
      className={cn("w-full relative focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-primary/20 rounded-xl", className)} 
      style={{ height }}
      role="figure"
      aria-label={ariaLabel || defaultAriaLabel}
      tabIndex={0}
    >
      {/* Visually hidden table for screen readers */}
      <table className="sr-only">
        <caption>{ariaLabel || defaultAriaLabel}</caption>
        <thead>
          <tr>
            <th scope="col">Time/Date</th>
            <th scope="col">Value</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, i) => (
            <tr key={i}>
              <td>{item.name}</td>
              <td>{item.value}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <ResponsiveContainer width="100%" height="100%" className="pointer-events-none sm:pointer-events-auto">
        {type === 'area' ? (
          <AreaChart data={data} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
            <defs>
              <linearGradient id={gradientId} x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor={color} stopOpacity={0.2}/>
                <stop offset="95%" stopColor={color} stopOpacity={0}/>
              </linearGradient>
            </defs>
            {showGrid && <CartesianGrid strokeDasharray="4 4" vertical={false} stroke="var(--color-gray-100)" />}
            <XAxis 
              dataKey="name" 
              axisLine={false} 
              tickLine={false} 
              tick={{ fontSize: 10, fill: 'var(--color-gray-400)', fontWeight: 700, letterSpacing: '0.05em' }}
              dy={12}
            />
            <YAxis 
              axisLine={false} 
              tickLine={false} 
              tick={{ fontSize: 10, fill: 'var(--color-gray-400)', fontWeight: 700, letterSpacing: '0.05em' }}
            />
            <Tooltip content={<CustomTooltip />} cursor={{ stroke: 'var(--color-gray-200)', strokeWidth: 1 }} />
            <Area 
              type="monotone" 
              dataKey="value" 
              stroke={color} 
              strokeWidth={4}
              fillOpacity={1} 
              fill={`url(#${gradientId})`} 
              animationDuration={1500}
            />
          </AreaChart>
        ) : (
          <BarChart data={data} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
            {showGrid && <CartesianGrid strokeDasharray="4 4" vertical={false} stroke="var(--color-gray-100)" />}
            <XAxis 
              dataKey="name" 
              axisLine={false} 
              tickLine={false} 
              tick={{ fontSize: 10, fill: 'var(--color-gray-400)', fontWeight: 700, letterSpacing: '0.05em' }}
              dy={12}
            />
            <YAxis 
              axisLine={false} 
              tickLine={false} 
              tick={{ fontSize: 10, fill: 'var(--color-gray-400)', fontWeight: 700, letterSpacing: '0.05em' }}
            />
            <Tooltip content={<CustomTooltip />} cursor={{ fill: 'var(--color-gray-50)', opacity: 0.4 }} />
            <Bar dataKey="value" radius={[6, 6, 0, 0]} animationDuration={1500}>
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={color} fillOpacity={0.9} />
              ))}
            </Bar>
          </BarChart>
        )}
      </ResponsiveContainer>
    </div>
  );
};
