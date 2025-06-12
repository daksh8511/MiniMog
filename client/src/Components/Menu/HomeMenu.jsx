import React from "react";

import { IoIosArrowDown } from "react-icons/io";
import styled from "styled-components";

const HomeMenu = () => {
  return (
    <Wrapper>
      <div className="group">
        <div className="box flex items-center gap-2 cursor-pointer justify-center mb-3 hover:border-b pb-2">
          <span>HOME</span>{" "}
          <IoIosArrowDown className="transition-all ease-in-out duration-300" />
        </div>
        <div className="hidden group-hover:grid grid-cols-5 absolute left-0 top-25 p-5 w-full bg-white shadow-md">
          <div>
            <ul className="flex flex-col gap-3 *:cursor-pointer border-r border-gray-200 text-center">
              <li>Main Home</li>
              <li>Boutique</li>
              <li>Tailor</li>
              <li>Luxe</li>
              <li>Bold</li>
            </ul>
          </div>
          <div>
            <ul className="flex flex-col gap-3 *:cursor-pointer border-r border-gray-200 text-center">
              <li>Fast Fashion</li>
              <li>Glamour</li>
              <li>Chic</li>
              <li>Instyle</li>
              <li>Vogue</li>
              <li>Modern Day</li>
            </ul>
          </div>
          <div>
            <ul className="flex flex-col gap-3 *:cursor-pointer border-r border-gray-200 text-center">
              <li>Watch</li>
              <li>Bag</li>
              <li>Hat</li>
              <li>Glasses</li>
            </ul>
          </div>
          <div>
            <ul className="flex flex-col gap-3 *:cursor-pointer border-r border-gray-200 text-center">
              <li>Gym</li>
              <li>Soap</li>
              <li>Camping</li>
              <li>Ceramic</li>
              <li>Xmas-Drink</li>
            </ul>
          </div>
          <div>
            <ul className="flex flex-col gap-3 *:cursor-pointer border-r border-gray-200 text-center">
              <li>Skincare</li>
              <li>Nail Polish</li>
              <li>Organic</li>
              <li>Pet</li>
              <li>Postcard</li>
              <li>Mirror</li>
              <li>Case Phone</li>
            </ul>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default HomeMenu;

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
