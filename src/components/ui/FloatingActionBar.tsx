import React from 'react';
import { cn } from "@/src/lib/utils";

export interface FloatingAction {
  icon: React.ReactNode;
  label?: string;
  onClick: () => void;
  active?: boolean;
}

export interface FloatingActionBarProps {
  actions: FloatingAction[];
  className?: string;
}

export const FloatingActionBar = ({
  actions = [],
  className,
}: FloatingActionBarProps) => {
  return (
    <div className={cn("fixed bottom-6 left-0 right-0 flex justify-center z-50 px-4", className)}>
      <div className="bg-white/90 backdrop-blur-md rounded-full shadow-xl shadow-black/5 border border-gray-100 flex gap-2 px-4 py-3 items-center">
        {actions.map((action, i) => (
          <button 
            key={i}
            onClick={action.onClick}
            className={cn(
              "p-3 rounded-full transition-all duration-300 flex items-center justify-center relative group",
              action.active 
                ? "bg-primary text-primary-foreground shadow-md shadow-primary/20" 
                : "text-gray-500 hover:bg-gray-100 hover:text-gray-900"
            )}
            aria-label={action.label}
            title={action.label}
          >
            {action.icon}
            {action.label && (
              <span className="absolute -top-10 bg-gray-900 text-white text-xs font-medium px-2.5 py-1.5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap">
                {action.label}
                <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-gray-900 rotate-45" />
              </span>
            )}
          </button>
        ))}
      </div>
    </div>
  );
};
