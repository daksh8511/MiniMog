import React from "react";
import { IoIosArrowDown } from "react-icons/io";

import shopMenu from "/assets/ShopMenuAssets.jpg";
import styled from "styled-components";

const ShopMenu = () => {
  return (
    <Wrapper>
      <div className="group">
        <div className="box flex items-center gap-2 cursor-pointer justify-center mb-3 hover:border-b pb-2">
          <span>SHOP</span>{" "}
          <IoIosArrowDown className="transition-all ease-in-out duration-300" />
        </div>
        <div className="hidden group-hover:grid grid-cols-4 absolute left-0 top-25 p-5 w-full bg-white shadow-md">
          <div>
            <ul className="flex flex-col gap-3 *:cursor-pointer border-r border-gray-200 text-center">
              <li>Filter Left Side</li>
              <li>Filter Right Side</li>
              <li>Canvas Sidebar</li>
              <li>Hidden Sidebar</li>
              <li>Filter By Tags</li>
            </ul>
          </div>
          <div>
            <ul className="flex flex-col gap-3 *:cursor-pointer border-r border-gray-200 text-center">
              <li>Grid 2 Columns</li>
              <li>Grid 3 Columns</li>
              <li>Grid 4 Columns</li>
              <li>Grid 5 Columns</li>
              <li>List View</li>
            </ul>
          </div>
          <div>
            <ul className="flex flex-col gap-3 *:cursor-pointer border-r border-gray-200 text-center">
              <li>Pagination Page</li>
              <li>Load More Button</li>
              <li>Infinite Scrolling</li>
              <li>Full Width Layout</li>
              <li>Custom Content</li>
            </ul>
          </div>
          <div>
            <img className="mb-2" src={shopMenu} alt="" />
            <span>BEHIND THE SCENE</span>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default ShopMenu;

const Wrapper = styled.div`
  ul li {
    transition: all 0.2s ease-in-out;
    padding : 4px;
  }
  ul li:hover {
    background: #ccc;
    color: #fff;
  }
`;
