import { useQuery } from "@tanstack/react-query"
import {adminAPI} from "../adminAPI"
export const useGetAdminMedicineApprovalList = () => {
    return useQuery({
        queryKey: ["admin_medicine_approval"],
        queryFn: async () => {
            const res = await adminAPI.getAdminMedicineApprovalList();
            return res.data;
        }
    });
};