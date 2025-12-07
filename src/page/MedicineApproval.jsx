import React from "react";
import { useSelector } from "react-redux";
import PharmacistMedicineApproval from "../component/approval/PharmacistMedicineApproval";
import AdminMedicineApproval from "../component/approval/AdminMedicineApproval";


const MedicineApproval = () => {
    const user = useSelector((state) => state.auth.user);
    if (!user) return <p className="text-center py-10">로그인이 필요합니다.</p>;
    if (user.role === "ROLE_PHARMACIST") {
        return <PharmacistMedicineApproval />;
    }

    if (user.role === "ROLE_ADMIN") {
        return (<AdminMedicineApproval/>);
    }
    return (
        <p className="text-center py-10 text-red-500">
            접근 권한이 없습니다. (403)
        </p>
    );
};

export default MedicineApproval;
