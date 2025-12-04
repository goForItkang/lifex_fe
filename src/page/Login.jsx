import React, { useState } from 'react';
import { setToken, parseJwt } from "../util/jwtUtil";
import Cookies from "js-cookie";
import { useNavigate,Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { loginSuccess } from '../store/slices/authSlice';
import { useLogin } from '../api/hooks/useUser';

const Login = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [form, setForm] = useState({
        login_id: "",
        password: ""
    });
    // hook
    const loginMutation = useLogin();
    // onChage 정의
    const onChange = (e) => {
        const { name, value } = e.target;
        setForm(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const loginHandler = () => {
        loginMutation.mutate(form, {
            onSuccess: (res) => {
                const token = res
                Cookies.set("accessToken", token);

                const payload = parseJwt(token);

                dispatch(
                    loginSuccess({
                        token: token,
                        userPayload: payload
                    })
                );

                navigate("/");
            },
            onError: () => {
                alert("로그인 실패! 아이디 또는 비밀번호를 확인해주세요.");
            }
        });
    };

    return (
        <div className="min-h-[700px] bg-[#f6f8f7] flex justify-center items-center px-4">

            <div className="w-full max-w-md bg-white shadow-md rounded-xl m-auto p-8">

                <h2 className="text-2xl font-bold text-center mb-6">
                    로그인
                </h2>

                <div className="mb-4">
                    <label className="block text-gray-700 font-medium">ID</label>
                    <input
                        type="text"
                        className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#39E079]"
                        onChange={onChange}
                        name="login_id"
                        value={form.login_id}
                    />
                </div>

                <div className="mb-4">
                    <label className="block text-gray-700 font-medium">PASSWORD</label>
                    <input
                        type="password"
                        className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#39E079]"
                        onChange={onChange}
                        name="password"
                        value={form.password}
                    />
                </div>

                <div className="text-right mb-6">
                    <button className="text-sm text-gray-500 hover:underline">
                        Forgot your password?
                    </button>
                </div>

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
                    disabled={loginMutation.isPending}
                >
                    {loginMutation.isPending ? "로그인 중..." : "로그인"}
                </button>

                <div className="mt-6 text-center">
                    <p className="text-gray-600 text-sm">아직 회원이 아니시라면?</p>
                    <p className="text-[#39E079] font-semibold cursor-pointer hover:underline mt-1">
                        <Link to="/signup">
                        회원가입
                        </Link>
                    </p>
                </div>
            </div>

        </div>
    );
};

export default Login;
