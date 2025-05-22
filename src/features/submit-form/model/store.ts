import { create } from 'zustand';
import { SubmissionPortalFormSchemaType } from './submit-form-schema';



interface SubmittedDataStore {

    submittedData: SubmissionPortalFormSchemaType | null
    setSubmitedData: (payload: SubmissionPortalFormSchemaType) => void
}

export const useSubmittedDataStore = create<SubmittedDataStore>()((set) => ({
    submittedData: null,
    setSubmitedData(payload) {
        set({ submittedData: payload })
    }
}));