import React from "react";
import { IoIosArrowDown } from "react-icons/io";

import styled from "styled-components";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

import { Pagination } from "swiper/modules";

const ProductsMenu = () => {
  return (
    <Wrapper>
      <div className="group">
        <div className="box flex items-center gap-2 cursor-pointer justify-center mb-3 hover:border-b pb-2">
          <span>PRODUCTS</span>{" "}
          <IoIosArrowDown className="transition-all ease-in-out duration-300" />
        </div>
        <div className="hidden group-hover:grid grid-cols-3 absolute left-0 top-25 p-5 w-full bg-white">
          <div>
            <ul className="flex flex-col gap-3 *:cursor-pointer border-r border-gray-200 text-center">
              <li>Grid 1 Columns</li>
              <li>Grid 2 Columns</li>
              <li>Grid Mix</li>
              <li>Gift Card</li>
              <li>Products Color Watch</li>
            </ul>
          </div>
          <div>
            <ul className="flex flex-col gap-3 *:cursor-pointer border-r border-gray-200 text-center">
              <li>Lightbox Image</li>
              <li>Product Video</li>
              <li>Custom Field</li>
              <li>Short Discription</li>
              <li>Real-Time Visitor</li>
            </ul>
          </div>
          <div>
            <Swiper
              slidesPerView={2}
              spaceBetween={30}
              pagination={{
                clickable: true,
              }}
              className="mySwiper"
            >
              <SwiperSlide>Slide 1</SwiperSlide>
              <SwiperSlide>Slide 2</SwiperSlide>
              <SwiperSlide>Slide 3</SwiperSlide>
              <SwiperSlide>Slide 4</SwiperSlide>
              <SwiperSlide>Slide 5</SwiperSlide>
              <SwiperSlide>Slide 6</SwiperSlide>
              <SwiperSlide>Slide 7</SwiperSlide>
              <SwiperSlide>Slide 8</SwiperSlide>
              <SwiperSlide>Slide 9</SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default ProductsMenu;

const Wrapper = styled.div`
  ul li {
    transition: all 0.2s ease-in-out;
    padding: 4px;
  }
  ul li:hover {
    background: #ccc;
    color: #fff;
  }
`;
