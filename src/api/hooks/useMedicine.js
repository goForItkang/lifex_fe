import { useMutation, useQuery } from "@tanstack/react-query";
import { medicineAPI } from "../medicineAPI";
import Hospital from "../../page/Hospital";

export const useOwnMedicine = (keyword, enabled) => {
    return useQuery({
        queryKey: ["own_medicine", keyword],
        queryFn: async () => {
            const res = await medicineAPI.getMedicine({ keyword: keyword });
            return res.data;
        },
        enabled: enabled && typeof keyword === "string" && keyword.length >= 1,
    });
};

export const useMedicineAll = (keyword,enabled) => {
    return useQuery({
        queryKey: ["external_medicine", keyword],
        queryFn: async () => {
            const res = await medicineAPI.getMedicineAll({ keyword });
            return res.data;
        },
        enabled: enabled,
        refetchOnWindowFocus: false,
        retry: 0
    });
};
export const useGetReqeustMedicine = () =>{
    return useQuery({
        queryKey : ['medicine'],
        queryFn : async ()=>{
            const res = await medicineAPI.getRequestMedicine();
            return res.data
        },
        enabled: true,
        staleTime:0
    })
}
export const useGetPendingMedicine = () =>{
    return useQuery({
        queryKey: ['medicine-pending'],
        queryFn : async ()=>{
            const res = await medicineAPI.getPendingMedicine();
            return res.data
        }
    })

}
export const useResponseMedicine = () => {
    return useMutation({
        mutationFn: async ({ id, status }) => {
            const res = await medicineAPI.responseMedicine({ id, status });
            return res.data;
        }
    });
};
