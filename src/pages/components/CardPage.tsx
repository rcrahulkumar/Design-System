import React from 'react';
import { Card, Heading, Button, Badge, List, ListItem } from "@/src/components/ui";
import { Heart, Activity, Star, ChevronRight, MoreHorizontal } from 'lucide-react';

export default function CardPage() {
  return (
    <div className="p-10 max-w-5xl">
      <Heading 
        title="Card System" 
        description="Cards are the core product containers, designed for modularity and data visualization."
        className="mb-10"
      />

      <div className="space-y-16">
        {/* Basic Variants */}
        <section>
          <Heading size="md" title="Basic Variants" className="mb-6" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card variant="primary">
              <h3 className="font-bold mb-2">Primary Card</h3>
              <p className="text-sm text-gray-500">Default shadow and subtle border for standard UI elements.</p>
            </Card>
            <Card variant="secondary">
              <h3 className="font-bold mb-2">Secondary Card</h3>
              <p className="text-sm text-gray-500">Border-only variant for less prominent or nested content.</p>
            </Card>
            <Card variant="elevated">
              <h3 className="font-bold mb-2">Elevated Card</h3>
              <p className="text-sm text-gray-500">Stronger shadow for high-priority or interactive elements.</p>
            </Card>
          </div>
        </section>

        {/* Product Specific Cards */}
        <section>
          <Heading size="md" title="Product Specific Cards" className="mb-6" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Health Metric */}
            <Card className="flex flex-col gap-4">
              <div className="flex items-center justify-between">
                <div className="w-10 h-10 bg-red-50 rounded-xl flex items-center justify-center text-red-500">
                  <Heart className="w-5 h-5" />
                </div>
                <Badge status="success">Normal</Badge>
              </div>
              <div>
                <span className="text-xs text-gray-400 uppercase font-bold">Heart Rate</span>
                <div className="flex items-baseline gap-1">
                  <span className="text-3xl font-bold">72</span>
                  <span className="text-sm text-gray-400">bpm</span>
                </div>
              </div>
              <div className="pt-4 border-t border-gray-50 text-xs text-gray-400">
                Measured 5 mins ago
              </div>
            </Card>

            {/* Doctor Profile */}
            <Card className="flex items-center gap-4">
              <img 
                src="https://picsum.photos/seed/doc/200/200" 
                className="w-16 h-16 rounded-2xl object-cover"
                alt="Doctor"
                referrerPolicy="no-referrer"
              />
              <div className="flex-1">
                <h4 className="font-bold">Dr. Sarah Wilson</h4>
                <p className="text-xs text-gray-500">Cardiologist • 12 yrs exp</p>
                <div className="flex items-center gap-1 mt-1">
                  <Star className="w-3 h-3 text-yellow-400 fill-yellow-400" />
                  <span className="text-xs font-bold">4.9</span>
                  <span className="text-xs text-gray-300">(120 reviews)</span>
                </div>
              </div>
              <Button size="sm" variant="secondary">Book</Button>
            </Card>
          </div>
        </section>

        {/* Complex Container */}
        <section>
          <Heading size="md" title="Complex Container" className="mb-6" />
          <Card padding="lg" className="max-w-2xl mx-auto">
            <div className="flex items-center justify-between mb-6">
              <Heading size="sm" title="Weekly Activity" />
              <button className="p-2 hover:bg-gray-50 rounded-lg"><MoreHorizontal className="w-5 h-5 text-gray-400" /></button>
            </div>
            
            <div className="grid grid-cols-7 gap-2 mb-8">
              {[40, 70, 45, 90, 65, 30, 50].map((h, i) => (
                <div key={i} className="flex flex-col items-center gap-2">
                  <div className="w-full bg-gray-50 rounded-full h-24 relative overflow-hidden">
                    <div 
                      className="absolute bottom-0 left-0 right-0 bg-primary rounded-full transition-all duration-500" 
                      style={{ height: `${h}%` }}
                    />
                  </div>
                  <span className="text-[10px] text-gray-400 font-bold uppercase">{['M', 'T', 'W', 'T', 'F', 'S', 'S'][i]}</span>
                </div>
              ))}
            </div>

            <List>
              <ListItem 
                title="Steps" 
                description="8,432 / 10,000" 
                left={<Activity className="w-4 h-4 text-green-500" />}
                right={<ChevronRight className="w-4 h-4 text-gray-300" />}
              />
            </List>
          </Card>
        </section>

        {/* Implementation */}
        <section>
          <Heading size="md" title="Implementation" className="mb-6" />
          <pre className="bg-gray-900 text-gray-100 p-6 rounded-xl text-sm font-mono overflow-x-auto">
{`import { Card, Heading } from "@/src/components/ui";

// Basic Card
<Card variant="primary" padding="md">
  <Heading size="sm" title="Card Title" />
  <p>Content goes here</p>
</Card>

// Interactive Card
<Card onClick={() => handleAction()}>
  <p>Clickable content</p>
</Card>`}
          </pre>
        </section>
      </div>
    </div>
  );
}
