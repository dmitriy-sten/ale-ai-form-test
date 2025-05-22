import { z } from "zod";

const required_error = 'Field is required.'

const requiredString = z.string({ required_error })

export const submissionPortalFormSchema = z.object({
    name: requiredString.min(1, 'Min 1 character'),
    email: requiredString.email(),
    assignment_description: requiredString.min(10),
    github_repo_url: requiredString.url(),
    candidate_level: requiredString
})


export type SubmissionPortalFormSchemaType = z.infer<typeof submissionPortalFormSchema>