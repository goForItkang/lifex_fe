import instance from "../util/instance"

export const hospitalAPI ={
    getHostpital:(hospital_name)=> instance.get(`/api/hospital/${hospital_name}`)

}