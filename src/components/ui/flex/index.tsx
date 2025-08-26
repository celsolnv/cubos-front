import { twMerge } from "tailwind-merge";

import { type FlexProps } from "@radix-ui/themes";

type IFlexProps = FlexProps & {
  children?: React.ReactNode;
};
function Flex({ children, className, ...props }: IFlexProps) {
  return (
    <div className={twMerge("flex flex-col", className)} {...props}>
      {children}
    </div>
  );
}
export { Flex };
export type { IFlexProps };
