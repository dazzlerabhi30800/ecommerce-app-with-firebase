import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { Resize } from "../../context/Resize";

const Banner = () => {
  const size = Resize();
  const [backgroundColor, setBackgroundColor] = useState(0);
  return (
    <>
      <div className={`banner--wrapper banner--${backgroundColor}`}>
        <Swiper
          modules={[Navigation]}
          loop={true}
          navigation={size > 700 && true}
          onRealIndexChange={(swiper) => {
            setBackgroundColor(swiper.realIndex);
          }}
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
    </>
  );
};

export default Banner;
