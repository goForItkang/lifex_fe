import React from 'react';
// 본인 병원에서 소유하고 있는  AI 약 추천 리스트 목록 컴포넌트
const OwnMedicineAIList = ({ data, isLoading, keyword }) => {

    if (!keyword || keyword.length < 3) return null;

    if (isLoading) {
        return <p className="text-center py-4 text-blue-500">AI 추천 불러오는 중...</p>
    }

    if (!data || data.length === 0) {
        return <p className="text-center py-4 text-gray-500">AI 추천 결과가 없습니다.</p>;
    }

    return (
        <div className="flex flex-col w-[80%] mx-auto">
            <p className='bg-green-500 w-[20%] rounded-lg text-center mb-2'>
                AI 추천
            </p>
            {data.map((item, idx) => (
                <div key={idx} className="flex w-full py-2 border-b items-center">
                    <p className="w-[40%]">{item.inn_name}</p>
                    <p className="w-[25%]">{item.dosage}</p>
                    <p className="w-[25%]">{item.form}</p>
                    <p className="w-[10%]">{item.quantity}</p>
                </div>
            ))}
        </div>
    );
};
export default OwnMedicineAIList;
