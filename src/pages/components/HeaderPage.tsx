import React from 'react';
import { Header, Button, Heading } from "@/src/components/ui";
import { ComponentPreview } from "@/src/components/ComponentPreview";
import { Search, Bell, Settings, MoreVertical, Menu } from 'lucide-react';

export default function HeaderPage() {
  return (
    <div className="p-6 md:p-10 max-w-6xl mx-auto space-y-12">
      <Heading 
        title="Header System" 
        description="The header is the primary navigation layer, providing context and global actions."
      />

      <div className="space-y-12">
        <ComponentPreview
          title="Default Header"
          description="A standard header with a back button and a single right action."
          code={`<Header 
  title="My Health" 
  showBack 
  onBack={() => {}} 
  rightActions={<Button variant="tertiary" size="sm" icon={Settings} />}
/>`}
        >
          <div className="w-full border border-gray-100 rounded-xl overflow-hidden bg-gray-50 p-4">
            <Header 
              title="My Health" 
              showBack 
              onBack={() => {}} 
              rightActions={<Button variant="tertiary" size="sm" icon={Settings} />}
            />
          </div>
        </ComponentPreview>

        <ComponentPreview
          title="With Status"
          description="A header displaying a subtitle/status and multiple right actions."
          code={`<Header 
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
/>`}
        >
          <div className="w-full border border-gray-100 rounded-xl overflow-hidden bg-gray-50 p-4">
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
        </ComponentPreview>

        <ComponentPreview
          title="Dashboard Style"
          description="A header with a left menu action and a user profile avatar."
          code={`<Header 
  leftAction={<Button variant="tertiary" size="sm" icon={Menu} />}
  title="JIVI Dashboard" 
  rightActions={
    <div className="flex gap-1 items-center">
      <Button variant="tertiary" size="sm" icon={Bell} />
      <img 
        src="https://picsum.photos/seed/user/100/100" 
        className="w-8 h-8 rounded-full border border-gray-200 ml-2"
        alt="User"
      />
    </div>
  }
/>`}
        >
          <div className="w-full border border-gray-100 rounded-xl overflow-hidden bg-gray-50 p-4">
            <Header 
              leftAction={<Button variant="tertiary" size="sm" icon={Menu} />}
              title="JIVI Dashboard" 
              rightActions={
                <div className="flex gap-1 items-center">
                  <Button variant="tertiary" size="sm" icon={Bell} />
                  <img 
                    src="https://picsum.photos/seed/user/100/100" 
                    className="w-8 h-8 rounded-full border border-gray-200 ml-2"
                    alt="User"
                  />
                </div>
              }
            />
          </div>
        </ComponentPreview>
      </div>
    </div>
  );
}
