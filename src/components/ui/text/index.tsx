import { twMerge } from "tailwind-merge";

import { Skeleton } from "../skeleton";

import { Text as TextRd, type TextProps } from "@radix-ui/themes";

type ITextProps = TextProps & {
  children: React.ReactNode;
  loading?: boolean;
};

function Text({ children, loading = false, className, ...props }: ITextProps) {
  return (
    <Skeleton loading={loading}>
      <TextRd className={twMerge("text-mauve-12", className)} {...props}>
        {children}
      </TextRd>
    </Skeleton>
  );
}

export { Text };
export type { ITextProps };
