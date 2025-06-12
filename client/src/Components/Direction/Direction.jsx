import React from "react";
import { Link, useLocation } from "react-router-dom";

import { IoIosArrowForward } from "react-icons/io";

const Direction = () => {
    const getquery = useLocation().pathname.slice(1)
  return (
    <div className="flex gap-4 items-center justify-center">
      <Link to={"/"} className="hover:text-gray-400">
        Home
      </Link>
      <IoIosArrowForward />
      <h3 className="capitalize">{getquery}</h3>
    </div>
  );
};

export default Direction;
