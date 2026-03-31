import React from 'react';
import { List, ListItem, Badge, Button, Radio, Checkbox, Heading } from "@/src/components/ui";
import { ComponentPreview } from "@/src/components/ComponentPreview";
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
    <div className="p-6 md:p-10 max-w-6xl mx-auto space-y-12">
      <Heading 
        title="List System" 
        description="Lists are the primary composition layer, bringing all components together." 
      />

      <div className="space-y-12">
        <ComponentPreview
          title="Status List (Metadata + Badges)"
          description="Lists displaying status information with badges and metadata."
          code={`<List label="Recent Reports">
  <ListItem
    title="Full Blood Count"
    description="Analyzed by JIVI AI • 12 parameters"
    left={<div className="w-10 h-10 bg-orange-100 rounded-xl flex items-center justify-center text-primary"><FileText className="w-5 h-5" /></div>}
    right={<Badge status="success">Ready</Badge>}
    meta="Today"
    onClick={() => {}}
  />
  {/* ... */}
</List>`}
        >
          <div className="w-full max-w-2xl">
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
          </div>
        </ComponentPreview>

        <ComponentPreview
          title="Action List (Inline Buttons)"
          description="Lists with inline actionable buttons."
          code={`<List label="Health Actions">
  <ListItem
    title="Daily Step Goal"
    description="8,432 / 10,000 steps completed"
    left={<Activity className="w-5 h-5 text-green-500" />}
    right={<Button variant="tertiary" size="sm">Update</Button>}
  />
  {/* ... */}
</List>`}
        >
          <div className="w-full max-w-2xl">
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
          </div>
        </ComponentPreview>

        <ComponentPreview
          title="Selection Lists"
          description="Lists utilizing radio buttons or checkboxes for selection."
          code={`<List>
  <ListItem
    title="Premium Plan"
    description="$19/mo • All AI features"
    left={<Radio name="plan" checked readOnly />}
    onClick={() => {}}
  />
  {/* ... */}
</List>`}
        >
          <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-10">
            <div>
              <h3 className="text-sm font-semibold mb-4 text-gray-500 uppercase tracking-wider">Radio List</h3>
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
              <h3 className="text-sm font-semibold mb-4 text-gray-500 uppercase tracking-wider">Checkbox List</h3>
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
          </div>
        </ComponentPreview>

        <ComponentPreview
          title="Navigation List"
          description="Lists used for navigation with chevron indicators."
          code={`<List>
  <ListItem
    title="Heart Rate History"
    description="View trends from last 30 days"
    left={<Heart className="w-5 h-5 text-red-500" />}
    right={<ChevronRight className="w-4 h-4 text-gray-300" />}
    onClick={() => {}}
  />
</List>`}
        >
          <div className="w-full max-w-2xl">
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
          </div>
        </ComponentPreview>
      </div>
    </div>
  );
}
