import React from "react";

import { Check, X } from "lucide-react";

import { Badge } from "@/components/ui";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui";
import { Button } from "@/components/ui";
import { cn } from "@/lib/utils";

interface GenreMultiSelectProps {
  value?: string[];
  onChange: (value: string[]) => void;
  className?: string;
  label: string;
  name: string;
  options: string[];
}

export const MultiSelect: React.FC<GenreMultiSelectProps> = ({
  value,
  onChange,
  className,
  label,
  options,
}) => {
  const [open, setOpen] = React.useState(false);

  const handleSelect = (genre: string) => {
    if (value?.includes(genre)) {
      onChange(value?.filter((g) => g !== genre));
    } else {
      onChange([...(value ?? []), genre]);
    }
  };

  const handleRemove = (genre: string) => {
    if (!value) return;
    onChange(value?.filter((g) => g !== genre));
  };

  return (
    <div className={cn("space-y-2", className)}>
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button
            variant="outline"
            role="combobox"
            aria-expanded={open}
            className="w-full justify-between bg-sidebar-accent"
          >
            {value?.length && value?.length > 0
              ? `${value?.length} ${label} selecionado(s)`
              : `Selecione os ${label}`}
            <Check className="ml-2 h-4 w-4 shrink-0 opacity-50" />
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-full p-0 bg-popover" align="start">
          <div className="max-h-60 overflow-y-auto bg-mauve-3 text-primary-foreground">
            <div className="p-2">
              {options.map((genre) => (
                <div
                  key={genre}
                  className={cn(
                    "flex items-center space-x-2 p-2 cursor-pointer rounded-sm hover:bg-accent hover:text-accent-foreground",
                    value?.includes(genre) && "bg-accent",
                  )}
                  onClick={() => handleSelect(genre)}
                >
                  <div className="flex h-4 w-4 items-center justify-center">
                    {value?.includes(genre) && <Check className="h-3 w-3" />}
                  </div>
                  <span className="text-sm">{genre}</span>
                </div>
              ))}
            </div>
          </div>
        </PopoverContent>
      </Popover>

      {/* Selected genres display */}
      {value?.length && value?.length > 0 && (
        <div className="flex flex-wrap gap-1">
          {value?.map((genre) => (
            <Badge
              key={genre}
              variant="secondary"
              className="text-xs !justify-between"
            >
              {genre}
              <Button
                variant="ghost"
                size="icon"
                className="ml-1 h-auto !p-1 text-muted-foreground hover:text-foreground"
                onClick={() => handleRemove(genre)}
              >
                <X className="h-3 w-3" />
              </Button>
            </Badge>
          ))}
        </div>
      )}
    </div>
  );
};
