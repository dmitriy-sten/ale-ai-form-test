import React from "react";
import { FormProviderWrapper } from "../model/form-provider";
import { SubmissionPortalFormSchemaType } from "../model/submit-form-schema";
import { FormInput } from "./form-input";
import { Button } from "@/shared/components/ui/button";
import { FormTextArea } from "./form-textarea";
import { Title } from "@/shared/components/title";
import { Label } from "@/shared/components/ui/label";
import { Card } from "@/shared/components/ui/card";

interface Props {
  className?: string;
}

export const SubmissionForm: React.FC<Props> = ({ className }) => {
  const handleSubmit = (data: SubmissionPortalFormSchemaType) => {};

  return (
    <FormProviderWrapper onSubmit={handleSubmit}>
      <Card className="p-5 flex flex-col gap-3 mt-40 w-[500px]">
        <Title className="text-center mb-3">Submission Portal </Title>
        <div className="flex gap-2  items-start">
          <Label className="leading-0">Name*</Label>

          <FormInput<SubmissionPortalFormSchemaType> name="name" />
        </div>
        <div className="flex gap-2 items-start">
          <Label>Email*</Label>
          <FormInput<SubmissionPortalFormSchemaType> name="email" />
        </div>
        <div className="flex flex-col gap-2 items-start">
          <Label>Assigment Description*</Label>
          <FormTextArea<SubmissionPortalFormSchemaType> name="assigment_description" />
        </div>

        <div className="flex gap-2">
          <Label>GitHub Repository URL*</Label>
          <FormInput<SubmissionPortalFormSchemaType> name="github_repo_url" />
        </div>

        <div className="flex gap-2">
          <Label>Candidate Level*</Label>
          
        </div>

        <Button type="submit">Submit</Button>
      </Card>
    </FormProviderWrapper>
  );
};
