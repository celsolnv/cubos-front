/* eslint-disable @typescript-eslint/no-explicit-any */
import { Controller, useFormContext } from "react-hook-form";
import type {
  ControllerFieldState,
  ControllerRenderProps,
  UseFormStateReturn,
} from "react-hook-form";

import clsx from "clsx";
import { twMerge } from "tailwind-merge";

import { Text, Flex } from "@/components/ui";
import { getMessageError } from "@/utils/submitForm/check";
export interface IInputContainerProps {
  label: string;
  name: string;
  description?: string;
  defaultValue?: string;
  placeholder?: string;
  disabled?: boolean;
  className?: string;
  required?: boolean;
  mask?: (value: string) => string | number;
  InputComponent: ({
    field,
    fieldState,
    formState,
  }: {
    field: ControllerRenderProps<any, any>;
    fieldState: ControllerFieldState;
    formState: UseFormStateReturn<any>;
  }) => React.ReactElement;
}

export function InputContainer({
  label,
  name,
  description,
  defaultValue,
  disabled,
  className,
  required = true,
  InputComponent,
}: Readonly<IInputContainerProps>) {
  const {
    control,
    formState: { errors },
  } = useFormContext();

  const hasError =
    errors[name]?.message?.toString() || getMessageError(name, errors);
  const errorMessage = hasError || "";
  return (
    <Flex className={twMerge(className, "flex flex-col gap-2 w-full")}>
      <Text
        as="label"
        className={clsx(
          errors[name] && "text-red-500",
          "text-mauve-12 font-bold text-sm",
        )}
      >
        {label}
        {required && (
          <Text as="span" className="text-red-600">
            {" "}
            *
          </Text>
        )}
      </Text>
      <Controller
        control={control}
        name={name}
        disabled={disabled}
        defaultValue={defaultValue}
        render={InputComponent}
      />
      {hasError && (
        <Text as="span" className="text-red-500 font-medium text-xs">
          {errorMessage}
        </Text>
      )}
      <Text className=" text-xs text-muted-foreground">{description}</Text>
    </Flex>
  );
}
