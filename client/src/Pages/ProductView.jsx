import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

import { Swiper, SwiperSlide } from "swiper/react";

import { FaMinus, FaPlus, FaBox } from "react-icons/fa6";
import { TbTruckDelivery } from "react-icons/tb";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import "swiper/css/pagination";

import { FreeMode, Navigation, Thumbs, Pagination } from "swiper/modules";
import styled from "styled-components";
import WhiteButton from "../Components/Header/Buttons/WhiteButton";
import BlackButton from "../Components/Header/Buttons/BlackButton";
import trustbag from "/assets/trustbag.png";

const ProductView = () => {
  const { id } = useParams();
  const [myProduct, setProduct] = useState([]);

  const [stock, setStock] = useState(0);

  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  const fetchProduct = async () => {
    const response = await fetch(
      "http://127.0.0.1:4000/api/post-product/product-getting"
    );
    const final = await response.json();

    setProduct(final.products);
  };

  useEffect(() => {
    fetchProduct();
  }, []);

  const filterId = myProduct.filter((pId) => pId._id == id);

  const categoryRelatedProduct = myProduct.filter(
    (cate) => cate.typeOfGood == filterId[0].typeOfGood
  );

  if (filterId.length == 0) {
    return "Loading...";
  }

  return (
    <Wrapper className="p-4">
      <div className="grid grid-cols-2 gap-10">
        <div className="leftSide">
          <Swiper
            style={{
              "--swiper-navigation-color": "#fff",
              "--swiper-pagination-color": "#fff",
            }}
            loop={true}
            spaceBetween={10}
            navigation={true}
            thumbs={{ swiper: thumbsSwiper }}
            modules={[FreeMode, Navigation, Thumbs]}
            className="mySwiper2"
          >
            {filterId.length == 0
              ? null
              : filterId[0].product_images.map((image, i) => {
                  return (
                    <SwiperSlide>
                      <img src={image} className="w-50 m-auto" alt="" />
                    </SwiperSlide>
                  );
                })}
          </Swiper>
          <Swiper
            onSwiper={setThumbsSwiper}
            loop={true}
            spaceBetween={10}
            slidesPerView={4}
            freeMode={true}
            watchSlidesProgress={true}
            modules={[FreeMode, Navigation, Thumbs]}
            className="mySwiper mySwiperTwo mt-10"
          >
            {filterId[0] == undefined
              ? null
              : filterId[0].product_images.map((image, i) => {
                  return (
                    <SwiperSlide>
                      <img src={image} alt="" />
                    </SwiperSlide>
                  );
                })}
          </Swiper>
        </div>
        <div className="rightSide">
          <div>
            <h2 className="text-3xl">{filterId[0].product_name}</h2>
            <h3 className="text-xl">₹{filterId[0].price}</h3>

            <div>
              {/* quantity box */}
              <div className="mt-3">
                <h4>Quantity :</h4>
                <div className="stock flex items-center mt-1 bg-gray-300 p-2 w-25">
                  <FaMinus
                    className="cursor-pointer"
                    onClick={() => setStock(stock == 0 ? 0 : stock - 1)}
                  />
                  <input
                    type="number"
                    value={stock}
                    onChange={(e) => setStock(e.target.value)}
                  />
                  <FaPlus
                    className="cursor-pointer"
                    onClick={() =>
                      setStock(
                        stock == filterId[0].stock
                          ? filterId[0].stock
                          : stock + 1
                      )
                    }
                  />
                </div>
                <div className="space-y-4">
                  <WhiteButton btnTitle={"ADD TO CART"} />
                  <BlackButton btnTitle={"BUY IT NOW"} />
                </div>
                <hr className="my-5 border-gray-300" />

                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <TbTruckDelivery size={25} />
                    <h3>Estimated Delivery: Jun 17 - Jun 21</h3>
                  </div>
                  <div className="flex items-center gap-3">
                    <FaBox size={25} />
                    <h3>Free Shipping & Returns: On all orders over $75</h3>
                  </div>
                </div>

                <div className="bg-gray-100 p-5 mt-6">
                  <img src={trustbag} alt="" className="m-auto mb-3" />
                  <h4 className="text-center text-gray-500">
                    Guarantee safe & secure checkout
                  </h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* DESCRIPTION SECTION */}
      <div className="mt-20 space-y-3">
        <h2 className="text-3xl text-center">Description</h2>
        <div className="bg-gray-300 p-4">
          <p className="text-gray-600">{filterId[0].description}</p>
        </div>
      </div>

      {/* CATEGORY RELATED PRODUCTS */}
      <div className="mt-10">
        <h2 className="text-center text-3xl">You Might Also Like</h2>
        <Swiper
          slidesPerView={3}
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="mySwiper mt-10"
        >
          {categoryRelatedProduct.map((items, i) => {
            return (
              <SwiperSlide className="space-y-3">
                <Link to={`/product_view/${items._id}`}>
                  <div>
                    <img
                      src={items.product_images[0]}
                      className="h-50 m-auto"
                      alt=""
                    />
                  </div>
                  <h2 className="line-clamp-2">{items.product_name}</h2>
                  <h3>₹{items.price}</h3>
                </Link>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </Wrapper>
  );
};

export default ProductView;

const Wrapper = styled.div`
  .mySwiperTwo .swiper-wrapper {
    margin: 0 30px;
    gap: 30px;
  }
  .stock input[type="number"]::-webkit-outer-spin-button,
  .stock input[type="number"]::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  .stock input[type="number"] {
    text-align: center;
    width: 3rem;
  }
`;
