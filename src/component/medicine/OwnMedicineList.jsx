import React from 'react';

// 본인 병원 약 리스트 렌더링 컴포넌트
const OwnMedicineList = ({ data, isLoading }) => {
    return (
        <div className="w-[80%] mx-auto mt-4">
            <div className="flex border-b font-semibold text-sm text-gray-700">
                <p className="w-[40%]">성분이름</p>
                <p className="w-[25%]">용량</p>
                <p className="w-[25%]">제형</p>
                <p className="w-[10%]">수량</p>
            </div>
            {isLoading && (
                <p className="text-center py-4 text-blue-500">불러오는 중...</p>
            )}
            {!isLoading && data && data.length > 0 && (
                <div className="flex flex-col">
                    {data.map((item, idx) => (
                        <div
                            key={idx}
                            className="flex w-full py-2 border-b items-center"
                        >
                            <p className="w-[40%]">{item.inn_name}</p>
                            <p className="w-[25%]">{item.dosage}</p>
                            <p className="w-[25%]">{item.form}</p>
                            <p className="w-[10%]">{item.quantity}</p>
                        </div>
                    ))}
                </div>
            )}
            {/* 데이터 없을 때 */}
            {!isLoading && (!data || data.length === 0) && (
                <p className="text-center py-4 text-gray-500">데이터가 없습니다.</p>
            )}
        </div>
    );
};

export default OwnMedicineList;
