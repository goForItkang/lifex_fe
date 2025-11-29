import React from 'react';
import { useSelector } from 'react-redux';

const HosipitalInfo = ({hospital_name,address,phone}) => {
    // 병원 정보 이름/위치/전화번호
     
    return (
        <div className='flex flex-col gap-1 w-[80%] mx-auto mt-2 border rounded-xl h-[150px] bg-white'>
            <div className='flex gap-4 p-3 border-b'>
            <span className='material-symbols-outlined'>medical_services</span>
                <p>{hospital_name}</p>
            </div>
            <div className='flex gap-4 p-3 border-b'>
                <span className='material-symbols-outlined'>location_on</span>
                <p>{address}</p>
            </div>      
            <div className='flex gap-4 p-3'>
            <span className='material-symbols-outlined'>call</span>
                <p>{phone}</p>
            </div>
        </div>
    );
};

export default HosipitalInfo;