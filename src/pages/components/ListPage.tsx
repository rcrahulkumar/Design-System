import React from 'react';
import { List, ListItem, Badge, Button, Radio, Checkbox } from "@/src/components/ui";
import { 
  FileText, 
  Activity, 
  Clock, 
  ChevronRight, 
  MoreVertical,
  Heart,
  Droplets,
  Zap
} from 'lucide-react';

export default function ListPage() {
  return (
    <div className="p-10 max-w-4xl">
      <h1 className="text-3xl font-bold mb-2">List System</h1>
      <p className="text-gray-500 mb-10">Lists are the primary composition layer, bringing all components together.</p>

      <div className="space-y-16">
        {/* Status List */}
        <section>
          <h2 className="text-xl font-semibold mb-6">Status List (Metadata + Badges)</h2>
          <List label="Recent Reports">
            <ListItem
              title="Full Blood Count"
              description="Analyzed by JIVI AI • 12 parameters"
              left={<div className="w-10 h-10 bg-orange-100 rounded-xl flex items-center justify-center text-primary"><FileText className="w-5 h-5" /></div>}
              right={<Badge status="success">Ready</Badge>}
              meta="Today"
              onClick={() => {}}
            />
            <ListItem
              title="Lipid Profile"
              description="Waiting for lab results"
              left={<div className="w-10 h-10 bg-blue-100 rounded-xl flex items-center justify-center text-blue-500"><Droplets className="w-5 h-5" /></div>}
              right={<Badge status="warning">Pending</Badge>}
              meta="2h ago"
              onClick={() => {}}
            />
            <ListItem
              title="Vitamin D Test"
              description="Sample collected at home"
              left={<div className="w-10 h-10 bg-yellow-100 rounded-xl flex items-center justify-center text-yellow-600"><Zap className="w-5 h-5" /></div>}
              right={<Badge status="inactive">Scheduled</Badge>}
              meta="Yesterday"
              onClick={() => {}}
            />
          </List>
        </section>

        {/* Action List */}
        <section>
          <h2 className="text-xl font-semibold mb-6">Action List (Inline Buttons)</h2>
          <List label="Health Actions">
            <ListItem
              title="Daily Step Goal"
              description="8,432 / 10,000 steps completed"
              left={<Activity className="w-5 h-5 text-green-500" />}
              right={<Button variant="tertiary" size="sm">Update</Button>}
            />
            <ListItem
              title="Water Intake"
              description="1.2L / 2.5L consumed"
              left={<Droplets className="w-5 h-5 text-blue-500" />}
              right={<Button variant="tertiary" size="sm">Add 250ml</Button>}
            />
          </List>
        </section>

        {/* Selection Lists */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div>
            <h2 className="text-xl font-semibold mb-6">Radio List</h2>
            <List>
              <ListItem
                title="Premium Plan"
                description="$19/mo • All AI features"
                left={<Radio name="plan" checked readOnly />}
                onClick={() => {}}
              />
              <ListItem
                title="Basic Plan"
                description="Free • Limited insights"
                left={<Radio name="plan" />}
                onClick={() => {}}
              />
            </List>
          </div>
          <div>
            <h2 className="text-xl font-semibold mb-6">Checkbox List</h2>
            <List>
              <ListItem
                title="Email Notifications"
                description="Weekly health summary"
                left={<Checkbox checked readOnly />}
                onClick={() => {}}
              />
              <ListItem
                title="Push Notifications"
                description="Real-time health alerts"
                left={<Checkbox />}
                onClick={() => {}}
              />
            </List>
          </div>
        </section>

        {/* Navigation List */}
        <section>
          <h2 className="text-xl font-semibold mb-6">Navigation List</h2>
          <List>
            <ListItem
              title="Heart Rate History"
              description="View trends from last 30 days"
              left={<Heart className="w-5 h-5 text-red-500" />}
              right={<ChevronRight className="w-4 h-4 text-gray-300" />}
              onClick={() => {}}
            />
            <ListItem
              title="Sleep Analysis"
              description="Deep sleep and REM cycles"
              left={<Clock className="w-5 h-5 text-indigo-500" />}
              right={<ChevronRight className="w-4 h-4 text-gray-300" />}
              onClick={() => {}}
            />
          </List>
        </section>

        {/* Implementation */}
        <section>
          <h2 className="text-xl font-semibold mb-6">Implementation</h2>
          <pre className="bg-gray-900 text-gray-100 p-6 rounded-xl text-sm font-mono overflow-x-auto">
{`import { List, ListItem, Badge, Button } from "@/src/components/ui";

<List label="Section Title">
  <ListItem
    title="Item Title"
    description="Supporting description text"
    left={<Icon className="w-5 h-5" />}
    right={<Badge status="success">Active</Badge>}
    meta="10:30 AM"
    onClick={() => handleSelect()}
  />
  
  <ListItem
    title="Action Item"
    right={<Button variant="tertiary">Edit</Button>}
  />
</List>`}
          </pre>
        </section>
      </div>
    </div>
  );
}
