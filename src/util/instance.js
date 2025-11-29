import axios from "axios";
import Cookies from "js-cookie";
const instance =axios.create({
    baseURL:"http://3.35.37.170:8000",
    // baseURL:"http://localhost:8000",
    withCredentials: true
});
// 요청할 인터셉터
instance.interceptors.request.use(
    (config) =>{
        const token = Cookies.get("accessToken");
        console.log(token);
        
        if(token) {
            config.headers.Authorization = `Bearer ${token}`
        }
        return config
    },
    (error) =>Promise.reject(error)
)
//응답 인터셉터
instance.interceptors.response.use(
    (res)=>res,
    (error)=>{
        console.log("API error");
        return Promise.reject(error);
    }
)
export default instance;