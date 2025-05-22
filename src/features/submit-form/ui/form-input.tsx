'use client'

import { Input } from "@/shared/components/ui/input";
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
  rules?: ControllerProps<T>["rules"];
};

export const FormInput = <T extends FieldValues>({
  name,
  type = "text",
  placeholder = "",
  rules = {},
}: FormInputProps<T>) => {
  const { control } = useFormContext<T>();

  return (
    <Controller
      name={name}
      control={control}
      rules={rules}
      render={({ field, fieldState }) => (
        <div className="flex flex-col w-full">
          <Input
            {...field}
            type={type}
            placeholder={placeholder}
            className="border p-2 rounded mb-2 max-w-[300px]"
          />
          {fieldState.error && (
            <p className="text-red-500 text-sm">{fieldState.error.message}</p>
          )}
        </div>
      )}
    />
  );
};
