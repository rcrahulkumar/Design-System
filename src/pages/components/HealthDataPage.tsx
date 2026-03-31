import React from 'react';
import { HealthChart, InsightCard, Heading, Card, Badge } from "@/src/components/ui";
import { ComponentPreview } from "@/src/components/ComponentPreview";
import { Activity, Footprints, Sparkles } from 'lucide-react';

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
    <div className="p-6 md:p-10 max-w-6xl mx-auto space-y-12">
      <Heading 
        title="Health Data System" 
        description="A specialized visualization layer for medical and wellness metrics."
      />

      <div className="space-y-12">
        <ComponentPreview 
          title="Metric Visualization" 
          description="Charts for displaying health data over time."
          code={`<HealthChart data={stepsData} metric="steps" type="bar" />\n<HealthChart data={heartRateData} metric="heart-rate" type="area" />`}
        >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
          <Card className="p-6">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-orange-100 flex items-center justify-center text-orange-500">
                  <Footprints className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold">Daily Steps</h4>
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
                  <h4 className="text-sm font-semibold">Heart Rate</h4>
                  <p className="text-xs text-gray-400">Today (BPM)</p>
                </div>
              </div>
              <Badge status="inactive" variant="light">Avg 72 BPM</Badge>
            </div>
            <HealthChart data={heartRateData} metric="heart-rate" type="area" height={240} />
          </Card>
        </div>
      </ComponentPreview>

      <ComponentPreview 
        title="AI Health Insights" 
        description="Actionable insights generated from user health data."
        code={`<InsightCard \n  title="Sleep Quality"\n  description="..."\n  trend="up"\n  trendValue="+15%"\n  metric="7h 42m"\n/>`}
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
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
      </ComponentPreview>
      </div>
    </div>
  );
}
