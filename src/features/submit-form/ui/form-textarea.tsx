"use client";

import { Textarea } from "@/shared/components/ui/textarea";
import { cn } from "@/shared/lib/utils";
import {
  Controller,
  useFormContext,
  ControllerProps,
  FieldValues,
} from "react-hook-form";

type FormTextAreaProps<T extends FieldValues> = {
  name: ControllerProps<T>["name"];
  placeholder?: string;
};

export const FormTextArea = <T extends FieldValues>({
  name,
  placeholder = "",
}: FormTextAreaProps<T>) => {
  const { control } = useFormContext<T>();

  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState }) => (
        <div className="flex flex-col w-full">
          <Textarea
            id={name}
            {...field}
            placeholder={placeholder}
            className={cn(
              "border p-2 rounded mb-1",
              fieldState.error && "border-red-400"
            )}
          />
          {fieldState.error && (
            <p className="text-red-500 text-sm">{fieldState.error.message}</p>
          )}
        </div>
      )}
    />
  );
};
