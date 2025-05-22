import { API_ROUTES } from "@/shared/api/api-routes";
import { useMutation } from "@tanstack/react-query"
import { SubmissionPortalFormSchemaType } from "../model/submit-form-schema";
import { useRouter } from "next/navigation";
import { useSubmittedDataStore } from "../model/store";


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
    const router = useRouter()
    const { setSubmitedData } = useSubmittedDataStore()

    return useMutation({
        mutationFn: sendData,
        onSuccess: (_, vars) => {
            setSubmitedData(vars)


            router.push('/thank-you')
        },



    })
}