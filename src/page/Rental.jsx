import React, { useEffect, useState } from 'react';
import Search from '../component/Search';
import { useSelector } from 'react-redux';
import { medicineAPI } from '../api/medicineAPI';

const Rental = () => {
    const user = useSelector((state) => state.auth.user);
    const hospital_id = user?.hospital_id;
    const [reqeust_medicine_list,set_reqeust_medicine_list] = useState(null);
    
    useEffect(() => {
        const loadData = async () => {
            try {
                const res = await medicineAPI.getRequestMedicine({ hospital_id });
                set_reqeust_medicine_list(res.data);
                console.log(res.data);
            } catch (e) {
                console.error("요청 조회 실패:", e);
            }
        };
    
        loadData();
    }, [hospital_id]);
    return (
        <div>
            <Search></Search>
            {/* <div className='w-[80%] h-[50px]  mx-auto flex justify-end'>
                <select name="" id="">
                </select>
                <select className='' name="" id="">
                    <option value="">전체</option>
                    <option value="">승인/대기</option>
                    <option value="">거절/반려</option>
                    <option value="">완료</option>
                </select>
            </div> */}
            <div className="w-[80%] mx-auto grid grid-cols-6 py-2 border-b font-semibold text-center">
    <p>ID</p>
    <p>병원</p>
    <p>성분</p>
    <p>진행 사항</p>
    <p>업데이트 시간</p>
    <p>요청/응답</p>
</div>

{reqeust_medicine_list && reqeust_medicine_list.length > 0 ? (
    reqeust_medicine_list.map((item) => {
        const isRequester = item.requester_hospital_id === hospital_id;
        const otherHospitalName = isRequester
            ? item.response_hospital_name
            : item.requester_hospital_name;

        return (
            <div
                key={item.id}
                className="w-[80%] mx-auto grid grid-cols-6 py-2 border-b text-center items-center text-sm"
            >
                {/* ID */}
                <p>{item.id}</p>

                {/* 상대 병원 */}
                <p>{otherHospitalName}</p>

                {/* 성분 */}
                <p>{item.inn_name}</p>

                {/* 상태 */}
                <p
                    className={
                        item.status === "PENDING"
                            ? "text-yellow-600"
                            : item.status === "APPROVED"
                            ? "text-green-600"
                            : "text-red-600"
                    }
                >
                    {item.status}
                </p>

                {/* 날짜 */}
                <p>{item.updated_at.split("T")[0]}</p>

                {/* 방향 */}
                <button className="text-blue-500 text-lg">
                    {isRequester ? "요청" : "응답"}
                </button>
            </div>
        );
    })
) : (
    <div className="text-center py-4">
        <p>요청 내역이 없습니다.</p>
    </div>
)}



        </div>
    );
};

export default Rental;