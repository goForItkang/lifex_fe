import React, { useState } from 'react';
import { userAPI } from '../api/userAPI';
import { setToken,parseJwt } from "../util/jwtUtil";
import Cookies from "js-cookie";
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { loginSuccess } from '../store/slices/authSlice';
const Login = () => {

    const dispatch = useDispatch();
    const navigator = useNavigate();

    const [form,setForm] = useState({
        login_id:"",
        password:""
    })
    // onChage 정의 
    const onChage = (e) =>{
        const {name,value} = e.target;
        setForm(prev=>({
            ...prev,
            [name]: value
        }))
    }
    const loginHandler = async()=>{
        const res = await userAPI.login(form);
        if(res.status===200){
            const token = res.data.data;
            console.log(token);
            Cookies.set("accessToken",token);
            const payload = parseJwt(token); 
            dispatch(loginSuccess({
            token: token, 
            userPayload: payload
                
        }))
        navigator("/");    
        }
    }
    return (
        <div className="min-h-[700px] bg-[#f6f8f7] flex justify-center items-center  px-4">

            <div className="w-full max-w-md bg-white shadow-md rounded-xl m-auto p-8">

                {/* 제목 */}
                <h2 className="text-2xl font-bold text-center mb-6">
                    로그인
                </h2>

                {/* 아이디 */}
                <div className="mb-4">
                    <label className="block text-gray-700 font-medium">ID</label>
                    <input
                        type="text"
                        className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#39E079]"
                        onChange={onChage}
                        name="login_id"
                        value={form.login_id}
                    />
                </div>

                {/* 비밀번호 */}
                <div className="mb-4">
                    <label className="block text-gray-700 font-medium">PASSWORD</label>
                    <input
                        type="password"
                        className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#39E079]"
                        onChange={onChage}
                        name="password"
                        value={form.password}
                    />
                </div>

                {/* 비밀번호 찾기 */}
                <div className="text-right mb-6">
                    <button className="text-sm text-gray-500 hover:underline">
                        Forgot your password?
                    </button>
                </div>

                {/* 로그인 버튼 */}
                <button
                    className="
                        w-full 
                        bg-[#39E079] 
                        text-white 
                        py-3 
                        rounded-lg 
                        font-semibold
                        hover:bg-[#2ec76c]
                        transition
                    "
                    onClick={loginHandler}
                >
                    로그인
                </button>

                {/* 회원가입 */}
                <div className="mt-6 text-center">
                    <p className="text-gray-600 text-sm">아직 회원이 아니시라면?</p>
                    <p className="text-[#39E079] font-semibold cursor-pointer hover:underline mt-1">
                        회원가입
                    </p>
                </div>
            </div>

        </div>
    );
};

export default Login;
