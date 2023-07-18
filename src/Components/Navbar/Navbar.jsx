import React, { useRef, useState } from "react";
import Logo from "/logo.png";
import { AiOutlineShoppingCart, AiOutlineSearch } from "react-icons/ai";
import { Resize } from "../../context/Resize";
import Scroll from "../../context/Scroll";
import { useSelector } from "react-redux";
import { searchProducts, showFullInput } from "../../ReduxReducers/Slice";
import { useDispatch } from "react-redux";
import { Link, useLocation } from "react-router-dom";

export const Navbar = () => {
  const cartLength = useSelector((data) => data.allFeatures.cart);
  const products = useSelector((data) => data.allFeatures.products);
  const showInput = useSelector((data) => data.showAllComps.showInput);
  const [searchInput, setSearchInput] = useState("");

  const searchInputRef = useRef(null);

  const location = useLocation();

  const dispatch = useDispatch();
  const size = Resize();
  const scroll = Scroll();

  return (
    <header
      className={`headerPc ${
        scroll > 70 && location.pathname === "/" ? "glued" : ""
      }`}
    >
      <img
        style={{
          width: showInput && size <= 750 ? "0px" : "150px",
          height: showInput && size <= 750 ? "0px" : "40px",
        }}
        src={Logo}
        className="logo--img"
        alt="Shopsy"
      />
      <nav
        style={{ display: showInput && size > 750 && "none" }}
        className="navbarPc"
      >
        <ul className="links">
          <li>
            <Link to="/">Home</Link>
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
      <div className={`searchContainer ${showInput ? "fullWidth" : ""}`}>
        <input
          type="text"
          ref={searchInputRef}
          placeholder="Enter your search"
          onBlur={() => dispatch(showFullInput())}
          onKeyDown={(e) =>
            e.keyCode === 13 && dispatch(searchProducts(searchInput))
          }
          onChange={(e) => setSearchInput(e.target.value)}
          className={`searchInput ${showInput ? "searchShow" : ""}`}
        />
        {size <= 750 && location.pathname === "/" && (
          <button
            onClick={() => {
              dispatch(showFullInput());
              !showInput && searchInputRef.current.focus();
            }}
            className="btn searchBtn"
          >
            <AiOutlineSearch />
          </button>
        )}
      </div>
      <div className="additional--btns">
        {size > 750 && location.pathname === "/" && (
          <button
            onClick={() => {
              !showInput && searchInputRef.current.focus();
              dispatch(showFullInput());
            }}
            className="btn searchBtn"
          >
            <AiOutlineSearch />
          </button>
        )}
        <Link className="btn cartBtn" to="/cart">
          <AiOutlineShoppingCart />
          <span
            className={
              cartLength.length > 0 ? "cartQuantity show" : "cartQuantity"
            }
          >
            {cartLength.length}
          </span>
        </Link>
        <span className="username">Hi, Username</span>
        <button className="btn logoutBtn">Logout</button>
      </div>
    </header>
  );
};
