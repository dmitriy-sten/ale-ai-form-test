"use client";

import { ReactNode, useEffect } from "react";
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
}

export const FormProviderWrapper = ({
  children,
  onSubmit,
}: Props) => {
  const methods = useForm<SubmissionPortalFormSchemaType>({
    resolver: zodResolver(submissionPortalFormSchema),
    mode: "onSubmit",
  });

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)}>{children}</form>
    </FormProvider>
  );
};
