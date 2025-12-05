import instance from "../util/instance"

export const medicineAPI = {
    getMedicine:({keyword})=> instance.get(`/api/hospitals/medicines`,{
        params:{
            medicine:keyword
        }
    }),
    getMedicineAll:({keyword})=> instance.get("/api/medicines",{
        params:{
            medicine: keyword
        }
    }),
    requestMedicine:({hospital_id,stock_id,quantity})=> instance.post(`/api/medicines-request`,{
            hospital_id:hospital_id,
            stock_id:stock_id,
            quantity:quantity
    }),
    getRequestMedicine:()=>instance.get("/api/medicines-request"),
    getPendingMedicine:()=>instance.get("/api/medicine/approval/pending"),
    responseMedicine:({id,status})=>instance.patch(`/api/medicine/approval/${id}`,null,{
        params : {status}
    })
}