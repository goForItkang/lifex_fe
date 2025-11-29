import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
const MobileBar = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const user = useSelector((state) => state.auth.user);
    const hospital_name = user?.hospital;
    const menus = [
        { path: `/hospital/${hospital_name}`, icon: "local_hospital", label: "내병원" },
        { path: "/medicine", icon: "search", label: "약 검색" },
        { path: "/rental", icon: "inventory", label: "대여현황" },
        { path: "/notice", icon: "notifications", label: "알림" },
        { path: "/setting", icon: "settings", label: "설정" }
    ];

    return (
        <nav className="sm:hidden flex justify-around fixed bottom-0 w-full border-t h-20 bg-white">
            {menus.map((item, i) => {
                const active = location.pathname.startsWith(item.path);

                return (
                    <div
                        key={i}
                        onClick={() => navigate(item.path)}
                        className={`flex flex-col my-auto cursor-pointer 
                            ${active ? "text-green-500" : "text-gray-600"}`}
                    >
                        <span className="material-symbols-outlined text-3xl">
                            {item.icon}
                        </span>
                        <span className="text-xs font-medium">
                            {item.label}
                        </span>
                    </div>
                );
            })}
        </nav>
    );
};

export default MobileBar;
