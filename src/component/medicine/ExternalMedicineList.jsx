import React from 'react';

const ExternalMedicineList = ({ data, isLoading, onRequest }) => {
    return (
        <div className="w-[90%] mx-auto mt-4">
            {/* 헤더 */}
            <div className="grid grid-cols-7 border-b py-2 font-semibold text-sm text-gray-700">
                <p>병원 이름</p>
                <p>성분 이름</p>
                <p>용량</p>
                <p>제형</p>
                <p>수량</p>
                <p>거리/시간</p>
                <p>요청</p>
            </div>

            {/* 로딩 */}
            {isLoading && (
                <p className="text-center py-4 text-blue-500">
                    데이터 불러오는 중...
                </p>
            )}

            {/* 데이터 있음 */}
            {!isLoading && data?.length > 0 && (
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
            )}

            {/* 데이터 없음 */}
            {!isLoading && (!data || data.length === 0) && (
                <p className="text-center py-4 text-gray-500">
                    데이터가 없습니다.
                </p>
            )}
        </div>
    );
};

export default ExternalMedicineList;
