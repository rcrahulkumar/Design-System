import React from 'react';
import { Alert, Button, Heading } from "@/src/components/ui";
import { ComponentPreview } from "@/src/components/ComponentPreview";

export default function AlertPage() {
  return (
    <div className="p-6 md:p-10 max-w-6xl mx-auto space-y-12">
      <Heading 
        title="Alert System" 
        description="Alerts provide contextual feedback messages for typical user actions." 
      />

      <div className="space-y-12">
        <ComponentPreview
          title="Semantic States"
          description="Alerts come in four semantic states: info, success, warning, and error."
          code={`<Alert status="info" title="Information">
  This is an informational alert for giving users guidance.
</Alert>
<Alert status="success" title="Success">
  The operation was completed successfully.
</Alert>
<Alert status="warning" title="Warning">
  Please be careful with this action.
</Alert>
<Alert status="error" title="Error">
  Something went wrong. Please try again.
</Alert>`}
        >
          <div className="space-y-4 w-full max-w-2xl">
            <Alert status="info" title="Information">
              This is an informational alert for giving users guidance.
            </Alert>
            <Alert status="success" title="Success">
              The operation was completed successfully.
            </Alert>
            <Alert status="warning" title="Warning">
              Please be careful with this action.
            </Alert>
            <Alert status="error" title="Error">
              Something went wrong. Please try again.
            </Alert>
          </div>
        </ComponentPreview>

        <ComponentPreview
          title="Sizes"
          description="Alerts are available in large (default) and small sizes."
          code={`<Alert title="Large Alert">
  Full-width communication for important messages.
</Alert>

<Alert size="sm" title="Small Alert">
  Compact feedback for inline validation or inside cards.
</Alert>`}
        >
          <div className="space-y-6 w-full max-w-2xl">
            <Alert title="Large Alert">
              Full-width communication for important messages.
            </Alert>
            <Alert size="sm" title="Small Alert">
              Compact feedback for inline validation or inside cards.
            </Alert>
          </div>
        </ComponentPreview>

        <ComponentPreview
          title="With Actions"
          description="Alerts can include a call-to-action button."
          code={`<Alert 
  status="info" 
  title="New Update Available"
  cta={<Button variant="tertiary" size="sm" className="text-blue-800 hover:bg-blue-100">Update Now</Button>}
>
  A new version of JIVI is ready to install.
</Alert>`}
        >
          <div className="space-y-4 w-full max-w-2xl">
            <Alert 
              status="info" 
              title="New Update Available"
              cta={<Button variant="tertiary" size="sm" className="text-blue-800 hover:bg-blue-100">Update Now</Button>}
            >
              A new version of JIVI is ready to install.
            </Alert>
            <Alert 
              status="warning" 
              title="Storage Almost Full"
              cta={<Button variant="tertiary" size="sm" className="text-yellow-800 hover:bg-yellow-100">Manage Storage</Button>}
            >
              You have used 90% of your allocated health data storage.
            </Alert>
          </div>
        </ComponentPreview>

        <ComponentPreview
          title="Toggles"
          description="Alerts can be dismissible or have their icon hidden."
          code={`<Alert icon={false} title="No Icon Alert">
  This alert has the icon disabled for a cleaner look.
</Alert>

<Alert onClose={() => alert('Closed')} title="Dismissible Alert">
  This alert can be dismissed by the user.
</Alert>`}
        >
          <div className="space-y-4 w-full max-w-2xl">
            <Alert icon={false} title="No Icon Alert">
              This alert has the icon disabled for a cleaner look.
            </Alert>
            <Alert onClose={() => alert('Closed')} title="Dismissible Alert">
              This alert can be dismissed by the user.
            </Alert>
          </div>
        </ComponentPreview>
      </div>
    </div>
  );
}
