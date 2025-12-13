import { useMutation,useQuery } from "@tanstack/react-query";
import { hospitalAPI } from "../hosiptalAPI";
/**
 * 
 * @param {string} hospital_name 
 * @returns 
 */
// 사용자 병원으로 검색
export const useGetHospital = (hospital_name) =>{
    return useQuery({
        queryKey: ['hospital', hospital_name],
        queryFn : async () =>{
            const res = await hospitalAPI.getHostpital(hospital_name)
            return res.data;
        }
    })
}