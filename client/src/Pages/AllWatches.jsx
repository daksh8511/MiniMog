import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";

import { HiMiniBars2, HiMiniBars3, HiMiniBars4 } from "react-icons/hi2";
import styled from "styled-components";
import { Link } from "react-router-dom";

const AllWatches = () => {
  const [allWatches, setAllWatches] = useState([]);
  const [value, setValue] = useState([0, 200]);

  const [activeBar, setActiveBar] = useState("twobar");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const fetchData = async () => {
    const response = await fetch(
      "http://127.0.0.1:4000/api/post-product/product-getting"
    );
    const final = await response.json();
    setAllWatches(final.products);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const getIdealFor = allWatches.map((ideadFor) => ideadFor.ideal_for);

  const filteredIdealfor = getIdealFor.filter((idealFor, index) => {
    return getIdealFor.indexOf(idealFor) === index;
  });

  if (allWatches.length == 0) {
    return "LOADING....";
  }

  return (
    <div className="p-4 flex gap-2">
      <div className="w-1/4">
        {/* PRICE RANGE */}
        <div>
          <h2>PRICE</h2>
          <Box sx={{ width: 300 }}>
            <Slider
              value={value}
              onChange={handleChange}
              valueLabelDisplay="auto"
              min={0}
              max={200}
            />
          </Box>
        </div>

        {/* IDEAL FOR */}
        <div className="mt-3">
          <h2 className="mb-1">IDEAL FOR</h2>
          {filteredIdealfor.map((ideals, i) => {
            return (
              <div className="flex gap-1">
                <input type="checkbox" id="checkbox" />
                <label htmlFor="checkbox">{ideals}</label>
              </div>
            );
          })}
        </div>
      </div>
      <div className="w-3/4">
        <div className="flex justify-between items-center">
          <div className="flex">
            <h2>Price : </h2>
            <select name="" id="">
              <option value="Low To High">Low To High</option>
              <option value="High To Low">High To Low</option>
            </select>
          </div>
          <div className="flex gap-6">
            <HiMiniBars2
              onClick={() => setActiveBar("twobar")}
              className={`${
                activeBar == "twobar"
                  ? "transform rotate-z-[90deg] bg-black text-white rounded p-2"
                  : "transform rotate-z-[90deg] hover:bg-black hover:text-white p-2 bg-gray-200 rounded"
              }`}
              size={30}
            />
            <HiMiniBars3
              onClick={() => setActiveBar("threebar")}
              className={`${
                activeBar == "threebar"
                  ? "transform rotate-z-[90deg] bg-black text-white rounded p-2"
                  : "transform rotate-z-[90deg] hover:bg-black hover:text-white p-2 bg-gray-200 rounded"
              }`}
              size={30}
            />
            <HiMiniBars4
              onClick={() => setActiveBar("fourbar")}
              className={`${
                activeBar == "fourbar"
                  ? "transform rotate-z-[90deg] bg-black text-white rounded p-2"
                  : "transform rotate-z-[90deg] hover:bg-black hover:text-white p-2 bg-gray-200 rounded"
              }`}
              size={30}
            />
          </div>
        </div>

        <div className="grid grid-cols-2 mt-10 gap-10">
          {allWatches.map((watches, i) => {
            return (
              <Link
                to={`/product_view/${watches._id}`}
                className="text-center duration-200 hover:shadow-xl/30 rounded-2xl"
              >
                <img
                  className="w-1/5 m-auto"
                  src={watches.product_images[0]}
                  alt=""
                />
                <h2 className="line-clamp-1 w-50 text-center m-auto">
                  {watches.product_name}
                </h2>
                <h3>₹{watches.price}</h3>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default AllWatches;
