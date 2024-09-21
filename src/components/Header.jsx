import React, { useState } from "react";
import logo from "../assets/images/logo.png";
import {
  HiHome,
  HiMagnifyingGlass,
  HiStar,
  HiPlayCircle,
  HiTv,
} from "react-icons/hi2";
import { HiPlus, HiDotsVertical } from "react-icons/hi";
import HeaderItems from "./HeaderItems";

function Header() {
  const menus = [
    {
      name: "HOME",
      icon: HiHome,
    },
    {
      name: "SEARCH",
      icon: HiMagnifyingGlass,
    },
    {
      name: "WATCH LIST",
      icon: HiPlus,
    },
    {
      name: "ORIGINALS",
      icon: HiStar,
    },
    {
      name: "MOVIES",
      icon: HiPlayCircle,
    },
    {
      name: "SERIES",
      icon: HiTv,
    },
  ];
  const [toggle,setToggle] = useState(false)
  return (
    <div className="flex items-center gap-8 justify-between w-screen p-5 md:pr-8">
      <div className="flex items-center gap-8">
        <img src={logo} className="w-[80px] md:w-[115px] object-cover" alt="" />
        <div className="hidden md:flex gap-8">
          {menus.map((menu) => (
            <HeaderItems name={menu.name} Icon={menu.icon} />
          ))}
        </div>

        <div className="flex md:hidden gap-5">
          {menus.map(
            (menu, index) =>
              index < 2 && <HeaderItems name={""} Icon={menu.icon} />
          )}
        </div>
        <div className="md:hidden" onClick={() => setToggle(!toggle)}>
          <HeaderItems name={""} Icon={HiDotsVertical} />
          {toggle && 
           <div className="absolute my-3 bg-[#121212] border-[1px] p-3 border-gray-700 rounded-md px-5">
           {menus.map(
             (menu, index) =>
               index > 2 && <HeaderItems name={menu.name} Icon={menu.icon} />
           )}
           </div>
          }
         
        </div>
      </div>
      <div>
        <img
          src="https://img.freepik.com/premium-photo/cartoonish-3d-animation-boy-glasses-with-blue-hoodie-orange-shirt_899449-25777.jpg"
          alt="profilePic"
          className="w-[50px] rounded-full"
        />
      </div>
    </div>
  );
}

export default Header;
