import React from "react";
import le from "/assets/le.png";
import BlackButton from "../Header/Buttons/BlackButton";

const LeatherEssential = () => {
  return (
    <div className="block min-md:flex min-md:flex-row-reverse items-center gap-5 my-20">
      <img src={le} alt="" className="w-full mb-5 min-md:mb-0 min-md:w-1/2" />
      <div className="w-full min-md:w-1/2 text-center">
        <h2 className="text-6xl  leading-14 tracking-wide">
          LEATHER ESSENTIALS
        </h2>
        <p className="my-4 tracking-wide">
          There are literally thousands of watchmakers around the world, the
          goal at Minigear is to introduce the timepieces that are worthy of
          your attention and possess the quality.
        </p>
        <button>
          <BlackButton btnTitle={"SHOP NOW"} />
        </button>
      </div>
    </div>
  );
};

export default LeatherEssential;
