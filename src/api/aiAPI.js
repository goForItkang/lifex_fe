import instance from "../util/instance";

export const aiAPI = {
    // 내 병원 AI 추천
    getAIRecomend: ({ hospital_name, keyword, patient_id, condition }) =>
        instance.post(`/api/ai/recommendations`, {
            hospital_name,
            medicine: keyword,
            patient_id,
            condition
        }),

    // 외부 병원 AI 추천
    getAIRecomendExternalHospital: ({ hospital_name, keyword, patient_id, condition }) =>
        instance.post(`/api/ai/medicine/recommendations`, {
            hospital_name,
            medicine: keyword,
            patient_id,
            condition
        })
};
