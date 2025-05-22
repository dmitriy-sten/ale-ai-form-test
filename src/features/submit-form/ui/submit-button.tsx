

import { Button } from "@/shared/components/ui/button";
import React from "react";
import { cn } from "@/shared/lib/utils";
import { Spinner } from "@/shared/components/spinner";

interface Props {
  className?: string;
  isPending?: boolean;
}

export const SubmitButton: React.FC<Props> = ({ className, isPending }) => {
  return (
    <Button
      disabled={isPending}
      className={cn("h-12", className)}
      type="submit"
    >
      {isPending ? <Spinner /> : "Submit"}
    </Button>
  );
};
