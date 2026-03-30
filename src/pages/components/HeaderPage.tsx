import React from 'react';
import { Header, Button, Heading } from "@/src/components/ui";
import { Search, Bell, Settings, MoreVertical, Menu } from 'lucide-react';

export default function HeaderPage() {
  return (
    <div className="p-10 max-w-4xl">
      <Heading 
        title="Header System" 
        description="The header is the primary navigation layer, providing context and global actions."
        className="mb-10"
      />

      <div className="space-y-16">
        {/* Default Header */}
        <section>
          <Heading size="md" title="Default Header" className="mb-6" />
          <div className="border border-gray-100 rounded-xl overflow-hidden bg-gray-50 p-4">
            <Header 
              title="My Health" 
              showBack 
              onBack={() => {}} 
              rightActions={<Button variant="tertiary" size="sm" icon={Settings} />}
            />
          </div>
        </section>

        {/* With Status */}
        <section>
          <Heading size="md" title="With Status" className="mb-6" />
          <div className="border border-gray-100 rounded-xl overflow-hidden bg-gray-50 p-4">
            <Header 
              title="Dr. Sarah Wilson" 
              subtitle="Online" 
              showBack 
              onBack={() => {}} 
              rightActions={
                <div className="flex gap-1">
                  <Button variant="tertiary" size="sm" icon={Search} />
                  <Button variant="tertiary" size="sm" icon={MoreVertical} />
                </div>
              }
            />
          </div>
        </section>

        {/* Dashboard Style */}
        <section>
          <Heading size="md" title="Dashboard Style" className="mb-6" />
          <div className="border border-gray-100 rounded-xl overflow-hidden bg-gray-50 p-4">
            <Header 
              leftAction={<Button variant="tertiary" size="sm" icon={Menu} />}
              title="JIVI Dashboard" 
              rightActions={
                <div className="flex gap-1">
                  <Button variant="tertiary" size="sm" icon={Bell} />
                  <img 
                    src="https://picsum.photos/seed/user/100/100" 
                    className="w-8 h-8 rounded-full border border-gray-200"
                    alt="User"
                  />
                </div>
              }
            />
          </div>
        </section>

        {/* Implementation */}
        <section>
          <Heading size="md" title="Implementation" className="mb-6" />
          <pre className="bg-gray-900 text-gray-100 p-6 rounded-xl text-sm font-mono overflow-x-auto">
{`import { Header } from "@/src/components/ui";

// Basic Header
<Header 
  title="Page Title" 
  showBack 
  onBack={() => handleBack()} 
/>

// Full Featured
<Header 
  title="Chat" 
  subtitle="Active now"
  showBack
  rightActions={
    <>
      <IconButton icon={Search} />
      <IconButton icon={More} />
    </>
  }
/>`}
          </pre>
        </section>
      </div>
    </div>
  );
}
