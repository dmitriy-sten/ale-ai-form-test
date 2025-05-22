'use client'

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/shared/components/ui/select";
import { cn } from "@/shared/lib/utils";
import React from "react";
import {
  Controller,
  ControllerProps,
  FieldValues,
  useFormContext,
} from "react-hook-form";

type FormInputProps<T extends FieldValues> = {
  name: ControllerProps<T>["name"];
  type?: string;
  placeholder?: string;
  options: string[] | undefined;
  className?: string;
  isLoading?:boolean
};

export const FormSelect = <T extends FieldValues>({
  className,
  options,
  name,
  isLoading
  
}: FormInputProps<T>) => {
  const { control } = useFormContext<T>();

  return (
    <Controller
      control={control}
      name={name}
      render={({ field, fieldState }) => (
        <div className="flex  flex-col gap-1">
          <Select value={field.value} onValueChange={field.onChange} disabled={isLoading}>
            <SelectTrigger
              className={cn(
                "w-[200px]",
                fieldState.error && "border-red-400",

                className
              )}
            >
              <SelectValue placeholder="Candidate Level" />
            </SelectTrigger>
            <SelectContent>
              {options?.map((item) => (
                <SelectItem key={item} value={item}>
                  {item}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          {fieldState.error && (
            <p className="text-red-500 text-sm">{fieldState.error.message}</p>
          )}
        </div>
      )}
    />
  );
};
