import React from "react";

import smart_watch from "/assets/smart_watch.jpg";
import luxury_watch from "/assets/luxury_watch.jpg";
import sport_watch from "/assets/sport_watch.jpg";

const ShopByCategory = () => {
  return (
    <div>
      <h2 className="uppercase text-center my-15 text-4xl">shop by category</h2>
      <div className="min-md:flex min-md:flex-row min-md:gap-4 flex flex-col gap-10 justify-between">
        <div className="group">
          <div className="overflow-hidden">
            <img
              className="group-hover:scale-[1.2] duration-150 w-full"
              src={smart_watch}
              alt="Smart Watch"
            />
          </div>
          <h3 className="mt-3 text-5xl min-md:text-3xl">Smart Watch</h3>
        </div>
        <div className="group">
          <div className="overflow-hidden">
            <img
              className="group-hover:scale-[1.2] duration-150 w-full"
              src={luxury_watch}
              alt="Luxury Watch"
            />
          </div>
          <h3 className="mt-3 text-5xl min-md:text-3xl">Luxury Watch</h3>
        </div>
        <div className="group">
          <div className="overflow-hidden">
            <img
              src={sport_watch}
              alt="Sport Watch"
              className="group-hover:scale-[1.2] duration-150 w-full"
            />
          </div>
          <h3 className="mt-3 text-5xl min-md:text-3xl">Sport Watch</h3>
        </div>
      </div>
    </div>
  );
};

export default ShopByCategory;
