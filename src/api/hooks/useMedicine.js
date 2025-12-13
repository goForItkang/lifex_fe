import { useMutation, useQuery } from "@tanstack/react-query";
import { medicineAPI } from "../medicineAPI";
import Hospital from "../../page/Hospital";
// 본인 병원에서 약성분 찾기 keyword : inn_name
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
// 외부 병원에 약 성분 찾기 keyword : inn_name
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
// 사용자가 요청한 약물 내역 보기
export const useGetReqeustMedicine = ({ enabled = true } = {}) =>{
    return useQuery({
        queryKey : ['medicine'],
        queryFn : async ()=>{
            const res = await medicineAPI.getRequestMedicine();
            return res.data
        },
        enabled,
        staleTime: 0,
        retry: 0
    })
}
// 약사페이지에서 약물 대여에 온 내역 보기
export const useGetPendingMedicine = () =>{
    return useQuery({
        queryKey: ['medicine_pending'],
        queryFn : async ()=>{
            const res = await medicineAPI.getPendingMedicine();
            return res.data
        }
    })

}
// 약물에 대한 대여결과 응답 (승인/거절)
export const useResponseMedicine = () => {
    return useMutation({
        mutationFn: async ({ id, status }) => {
            const res = await medicineAPI.responseMedicine({ id, status });
            return res.data;
        }
    });
};
// 약물 대여에 대한 검색 결과 (약성분기준으로 검색) 
export const useRequestMedicineByInn = (keyword, { enabled = true } = {}) => {
    return useQuery({
      queryKey: ['request_by_inn', keyword],
      queryFn: async () => {
        const res = await medicineAPI.getRequestMedicineByInn( {keyword} );
        return res.data;
      },
      enabled: enabled && typeof keyword === "string" && keyword.trim().length > 0,
      staleTime: 0,
      retry: 0,
    });
  };
