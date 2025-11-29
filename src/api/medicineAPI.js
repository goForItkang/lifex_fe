import instance from "../util/instance"

export const medicineAPI = {
    getMedicine:({hospital_name,keyword})=> instance.get(`/api/hospitals/${hospital_name}/medicines`,{
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
    getRequestMedicine:({hospital_id})=>instance.get("/api/medicines-request",{
        params:{
            hospital_id:hospital_id
        }
    })
}