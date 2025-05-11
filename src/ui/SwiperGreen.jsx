import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./swiper.css";

import { Autoplay, Pagination } from "swiper/modules";

export default function SwiperGreen({ baner }) {
  return (
    <Swiper
      spaceBetween={30}
      centeredSlides={true}
      autoplay={{
        delay: 4500,
        disableOnInteraction: false,
      }}
      pagination={{ clickable: true }}
      modules={[Autoplay, Pagination]}
      className="mySwiper"
    >
      {baner.map((banner) => (
        <SwiperSlide key={banner.id || banner.text1}>
          <div className="slide-content ">
            <div className="slide-text px-5">
              <p className="p-text2">{banner.text1}</p>
              <p className="p-bold text-[70px] text-[#3d3d3d] mt-1 max-lg:text-5xl">
                {banner.text2}
                <span className="p-bold text-[70px] text-[#46A46C] max-lg:text-5xl">{banner.span}</span>
              </p>
              <p className="p-silent mt-5">{banner.text3}</p>
              <button className="btn btn2 mt-10">{banner.btn}</button>
            </div>
            <img className=" max-lg:hidden" width={500} src={banner.img} alt="Banner" />
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
