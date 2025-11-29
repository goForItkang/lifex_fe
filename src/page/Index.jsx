import React from 'react';
import "../css/base.css";
import Card from '../component/Card';
import WhyMentorX from '../component/\bWhyMentoX';
import MobileBar from '../component/MobileBar';
import CardSlider from '../component/CardSlider';
import { useSelector } from "react-redux";
const Index = () => {
    const user = useSelector((state) => state.auth.user);
    const hospital_name = user?.hospital;
    
    return (
        <div className='bg-[#f6f8f7ff]'>
            <div className='bg-[#f6f8f7]'>
            <p className='text-3xl font-semibold text-start w-[90%] mx-auto sm:text-center'>소중한 환자 빠르게 약품을 대여하세요.</p>
            
            </div>
            {/* desktop일때 슬라이더 */}
            <CardSlider></CardSlider>
            <div className='md:hidden'>
                <Card
                    img={"https://lh3.googleusercontent.com/aida-public/AB6AXuAOg6vifsrZJn9mTz2uVQfSpXxMQKlDXkCOd7ViqWyX52LK0WuwfuHTY20oNofS8bfTYNIVeGtGNSytBIVZcDQJdSbYzfTp8CF13ideSt_Dhr-IpbiQ9t-0Tn644MU0cy_DN_5Y3ZZ7HNkY9IW6JgBI3FNQF8QRn7HolWPpZaURfZNZ_OQxlCYt-b9ZuKO90FBUE3VWY_xtjXPYLbnv8xOCHD5mY6J113hXGiUd-AbuBdiXZ4zycSVioX9Cw8g3HzAvw5rJxZuYL_Fk"}
                    title={"병원 현황"}
                    descrption={"병원에 현 상황을 살펴보세요."}
                    buttonText={"병원 바로가기->"}
                    url={`/hospital/${hospital_name}`}
                />
                <Card 
                    img={"https://lh3.googleusercontent.com/aida-public/AB6AXuAOg6vifsrZJn9mTz2uVQfSpXxMQKlDXkCOd7ViqWyX52LK0WuwfuHTY20oNofS8bfTYNIVeGtGNSytBIVZcDQJdSbYzfTp8CF13ideSt_Dhr-IpbiQ9t-0Tn644MU0cy_DN_5Y3ZZ7HNkY9IW6JgBI3FNQF8QRn7HolWPpZaURfZNZ_OQxlCYt-b9ZuKO90FBUE3VWY_xtjXPYLbnv8xOCHD5mY6J113hXGiUd-AbuBdiXZ4zycSVioX9Cw8g3HzAvw5rJxZuYL_Fk"}
                    title={"약 조회/대여"}
                    descrption={"AI가 성분을기반해서추천해줍니다."}
                    buttonText={"약 조회/대여"}
                    url={"/medicine"}
                />
                <Card
            img={"https://lh3.googleusercontent.com/aida-public/AB6AXuAOg6vifsrZJn9mTz2uVQfSpXxMQKlDXkCOd7ViqWyX52LK0WuwfuHTY20oNofS8bfTYNIVeGtGNSytBIVZcDQJdSbYzfTp8CF13ideSt_Dhr-IpbiQ9t-0Tn644MU0cy_DN_5Y3ZZ7HNkY9IW6JgBI3FNQF8QRn7HolWPpZaURfZNZ_OQxlCYt-b9ZuKO90FBUE3VWY_xtjXPYLbnv8xOCHD5mY6J113hXGiUd-AbuBdiXZ4zycSVioX9Cw8g3HzAvw5rJxZuYL_Fk"}
            title="대여 현황"
            descrption="실시간으로 대여한 상황을 볼 수 있습니다."
            buttonText="대여 현황 →"
            url={"/rental"}
          />
                <MobileBar/>
            </div>
            
        </div>
    );
};

export default Index;