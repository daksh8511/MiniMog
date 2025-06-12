import React from "react";
import styled from "styled-components";

const Newslatter = () => {
  return (
    <div className="mt-15 bg-black text-white text-center p-4 min-md:p-20">
      <h2 className="mb-10 text-4xl">JOIN THE CORE CLUB</h2>
      <div className="border-b w-full min-md:w-2xs m-auto flex">
        <input type="text" placeholder="Enter your email address" className="border-0 outline-0 w-full" />
        <button>Subscribe</button>
      </div>
    </div>
  );
};

export default Newslatter;

