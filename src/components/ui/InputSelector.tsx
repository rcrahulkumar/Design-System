import React, { useRef } from 'react';
import { cn } from "@/src/lib/utils";

export interface InputSelectorProps {
  options: string[];
  selected: string[];
  onChange: (option: string) => void;
  className?: string;
  variant?: "pill" | "chip";
  "aria-label"?: string;
}

export const InputSelector = ({
  options,
  selected,
  onChange,
  className,
  variant = "pill",
  "aria-label": ariaLabel,
}: InputSelectorProps) => {
  const buttonRefs = useRef<(HTMLButtonElement | null)[]>([]);

  const handleKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>, index: number) => {
    let nextIndex = index;
    switch (e.key) {
      case 'ArrowRight':
      case 'ArrowDown':
        nextIndex = (index + 1) % options.length;
        break;
      case 'ArrowLeft':
      case 'ArrowUp':
        nextIndex = (index - 1 + options.length) % options.length;
        break;
      case 'Home':
        nextIndex = 0;
        break;
      case 'End':
        nextIndex = options.length - 1;
        break;
      default:
        return; // Let other keys be handled natively
    }
    e.preventDefault();
    buttonRefs.current[nextIndex]?.focus();
  };

  return (
    <div 
      className={cn("flex flex-wrap gap-2.5", className)}
      role="group"
      aria-label={ariaLabel || "Select options"}
    >
      {options.map((opt, index) => {
        const isSelected = selected.includes(opt);
        return (
          <button
            key={opt}
            ref={(el) => {
              buttonRefs.current[index] = el;
            }}
            onClick={() => onChange(opt)}
            onKeyDown={(e) => handleKeyDown(e, index)}
            aria-pressed={isSelected}
            className={cn(
              "px-4 py-2 text-sm font-medium transition-all duration-200 border outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2",
              variant === "pill" ? "rounded-full" : "rounded-xl",
              isSelected
                ? "bg-primary text-white border-primary shadow-sm shadow-primary/20"
                : "bg-white text-gray-700 border-gray-200 hover:border-primary/50 hover:bg-primary/5"
            )}
          >
            {opt}
          </button>
        );
      })}
    </div>
  );
};
