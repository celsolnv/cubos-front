import * as React from "react";

import { Skeleton } from "../skeleton";

import { cn } from "@/lib/utils";
export interface IInputProps extends React.ComponentProps<"input"> {
  loading?: boolean;
}

function Input({ className, type, loading = false, ...props }: IInputProps) {
  return (
    <Skeleton loading={loading} minHeight="36px">
      <input
        type={type}
        data-slot="input"
        className={cn(
          "file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-mauve-6 flex h-9 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm text-primary-foreground",
          "focus-visible:border-primary  focus-visible:ring-[1px] focus-visible:ring-primary",
          "aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
          className,
        )}
        {...props}
      />
    </Skeleton>
  );
}

export { Input };
