"use client";

import { Textarea } from "@/shared/components/ui/textarea";
import {
  Controller,
  useFormContext,
  ControllerProps,
  FieldValues,
} from "react-hook-form";

type FormTextAreaProps<T extends FieldValues> = {
  name: ControllerProps<T>["name"];
  placeholder?: string;
  rules?: ControllerProps<T>["rules"];
};

export const FormTextArea = <T extends FieldValues>({
  name,
  placeholder = "",
  rules = {},
}: FormTextAreaProps<T>) => {
  const { control } = useFormContext<T>();

  return (
    <Controller
      name={name}
      control={control}
      rules={rules}
      render={({ field, fieldState }) => (
        <div className="flex flex-col w-full">
          <Textarea
            {...field}
            placeholder={placeholder}
            className="border p-2 rounded mb-2"
          />
          {fieldState.error && (
            <p className="text-red-500 text-sm">{fieldState.error.message}</p>
          )}
        </div>
      )}
    />
  );
};
