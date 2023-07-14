import React, { useContext } from "react";
import { AiFillHome, AiOutlineHome, AiOutlineClose } from "react-icons/ai";
import { BiUser, BiSolidUser, BiCart, BiSolidCartAlt } from "react-icons/bi";
import { RxHamburgerMenu } from "react-icons/rx";
import { SetContext } from "../../context/SetContext";
import { Actions } from "../../context/SetContext";

export const NavbarMobile = () => {
  const {
    data: { show, showMenu },
    dispatch,
  } = useContext(SetContext);
  return (
    <nav className="navbarMobile">
      <a href="#">
        <AiOutlineHome />
      </a>
      <a href="#">
        <BiUser />
      </a>
      <a
        onClick={() => dispatch({ type: Actions.showCart })}
        className="cartBtn"
        style={{ fontSize: "1.5rem" }}
        href="#"
      >
        <BiCart />
        <span
          style={{ fontSize: "10px", padding: "1px 4px" }}
          className={show ? "cartQuantity show" : "cartQuantity"}
        >
          0
        </span>
      </a>
      <button
        style={{
          background: "transparent",
          fontSize: "1.5rem",
          position: "relative",
        }}
        onClick={() => dispatch({ type: Actions.showDropdown })}
      >
        {showMenu ? <AiOutlineClose /> : <RxHamburgerMenu />}
        <ul className={`dropdownLinks ${showMenu ? "show" : ""}`}>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">Electronics</a>
          </li>
          <li>
            <a href="#">Clothing</a>
          </li>
          <li>
            <a href="#">Furniture</a>
          </li>
        </ul>
      </button>
    </nav>
  );
};
