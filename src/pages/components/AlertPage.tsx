import React from 'react';
import { Alert, Button } from "@/src/components/ui";

export default function AlertPage() {
  return (
    <div className="p-10 max-w-4xl">
      <h1 className="text-3xl font-bold mb-2">Alert System</h1>
      <p className="text-gray-500 mb-10">Alerts provide contextual feedback messages for typical user actions.</p>

      <div className="space-y-16">
        {/* Semantic States */}
        <section>
          <h2 className="text-xl font-semibold mb-6">Semantic States</h2>
          <div className="space-y-4">
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
        </section>

        {/* Sizes */}
        <section>
          <h2 className="text-xl font-semibold mb-6">Sizes</h2>
          <div className="space-y-6">
            <div>
              <span className="text-xs text-gray-400 uppercase mb-2 block">Large (Default)</span>
              <Alert title="Large Alert">
                Full-width communication for important messages.
              </Alert>
            </div>
            <div>
              <span className="text-xs text-gray-400 uppercase mb-2 block">Small</span>
              <Alert size="sm" title="Small Alert">
                Compact feedback for inline validation or inside cards.
              </Alert>
            </div>
          </div>
        </section>

        {/* With Actions */}
        <section>
          <h2 className="text-xl font-semibold mb-6">With Actions</h2>
          <div className="space-y-4">
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
        </section>

        {/* Toggles */}
        <section>
          <h2 className="text-xl font-semibold mb-6">Toggles</h2>
          <div className="space-y-4">
            <Alert icon={false} title="No Icon Alert">
              This alert has the icon disabled for a cleaner look.
            </Alert>
            <Alert onClose={() => alert('Closed')} title="Dismissible Alert">
              This alert can be dismissed by the user.
            </Alert>
          </div>
        </section>

        {/* Implementation */}
        <section>
          <h2 className="text-xl font-semibold mb-6">Implementation</h2>
          <pre className="bg-gray-900 text-gray-100 p-6 rounded-xl text-sm font-mono overflow-x-auto">
{`import { Alert, Button } from "@/src/components/ui";

// Basic usage
<Alert status="success" title="Saved">
  Your profile has been updated.
</Alert>

// Small variant
<Alert size="sm" status="error" title="Invalid Input" />

// With CTA
<Alert 
  status="info" 
  title="Update"
  cta={<Button size="sm">Install</Button>}
>
  New version ready.
</Alert>`}
          </pre>
        </section>
      </div>
    </div>
  );
}
