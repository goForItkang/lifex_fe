import React from 'react';

const ExternalMedicineAIList = ({ data, isLoading, onRequest, keyword }) => {
    if (!keyword || keyword.length < 3) return null;
    if (isLoading) {
        return (
            <p className="text-center py-4 text-blue-500">
                AI 추천 불러오는 중...
            </p>
        );
    }
    if (!data || data.length === 0) {
        return (
            <p className="text-center py-4 text-gray-500">
                AI 추천 결과가 없습니다.
            </p>
        );
    }
    return (
        <div className="w-[90%] mx-auto mt-4">
            <p className='bg-green-500 w-[20%] rounded-lg text-center mb-2'>
                AI 추천
            </p>

            <div>
                {data.map((item, idx) => (
                    <div
                        key={idx}
                        className="grid grid-cols-7 w-full py-2 border-b items-center text-sm"
                    >
                        <p>{item.hospital_name}</p>
                        <p>{item.inn_name}</p>
                        <p>{item.dosage}</p>
                        <p>{item.form}</p>
                        <p>{item.quantity}</p>
                        <p>5km / 10분</p>

                        <button
                            onClick={() => onRequest(item.hospital_id, item.stock_id, 0)}
                            className="px-2 py-1 bg-blue-500 text-white rounded-md text-xs"
                        >
                            요청
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ExternalMedicineAIList;
