import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, FreeMode } from "swiper/modules";
import "swiper/css";

export default function BestSellerSwiper() {
  return (
    <div className="w-full flex gap-5">
      <Swiper
        spaceBetween={10}
        slidesPerView={2}
        slidesPerGroup={1}
        loop={true}
        autoplay={{ delay: 500 }}
        freeMode={true}
        pagination={{ clickable: true }}
        modules={[Autoplay, FreeMode]}
        breakpoints={{
          640: { slidesPerView: 3 },
          768: { slidesPerView: 4 },
          1024: { slidesPerView: 5 },
          1280: { slidesPerView: 6 },
        }}
      >
        <SwiperSlide>
          <div className="w-43.25 h-65 rounded-xl bg-white "></div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="w-43.25 h-65 rounded-xl bg-white "></div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="w-43.25 h-65 rounded-xl bg-white "></div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="w-43.25 h-65 rounded-xl bg-white "></div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="w-43.25 h-65 rounded-xl bg-white "></div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="w-43.25 h-65 rounded-xl bg-white "></div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="w-43.25 h-65 rounded-xl bg-white "></div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="w-43.25 h-65 rounded-xl bg-white "></div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
