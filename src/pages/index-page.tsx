'use client'

import { SubmissionForm } from "@/features/submit-form/ui/submission-form";
import React from "react";

export const IndexPage: React.FC = () => {
  return (
    <div className="w-full flex justify-center">
      <SubmissionForm />
    </div>
  );
};
