import React from "react";
import { Link } from "react-router-dom";
import Direction from "../Components/Direction/Direction";

const Wishlist = () => {

  return (
    <div className="p-4 py-20">
      <h2 className="text-center text-4xl mb-6">Wishlist</h2>
      <div>
        <Direction />
      </div>

      <div className="mt-6">
        <h2 className="text-center text-2xl">
          No products were added to the wishlist page.{" "}
          <Link to={'/'} className="border-b">Back to shopping</Link>
        </h2>
      </div>
    </div>
  );
};

export default Wishlist;
