import React from "react";
import { IoClose } from "react-icons/io5";
import BlackButton from "./Buttons/BlackButton";
import WhiteButton from "./Buttons/WhiteButton";
import { styled } from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { setToggle } from "../../reducers/MenuSlices";

const Sidebar = () => {
  const selector = useSelector((state) => state.toggleSlice);
  const dispatch = useDispatch();

  const closeSidebar = () => {
    dispatch(setToggle(false));
  };

  return (
    <Wrapper className={`sidebar ${selector ? "open" : ""}`}>
      <div>
        <IoClose onClick={closeSidebar} size={30} className="cursor-pointer" />
      </div>
      <div className="flex flex-col h-full py-4">
        <ul className="flex flex-col gap-5 *:cursor-pointer">
          <li>Home</li>
          <li>Shop</li>
          <li>Products</li>
          <li>Pages</li>
          <li>FoxKit</li>
        </ul>

        <div className="flex flex-col mt-auto">
          <h2 className="mb-2 text-2xl">My Account</h2>
          <BlackButton btnTitle="Log In" />
          <WhiteButton btnTitle="Sign Up" />
        </div>
      </div>
    </Wrapper>
  );
};

export default Sidebar;

const Wrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 220px;
  height: 100vh;
  background-color: white;
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.2);
  padding: 20px;
  z-index: 50;

  transform: translateX(-100%);
  transition: transform 0.3s ease-in-out;

  &.open {
    transform: translateX(0);
  }

  ul li {
    display: inline-block;
    position: relative;
  }

  ul li::after {
    content: "";
    position: absolute;
    bottom: -2px;
    left: 0;
    height: 1px;
    width: 100%;
    background-color: #000;
  }
`;
