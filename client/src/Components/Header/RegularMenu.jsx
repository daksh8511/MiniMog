import React from "react";
import { IoSearch } from "react-icons/io5";
import { FaRegUser } from "react-icons/fa6";
import { FaRegHeart } from "react-icons/fa6";
import { PiHandbagBold } from "react-icons/pi";
import { Assets } from "../../../public/icons/Icons";

import styled from "styled-components";
import HomeMenu from "../Menu/HomeMenu";
import ShopMenu from "../Menu/ShopMenu";
import ProductsMenu from "../Menu/ProductsMenu";

const RegularMenu = () => {
  return (
    <Wrapper className="hidden min-md:block">
      <div className="flex items-center justify-between">
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
          <FaRegUser />
          <FaRegHeart />
          <div className="relative">
            <span className="absolute -right-3 -top-3 bg-black h-5 w-5 rounded-full text-white text-center text-sm">
              1
            </span>
            <PiHandbagBold />
          </div>
        </div>
      </div>

      <div className="navbar mt-8">
        <div className="flex justify-center gap-10">
          <HomeMenu />
          <ShopMenu />
          <ProductsMenu />
          <HomeMenu />
          <HomeMenu />
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
`;
