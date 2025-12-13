import { useState } from "react";
import { useGetAdminMedicineApprovalList,useGetAdminMedicineApprovalDetails } from "../../api/hooks/useAdmin";

const AdminMedicineApproval = () => {
    const [approvalId,setApprovalId] = useState(null);
    const { data, isLoading, error } = useGetAdminMedicineApprovalList();
    const {data:detailsData} = useGetAdminMedicineApprovalDetails(approvalId);
    // 상세보기 button Handler 
    const approvalDetailHandler = (id) => {
        setApprovalId(id);
        console.log("btn handler 내용 ",detailsData);
    };
    console.log("입력받은 데이터",detailsData);
    if (isLoading) return <p className="text-center py-6">불러오는 중입니다...</p>;
    if (error) return <p className="text-center py-6 text-red-600">데이터 조회 실패</p>;

    return (
        <div className="w-[90%] mx-auto mt-6">
            <div className="grid grid-cols-5 font-semibold border-b py-3 text-center bg-gray-100">
                <p>병원</p>
                <p>성분이름</p>
                <p>요청 시간</p>
                <p>승인 시간</p>
                <p>다운로드</p>
            </div>
            {data && data.length > 0 ? (
                data.map((item) => (
                    <div
                        key={item.id}
                        className="grid grid-cols-5 text-center py-3 border-b items-center"
                    >
                        <p>{item.other_hospital_name}</p>
                        <p>{item.inn_name}</p>
                        <p>{item.created_at.split("T")[0]}</p>
                        <p>{item.updated_at.split("T")[0]}</p>
                        <button
                            onClick={() => approvalDetailHandler(item.id)}
                            className="text-blue-600 hover:underline"
                        >
                            <span class="material-symbols-outlined">download</span>
                        </button>
                    </div>
                ))
            ) : (
                <p className="text-center py-6">승인된 내역이 없습니다.</p>
            )}
            
        </div>
    );
};

export default AdminMedicineApproval;
