import axios from "axios";
import Cookies from "js-cookie";
const instance =axios.create({
    // baseURL:"http://3.35.37.170:8000",
    baseURL:"http://localhost:8000",
    withCredentials: true
});
// 요청할 인터셉터
instance.interceptors.request.use(
    (config) =>{
        const token = Cookies.get("accessToken");
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
        if(error.status === 401){
            alert("로그인이 필요한 기능입니다.")
            window.location.assign("/login")
        }
        if(error.status === 403){
            alert("권한이 없습니다.")
            window.location.assign("/")
        }
        if(error.status === 500){
            alert("서버에 오류가 생겼습니다 잠시후 이용해주세요")
        }
        return Promise.reject(error);
    }
)
export default instance;