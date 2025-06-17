import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

import banner_slider_1 from "/assets/banner_slider_1.jpg";
import banner_slider_2 from "/assets/banner_slider_2.jpg";
import banner_slider_3 from "/assets/banner_slider_3.jpg";
import WhiteButton from "../Header/Buttons/WhiteButton";

const Banner = () => {
  return (
    <div className="mt-5">
      <Swiper
        pagination={{
          dynamicBullets: true,
        }}
        loop={true}
        className="mySwiper"
      >
        <SwiperSlide className="relative">
          <img src={banner_slider_1} className="w-full" alt="" />
          <div className="relative min-md:absolute text-black min-md:text-white top-0 p-4 transform right-0 translate-y-[0%] min-md:translate-y-[50%] -translate-x-[0%] min-md:-translate-x-[35%]">
            <h2 className="uppercase text-4xl min-md:text-5xl w-[350px] tracking-[2px] mb-2">
              creafted with excellent.
            </h2>
            <h5 className="my-2 capitalize">
              time files. our watch will make you fly too.
            </h5>
            <WhiteButton btnTitle={"SHOP NOW"} />
          </div>
        </SwiperSlide>
        <SwiperSlide className="relative">
          <img src={banner_slider_2} className="w-full" alt="" />
          <div className="relative min-md:absolute text-black min-md:text-white top-0 p-4 transform right-0 translate-y-[0%] min-md:translate-y-[50%] -translate-x-[0%] min-md:-translate-x-[35%]">
            <h2 className="uppercase text-4xl min-md:text-5xl w-[350px] tracking-[2px] mb-2">
              designed to perform.
            </h2>
            <h5 className="my-2 capitalize">
              likes its namesake flower, the mini tulipano is simple.
            </h5>
            <WhiteButton btnTitle={"SHOP NOW"} />
          </div>
        </SwiperSlide>
        <SwiperSlide className="relative">
          <img src={banner_slider_3} className="w-full" alt="" />
          <div className="relative min-md:absolute text-black min-md:text-white top-0 p-4 transform right-0 translate-y-[0%] min-md:translate-y-[50%] -translate-x-[0%] min-md:-translate-x-[35%]">
            <h2 className="uppercase text-4xl min-md:text-5xl w-[250px] tracking-[2px] mb-2">
              wear you style.
            </h2>
            <h5 className="my-2 capitalize">
              get the fashion that matters with time.
            </h5>
            <WhiteButton btnTitle={"SHOP NOW"} />
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Banner;
