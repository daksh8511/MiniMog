import { FaRegUser } from "react-icons/fa6";
import { FaRegHeart } from "react-icons/fa6";
import { PiHandbagBold } from "react-icons/pi";
import { RxHamburgerMenu } from "react-icons/rx";
import { Assets } from "../../../public/icons/Icons";
import {useDispatch} from 'react-redux'
import {setToggle} from '../../reducers/MenuSlices'
import { useNavigate } from "react-router-dom";

const ResponsiveMenu = () => {

  const navigation = useNavigate()

  const dispatch = useDispatch()


  const handleSidebar = () => {
    dispatch(setToggle(true))
  }

  return (
    <div className="flex min-md:hidden items-center justify-between">
      <div className="sidebar">
        <RxHamburgerMenu onClick={handleSidebar} />
      </div>
      <div className="logo w-25">
        <img className="w-full" src={Assets.logo} alt="" />
      </div>
      <div className="flex gap-5 items-center *:text-xl">
        <FaRegUser onClick={() => navigation('/account')} />
        <FaRegHeart onClick={() => navigation('/wishlist')} />
        <div className="relative">
          <span className="absolute -right-3 -top-3 bg-black h-5 w-5 rounded-full text-white text-center text-sm">
            1
          </span>
          <PiHandbagBold />
        </div>
      </div>
    </div>
  );
};

export default ResponsiveMenu;
