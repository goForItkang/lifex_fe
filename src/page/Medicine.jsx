import React, { useState, useEffect } from "react";
import Search from "../component/Search";
import { useSelector } from "react-redux";
import { useOwnMedicine, useMedicineAll } from "../api/hooks/useMedicine";
import OwnMedicineList from "../component/medicine/OwnMedicineList";
import OwnMedicineAIList from "../component/medicine/OwnMedicineAIList";
import ExternalMedicineList from "../component/medicine/ExternalMedicineList";
import ExternalMedicineAIList from "../component/medicine/ExternalMedicineAIList";
import { aiAPI } from "../api/aiAPI";
import { medicineAPI } from "../api/medicineAPI";

const Medicine = () => {
    const [hospital_option, setHospitalOption] = useState(true);
    const [keyword, setKeyword] = useState("");

    const user = useSelector((state) => state.auth.user);
    const hospital_name = user?.hospital;
    const { data: ownMedicine, isLoading: ownLoading } = useOwnMedicine(
        
        keyword,
        hospital_option && keyword.length > 0
    );
    const { data: externalMedicine, isLoading: externalLoading } = useMedicineAll(
        keyword,
        !hospital_option && keyword.length > 0
    );
    const [ownAI, setOwnAI] = useState([]);
    const [ownAILoading, setOwnAILoading] = useState(false);

    const [externalAI, setExternalAI] = useState([]);
    const [externalAILoading, setExternalAILoading] = useState(false);
    useEffect(() => {
        if (!hospital_option) return;
        if (keyword.length < 3) return;

        let cancel = false;

        async function fetchAI() {
            setOwnAILoading(true);
            try {
                const res = await aiAPI.getAIRecomend({
                    hospital_name,
                    keyword
                });
                if (!cancel) setOwnAI(res.data);
            } finally {
                if (!cancel) setOwnAILoading(false);
            }
        }

        fetchAI();
        return () => (cancel = true);
    }, [hospital_option, keyword, hospital_name]);
    useEffect(() => {
        if (hospital_option) return;
        if (keyword.length < 3) return;

        let cancel = false;

        async function fetchExternalAI() {
            setExternalAILoading(true);
            try {
                const res = await aiAPI.getAIRecomendExternalHospital({
                    hospital_name,
                    keyword
                });
                if (!cancel) setExternalAI(res.data);
            } finally {
                if (!cancel) setExternalAILoading(false);
            }
        }

        fetchExternalAI();
        return () => (cancel = true);
    }, [hospital_option, keyword, hospital_name]);
    const request_medicine = (hospital_id, stock_id, quantity) => {
        medicineAPI
            .requestMedicine({ hospital_id, stock_id, quantity })
            .then(() => alert("요청 성공!"))
            .catch(() => alert("요청 실패"));
    };

    return (
        <div>
            <Search placeholder="약성분 검색해주요" searchData={setKeyword} />
            <div className="flex w-[80%] mx-auto justify-around border-2 rounded-xl mt-3 p-2">
                <button
                    onClick={() => setHospitalOption(true)}
                    className={`w-1/2 py-2 rounded-lg ${hospital_option ? "text-green-500" : "text-black"
                        }`}
                >
                    내 병원
                </button>

                <button
                    onClick={() => setHospitalOption(false)}
                    className={`w-1/2 py-2 rounded-lg ${!hospital_option ? "text-green-500" : "text-black"
                        }`}
                >
                    외부 병원
                </button>
            </div>
            {hospital_option && (
                <>
                    <OwnMedicineList
                        data={ownMedicine}
                        isLoading={ownLoading}
                        keyword={keyword}
                    />

                    <OwnMedicineAIList
                        data={ownAI}
                        isLoading={ownAILoading}
                        keyword={keyword}
                    />
                </>
            )}
            {!hospital_option && (
                <>
                    <ExternalMedicineList
                        data={externalMedicine}
                        isLoading={externalLoading}
                        onRequest={request_medicine}
                    />

                    <ExternalMedicineAIList
                        data={externalAI}
                        isLoading={externalAILoading}
                        keyword={keyword}
                        onRequest={request_medicine}
                    />
                </>
            )}
        </div>
    );
};

export default Medicine;
