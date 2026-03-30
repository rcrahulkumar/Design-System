import React from 'react';
import { PermissionCard } from "@/src/components/ui";
import { Camera, Mic, MapPin, Bell, Heart } from 'lucide-react';

export default function PermissionPage() {
  return (
    <div className="p-10 max-w-5xl">
      <h1 className="text-3xl font-bold mb-2">Permission System</h1>
      <p className="text-gray-500 mb-10">Permission cards explain why the system needs access to sensitive user data.</p>

      <div className="space-y-16">
        {/* Core Permissions */}
        <section>
          <h2 className="text-xl font-semibold mb-6">Core Permissions</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <PermissionCard
              title="Camera Access"
              description="Required to scan your lab reports and medical documents instantly."
              icon={Camera}
              onAllow={() => {}}
              onDecline={() => {}}
            />
            <PermissionCard
              title="Microphone"
              description="Used for voice-activated health logs and AI consultation chats."
              icon={Mic}
              onAllow={() => {}}
              onDecline={() => {}}
            />
            <PermissionCard
              title="Location"
              description="Helps us find the nearest diagnostic labs and pharmacies for you."
              icon={MapPin}
              onAllow={() => {}}
              onDecline={() => {}}
            />
          </div>
        </section>

        {/* States */}
        <section>
          <h2 className="text-xl font-semibold mb-6">States</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <PermissionCard
              title="Notifications"
              description="Get real-time alerts for medication reminders and report results."
              icon={Bell}
              status="allowed"
              onAllow={() => {}}
            />
            <PermissionCard
              title="Health Data"
              description="Sync with Apple Health to track your daily activity and vitals."
              icon={Heart}
              status="blocked"
              onAllow={() => {}}
              onDecline={() => {}}
            />
          </div>
        </section>

        {/* Implementation */}
        <section>
          <h2 className="text-xl font-semibold mb-6">Implementation</h2>
          <pre className="bg-gray-900 text-gray-100 p-6 rounded-xl text-sm font-mono overflow-x-auto">
{`import { PermissionCard } from "@/src/components/ui";
import { Camera } from 'lucide-react';

<PermissionCard
  title="Camera Access"
  description="Scan your reports instantly."
  icon={Camera}
  onAllow={() => handleAllow()}
  onDecline={() => handleDecline()}
/>`}
          </pre>
        </section>
      </div>
    </div>
  );
}
