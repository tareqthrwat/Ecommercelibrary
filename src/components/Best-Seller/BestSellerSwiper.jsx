import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, FreeMode } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
export default function BestSellerSwiper() {
  return (
    <div className="w-full flex gap-5">
      <Swiper
        spaceBetween={30}
        slidesPerView={6} // Lower this value if you have fewer slides
        slidesPerGroup={1} // Lower this value if you have fewer slides
        loop={true}
        pagination={{ clickable: true }}
        navigation={true}
        autoplay={{ delay: 0 }}
        modules={[Autoplay , FreeMode]}
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