import React from 'react';
import { useGetPendingMedicine, useResponseMedicine } from '../../api/hooks/useMedicine'
import { useQueryClient } from "@tanstack/react-query";

const PharmacistMedicineApproval = () => {
    const queryClient = useQueryClient();
    const { data, isLoading, error } = useGetPendingMedicine();
    const approvalMutation = useResponseMedicine();

    const handleApproval = (id, status) => {
        approvalMutation.mutate(
            { id, status },
            {
                onSuccess: () => {
                    queryClient.invalidateQueries(["pending_medicine"]); // 새로고침
                    alert(`요청이 ${status === "APPROVED" ? "승인" : "거절"}되었습니다.`);
                },
                onError: () => {
                    alert("처리 중 오류가 발생했습니다.");
                }
            }
        );
    };

    if (isLoading) return <p className="text-center py-4">불러오는 중...</p>;
    if (error) return <p className="text-center py-4 text-red-500">데이터 조회 실패</p>;

    return (
        <div className="mt-4">

            {/* Header */}
            <div className="grid grid-cols-7 w-[90%] mx-auto font-semibold border-b py-2 text-center">
                <p>병원</p>
                <p>성분이름</p>
                <p>제형</p>
                <p>용량</p>
                <p>요청시간</p>
                <p>승인</p>
                <p>거절</p>
            </div>

            {data && data.length > 0 ? (
                data.map(item => (
                    <div
                        key={item.id}
                        className="grid grid-cols-7 w-[90%] mx-auto py-3 border-b text-sm items-center text-center"
                    >
                        <p>{item.hospital_name}</p>
                        <p>{item.inn_name}</p>
                        <p>{item.form}</p>
                        <p>{item.dosage}</p>
                        <p>{item.created_at.split("T")[0]}</p>

                        <button
                            className="px-3 py-1 mx-auto bg-green-500 text-white rounded-md text-xs hover:bg-green-600"
                            onClick={() => handleApproval(item.id, "APPROVED")}
                        >
                            승인
                        </button>

                        <button
                            className="px-3 py-1 mx-auto bg-red-500 text-white rounded-md text-xs hover:bg-red-600"
                            onClick={() => handleApproval(item.id, "REJECTED")}
                        >
                            거절
                        </button>
                    </div>
                ))
            ) : (
                <p className="text-center py-6 text-gray-500">
                    승인 대기중인 요청이 없습니다.
                </p>
            )}
        </div>
    );
};

export default PharmacistMedicineApproval;
