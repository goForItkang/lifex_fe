import instance from "../util/instance"

export const hospitalAPI ={
    // 이름 수정 필요
    getHostpital:(hospital_name)=> instance.get(`/api/hospital/${hospital_name}`),
    getHospitalStatus:({hospital_name})=> instance.get(`/api/hospitals/status/${hospital_name}`),
    
} 
