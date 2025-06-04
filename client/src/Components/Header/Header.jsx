import React from "react";

import ResponsiveMenu from "./ResponsiveMenu";
import RegularMenu from "./RegularMenu";
import Sidebar from "./Sidebar";
import { useLocation } from "react-router-dom";

const Header = () => {

  const location = useLocation()

  return (
    <nav className={location.pathname == '/adding' ? 'p-4 relative hidden' : 'p-4 relative'}>
      <div className="top-header">
        {/* while desktop screen */}
        <RegularMenu />

        {/* in responsive screen */}
        <div>
          <ResponsiveMenu />
        </div>
        <Sidebar />
      </div>
    </nav>
  );
};

export default Header;
