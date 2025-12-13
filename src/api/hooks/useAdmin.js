import { useQuery } from "@tanstack/react-query"
import {adminAPI} from "../adminAPI"
// 관리자/병원 행정 승인 결과를 보기위함
export const useGetAdminMedicineApprovalList = () => {
    return useQuery({
        queryKey: ["admin_medicine_approval"],
        queryFn: async () => {
            const res = await adminAPI.getAdminMedicineApprovalList();
            return res.data;
        }
    });
};
export const useGetAdminMedicineApprovalDetails = (id) =>{
    return useQuery({
        queryKey: ["admin_medicine_approval_getId",id],
        queryFn : async () =>{
            const res = await adminAPI.getAdminMedicineApprovalDetails({id});
            return res.data;
        }, 
        enabled :!!id
    })
}