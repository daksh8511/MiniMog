import React, { useEffect, useState } from "react";
import { IoIosArrowDown } from "react-icons/io";

import styled from "styled-components";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

import { Autoplay, Navigation } from "swiper/modules";

import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import { Link } from "react-router-dom";

const ProductsMenu = () => {
  const [watches, setWatches] = useState([]);

  const fetchData = async () => {
    const response = await fetch(
      "http://127.0.0.1:4000/api/post-product/product-getting"
    );
    const final = await response.json();
    setWatches(final.products);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <Wrapper>
      <div className="group">
        <div className="box flex items-center gap-2 cursor-pointer justify-center mb-3 hover:border-b pb-2">
          <span>PRODUCTS</span>{" "}
          <IoIosArrowDown className="transition-all ease-in-out duration-300" />
        </div>
        <div className="hidden group-hover:grid grid-cols-3 absolute left-0 top-25 p-5 w-full bg-white shadow-md">
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
          <div className="px-3 text-xl">
            <div className="flex justify-between items-center mb-2">
              <h2 className="mb-3">Watches</h2>
              <div className="flex gap-3 items-center">
                <button className="prev border p-2 rounded-full">
                  {<IoIosArrowBack />}
                </button>
                <button className="next border p-2 rounded-full">
                  {<IoIosArrowForward />}
                </button>
              </div>
            </div>
            <Swiper
              slidesPerView={2}
              spaceBetween={30}
              loop={true}
              pagination={{
                clickable: true,
              }}
              navigation={{
                prevEl: ".prev",
                nextEl: ".next",
              }}
              modules={[Autoplay, Navigation]}
              className="mySwiper"
            >
              {watches.map((products, i) => {
                return (
                    <SwiperSlide>
                      <div className="h-30">
                        <img
                          src={products.product_images}
                          className="h-full m-auto"
                          alt=""
                        />
                      </div>
                      <h2 className="line-clamp-2 my-2">
                        {products.product_name}
                      </h2>
                      <span>₹{products.price}</span>
                    </SwiperSlide>
                );
              })}
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
