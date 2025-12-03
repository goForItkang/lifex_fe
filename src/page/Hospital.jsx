import React from 'react'; // useState와 useEffect는 이제 필요하지 않습니다.
import "../css/base.css"
import HosipitalInfo from '../component/hospital/HospitalInfo';
import HosipitalStatus from '../component/hospital/HosipitalStatus';
import HosipitalWorkingPeopleInfo from '../component/hospital/HospitalWorkingPeopleInfo'; 
import { useSelector } from 'react-redux';
import { useGetHospital } from '../api/hooks/useHospital';
import { useParams } from "react-router-dom";
import CallBack from '../component/common/CallBack';

const Hospital = () => {
    // 내 병원 페이지 
    const { hospital_name } = useParams(); 
    const { data: hospital_info,isLoading,error } = useGetHospital(hospital_name);
    // 수정 해야할 내용은 404 도 page 없음 이고 204도 noContent 니까 해당 에러로 변경
    if(!hospital_info){
        return (<CallBack data={hospital_info} isLoading={isLoading} error={error}/>)}
    return (
        <div className='sm:flex sm:flex-col gap-4'>
            <HosipitalInfo
                hospital_name = {hospital_info?.name}
                address = {hospital_info?.address}
                phone = {hospital_info?.phone}
            >
            </HosipitalInfo>
            <HosipitalStatus></HosipitalStatus>
            <HosipitalWorkingPeopleInfo></HosipitalWorkingPeopleInfo>
        </div>
    );
};

export default Hospital;