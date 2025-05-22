"use client";

import { Input } from "@/shared/components/ui/input";
import { cn } from "@/shared/lib/utils";
import {
  Controller,
  useFormContext,
  ControllerProps,
  FieldValues,
} from "react-hook-form";

type FormInputProps<T extends FieldValues> = {
  name: ControllerProps<T>["name"];
  type?: string;
  placeholder?: string;
};

export const FormInput = <T extends FieldValues>({
  name,
  type = "text",
  placeholder = "",
}: FormInputProps<T>) => {
  const { control } = useFormContext<T>();

  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState }) => (
        <div className="flex flex-col  w-full">
          <Input
            id={name}
            {...field}
            type={type}
            placeholder={placeholder}
            className={cn(
              "border p-2 rounded w-full flex-1",
              fieldState.error && "border-red-400"
            )}
          />
          {fieldState.error && (
            <p className="text-red-500 text-sm mt-1">{fieldState.error.message}</p>
          )}
        </div>
      )}
    />
  );
};
