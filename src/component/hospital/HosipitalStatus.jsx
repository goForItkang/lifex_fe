import React from 'react';

const HosipitalStatus = (status,traffic,update_at) => {
    return (
        <div className='flex flex-col gap-1 w-[80%] mx-auto mt-2 border rounded-xl h-[150px] bg-white'>
            <div>
                <div className='flex ml-3 items-center border-b'>
                    <p>응급실 운영</p>
                    <div className='rounded-full bg-green-500 w-3 h-3 ml-2'></div>
                </div>
                <div className='flex flex-col ml-3'>
                    <div className='flex mt-4 w-[90%] justify-between mx-auto'>
                        <p>병원실 환잡도</p>
                        <p>75%</p>
                    </div>
                    <div className='w-[90%] bg-zinc-200 rounded-full h-3 mx-auto'>
                    <div className='bg-orange-500 rounded-full h-full'
                    style={{width: "75%"}}
                    />
                    </div>
                    <p className='w-[90%] mx-auto mt-2 text-start text-sm text-gray-400'>최근 업데이트 1분전</p>
                </div>
            </div>
        </div>
    );
};

export default HosipitalStatus;