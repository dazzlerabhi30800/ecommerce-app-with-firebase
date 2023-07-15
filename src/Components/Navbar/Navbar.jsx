import React, { useContext, useState, useEffect } from "react";
import Logo from "/logo.png";
import { AiOutlineShoppingCart, AiOutlineSearch } from "react-icons/ai";
import { SetContext } from "../../context/SetContext";
import { Actions } from "../../context/SetContext";
import { Resize } from "../../context/Resize";
import Scroll from "../../context/Scroll";

export const Navbar = () => {
  const { data, dispatch } = useContext(SetContext);
  const size = Resize();
  const scroll = Scroll();

  return (
    <header className={`headerPc ${scroll > 60 ? "glued" : ""}`}>
      <img
        style={{
          width: data.showInput && size <= 750 ? "0px" : "150px",
          height: data.showInput && size <= 750 ? "0px" : "40px",
        }}
        src={Logo}
        className="logo--img"
        alt="Shopsy"
      />
      <nav
        style={{ display: data.showInput && size > 750 && "none" }}
        className="navbarPc"
      >
        <ul className="links">
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
      </nav>
      <div className={`searchContainer ${data.showInput ? "fullWidth" : ""}`}>
        <input
          type="text"
          placeholder="Enter your search"
          className={`searchInput ${data.showInput ? "searchShow" : ""}`}
        />
        {size <= 750 && (
          <button
            onClick={() => dispatch({ type: Actions.showSearchInput })}
            className="btn searchBtn"
          >
            <AiOutlineSearch />
          </button>
        )}
      </div>
      <div className="additional--btns">
        {size > 750 && (
          <button
            onClick={() => dispatch({ type: Actions.showSearchInput })}
            className="btn searchBtn"
          >
            <AiOutlineSearch />
          </button>
        )}
        <a
          className="btn cartBtn"
          href="#"
          onClick={() => dispatch({ type: Actions.showCart })}
        >
          <AiOutlineShoppingCart />
          <span className={data.show ? "cartQuantity show" : "cartQuantity"}>
            0
          </span>
        </a>
        <span className="username">Hi, Username</span>
        <button className="btn logoutBtn">Logout</button>
      </div>
      {/* {size <= 700 && <span className="username">Hi, Username</span>} */}
    </header>
  );
};
