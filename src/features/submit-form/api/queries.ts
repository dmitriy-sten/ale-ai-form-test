import { API_ROUTES } from "@/shared/api/api-routes"
import { CandidatesLevelsDTO } from "@/shared/types/levels"
import { useQuery } from "@tanstack/react-query"



export const LEVELS_KEY = 'levels-key'


const fetchAllLevels = async ():Promise<CandidatesLevelsDTO> => {
    const res = await fetch(process.env.NEXT_PUBLIC_API_URL + API_ROUTES.levels)
    if (!res.ok) throw new Error('Failed to fetch levels');
    const data = await res.json()
    return data
}


export const useCandidatesLevelsQuery = () => {

    return useQuery({
        queryKey: [LEVELS_KEY],
        queryFn: fetchAllLevels
    })
}