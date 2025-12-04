import { useQuery } from "@tanstack/react-query";
import { medicineAPI } from "../medicineAPI";
import Hospital from "../../page/Hospital";

export const useOwnMedicine = (hospital_name, keyword,enabled) => {
    return useQuery({
        queryKey: ["own_medicine", hospital_name, keyword],
        queryFn: async () => {
            const res = await medicineAPI.getMedicine({ hospital_name, keyword });
            return res.data;
        },
        
        enabled: 
        enabled && keyword.length >= 1,
        refetchOnWindowFocus: false,
        retry: 0
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
export const useGetReqeustMedicine = (hospital_id) =>{
    return useQuery({
        queryKey : ['medicine',hospital_id],
        queryFn : async ()=>{
            const res = await medicineAPI.getRequestMedicine({hospital_id});
            return res.data
        }
    })
}

