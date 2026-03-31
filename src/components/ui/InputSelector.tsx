import React from 'react';
import { cn } from "@/src/lib/utils";

export interface InputSelectorProps {
  options: string[];
  selected: string[];
  onChange: (option: string) => void;
  className?: string;
  variant?: "pill" | "chip";
}

export const InputSelector = ({
  options,
  selected,
  onChange,
  className,
  variant = "pill",
}: InputSelectorProps) => {
  return (
    <div className={cn("flex flex-wrap gap-2.5", className)}>
      {options.map((opt) => {
        const isSelected = selected.includes(opt);
        return (
          <button
            key={opt}
            onClick={() => onChange(opt)}
            className={cn(
              "px-4 py-2 text-sm font-medium transition-all duration-200 border",
              variant === "pill" ? "rounded-full" : "rounded-xl",
              isSelected
                ? "bg-brand text-white border-brand shadow-sm shadow-brand/20"
                : "bg-white text-gray-700 border-gray-200 hover:border-brand/50 hover:bg-brand/5"
            )}
          >
            {opt}
          </button>
        );
      })}
    </div>
  );
};
