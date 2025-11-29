import instance from "../util/instance"
export const userAPI = {
    login: (data) => instance.post("/api/login",data),
    singup:(data) =>instance.post("/api/signup",data)
}