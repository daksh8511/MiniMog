import React from "react";

import { IoIosArrowDown } from "react-icons/io";
import styled from "styled-components";

import foxkit_banner from '/assets/fixkit_banner.jpg'

const FoxkitMenu = () => {
  return (
    <Wrapper>
      <div className="group">
        <div className="box flex items-center gap-2 cursor-pointer justify-center mb-3 hover:border-b pb-2">
          <span>FOXKIT</span>{" "}
          <IoIosArrowDown className="transition-all ease-in-out duration-300" />
        </div>
        <div className="hidden group-hover:grid grid-cols-5 absolute left-0 top-25 p-5 w-full bg-white shadow-md">
          <div>
            <ul className="flex flex-col gap-3 *:cursor-pointer border-r border-gray-200 text-center">
              <li>Product Budle Layout 1</li>
              <li>Product Budle Layout 2</li>
              <li>Volume Discount</li>
              <li>Pre-Purchase</li>
            </ul>
          </div>
          <div>
            <ul className="flex flex-col gap-3 *:cursor-pointer border-r border-gray-200 text-center">
              <li>Offers</li>
              <li>In Cart Offers</li>
              <li>Back in Stocks</li>
              <li>Pre-order Products</li>
              <li>Size-Chart</li>
            </ul>
          </div>
          <div>
            <ul className="flex flex-col gap-3 *:cursor-pointer border-r border-gray-200 text-center">
              <li>Varient Group Images</li>
              <li>Cart Countdown</li>
              <li>Lucky Wheel</li>
              <li>Popup</li>
            </ul>
          </div>
          <div>
            <ul className="flex flex-col gap-3 *:cursor-pointer border-r border-gray-200 text-center">
              <li>Sale Notification</li>
              <li>Stock Countdown</li>
              <li>Countdown timer layout 1</li>
              <li>Countdown timer layout 2</li>
            </ul>
          </div>
          <div className="p-4">
            <img src={foxkit_banner} alt="" />
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default FoxkitMenu;

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
