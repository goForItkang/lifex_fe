import instance from "../util/instance"
export const userAPI = {
    login: (data) => instance.post("/api/login",data),
    singup:(data) =>instance.post("/api/signup",data),
    userProfileUpdate:(data) => instance.put("/api/user",data),
    userDelete:({id}) => instance.delete(`/api/user/${id}`),
    userFindId: ({id}) => instance.get(`/api/user/${id}`),
    userFindName:({name})=> instance.get(`/api/user/${name}`),    
}