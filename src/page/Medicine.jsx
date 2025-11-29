import React, { useEffect, useState } from 'react';
import Search from '../component/Search';
import { medicineAPI } from '../api/medicineAPI';
import { useSelector } from 'react-redux';
import { aiAPI } from '../api/aiAPI';
import { useNavigate } from 'react-router-dom';
const Medicine = () => {
    // 내 병원일때 Y 외부 병원일때 N default 일때 Y 설정 했습니다.

    const [hospital_option, set_hospital_option] = useState('Y')
    const [hospital_medicine, set_hospital_medicine] = useState(null)
    const [extenal_medicine, set_extenal_medicine] = useState(null)
    const [keyword, set_keyword] = useState('');
    // 내 병원에서 조회
    const [ai_recommendation_medicine, set_ai_recommendation_medicine] = useState(null);
    // ai 로딩
    const [aiLoading, setAiLoading] = useState(false);
    // 외부 병원 ai 추천 성분으로 useState 저장 과 loading 
    const [ai_external_recommendation_medicine, set_ai_external_recommendation_medicine] = useState(null);
    const [aiExternalLoading, setAiExternalLoading] = useState(false);

    const user = useSelector((state) => state.auth.user);
    const hospital_name = user?.hospital;
    console.log("병원이름", hospital_name);
    const navigate = useNavigate();
    const request_medicine = (hospital_id, stock_id, quantity) => {
        medicineAPI
            .requestMedicine({ hospital_id, stock_id, quantity })
            .then((res) => {
                if (res.status === 200) {
                    alert("요청을 성공적으로 했습니다.");
                }
            })
            .catch(() => alert("요청 실패 했습니다."));
    };
    useEffect(() => {
        const loadMedicine = async () => {
            if (!keyword) return;  // 검색어 없으면 API 호출 안함

            try {
                let res;
                if (hospital_option === "Y") {
                    // 내 병원 검색
                    res = await medicineAPI.getMedicine({ hospital_name, keyword });
                    set_hospital_medicine(res.data);
                    if (keyword.length >= 3) {
                        try {
                            setAiLoading(true)
                            const ai_res = await aiAPI.getAIRecomend({ hospital_name, keyword })
                            console.log(ai_res.data);
                            set_ai_recommendation_medicine(ai_res.data)
                        } finally {
                            setAiLoading(false)
                        }

                    } else {
                        set_ai_recommendation_medicine(null) // 초기화 
                    }

                } else {
                    // 외부 병원 검색
                    res = await medicineAPI.getMedicineAll({ keyword });
                    set_extenal_medicine(res.data);
                    console.log("외부 병원 조회 결과 ", res.data);
                    if (keyword.length >= 3) {
                        try {
                            setAiExternalLoading(true);
                            const ai_res_ext = await aiAPI.getAIRecomendExternalHospital({
                                hospital_name,
                                keyword
                            });
                            set_ai_external_recommendation_medicine(ai_res_ext.data);
                            console.log(ai_res_ext.data);
                        } finally {
                            setAiExternalLoading(false);
                        }
                    } else {
                        set_ai_external_recommendation_medicine(null);
                    }
            }
            } catch (err) {
            console.error("API 오류:", err);
        }
    };

    loadMedicine(); // 호출
}, [hospital_option, keyword]);

return (
    <div>
        <Search
            placeholder={"약성분 검색해주요"}
            searchData={set_keyword}
        ></Search>
        <div className='flex w-[80%] mx-auto justify-around border-2 rounded-xl mt-3 p-2'>
            <button
                onClick={() => set_hospital_option("Y")}
                className={`w-1/2 py-2 rounded-lg ${hospital_option === "Y" ? " text-green-500" : " text-black"}`}>
                내 병원
            </button>

            <button
                onClick={() => set_hospital_option("N")}
                className={`w-1/2 py-2 rounded-lg ${hospital_option === "N" ? " text-green-500" : " text-black"}`}>
                외부 병원
            </button>
        </div>
        <div>
            {/* 내 병원 */}
            <div className={hospital_option === "Y" ? "block" : "hidden"}>
                <div>
                </div>
                <div className='flex w-[80%] mx-auto border-b'>
                    <p className='w-[40%]'>성분이름</p>
                    <p className='w-[25%]'>용량</p>
                    <p className='w-[25%]'>제형</p>
                    <p className='w-[10%]'>수량</p>
                </div>
                <div className="flex flex-col w-[80%] mx-auto">
                    {hospital_medicine && hospital_medicine.length > 0 ? (
                        hospital_medicine.map((item, idx) => (
                            <div
                                key={idx}
                                className="flex w-full py-2 border-b items-center"
                            >
                                <p className="w-[40%]">{item.inn_name}</p>
                                <p className="w-[25%]">{item.dosage}</p>
                                <p className="w-[25%]">{item.form}</p>
                                <p className="w-[10%]">{item.quantity}</p>
                            </div>
                        ))
                    ) : (
                        <p className="text-center py-4 text-gray-500">데이터가 없습니다.</p>
                    )}
                </div>
                <div className='mt-2 '>
                    <div className='w-[80%] mx-auto'>
                        <p className='bg-green-500 w-[20%] rounded-lg text-center'>AI 추천</p>
                    </div>


                    {aiLoading ? (
                        <p className="text-center py-4 text-blue-500">AI 추천 불러오는 중...</p>
                    ) : ai_recommendation_medicine && ai_recommendation_medicine.length > 0 ? (
                        <div>

                            <div className="flex flex-col w-[80%] mx-auto">
                                {ai_recommendation_medicine.map((item, idx) => (
                                    <div key={idx} className="flex w-full py-2 border-b items-center">
                                        <p className="w-[40%]">{item.inn_name}</p>
                                        <p className="w-[25%]">{item.dosage}</p>
                                        <p className="w-[25%]">{item.form}</p>
                                        <p className="w-[10%]">{item.quantity}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ) : (
                        <p className="text-center py-4 text-gray-500">AI 추천 결과가 없습니다.</p>
                    )}
                </div>
            </div>
        </div>
        {/* 외부 병원 */}
        <div className={hospital_option === "Y" ? "hidden" : "block"}>

            <div className="grid grid-cols-7 w-[90%] mx-auto border-b py-2 font-semibold text-sm text-gray-700">
                <p>병원 이름</p>
                <p>성분 이름</p>
                <p>용량</p>
                <p>제형</p>
                <p>수량</p>
                <p>거리/시간</p>
                <p>요청</p>
            </div>


            {extenal_medicine && extenal_medicine.length > 0 ? (
                extenal_medicine.map((item, idx) => (
                    <div
                        key={idx}
                        className="grid grid-cols-7 w-[90%] mx-auto py-2 border-b items-center text-sm"
                    >
                        <p>{item.hospital_name}</p>
                        <p>{item.inn_name}</p>
                        <p>{item.dosage}</p>
                        <p>{item.form}</p>
                        <p>{item.quantity}</p>
                        <p>5km / 10분</p>
                        <button className="px-2 py-1 bg-blue-500 text-white rounded-md text-xs" onClick={() => request_medicine(item.hospital_id,item.stock_id,0)}>
                            요청
                        </button>
                    </div>
                ))
            ) : (
                <p className="text-center py-4 text-gray-500">데이터가 없습니다.</p>
            )}
        </div>
        <div className={hospital_option === "N" ? "block" : "hidden"}>
    <div className='w-[90%] mx-auto mt-4'>
    <p className='bg-green-500 w-[20%] rounded-lg text-center'>AI 추천</p>
    </div>

    {aiExternalLoading ? (
        <p className="text-center py-4 text-blue-500">AI 추천 불러오는 중...</p>
    ) : ai_external_recommendation_medicine && ai_external_recommendation_medicine.length > 0 ? (
        <div className="w-[90%] mx-auto">
            {ai_external_recommendation_medicine.map((item, idx) => (
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
                        className="px-2 py-1 bg-blue-500 text-white rounded-md text-xs"
                        onClick={() => request_medicine(item.hospital_id,item.stock_id,0)}
                    >
                        요청
                    </button>
                </div>
            ))}
        </div>
    ) : (
        <p className="text-center py-4 text-gray-500">AI 추천 결과가 없습니다.</p>
    )}
</div>

    </div>
);
};

export default Medicine;