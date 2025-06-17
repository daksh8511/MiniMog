import React, { useRef, useState } from "react";
import { IoSearch } from "react-icons/io5";
import { FaRegUser } from "react-icons/fa6";
import { FaRegHeart } from "react-icons/fa6";
import { PiHandbagBold } from "react-icons/pi";
import { Assets } from "../../../public/icons/Icons";

import styled from "styled-components";
import HomeMenu from "../Menu/HomeMenu";
import ShopMenu from "../Menu/ShopMenu";
import ProductsMenu from "../Menu/ProductsMenu";
import PageMenu from "../Menu/PageMenu";
import FoxkitMenu from "../Menu/FoxkitMenu";

import { FaPlus, FaMinus } from "react-icons/fa6";
import { IoClose } from "react-icons/io5";

import watch from "/assets/watch.jpg";
import { Link, useNavigate } from "react-router-dom";

const RegularMenu = () => {
  const BgRef = useRef('')
  const [isCartBarOpen, setCartBar] = useState(false);
  const navigation = useNavigate()

  const [myemail, setEmail] = useState('')

  const isLogin = JSON.parse(localStorage.getItem('login'))

  console.log(isLogin == null) 

  const openCartBar = () => {
    setCartBar(true);
    BgRef.current.style.background = "#37373780"
    BgRef.current.style.height = "100vh";
  };

  const closeCartBar = () => {
    setCartBar(false);
    BgRef.current.style.background = ""
    BgRef.current.style.height = "0vh";
  };

  return (
    <Wrapper className="hidden min-md:block">
      <div className="flex items-center justify-between relative">
        <div className="searchbar flex items-center gap-3">
          <IoSearch />
          <input
            type="text"
            placeholder="Search Products"
            className="outline-0"
          />
        </div>
        <div className="logo w-25">
          <img className="w-full" src={Assets.logo} alt="" />
        </div>
        <div className="flex gap-5 items-center *:text-xl">
          {isLogin == null ? 
          <FaRegUser className="cursor-pointer" onClick={() => navigation('/account')} />
          :
          <Link to={`user/${isLogin}`}>{isLogin}</Link>
          }
          <FaRegHeart className="cursor-pointer" onClick={() => navigation('/wishlist')} />
          <div className="relative">
            <span className="absolute -right-3 -top-3 bg-black h-5 w-5 rounded-full text-white text-center text-sm">
              1
            </span>
            <PiHandbagBold className="cursor-pointer" onClick={openCartBar} />
          </div>
        </div>
      </div>

      <div className="navbar mt-8">
        <div className="flex justify-center gap-10">
          <HomeMenu />
          <ShopMenu />
          <ProductsMenu />
          <PageMenu />
          <FoxkitMenu />
        </div>
      </div>

      {/* side-cart */}
      <div ref={BgRef} className="absolute top-0 left-0 w-full">
        <div
          className={
            isCartBarOpen
              ? "fixed z-10 flex flex-col bg-white right-0 top-0 shadow-2xl p-3 w-xl h-screen duration-200 ease-in-out"
              : "fixed z-10 hidden bg-white right-0 top-0 shadow-2xl p-3 w-xl h-screen duration-200 ease-in-out"
          }
        >
          <div className="h-[80%]">
            <div className="flex justify-between items-center">
              <h2 className="text-3xl">Shopping Cart</h2>
              <IoClose size={30} onClick={closeCartBar} />
            </div>
            <div className="mt-5 space-y-3 h-[83%] overflow-y-scroll">
              <div className="flex gap-5">
                <div className="w-[110px] border border-gray-300">
                  <img src={watch} className="w-full" alt="" />
                </div>
                <div className="flex flex-col gap-3">
                  <h4>Classic Gold Link</h4>
                  <h4>$175.00</h4>
                  <div className="flex items-center gap-4">
                    <div className="flex items-center bg-[#eee] justify-between p-2 rounded gap-3">
                      <FaMinus />
                      <input type="number"  className="myinput w-5" />
                      <FaPlus />
                    </div>
                    <div>
                      <button className="relative before:absolute before:bottom-0 before:left-0 before:w-0 before:border before:duration-200 hover:before:w-full">
                        remove
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col mt-auto">
            <div className="flex justify-between mb-3">
              <h3 className="text-2xl">Subtotal</h3>
              <h3 className="text-2xl">$175.00</h3>
            </div>
            <div className="flex flex-col">
              <button className="bg-black text-white p-3">Check Out</button>
              <button className="bg-white text-black p-3">View Cart</button>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default RegularMenu;

const Wrapper = styled.div`
  .navbar .box:hover svg {
    transform: rotateX(180deg);
  }

  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`;
