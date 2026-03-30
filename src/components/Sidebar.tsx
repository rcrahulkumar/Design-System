import React from 'react';
import { NavLink } from 'react-router-dom';
import { 
  Layout, 
  Type, 
  Palette, 
  Square, 
  Type as InputIcon, 
  CreditCard, 
  Badge as BadgeIcon, 
  AlertCircle, 
  Flag, 
  List as ListIcon,
  Tag,
  CircleDot,
  CheckSquare,
  Home,
  Activity,
  Calendar as CalendarIcon
} from 'lucide-react';
import { cn } from '@/src/lib/utils';

const navigation = [
  { name: 'Home', href: '/', icon: Home },
  {
    title: 'Tokens',
    items: [
      { name: 'Colors', href: '/tokens/colors', icon: Palette },
      { name: 'Typography', href: '/tokens/typography', icon: Type },
    ],
  },
  {
    title: 'Components',
    items: [
      { name: 'Button', href: '/components/button', icon: Square },
      { name: 'Input', href: '/components/input', icon: InputIcon },
      { name: 'Chip', href: '/components/chip', icon: Tag },
      { name: 'Radio', href: '/components/radio', icon: CircleDot },
      { name: 'Checkbox', href: '/components/checkbox', icon: CheckSquare },
      { name: 'Card', href: '/components/card', icon: CreditCard },
      { name: 'Badge', href: '/components/badge', icon: BadgeIcon },
      { name: 'Alert', href: '/components/alert', icon: AlertCircle },
      { name: 'Banner', href: '/components/banner', icon: Flag },
      { name: 'List', href: '/components/list', icon: ListIcon },
      { name: 'Header', href: '/components/header', icon: Layout },
      { name: 'Bottom Bar', href: '/components/bottom-bar', icon: CreditCard },
      { name: 'Text & Heading', href: '/components/text', icon: Type },
      { name: 'Permissions', href: '/components/permissions', icon: AlertCircle },
      { name: 'Health Data', href: '/components/health-data', icon: Activity },
      { name: 'Date Range Picker', href: '/components/date-range-picker', icon: CalendarIcon },
    ],
  },
  {
    title: 'Patterns',
    items: [
      { name: 'All Patterns', href: '/patterns', icon: Layout },
    ],
  },
];

export function Sidebar() {
  return (
    <aside className="w-64 border-r border-border h-screen sticky top-0 bg-white hidden md:flex flex-col">
      <div className="p-6 border-b border-border">
        <div className="flex items-center gap-2 mb-2">
          <div className="w-8 h-8 bg-brand rounded-lg flex items-center justify-center text-white font-bold">J</div>
          <h1 className="text-xl font-bold tracking-tight">JIVI</h1>
        </div>
        <p className="text-xs text-text-secondary font-medium uppercase tracking-wider">Design System</p>
      </div>
      
      <nav className="flex-1 overflow-y-auto p-4 space-y-8">
        {navigation.map((section, idx) => (
          <div key={idx}>
            {section.title && (
              <h3 className="px-3 mb-2 text-xs font-semibold text-text-secondary uppercase tracking-widest">
                {section.title}
              </h3>
            )}
            <div className="space-y-1">
              {section.items ? (
                section.items.map((item) => (
                  <NavLink
                    key={item.name}
                    to={item.href}
                    className={({ isActive }) =>
                      cn(
                        "flex items-center gap-3 px-3 py-2 rounded-xl text-sm font-medium transition-colors",
                        isActive 
                          ? "bg-brand/5 text-brand" 
                          : "text-text-secondary hover:bg-gray-50 hover:text-text-primary"
                      )
                    }
                  >
                    <item.icon className="w-4 h-4" />
                    {item.name}
                  </NavLink>
                ))
              ) : (
                <NavLink
                  to={section.href!}
                  className={({ isActive }) =>
                    cn(
                      "flex items-center gap-3 px-3 py-2 rounded-xl text-sm font-medium transition-colors",
                      isActive 
                        ? "bg-brand/5 text-brand" 
                        : "text-text-secondary hover:bg-gray-50 hover:text-text-primary"
                    )
                  }
                >
                  <section.icon className="w-4 h-4" />
                  {section.name}
                </NavLink>
              )}
            </div>
          </div>
        ))}
      </nav>
      
      <div className="p-4 border-t border-border">
        <div className="bg-gray-50 rounded-xl p-3">
          <p className="text-xs text-text-secondary">v1.0.0 Stable</p>
        </div>
      </div>
    </aside>
  );
}
