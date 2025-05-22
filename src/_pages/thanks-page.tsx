"use client";

import { useSubmittedDataStore } from "@/features/submit-form/model/store";
import { Title } from "@/shared/components/title";
import { Button } from "@/shared/components/ui/button";
import { MoveLeft } from "lucide-react";
import Link from "next/link";
import React from "react";

export const ThanksPage = () => {
  const { submittedData } = useSubmittedDataStore();

  return (
    <div className="flex items-center justify-center w-full h-screen   ">
      <div className="flex flex-col items-center">
        <Title className="mb-4">
          Thank you for submitting your assignment!
        </Title>

        {submittedData && (
          <>
            <p className="text-start mb-2">Your data:</p>
            <pre className="mt-2 rounded-md bg-slate-100 p-4 mb-4">
              <code className="text-slate-500">
                {JSON.stringify(submittedData, null, 1)}
              </code>
            </pre>
          </>
        )}

        <Link href={"/"}>
          <Button variant={"outline"} className="flex items-center ">
            <MoveLeft /> Go back
          </Button>
        </Link>
      </div>
    </div>
  );
};
