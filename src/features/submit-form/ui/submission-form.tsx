import React, { ReactNode } from "react";
import { FormProviderWrapper } from "../model/form-provider";
import { SubmissionPortalFormSchemaType } from "../model/submit-form-schema";
import { FormInput } from "./form-input";
import { Button } from "@/shared/components/ui/button";
import { FormTextArea } from "./form-textarea";
import { Title } from "@/shared/components/title";
import { Label } from "@/shared/components/ui/label";
import { Card } from "@/shared/components/ui/card";
import { useCandidatesLevelsQuery } from "../api/queries";
import { FormSelect } from "./form-select";
import { useSubmitFormMutation } from "../api/mutations";
import { cn } from "@/shared/lib/utils";
import { SubmitButton } from "./submit-button";

interface Props {
  className?: string;
}

// toast("You submitted the following values:", {
//     description: (
//       <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
//         <code className="text-white">{JSON.stringify(data, null, 2)}</code>
//       </pre>
//     ),
//   });

export const SubmissionForm: React.FC<Props> = ({ className }) => {
  const { data } = useCandidatesLevelsQuery();
  const { mutate, isPending } = useSubmitFormMutation();

  const handleSubmit = (data: SubmissionPortalFormSchemaType) => {
    mutate(data);
  };

  return (
    <FormProviderWrapper
      className="max-w-[400px] w-full"
      onSubmit={handleSubmit}
    >
      <Card className="p-5 flex flex-col gap-5 mt-40 ">
        <Title className="text-center mb-3">Submission Portal </Title>
        <Container>
          <Label htmlFor="name">Name*</Label>
          <FormInput<SubmissionPortalFormSchemaType>
            name="name"
            placeholder="John"
          />
        </Container>

        <Container>
          <Label htmlFor="email">Email*</Label>
          <FormInput<SubmissionPortalFormSchemaType>
            name="email"
            placeholder="john@gmail.com"
          />
        </Container>

        <Container className="flex-col gap-2 items-start">
          <Label htmlFor="assignment_description">
            Assignment Description*
          </Label>
          <FormTextArea<SubmissionPortalFormSchemaType>
            name="assignment_description"
            placeholder="Enter description here..."
          />
        </Container>

        <Container>
          <Label htmlFor="github_repo_url">GitHub Repository URL*</Label>
          <FormInput<SubmissionPortalFormSchemaType>
            name="github_repo_url"
            placeholder="http://github...."
          />
        </Container>

        <Container>
          <Label>Candidate Level*</Label>
          <FormSelect<SubmissionPortalFormSchemaType>
            name="candidate_level"
            options={data?.levels}
          />
        </Container>

        <SubmitButton isPending />
      </Card>
    </FormProviderWrapper>
  );
};

function Container({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "flex flex-col  justify-between w-full gap-2 items-start mb-1",
        className
      )}
    >
      {children}
    </div>
  );
}
