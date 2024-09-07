"use client";

import { useTransition } from "react";
import { Locale } from "@/i18n/config";
import { setUserLocale } from "@/services/locale";
import { Select, SelectContent, SelectItem, SelectTrigger } from "./ui/select";
import { cn } from "@/lib/utils";
import { Languages } from "lucide-react";

type Props = {
  defaultValue: string;
  items: Array<{ value: string; label: string }>;
  label: string;
};

export default function LocaleSwitcherSelect({
  defaultValue,
  items,
  label,
}: Props) {
  const [isPending, startTransition] = useTransition();

  function onChange(value: string) {
    const locale = value as Locale;
    startTransition(() => {
      setUserLocale(locale);
    });
  }

  return (
    <div className="relative">
      <Select defaultValue={defaultValue} onValueChange={onChange}>
        <SelectTrigger
          aria-label={label}
          className={cn(
            "rounded-sm p-2 transition-colors hover:bg-slate-200",
            isPending && "pointer-events-none opacity-60"
          )}
        >
          <Languages />
        </SelectTrigger>
        <SelectContent
          align="end"
          className="min-w-[8rem] overflow-hidden rounded-sm bg-white py-1 shadow-md"
          position="popper"
        >
          {items.map((item) => (
            <SelectItem key={item.value} value={item.value}>
              {item.label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
}
