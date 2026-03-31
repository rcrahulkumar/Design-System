import React from 'react';
import { PermissionCard, Heading } from "@/src/components/ui";
import { ComponentPreview } from "@/src/components/ComponentPreview";
import { Camera, Mic, MapPin, Bell, Heart } from 'lucide-react';

export default function PermissionPage() {
  return (
    <div className="p-6 md:p-10 max-w-6xl mx-auto space-y-12">
      <Heading 
        title="Permission System" 
        description="Permission cards explain why the system needs access to sensitive user data." 
      />

      <div className="space-y-12">
        <ComponentPreview
          title="Core Permissions"
          description="Standard permission requests with allow and decline actions."
          code={`<PermissionCard
  title="Camera Access"
  description="Required to scan your lab reports and medical documents instantly."
  icon={Camera}
  onAllow={() => {}}
  onDecline={() => {}}
/>`}
        >
          <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-6">
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
        </ComponentPreview>

        <ComponentPreview
          title="States"
          description="Permission cards can display 'allowed' or 'blocked' states."
          code={`<PermissionCard
  title="Notifications"
  description="Get real-time alerts for medication reminders and report results."
  icon={Bell}
  status="allowed"
  onAllow={() => {}}
/>`}
        >
          <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-6">
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
        </ComponentPreview>
      </div>
    </div>
  );
}
