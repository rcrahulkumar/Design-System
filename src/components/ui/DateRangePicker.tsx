import * as React from "react";
import { format, addDays } from "date-fns";
import { Calendar as CalendarIcon, X } from "lucide-react";
import { DateRange, DayPicker } from "react-day-picker";
import { cn } from "@/src/lib/utils";
import { Button } from "./Button";

export interface DateRangePickerProps extends React.HTMLAttributes<HTMLDivElement> {
  date?: DateRange;
  onDateChange?: (date: DateRange | undefined) => void;
  placeholder?: string;
  className?: string;
}

export function DateRangePicker({
  className,
  date,
  onDateChange,
  placeholder = "Select date range",
}: DateRangePickerProps) {
  const [isOpen, setIsOpen] = React.useState(false);
  const containerRef = React.useRef<HTMLDivElement>(null);
  const triggerRef = React.useRef<HTMLButtonElement>(null);

  // Close on click outside
  React.useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Handle Escape key
  React.useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape" && isOpen) {
        setIsOpen(false);
        triggerRef.current?.focus();
      }
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [isOpen]);

  // Focus management when opening/closing
  React.useEffect(() => {
    if (isOpen) {
      // Focus the first button in the popover (usually the nav button or a day)
      const firstFocusable = containerRef.current?.querySelector('button:not([id="date"])') as HTMLElement;
      firstFocusable?.focus();
    }
  }, [isOpen]);

  const handleSelect = (range: DateRange | undefined) => {
    onDateChange?.(range);
  };

  const clearDate = (e: React.MouseEvent | React.KeyboardEvent) => {
    e.stopPropagation();
    onDateChange?.(undefined);
    triggerRef.current?.focus();
  };

  const handleClearKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' || e.key === ' ') {
      clearDate(e);
    }
  };

  return (
    <div className={cn("relative grid gap-2", className)} ref={containerRef}>
      <button
        ref={triggerRef}
        id="date"
        type="button"
        aria-haspopup="dialog"
        aria-expanded={isOpen}
        aria-controls="date-picker-popover"
        onClick={() => setIsOpen(!isOpen)}
        className={cn(
          "flex h-12 w-full items-center justify-start rounded-xl border border-gray-100 bg-white px-4 py-2 text-left text-sm font-medium transition-all hover:border-primary/30 outline-none focus-visible:ring-4 focus-visible:ring-primary/20",
          !date && "text-gray-400"
        )}
      >
        <CalendarIcon className="mr-2 h-4 w-4 text-gray-400" aria-hidden="true" />
        {date?.from ? (
          date.to ? (
            <>
              {format(date.from, "LLL dd, y")} - {format(date.to, "LLL dd, y")}
            </>
          ) : (
            format(date.from, "LLL dd, y")
          )
        ) : (
          <span>{placeholder}</span>
        )}
        {date && (
          <span
            role="button"
            tabIndex={0}
            aria-label="Clear date selection"
            className="ml-auto p-1 rounded-md hover:bg-gray-100 transition-colors outline-none focus-visible:ring-4 focus-visible:ring-primary/20"
            onClick={clearDate}
            onKeyDown={handleClearKeyDown}
          >
            <X className="h-4 w-4 text-gray-400 hover:text-gray-600" />
          </span>
        )}
      </button>

      {isOpen && (
        <div
          id="date-picker-popover"
          role="dialog"
          aria-modal="true"
          aria-label="Select date range"
          className="absolute top-full left-0 z-50 mt-2 rounded-2xl border border-gray-100 bg-white p-4 shadow-xl animate-in fade-in zoom-in-95 duration-200 origin-top-left"
        >
          <DayPicker
            mode="range"
            defaultMonth={date?.from}
            selected={date}
            onSelect={handleSelect}
            numberOfMonths={2}
            className="p-0"
            classNames={{
              months: "flex flex-col sm:flex-row space-y-4 sm:space-x-8 sm:space-y-0",
              month: "space-y-4",
              caption: "flex justify-center pt-1 relative items-center px-8",
              caption_label: "text-sm font-bold text-gray-900",
              nav: "space-x-1 flex items-center",
              nav_button: cn(
                "h-8 w-8 bg-transparent p-0 opacity-50 hover:opacity-100 transition-opacity flex items-center justify-center rounded-lg hover:bg-gray-50 outline-none focus-visible:ring-2 focus-visible:ring-primary/20"
              ),
              nav_button_previous: "absolute left-1",
              nav_button_next: "absolute right-1",
              table: "w-full border-collapse space-y-1",
              head_row: "flex",
              head_cell: "text-gray-400 rounded-md w-9 font-bold text-[10px] uppercase tracking-widest",
              row: "flex w-full mt-2",
              cell: cn(
                "relative p-0 text-center text-sm focus-within:relative focus-within:z-20 [&:has([aria-selected])]:bg-primary-subtle first:[&:has([aria-selected])]:rounded-l-lg last:[&:has([aria-selected])]:rounded-r-lg",
                "h-9 w-9"
              ),
              day: cn(
                "h-9 w-9 p-0 font-medium aria-selected:opacity-100 hover:bg-gray-50 rounded-lg transition-colors outline-none focus-visible:ring-2 focus-visible:ring-primary/20"
              ),
              day_range_start: "day-range-start bg-primary text-white hover:bg-primary rounded-lg",
              day_range_end: "day-range-end bg-primary text-white hover:bg-primary rounded-lg",
              day_selected: "bg-primary text-white hover:bg-primary hover:text-white focus:bg-primary focus:text-white",
              day_today: "bg-gray-50 text-primary font-bold",
              day_outside: "text-gray-300 opacity-50",
              day_disabled: "text-gray-300 opacity-50",
              day_range_middle: "aria-selected:bg-primary-subtle aria-selected:text-primary rounded-none",
              day_hidden: "invisible",
            }}
          />
          <div className="mt-4 flex items-center justify-end gap-2 border-t border-gray-50 pt-4">
            <Button variant="tertiary" size="sm" onClick={() => setIsOpen(false)}>Cancel</Button>
            <Button size="sm" onClick={() => setIsOpen(false)}>Apply Range</Button>
          </div>
        </div>
      )}
    </div>
  );
}
