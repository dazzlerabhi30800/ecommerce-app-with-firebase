import React from "react";
import { AiFillHome, AiOutlineHome } from "react-icons/ai";
import { BiUser, BiSolidUser, BiCart, BiSolidCartAlt } from "react-icons/bi";

export const NavbarMobile = () => {
  return (
    <nav className="navbarMobile">
      <a href="#">
        <AiOutlineHome />
      </a>
      <a href="#">
        <BiUser />
      </a>
      <a href="#">
        <BiCart />
      </a>
    </nav>
  );
};
