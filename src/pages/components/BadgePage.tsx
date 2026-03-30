import React from 'react';
import { Badge } from "@/src/components/ui";
import { CheckCircle, AlertTriangle, XCircle, Clock } from 'lucide-react';

export default function BadgePage() {
  return (
    <div className="p-10 max-w-4xl">
      <h1 className="text-3xl font-bold mb-2">Badge System</h1>
      <p className="text-gray-500 mb-10">Badges are used to highlight status and system feedback.</p>

      <div className="space-y-16">
        {/* Semantic States */}
        <section>
          <h2 className="text-xl font-semibold mb-6">Semantic States</h2>
          <div className="flex flex-wrap gap-4 items-center">
            <Badge status="success">Success</Badge>
            <Badge status="warning">Warning</Badge>
            <Badge status="error">Error</Badge>
            <Badge status="inactive">Inactive</Badge>
            <Badge status="primary">Primary</Badge>
          </div>
        </section>

        {/* Variants */}
        <section>
          <h2 className="text-xl font-semibold mb-6">Variants</h2>
          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <span className="w-24 text-xs text-gray-400 uppercase">Light</span>
              <Badge variant="light" status="success">Verified</Badge>
              <Badge variant="light" status="warning">Pending</Badge>
              <Badge variant="light" status="error">Failed</Badge>
            </div>
            <div className="flex items-center gap-4">
              <span className="w-24 text-xs text-gray-400 uppercase">Outline</span>
              <Badge variant="outline" status="success">Verified</Badge>
              <Badge variant="outline" status="warning">Pending</Badge>
              <Badge variant="outline" status="error">Failed</Badge>
            </div>
            <div className="flex items-center gap-4">
              <span className="w-24 text-xs text-gray-400 uppercase">Dark</span>
              <Badge variant="dark" status="success">Verified</Badge>
              <Badge variant="dark" status="warning">Pending</Badge>
              <Badge variant="dark" status="error">Failed</Badge>
            </div>
            <div className="flex items-center gap-4">
              <span className="w-24 text-xs text-gray-400 uppercase">NoBG</span>
              <Badge variant="nobg" status="success">Verified</Badge>
              <Badge variant="nobg" status="warning">Pending</Badge>
              <Badge variant="nobg" status="error">Failed</Badge>
            </div>
          </div>
        </section>

        {/* With Icons */}
        <section>
          <h2 className="text-xl font-semibold mb-6">With Icons</h2>
          <div className="flex flex-wrap gap-4 items-center">
            <Badge status="success" icon={<CheckCircle className="w-3 h-3" />}>Completed</Badge>
            <Badge status="warning" icon={<Clock className="w-3 h-3" />}>In Progress</Badge>
            <Badge status="error" icon={<XCircle className="w-3 h-3" />}>Rejected</Badge>
            <Badge status="inactive" icon={<AlertTriangle className="w-3 h-3" />}>Unknown</Badge>
          </div>
        </section>

        {/* Sizes */}
        <section>
          <h2 className="text-xl font-semibold mb-6">Sizes</h2>
          <div className="flex flex-wrap gap-6 items-center">
            <div className="flex flex-col gap-2">
              <span className="text-xs text-gray-400 uppercase">Small</span>
              <Badge size="sm" status="primary">New</Badge>
            </div>
            <div className="flex flex-col gap-2">
              <span className="text-xs text-gray-400 uppercase">Medium (Default)</span>
              <Badge size="md" status="primary">New</Badge>
            </div>
          </div>
        </section>

        {/* Code Example */}
        <section>
          <h2 className="text-xl font-semibold mb-6">Implementation</h2>
          <pre className="bg-gray-900 text-gray-100 p-6 rounded-xl text-sm font-mono overflow-x-auto">
{`import { Badge } from "@/src/components/ui";

// Basic usage
<Badge status="success">Completed</Badge>

// Variants
<Badge variant="outline" status="warning">Pending</Badge>
<Badge variant="dark" status="error">Critical</Badge>

// With Icon
<Badge 
  status="success" 
  icon={<CheckCircle className="w-3 h-3" />}
>
  Verified
</Badge>`}
          </pre>
        </section>
      </div>
    </div>
  );
}
