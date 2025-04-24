import { useState } from "react";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import { format } from "date-fns";

interface FormDropdownProps {
  label: string;
  isActive: boolean;
  isLocked: boolean;
  icon: React.ReactNode;
  placeholder: string;
  value: string;
  onComplete: (value: string) => void;
  type: "date" | "custom";
  children?: React.ReactNode;
}

export const FormDropdown = ({
  label,
  isActive,
  isLocked,
  icon,
  placeholder,
  value,
  onComplete,
  type,
  children,
}: FormDropdownProps) => {
  const [open, setOpen] = useState(false);
  const [date, setDate] = useState<Date | undefined>(
    value ? new Date(value) : undefined
  );

  const handleDateSelect = (date: Date | undefined) => {
    if (date) {
      setDate(date);
      onComplete(format(date, "yyyy-MM-dd"));
      setOpen(false);
    }
  };

  return (
    <div
      className={`mb-6 bg-white rounded-xl shadow-sm p-6 border border-gray-100 transition-all ${
        isActive ? "active-field" : ""
      } ${isLocked ? "locked-field" : ""}`}
    >
      <h3 className="text-lg font-poppins font-semibold mb-4">{label}</h3>
      <div className="flex items-center justify-between">
        <div className="flex-1">
          <p className="text-gray-500">{value || placeholder}</p>
        </div>
        {type === "date" ? (
          <Popover open={open && isActive && !isLocked} onOpenChange={isActive && !isLocked ? setOpen : undefined}>
            <PopoverTrigger asChild>
              <Button
                variant="ghost"
                className={`text-purple ${isActive && !isLocked ? "" : "opacity-50 cursor-not-allowed"}`}
                disabled={!isActive || isLocked}
              >
                {icon} Choose
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0">
              <Calendar
                mode="single"
                selected={date}
                onSelect={handleDateSelect}
                initialFocus
              />
            </PopoverContent>
          </Popover>
        ) : (
          <Button 
            variant="ghost" 
            className={`text-purple ${isActive && !isLocked ? "" : "opacity-50 cursor-not-allowed"}`}
            onClick={() => isActive && !isLocked && setOpen(!open)}
            disabled={!isActive || isLocked}
          >
            {icon} Choose
          </Button>
        )}
      </div>

      {type === "custom" && (
        <div className={`dropdown-selector mt-4 ${open ? "open" : ""}`}>
          <div className="border-t border-gray-200 pt-4">
            {children}
          </div>
        </div>
      )}
    </div>
  );
};
