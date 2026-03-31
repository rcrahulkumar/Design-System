import React, { useState } from 'react';
import { FloatingActionBar, Heading } from "@/src/components/ui";
import { ComponentPreview } from "@/src/components/ComponentPreview";
import { Home, Calendar, MessageCircle, User } from "lucide-react";

export default function FloatingActionBarPage() {
  const [activeTab, setActiveTab] = useState("home");

  const actions = [
    { icon: <Home className="w-5 h-5" />, label: "Home", active: activeTab === "home", onClick: () => setActiveTab("home") },
    { icon: <Calendar className="w-5 h-5" />, label: "Appointments", active: activeTab === "calendar", onClick: () => setActiveTab("calendar") },
    { icon: <MessageCircle className="w-5 h-5" />, label: "Messages", active: activeTab === "messages", onClick: () => setActiveTab("messages") },
    { icon: <User className="w-5 h-5" />, label: "Profile", active: activeTab === "profile", onClick: () => setActiveTab("profile") },
  ];

  return (
    <div className="space-y-12">
      <Heading 
        title="Floating Action Bar" 
        description="Fixed bottom navigation bar for quick access to main sections." 
      />

      <div className="space-y-12">
        <ComponentPreview
          title="Interactive Navigation"
          description="Floating action bar with active states."
          code={`<FloatingActionBar 
  actions={[
    { icon: <Home />, label: "Home", active: true, onClick: () => {} },
    { icon: <Calendar />, label: "Appointments", active: false, onClick: () => {} },
    // ...
  ]} 
/>`}
        >
          <div className="w-full h-64 bg-gray-50 rounded-2xl border border-gray-100 relative overflow-hidden flex items-center justify-center">
            <p className="text-gray-400 font-medium">Scroll down to see the fixed bar</p>
            <FloatingActionBar actions={actions} className="absolute bottom-6" />
          </div>
        </ComponentPreview>
      </div>
    </div>
  );
}
