import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, EffectCards } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { Resize } from "../../context/Resize";

const Banner = () => {
  const size = Resize();
  return (
    <div className="banner--wrapper">
      <Swiper
        loop={true}
        pagination={size > 700 ? true : false}
        modules={[Pagination]}
        className="mySwiper"
      >
        {Array(5)
          .fill(1)
          .map((item, index) => (
            <SwiperSlide key={index}>
              <img
                src={`./Banner-imgs/banner${index + 1}.png`}
                alt={`banner${index + 1}`}
                loading="lazy"
                className="bannerImg"
              />
            </SwiperSlide>
          ))}
      </Swiper>
    </div>
  );
};

export default Banner;
