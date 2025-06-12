import React, { useEffect, useRef, useState } from "react";
import BlackButton from "../Header/Buttons/BlackButton";

import { FaRegHeart } from "react-icons/fa6";
import { PiHandbagBold } from "react-icons/pi";
import { FaRegEye } from "react-icons/fa";

import watch from "/assets/watch.jpg";

import { IoClose } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { quickViewAction } from "../../reducers/QuickViewSlice";
import { Link } from "react-router-dom";

const TrendingNow = () => {
  const screenRef = useRef("");

  const [allProducts, setProducts] = useState([]);
  const fetchData = async () => {
    const response = await fetch(
      "http://127.0.0.1:4000/api/post-product/product-getting"
    );
    const final = await response.json();
    setProducts(final.products);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const quickview = useSelector((state) => {
    return state.QuickViewSlice;
  });
  const dispatch = useDispatch();

  const openQuickView = (data) => {
    document.body.style.overflowY = "hidden";
    screenRef.current.style.display = "block";
    const updated = data;
    dispatch(quickViewAction(updated));
  };

  const closeQuickView = () => {
    document.body.style.overflowY = "";
    screenRef.current.style.display = "none";
  };

  const filterLuxuryWatch = allProducts.filter(
    (watch) => watch.typeOfGood === "luxury"
  );

  return (
    <div className="relative">
      <h2 className="uppercase text-center mt-18 mb-15 text-4xl">
        trending now
      </h2>

      <div className="box grid grid-cols-1 gap-10 min-md:grid-cols-2 min-lg:grid-cols-6">
        {filterLuxuryWatch.length == 0
          ? null
          : filterLuxuryWatch.map((item, i) => {
              return (
                <div key={i} className="flex flex-col items-center">
                  <div className="relative group w-[200px] h-[250px]">
                    <img
                      src={item.product_images[0]}
                      className="w-full h-full object-cover rounded-md"
                      alt={item.product_name}
                    />

                    <div
                      className="absolute inset-0 bg-white bg-opacity-80 flex items-center justify-center gap-5 
                        opacity-0 translate-y-5 group-hover:opacity-100 group-hover:translate-y-0 
                        transition duration-300 ease-in-out rounded-md w-full"
                    >
                      <FaRegHeart size={22} />
                      <PiHandbagBold size={22} />
                      <FaRegEye onClick={() => openQuickView(item)} size={22} />
                    </div>
                  </div>

                  <Link to={`/product_view/${item._id}`}>
                    <h3 className="line-clamp-2 my-3">{item.product_name}</h3>
                    <h4 className="flex me-auto">₹{item.price}</h4>
                  </Link>
                </div>
              );
            })}
      </div>

      <button className="flex justify-center mt-10 w-full">
        <BlackButton btnTitle={"SHOP NOW"} />
      </button>

      <div
        ref={screenRef}
        className="absolute hidden -top-0 -left-8 bg-[#70707099] w-screen h-screen"
      >
        <div className="w-2/4 h-2.5/4 bg-white transform translate-y-15 justify-center p-5 m-auto">
          <IoClose
            size={35}
            onClick={closeQuickView}
            className="flex ms-auto p-1"
          />
          <div className="flex items-center justify-between">
            <div className="w-1/3">
              <img src={quickview.product_images} alt="" />
            </div>
            <div className="w-1/2">
              <h2 className="text-3xl mb-2 line-clamp-2">
                {quickview.product_name}
              </h2>
              <h4 className="mb-2">₹{quickview.price}</h4>
              <p className="line-clamp-3">{quickview.description}</p>
              <button className="block my-2">View Details</button>
              <button className="bg-black text-white p-2">Add To Cart</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrendingNow;
