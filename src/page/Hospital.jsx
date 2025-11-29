import React, { useState } from 'react';
import "../css/base.css"
import HosipitalInfo from '../component/hospital/HospitalInfo';
import HosipitalStatus from '../component/hospital/HosipitalStatus';
import HosipitalWorkingPeopleInfo from '../component/hospital/HospitalWorkingPeopleInfo';
import { hospitalAPI } from '../api/hosiptalAPI';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
const Hospital = () => {
    const user = useSelector((state) => state.auth.user);
    const hospital_name = user?.hospital;
    const [hospital_info,set_hospital_info] = useState(null); 
    const navigate = useNavigate() 
    useEffect(() => {
        const loadHospital = async () => {
            
            if (!hospital_name) {
                alert("로그인 필요한 서비스입니다.");
                navigate("/login")
                return 
            }
            try {
                const res = await hospitalAPI.getHostpital(hospital_name);
                set_hospital_info(res.data);
                console.log("데이터",res.data)
            } catch (err) {
                console.error("API 오류:", err);
            }
        };
    
        loadHospital();// 호출
    }, [hospital_name]);
    
    
    if (!hospital_info) return <div>Loading...</div>;
    return (
        <div className='sm:flex sm:flex-col gap-4'>
            <HosipitalInfo
                hospital_name = {hospital_info.name}
                address = {hospital_info.address}
                phone = {hospital_info.phone}
            >
            </HosipitalInfo>
            <HosipitalStatus></HosipitalStatus>
            <HosipitalWorkingPeopleInfo></HosipitalWorkingPeopleInfo>
        </div>
    );
};

export default Hospital;