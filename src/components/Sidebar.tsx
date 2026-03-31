import React from 'react';
import { NavLink } from 'react-router-dom';
import { cn } from '@/src/lib/utils';

const navigation = [
  { name: 'Home', href: '/' },
  {
    title: 'FOUNDATION',
    items: [
      { name: 'Colors', href: '/tokens/colors' },
      { name: 'Typography', href: '/tokens/typography' },
    ],
  },
  {
    title: 'COMPONENTS',
    items: [
      { name: 'Button', href: '/components/button' },
      { name: 'Input', href: '/components/input' },
      { name: 'Textarea', href: '/components/textarea' },
      { name: 'Upload', href: '/components/upload' },
      { name: 'Chip', href: '/components/chip' },
      { name: 'Radio', href: '/components/radio' },
      { name: 'Checkbox', href: '/components/checkbox' },
      { name: 'Input Selector', href: '/components/input-selector' },
      { name: 'Card', href: '/components/card' },
      { name: 'Badge', href: '/components/badge' },
      { name: 'Alert', href: '/components/alert' },
      { name: 'Banner', href: '/components/banner' },
      { name: 'List', href: '/components/list' },
      { name: 'Header', href: '/components/header' },
      { name: 'Bottom Bar', href: '/components/bottom-bar' },
      { name: 'Floating Action Bar', href: '/components/floating-action-bar' },
      { name: 'Text & Heading', href: '/components/text' },
      { name: 'Permissions', href: '/components/permissions' },
      { name: 'Health Data', href: '/components/health-data' },
      { name: 'Date Range Picker', href: '/components/date-range-picker' },
      { name: 'Calendar Slot Picker', href: '/components/calendar-slot-picker' },
      { name: 'Insight Card', href: '/components/insight-card' },
      { name: 'Metric Card', href: '/components/metric-card' },
      { name: 'Metric Graph Card', href: '/components/metric-graph-card' },
      { name: 'Metric Grid Card', href: '/components/metric-grid-card' },
      { name: 'Health Summary Card', href: '/components/health-summary-card' },
      { name: 'Weekly Bar Chart', href: '/components/weekly-bar-chart' },
      { name: 'Appointment Card', href: '/components/appointment-card' },
      { name: 'Medication Card', href: '/components/medication-card' },
      { name: 'Lab Result Card', href: '/components/lab-result-card' },
      { name: 'Activity Card', href: '/components/activity-card' },
      { name: 'Activity Timeline Card', href: '/components/activity-timeline-card' },
      { name: 'Condition Card', href: '/components/condition-card' },
      { name: 'Stat Card', href: '/components/stat-card' },
      { name: 'Doctor Card', href: '/components/doctor-card' },
      { name: 'Doctor List Item', href: '/components/doctor-list-item' },
      { name: 'Profile Header Card', href: '/components/profile-header-card' },
      { name: 'AI Card', href: '/components/ai-card' },
      { name: 'Progress Bar', href: '/components/progress-bar' },
      { name: 'Map Pin', href: '/components/map-pin' },
      { name: 'Call Controls', href: '/components/call-controls' },
      { name: 'Payment Card', href: '/components/payment-card' },
      { name: 'Cart Item', href: '/components/cart-item' },
    ],
  },
  {
    title: 'PATTERNS',
    items: [
      { name: 'All Patterns', href: '/patterns' },
    ],
  },
];

export function Sidebar() {
  return (
    <div className="w-72 h-screen fixed left-0 top-0 bg-white border-r p-6 overflow-y-auto hidden md:block">
      <h2 className="text-xl font-semibold mb-8">JIVI Design</h2>
      
      {navigation.map((section, idx) => (
        <div key={idx} className="mb-8">
          {section.title && (
            <p className="text-xs text-gray-400 mb-3 uppercase tracking-wide font-semibold">
              {section.title}
            </p>
          )}
          <div className="space-y-1">
            {section.items ? (
              section.items.map((item) => (
                <NavLink
                  key={item.name}
                  to={item.href}
                  className={({ isActive }) =>
                    cn(
                      "block px-3 py-2 rounded-lg text-sm transition-all duration-200",
                      isActive 
                        ? "bg-gray-900 text-white shadow-sm font-medium" 
                        : "text-gray-600 hover:bg-gray-100 hover:text-gray-900"
                    )
                  }
                >
                  {item.name}
                </NavLink>
              ))
            ) : (
              <NavLink
                to={section.href!}
                className={({ isActive }) =>
                  cn(
                    "block px-3 py-2 rounded-lg text-sm transition-all duration-200",
                    isActive 
                      ? "bg-gray-900 text-white shadow-sm font-medium" 
                      : "text-gray-600 hover:bg-gray-100 hover:text-gray-900"
                  )
                }
              >
                {section.name}
              </NavLink>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}
