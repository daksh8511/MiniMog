import React from "react";
import { IoIosArrowDown } from "react-icons/io";
import styled from "styled-components";

const PageMenu = () => {
  return (
    <Wrapper className="relative inline-block">
      <div className="group">
        <div className="flex items-center gap-2 cursor-pointer hover:border-b pb-2">
          <span>PAGE</span>
          <IoIosArrowDown />
        </div>

        <div className="absolute top-4 left-0 hidden group-hover:flex flex-col gap-2 bg-white shadow-xl mt-2 w-56 z-50">
          <div className="relative group/blog">
            <div className="flex items-center justify-between cursor-pointer p-2">
              <span>Blog</span>
              <IoIosArrowDown className="transform rotate-270" />
            </div>

            <div className="absolute -top-3 -right-40 ml-2 hidden group-hover/blog:block bg-white shadow-xl w-40 z-50">
              <ul>
                <li>Grid Layout</li>
                <li>List View</li>
                <li>Single Post 1</li>
                <li>Single Post 2</li>
              </ul>
            </div>
          </div>

          <div className="hover:bg-[#ccc] hover:text-white p-2 cursor-pointer">About Us</div>
          <div className="hover:bg-[#ccc] hover:text-white p-2 cursor-pointer">Contact Us</div>
          <div className="hover:bg-[#ccc] hover:text-white p-2 cursor-pointer">FAQs</div>
          <div className="hover:bg-[#ccc] hover:text-white p-2 cursor-pointer">Find A Store</div>
        </div>
      </div>
    </Wrapper>
  );
};

export default PageMenu;

const Wrapper = styled.div`
  ul li {
    padding: 4px;
    transition: all 0.2s ease-in-out;
    cursor: pointer;
  }
  ul li:hover {
    background-color: #ccc;
    color: white;
  }
`;
