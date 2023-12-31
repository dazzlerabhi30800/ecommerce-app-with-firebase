import React, { useContext, useRef, useState } from "react";
import Logo from "/logo.png";
import {
  AiOutlineShoppingCart,
  AiOutlineSearch,
  AiOutlineLineHeight,
} from "react-icons/ai";
import { Resize } from "../../context/Resize";
import Scroll from "../../context/Scroll";
import { useSelector } from "react-redux";
import {
  disableFullInput,
  resetCart,
  searchProducts,
  showFullInput,
} from "../../ReduxReducers/Slice";
import { useDispatch } from "react-redux";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/SetContext";
import { auth } from "../../context/FirebaseConfig";
import { signOut } from "firebase/auth";

export const Navbar = () => {
  // "hello world"

  const cartLength = useSelector((data) => data.allFeatures.cart);
  const showInput = useSelector((data) => data.showAllComps.showInput);
  const [isBtn, setIsBtn] = useState(false);
  // const [searchInput, setSearchInput] = useState("");

  const searchInputRef = useRef(null);

  // current User
  const { currentUser, searchInput, setSearchInput } = useContext(AuthContext);

  const location = useLocation();
  const navigate = useNavigate();

  const dispatch = useDispatch();
  const size = Resize();
  const scroll = Scroll();
  // console.log(showInput);

  const closeSearchBar = (e) => {
    e.preventDefault();
    const path = e.composedPath();
    if (path.some((el) => el.id === "searchBtn--mobile")) {
      setIsBtn(true);
      document.removeEventListener("click", closeSearchBar);
    } else if (path.some((el) => el.id === "searchBtn--pc")) {
      setIsBtn(true);
      document.removeEventListener("click", closeSearchBar);
    } else {
      setIsBtn(false);
      dispatch(disableFullInput());
    }
  };

  const handleBlur = () => {
    document.addEventListener("click", closeSearchBar);
  };

  return (
    <header className="headerPc">
      <Link to="/">
        <img
          style={{
            width: showInput && size <= 750 ? "0px" : "150px",
            height: showInput && size <= 750 ? "0px" : "40px",
          }}
          src={Logo}
          className="logo--img"
          alt="Shopsy"
        />
      </Link>
      <div className={`searchContainer ${showInput ? "fullWidth" : ""}`}>
        <label style={{ display: "none" }} htmlFor="searchInput">
          Search Input
        </label>
        <input
          name="searchInput"
          type="text"
          ref={searchInputRef}
          placeholder="Enter your search"
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
          onBlur={handleBlur}
          onKeyDown={() => dispatch(searchProducts(searchInput))}
          className={`searchInput ${showInput ? "searchShow" : ""}`}
        />
        {size <= 750 && location.pathname === "/" && (
          <button
            onClick={() => {
              dispatch(showFullInput());
              !showInput && searchInputRef.current.focus();
            }}
            className="btn searchBtn"
            id="searchBtn--mobile"
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
            id="searchBtn--pc"
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
        {currentUser && (
          <img
            style={{
              borderRadius: "50%",
              width: "35px",
              height: "35px",
              objectFit: "cover",
              opacity: currentUser.photoURL ? "1" : "0",
            }}
            // src={
            //   currentUser.photoURL ? currentUser.photoURL : "./dummy-user.jpg"
            // }
            src={currentUser.photoURL}
            alt=""
          />
        )}
        {currentUser && (
          <span
            style={{ opacity: currentUser.email ? "1" : "0" }}
            className="username"
          >
            Hi,{" "}
            {currentUser.displayName
              ? currentUser.displayName
              : currentUser.email}
          </span>
        )}

        {currentUser && (
          <button
            onClick={() => {
              signOut(auth);
              dispatch(resetCart());
              navigate("/login");
            }}
            className="btn logoutBtn"
          >
            Logout
          </button>
        )}
        {!currentUser && (
          <Link to="/login" className="loginBtn">
            Login
          </Link>
        )}
      </div>
      {currentUser && size <= 750 && location.pathname !== "/" && (
        <button
          onClick={() => {
            signOut(auth);
            dispatch(resetCart());
            navigate("/");
          }}
          className="btn logoutBtn"
        >
          Logout
        </button>
      )}
    </header>
  );
};
