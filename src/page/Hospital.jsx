import React from 'react'; // useState와 useEffect는 이제 필요하지 않습니다.
import "../css/base.css"
import HosipitalInfo from '../component/hospital/HospitalInfo';
import HosipitalStatus from '../component/hospital/HosipitalStatus';
import HosipitalWorkingPeopleInfo from '../component/hospital/HospitalWorkingPeopleInfo'; 
import { useSelector } from 'react-redux';
import { useGetHospital } from '../api/hooks/useHospital'; // 커스텀 훅 임포트
import { useParams } from "react-router-dom";

const Hospital = () => {
    const { hospital_name } = useParams();
    const { data: hospital_info } = useGetHospital(hospital_name);
    
    if (!hospital_info) {
         return <div>병원 정보를 찾을 수 없습니다.</div>;
    }
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