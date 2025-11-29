import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "../css/base.css";
import "swiper/css";
import "swiper/css/pagination";
import Card from "./Card";
import { useSelector } from "react-redux";
const CardSlider = () => {
  const user = useSelector((state) => state.auth.user);
  const hospital_name = user?.hospital;
  return (
    <div className="hidden md:block w-ful">
      <Swiper
        modules={[Pagination]}
        spaceBetween={20}
        slidesPerView={1}
        pagination={{ clickable: true }}
        breakpoints={{
          768: { slidesPerView: 1 },
          1024: { slidesPerView: 1 },
        }}
        className="w-full"
      >
        <SwiperSlide>
          <Card
            img={"https://lh3.googleusercontent.com/aida-public/AB6AXuAOg6vifsrZJn9mTz2uVQfSpXxMQKlDXkCOd7ViqWyX52LK0WuwfuHTY20oNofS8bfTYNIVeGtGNSytBIVZcDQJdSbYzfTp8CF13ideSt_Dhr-IpbiQ9t-0Tn644MU0cy_DN_5Y3ZZ7HNkY9IW6JgBI3FNQF8QRn7HolWPpZaURfZNZ_OQxlCYt-b9ZuKO90FBUE3VWY_xtjXPYLbnv8xOCHD5mY6J113hXGiUd-AbuBdiXZ4zycSVioX9Cw8g3HzAvw5rJxZuYL_Fk"}
            title="병원 현황"
            descrption="병원에 현 상황을 살펴보세요."
            buttonText="병원 바로가기->"
            url={`/hospital/${hospital_name}`}
          />
        </SwiperSlide>

        <SwiperSlide>
          <Card
            img={"https://lh3.googleusercontent.com/aida-public/AB6AXuAOg6vifsrZJn9mTz2uVQfSpXxMQKlDXkCOd7ViqWyX52LK0WuwfuHTY20oNofS8bfTYNIVeGtGNSytBIVZcDQJdSbYzfTp8CF13ideSt_Dhr-IpbiQ9t-0Tn644MU0cy_DN_5Y3ZZ7HNkY9IW6JgBI3FNQF8QRn7HolWPpZaURfZNZ_OQxlCYt-b9ZuKO90FBUE3VWY_xtjXPYLbnv8xOCHD5mY6J113hXGiUd-AbuBdiXZ4zycSVioX9Cw8g3HzAvw5rJxZuYL_Fk"}
            title="약 조회/대여"
            descrption="AI가 성분을기반해서추천해줍니다."
            buttonText="약 조회/대여"
            url={"/medicine"}
          />
        </SwiperSlide>

        <SwiperSlide>
          <Card
            img={"https://lh3.googleusercontent.com/aida-public/AB6AXuAOg6vifsrZJn9mTz2uVQfSpXxMQKlDXkCOd7ViqWyX52LK0WuwfuHTY20oNofS8bfTYNIVeGtGNSytBIVZcDQJdSbYzfTp8CF13ideSt_Dhr-IpbiQ9t-0Tn644MU0cy_DN_5Y3ZZ7HNkY9IW6JgBI3FNQF8QRn7HolWPpZaURfZNZ_OQxlCYt-b9ZuKO90FBUE3VWY_xtjXPYLbnv8xOCHD5mY6J113hXGiUd-AbuBdiXZ4zycSVioX9Cw8g3HzAvw5rJxZuYL_Fk"}
            title="대여 현황"
            descrption="실시간으로 대여한 상황을 볼 수 있습니다."
            buttonText="대여 현황"
            url={`/rental`}
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default CardSlider;
