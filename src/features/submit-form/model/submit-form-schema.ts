import { z } from "zod";

const required_error = 'Field is required.'


export const submissionPortalFormSchema = z.object({
    name: z.string(),
    email: z.string().email(),
    assigment_description: z.string().min(1),
    github_repo_url: z.string().url()
}, { required_error, })


export type SubmissionPortalFormSchemaType = z.infer<typeof submissionPortalFormSchema>