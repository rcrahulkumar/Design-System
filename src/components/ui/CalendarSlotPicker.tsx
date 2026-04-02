import React from 'react';
import { cn } from "@/src/lib/utils";

export interface CalendarSlotPickerProps {
  slots: string[];
  selected?: string;
  onSelect: (slot: string) => void;
  className?: string;
  columns?: 2 | 3 | 4;
}

export const CalendarSlotPicker = ({
  slots,
  selected,
  onSelect,
  className,
  columns = 3,
}: CalendarSlotPickerProps) => {
  const gridCols = {
    2: "grid-cols-2",
    3: "grid-cols-3",
    4: "grid-cols-4",
  };

  return (
    <div className={cn("grid gap-2", gridCols[columns], className)}>
      {slots.map((slot) => (
        <button
          key={slot}
          onClick={() => onSelect(slot)}
          className={cn(
            "p-2.5 rounded-xl text-sm font-medium transition-all duration-200 border",
            selected === slot
              ? "bg-primary text-white border-primary shadow-sm shadow-primary/20"
              : "bg-white text-gray-700 border-gray-200 hover:border-primary/50 hover:bg-primary/5"
          )}
        >
          {slot}
        </button>
      ))}
    </div>
  );
};
