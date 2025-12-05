import React, { useState } from 'react';
import { userAPI } from '../api/userAPI';
import { useNavigate } from 'react-router-dom';
const Signup = () => {
    const navigate = useNavigate();
    const [form, setForm] = useState({
        name: "",
        login_id: "",
        password: "",
        birth: "",
        phone: "",
        hospital: "",
        licenseFile: null,
    });

    const onChange = (e) => {
        const { name, value, files } = e.target;
        if (name === "licenseFile") {
            setForm({ ...form, licenseFile: files[0] });
        } else {
            setForm({ ...form, [name]: value });
        }
    };

    const handleSubmit = async(e) => {
        e.preventDefault();
        try{
            const formData = new FormData();
            formData.append("name", form.name);
            formData.append("login_id", form.login_id);
            formData.append("password", form.password);
            formData.append("birth", form.birth);
            formData.append("phone", form.phone);
            formData.append("hospital", form.hospital);
            if(form.licenseFile){
                formData.append("licenseFile", form.licenseFile);
            }

            const res = await userAPI.singup(formData);
            console.log(res.status);
            if(res.status === 200){
                alert("회원가입에 성공했습니다.")
                navigate("/login");
            }
        }catch(error){
            console.log(error);
            
        }
        
    };

    return (
        <div className="min-h-[900px] bg-[#f6f8f7] flex justify-center items-center px-4">

            <div className="w-full max-w-lg bg-white shadow-md rounded-xl p-8">

                {/* 제목 */}
                <h2 className="text-2xl font-bold text-center mb-6">
                    회원가입
                </h2>

                <form onSubmit={handleSubmit}>
                    
                    {/* 이름 */}
                    <div className="mb-4">
                        <label className="block text-gray-700 font-medium">이름</label>
                        <input
                            name="name"
                            type="text"
                            value={form.name}
                            onChange={onChange}
                            className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-lg 
                                       focus:outline-none focus:ring-2 focus:ring-[#39E079]"
                        />
                    </div>

                    {/* 아이디 */}
                    <div className="mb-4">
                        <label className="block text-gray-700 font-medium">ID</label>
                        <input
                            name="login_id"
                            type="text"
                            value={form.login_id}
                            onChange={onChange}
                            className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-lg 
                                       focus:outline-none focus:ring-2 focus:ring-[#39E079]"
                        />
                    </div>

                    {/* 비밀번호 */}
                    <div className="mb-4">
                        <label className="block text-gray-700 font-medium">비밀번호</label>
                        <input
                            name="password"
                            type="password"
                            value={form.password}
                            onChange={onChange}
                            className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-lg 
                                       focus:outline-none focus:ring-2 focus:ring-[#39E079]"
                        />
                    </div>

                    {/* 생년월일 */}
                    <div className="mb-4">
                        <label className="block text-gray-700 font-medium">생년월일</label>
                        <input
                            name="birth"
                            type="date"
                            value={form.birth}
                            onChange={onChange}
                            className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-lg 
                                       focus:outline-none focus:ring-2 focus:ring-[#39E079]"
                        />
                    </div>

                    {/* 전화번호 */}
                    <div className="mb-4">
                        <label className="block text-gray-700 font-medium">전화번호</label>
                        <input
                            name="phone"
                            type="tel"
                            placeholder="010-0000-0000"
                            value={form.phone}
                            onChange={onChange}
                            className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-lg 
                                       focus:outline-none focus:ring-2 focus:ring-[#39E079]"
                        />
                    </div>

                    {/* 병원 이름 */}
                    <div className="mb-4">
                        <label className="block text-gray-700 font-medium">병원명</label>
                        <input
                            name="hospital"
                            type="text"
                            value={form.hospital}
                            onChange={onChange}
                            className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-lg 
                                       focus:outline-none focus:ring-2 focus:ring-[#39E079]"
                        />
                    </div>

                    {/* 의사면허 파일 업로드 */}
                    <div className="mb-6">
                        <label className="block text-gray-700 font-medium">의사면허증 업로드</label>
                        <input
                            name="licenseFile"
                            type="file"
                            accept=".jpg,.jpeg,.png,.pdf"
                            onChange={onChange}
                            className="mt-2 w-full 
                                       file:mr-4 file:py-2 file:px-4 
                                       file:rounded-lg file:border-0 
                                       file:text-white file:bg-[#39E079]
                                       file:hover:bg-[#2ec76c]
                                       text-gray-600"
                        />
                    </div>

                    {/* 회원가입 버튼 */}
                    <button
                        type="submit"
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
                    >
                        회원가입
                    </button>

                </form>

            </div>

        </div>
    );
};

export default Signup;
