import React from 'react';
import { HealthChart, InsightCard, Heading, Card, Badge } from "@/src/components/ui";
import { Activity, Moon, Footprints, Weight, Flame, TrendingUp, Sparkles } from 'lucide-react';

const stepsData = [
  { name: 'Mon', value: 8400 },
  { name: 'Tue', value: 12500 },
  { name: 'Wed', value: 9200 },
  { name: 'Thu', value: 11000 },
  { name: 'Fri', value: 14200 },
  { name: 'Sat', value: 15800 },
  { name: 'Sun', value: 7200 },
];

const heartRateData = [
  { name: '00:00', value: 62 },
  { name: '04:00', value: 58 },
  { name: '08:00', value: 75 },
  { name: '12:00', value: 88 },
  { name: '16:00', value: 92 },
  { name: '20:00', value: 78 },
  { name: '23:59', value: 65 },
];

export default function HealthDataPage() {
  return (
    <div className="p-10 max-w-6xl">
      <Heading 
        title="Health Data System" 
        description="A specialized visualization layer for medical and wellness metrics."
        className="mb-12"
      />

      <div className="space-y-20">
        {/* Metric Grid */}
        <section>
          <Heading size="md" title="Metric Visualization" className="mb-8" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="p-6">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-orange-100 flex items-center justify-center text-orange-500">
                    <Footprints className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold">Daily Steps</h4>
                    <p className="text-xs text-gray-400">Past 7 days</p>
                  </div>
                </div>
                <Badge status="success" variant="light">+12% vs last week</Badge>
              </div>
              <HealthChart data={stepsData} metric="steps" type="bar" height={240} />
            </Card>

            <Card className="p-6">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-red-100 flex items-center justify-center text-red-500">
                    <Activity className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold">Heart Rate</h4>
                    <p className="text-xs text-gray-400">Today (BPM)</p>
                  </div>
                </div>
                <Badge status="inactive" variant="light">Avg 72 BPM</Badge>
              </div>
              <HealthChart data={heartRateData} metric="heart-rate" type="area" height={240} />
            </Card>
          </div>
        </section>

        {/* AI Insights */}
        <section>
          <div className="flex items-center gap-3 mb-8">
            <Sparkles className="w-6 h-6 text-primary" />
            <Heading size="md" title="AI Health Insights" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <InsightCard 
              title="Sleep Quality"
              description="Your deep sleep was 15% higher than usual. This correlates with your lower caffeine intake."
              trend="up"
              trendValue="+15%"
              metric="7h 42m"
              cta={{ label: 'View Sleep Analysis', onClick: () => {} }}
            />
            <InsightCard 
              title="Activity Level"
              description="You've hit your step goal 5 days in a row. Your cardiovascular endurance is improving."
              trend="up"
              trendValue="Goal Met"
              metric="11.2k"
              cta={{ label: 'View Activity', onClick: () => {} }}
            />
            <InsightCard 
              title="Calorie Deficit"
              description="You are slightly below your target calorie intake for weight loss goals."
              trend="down"
              trendValue="-200 kcal"
              metric="1,850"
              cta={{ label: 'Log Nutrition', onClick: () => {} }}
            />
          </div>
        </section>

        {/* Implementation */}
        <section>
          <Heading size="md" title="Implementation" className="mb-6" />
          <pre className="bg-gray-900 text-gray-100 p-6 rounded-xl text-sm font-mono overflow-x-auto">
{`import { HealthChart, InsightCard } from "@/src/components/ui";

// Render a health chart
<HealthChart 
  data={stepsData} 
  metric="steps" 
  type="bar" 
/>

// Render an AI insight
<InsightCard 
  title="Sleep Quality"
  description="Your deep sleep was 15% higher than usual."
  trend="up"
  trendValue="+15%"
  metric="7h 42m"
/>`}
          </pre>
        </section>
      </div>
    </div>
  );
}
