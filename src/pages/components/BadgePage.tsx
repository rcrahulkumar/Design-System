import React from 'react';
import { Badge, Heading } from "@/src/components/ui";
import { ComponentPreview } from "@/src/components/ComponentPreview";
import { CheckCircle, AlertTriangle, XCircle, Clock } from 'lucide-react';

export default function BadgePage() {
  return (
    <div className="p-6 md:p-10 max-w-6xl mx-auto space-y-12">
      <Heading 
        title="Badge System" 
        description="Badges are used to highlight status and system feedback." 
      />

      <div className="space-y-12">
        <ComponentPreview 
          title="Semantic States" 
          description="Badges with semantic colors."
          code={`<Badge status="success">Success</Badge>\n<Badge status="warning">Warning</Badge>`}
        >
        <div className="flex flex-wrap gap-4 items-center w-full">
          <Badge status="success">Success</Badge>
          <Badge status="warning">Warning</Badge>
          <Badge status="error">Error</Badge>
          <Badge status="inactive">Inactive</Badge>
          <Badge status="primary">Primary</Badge>
        </div>
      </ComponentPreview>

      <ComponentPreview 
        title="Variants" 
        description="Different visual styles for badges."
        code={`<Badge variant="outline" status="success">Verified</Badge>`}
      >
        <div className="space-y-6 w-full">
          <div className="flex items-center gap-4">
            <span className="w-24 text-xs text-gray-400 uppercase font-semibold">Light</span>
            <Badge variant="light" status="success">Verified</Badge>
            <Badge variant="light" status="warning">Pending</Badge>
            <Badge variant="light" status="error">Failed</Badge>
          </div>
          <div className="flex items-center gap-4">
            <span className="w-24 text-xs text-gray-400 uppercase font-semibold">Outline</span>
            <Badge variant="outline" status="success">Verified</Badge>
            <Badge variant="outline" status="warning">Pending</Badge>
            <Badge variant="outline" status="error">Failed</Badge>
          </div>
          <div className="flex items-center gap-4">
            <span className="w-24 text-xs text-gray-400 uppercase font-semibold">Dark</span>
            <Badge variant="dark" status="success">Verified</Badge>
            <Badge variant="dark" status="warning">Pending</Badge>
            <Badge variant="dark" status="error">Failed</Badge>
          </div>
          <div className="flex items-center gap-4">
            <span className="w-24 text-xs text-gray-400 uppercase font-semibold">NoBG</span>
            <Badge variant="nobg" status="success">Verified</Badge>
            <Badge variant="nobg" status="warning">Pending</Badge>
            <Badge variant="nobg" status="error">Failed</Badge>
          </div>
        </div>
      </ComponentPreview>

      <ComponentPreview 
        title="With Icons" 
        description="Badges can include icons for extra context."
        code={`<Badge status="success" icon={<CheckCircle className="w-3 h-3" />}>Completed</Badge>`}
      >
        <div className="flex flex-wrap gap-4 items-center w-full">
          <Badge status="success" icon={<CheckCircle className="w-3 h-3" />}>Completed</Badge>
          <Badge status="warning" icon={<Clock className="w-3 h-3" />}>In Progress</Badge>
          <Badge status="error" icon={<XCircle className="w-3 h-3" />}>Rejected</Badge>
          <Badge status="inactive" icon={<AlertTriangle className="w-3 h-3" />}>Unknown</Badge>
        </div>
      </ComponentPreview>

      <ComponentPreview 
        title="Sizes" 
        description="Badges come in two sizes."
        code={`<Badge size="sm" status="primary">New</Badge>\n<Badge size="md" status="primary">New</Badge>`}
      >
        <div className="flex flex-wrap gap-6 items-center w-full">
          <div className="flex flex-col gap-2">
            <span className="text-xs text-gray-400 uppercase font-semibold">Small</span>
            <Badge size="sm" status="primary">New</Badge>
          </div>
          <div className="flex flex-col gap-2">
            <span className="text-xs text-gray-400 uppercase font-semibold">Medium (Default)</span>
            <Badge size="md" status="primary">New</Badge>
          </div>
        </div>
      </ComponentPreview>
      </div>
    </div>
  );
}
