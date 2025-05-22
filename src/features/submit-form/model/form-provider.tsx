"use client";

import { ReactNode } from "react";
import { FormProvider, useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  submissionPortalFormSchema,
  SubmissionPortalFormSchemaType,
} from "./submit-form-schema";

interface Props {
  children: ReactNode;
  onSubmit: SubmitHandler<SubmissionPortalFormSchemaType>;
  isSuccess?: boolean;
  className?: string;
}

export const FormProviderWrapper = ({
  children,
  onSubmit,
  className,
}: Props) => {
  const methods = useForm<SubmissionPortalFormSchemaType>({
    resolver: zodResolver(submissionPortalFormSchema),
    mode: "onSubmit",
  });

  return (
    <FormProvider {...methods}>
      <form className={className} onSubmit={methods.handleSubmit(onSubmit)}>
        {children}
      </form>
    </FormProvider>
  );
};
