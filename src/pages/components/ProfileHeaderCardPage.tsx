import React from 'react';
import { ProfileHeaderCard, Heading } from "@/src/components/ui";
import { ComponentPreview } from "@/src/components/ComponentPreview";

export default function ProfileHeaderCardPage() {
  return (
    <div className="space-y-12">
      <Heading 
        title="Profile Header Card" 
        description="Component for displaying user profile information." 
      />

      <div className="space-y-12">
        <ComponentPreview
          title="Standard Profile Header"
          description="Displays user avatar, name, email, and edit action."
          code={`<ProfileHeaderCard 
  name="Alex Johnson" 
  email="alex.j@example.com" 
  avatar="https://i.pravatar.cc/150?img=68" 
  onEdit={() => {}} 
/>`}
        >
          <div className="w-full max-w-md">
            <ProfileHeaderCard 
              name="Alex Johnson" 
              email="alex.j@example.com" 
              avatar="https://i.pravatar.cc/150?img=68" 
              onEdit={() => alert('Edit profile')} 
            />
          </div>
        </ComponentPreview>
      </div>
    </div>
  );
}
