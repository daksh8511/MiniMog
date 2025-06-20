import React, { useEffect, useRef, useState } from "react";
import { IoSearch, IoClose } from "react-icons/io5";
import { FaRegUser, FaRegHeart, FaPlus, FaMinus } from "react-icons/fa6";
import { PiHandbagBold } from "react-icons/pi";
import { Assets } from "../../../public/icons/Icons";
import styled from "styled-components";
import HomeMenu from "../Menu/HomeMenu";
import ShopMenu from "../Menu/ShopMenu";
import ProductsMenu from "../Menu/ProductsMenu";
import PageMenu from "../Menu/PageMenu";
import FoxkitMenu from "../Menu/FoxkitMenu";
import { Link, useNavigate } from "react-router-dom";

const RegularMenu = () => {
  const BgRef = useRef("");
  const [isCartBarOpen, setCartBar] = useState(false);
  const navigation = useNavigate();

  const isLogin = JSON.parse(localStorage.getItem("login"));

  const [user, setUser] = useState([]);
  const [allProducts, setAllProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [loading, setLoading] = useState(true);

  const openCartBar = () => {
    setCartBar(true);
    BgRef.current.style.background = "#37373780";
    BgRef.current.style.height = "100vh";
  };

  const closeCartBar = () => {
    setCartBar(false);
    BgRef.current.style.background = "";
    BgRef.current.style.height = "0vh";
  };

  const firstLogin = () => {
    setCartBar(false);
    BgRef.current.style.background = "";
    BgRef.current.style.height = "0vh";
    navigation("/account");
  };

  const handleCartButton = () => {
    setCartBar(false);
    BgRef.current.style.background = "";
    BgRef.current.style.height = "0vh";
  }

  const fetchUser = async () => {
    const response = await fetch(
      "http://127.0.0.1:4000/api/users/getPerson?getEmail=daxsathwara102@gmail.com"
    );
    const final = await response.json();
    setUser(final.data);
  };

  const fetchProducts = async () => {
    const response = await fetch(
      "http://127.0.0.1:4000/api/post-product/product-getting"
    );
    const final = await response.json();
    setAllProducts(final.products);
  };

  const removeFromCart = async(product) => {
    const getEmail = JSON.parse(localStorage.getItem('login'))
    const response = await fetch('http://127.0.0.1:4000/api/cart/removeFromCart',{
      method : "POST",
      headers : {
        "Content-Type" : 'application/json'
      },
      body : JSON.stringify({
        email : getEmail,
        product : product._id
      })
    })

    const data = await response.json()
    console.log(data)
  }

  useEffect(() => {
    const fetchData = async () => {
      await fetchUser();
      await fetchProducts();
      setLoading(false);
    };
    fetchData();
  }, []);


  const finded = allProducts.filter((products) => user[0].cart.includes(products._id))

  const subtotal = finded.reduce((acc, cv) => acc + cv.price, 0)


  useEffect(() => {
    if (user.length === 0 || allProducts.length === 0) return;
    const filtered = allProducts.filter((product) =>
      user[0].cart.includes(product._id)
    );
    setCart(filtered);
  }, [user, allProducts]);


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
          {isLogin == null ? (
            <FaRegUser
              className="cursor-pointer"
              onClick={() => navigation("/account")}
            />
          ) : (
            <Link to={`user/${isLogin}`}>{isLogin}</Link>
          )}
          <FaRegHeart
            className="cursor-pointer"
            onClick={() => navigation("/wishlist")}
          />
          <div className="relative">
            <span className="absolute -right-3 -top-3 bg-black h-5 w-5 rounded-full text-white text-center text-sm">
              {cart.length}
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
              {loading ? (
                <h2 className="text-center mt-10 text-xl text-gray-600">
                  Loading cart...
                </h2>
              ) : isLogin ? (
                cart.length > 0 ? (
                  cart.map((item, index) => (
                    <div key={index} className="flex gap-5 border-b pb-3">
                      <div className="w-[110px] border border-gray-300">
                        <img
                          src={item.product_images[0]}
                          className="w-full p-4"
                          alt={item.name}
                        />
                      </div>
                      <div className="flex flex-col gap-3">
                        <h4>{item.product_name}</h4>
                        <h4>${item.price}</h4>

                        <button onClick={() => removeFromCart(item)} className="relative w-10 text-left before:absolute before:bottom-0 before:left-0 before:w-0 before:border before:duration-200 hover:before:w-full">
                          remove
                        </button>
                      </div>
                    </div>
                  ))
                ) : (
                  <h2 className="text-center mt-10 text-xl text-gray-600">
                    Your cart is empty.
                  </h2>
                )
              ) : (
                <h2
                  className="text-center mt-10 text-3xl cursor-pointer"
                  onClick={firstLogin}
                >
                  Login First
                </h2>
              )}
            </div>
          </div>
          {isLogin && cart.length > 0 && (
            <div className="flex flex-col mt-auto">
              <div className="flex justify-between mb-3">
                <h3 className="text-2xl">Subtotal</h3>
                <h3 className="text-2xl">${subtotal}</h3>
              </div>
              <div className="flex flex-col">
                <Link className="bg-black text-white p-3 text-center">Check Out</Link>
                <Link to={'/cart'} onClick={handleCartButton} className="bg-white text-black p-3 text-center">View Cart</Link>
              </div>
            </div>
          )}
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
