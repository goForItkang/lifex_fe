import React, { useState } from 'react';
import Search from '../component/Search';
import { useSelector } from 'react-redux';
import { useGetReqeustMedicine, useRequestMedicineByInn } from '../api/hooks/useMedicine';

const Rental = () => {
    const user = useSelector((state) => state.auth.user);
    const hospital_id = user?.hospital_id;
    const [searchData, setSearchData] = useState("");
    const isSearching = !!searchData && searchData.trim() !== "";
    console.log("검색 결과:",searchData);
    const requestAll = useGetReqeustMedicine({
        enabled: !isSearching,
    });
    const requestByInn = useRequestMedicineByInn(searchData, {
        enabled: isSearching,
    });
    const requestList = isSearching ? requestByInn.data : requestAll.data;
    const isLoading = isSearching ? requestByInn.isLoading : requestAll.isLoading;
    const error = isSearching ? requestByInn.error : requestAll.error;
    if (isLoading) return <p className="text-center py-4">불러오는 중입니다</p>;
    if (error){
        console.log(error);
        <p className="text-center py-4 text-red-500">데이터 조회 실패</p>;
    }
    if (!requestList || requestList.length === 0)
        return (
            <div>
                <Search placeholder={"약 성분으로 검색해주세요"} searchData={setSearchData}/>
                <div className="text-center py-4">
                    <p>요청 내역이 없습니다.</p>
                </div>
            </div>
        );
    return (
        <div>
            <Search placeholder={"약 성분으로 검색해주세요"} searchData={setSearchData} />

            <div className="w-[80%] mx-auto grid grid-cols-6 py-2 border-b font-semibold text-center">
                <p>ID</p>
                <p>병원</p>
                <p>성분</p>
                <p>진행 사항</p>
                <p>업데이트 시간</p>
                <p>요청/응답</p>
            </div>

            {requestList.map((item) => {
                const isRequester = item.requester_hospital_id === hospital_id;
                const otherHospitalName = isRequester
                    ? item.response_hospital_name
                    : item.requester_hospital_name;

                return (
                    <div
                        key={item.id}
                        className="w-[80%] mx-auto grid grid-cols-6 py-2 border-b text-center items-center text-sm"
                    >
                        <p>{item.id}</p>
                        <p>{otherHospitalName}</p>
                        <p>{item.inn_name}</p>

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

                        <p>{item.updated_at.split("T")[0]}</p>

                        <button className="text-blue-500 text-lg">
                            {isRequester ? "요청" : "응답"}
                        </button>
                    </div>
                );
            })}
        </div>
    );
};

export default Rental;
