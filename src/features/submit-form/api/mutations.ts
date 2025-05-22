import { API_ROUTES } from "@/shared/api/api-routes";
import { useMutation } from "@tanstack/react-query"
import { toast } from "sonner"
import { SubmissionPortalFormSchemaType } from "../model/submit-form-schema";


interface PostResponse {
    status: string
    message: string
}


const sendData = async (payload: SubmissionPortalFormSchemaType): Promise<PostResponse> => {
    const res = await fetch(process.env.NEXT_PUBLIC_API_URL + API_ROUTES.assignments, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(payload)
    })

    const data = await res.json()
    if (!res.ok) throw new Error(data.message || 'Something Error');
    return data
}


export const useSubmitFormMutation = () => {

    return useMutation({
        mutationFn: sendData,
        onSuccess: (data) => toast('Success', {
            description: data.message
        }),
        onError: (error) => {
            toast("Something went wrong", {
                description: error.message

            })
        }
    })
}