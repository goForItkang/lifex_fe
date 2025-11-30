import { useMutation, useQuery } from '@tanstack/react-query';
import { userAPI } from '../api/userAPI';
// 사용자 가져오기 
// export const useUser = () =>{
//     return useQuery({
//         queryKey: ['user'],
//         queryFn: async ()=>{
//             const res  = await userAPI.getUser();
//             return res;
//         }
//     })

// }

// 사용자 로그인 
export const useLogin = ()=>{
    
    return useMutation({
        mutationFn: async (data)=>{
            const res = await userAPI.login(data);
            return res.data;
        }
    })
}
// 사용자 회원가입
export const useSignup = ()=>{
    
    return useMutation({
        mutationFn: async (data) =>{
            const res = await userAPI.signup(data);
            return res.data;
        }
    })
}

// 사용자정보 변경
export const useProfileUpdate = () =>{
    return useMutation({
        mutationF : async (data)=>{
            const res = await userAPI.userProfileUpdate(data);
            return res.data;
        }
    })
}
// 사용자 삭제 
export const useDelete =()=>{
    return useMutation({
        mutationFn: async ({id})=>{
            const res = await userAPI.userDelete({id});
            return res.data
        }
    })
}
export const useUserFindId=()=>{
    return useMutation({
        mutationFn : async({id})=>{
            const res = await userAPI.userFindId({id});
            return res.data
        }
    })
}
