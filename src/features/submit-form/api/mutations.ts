import { useMutation } from "@tanstack/react-query"
import { toast } from "sonner"





export const useSubmitFormMutation = () => {

    return useMutation({
        mutationFn: (data) => new Promise((res) => {
            setTimeout(() => res(data), 3000)
            return data
        }),
        onSuccess: () => toast('Success')
    })
}