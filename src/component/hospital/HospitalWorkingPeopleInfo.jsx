import React from 'react';

const HosipitalWorkingPeopleInfo = (doctorAll,nurseAll,doctor,chemist,nurse) => {
    return (
        <div className='flex flex-col gap-1 w-[80%] mx-auto mt-2 border rounded-xl h-[150px] bg-white'>
            <div className='border-b'>
            <p>병원 상세 정보</p>
            </div>
            
            <div className='flex gap-4 p-3 border-b'>
                <span className='material-symbols-outlined'>
                groups
                </span>
                <p>의사 25명/약사 20명/간호사 15명</p>
            </div>
            <div className='flex gap-4 p-3 '>
                <span className='material-symbols-outlined'>
                groups
                </span>
                <p>응급의학과 3명/간호사 2명</p>
            </div>
        </div>
    );
};

export default HosipitalWorkingPeopleInfo;