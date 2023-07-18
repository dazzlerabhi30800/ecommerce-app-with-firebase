import { AiFillHome, AiOutlineHome, AiOutlineClose } from "react-icons/ai";
import { BiUser, BiSolidUser, BiCart, BiSolidCartAlt } from "react-icons/bi";
import { RxHamburgerMenu } from "react-icons/rx";
import { useSelector, useDispatch } from "react-redux";
import { handleDropdown } from "../../ReduxReducers/Slice";
import { Link, useLocation } from "react-router-dom";

export const NavbarMobile = () => {
  const showMenu = useSelector((data) => data.showAllComps.showDropdown);
  const showCartLength = useSelector((data) => data.allFeatures.cart).length;
  const dispatch = useDispatch();

  const location = useLocation();

  return (
    <nav className="navbarMobile">
      <Link to="/">
        {location.pathname === "/" ? <AiFillHome /> : <AiOutlineHome />}
      </Link>
      <Link to="/login">
        {location.pathname === "/login" ? <BiSolidUser /> : <BiUser />}
      </Link>
      <Link className="cartBtn" style={{ fontSize: "1.5rem" }} to="/cart">
        {location.pathname === "/cart" ? <BiSolidCartAlt /> : <BiCart />}
        <span
          style={{ fontSize: "9px", padding: "1px 6px" }}
          className={showCartLength > 0 ? "cartQuantity show" : "cartQuantity"}
        >
          {showCartLength}
        </span>
      </Link>
      <button
        style={{
          background: "transparent",
          fontSize: "1.5rem",
          position: "relative",
        }}
        onClick={() => dispatch(handleDropdown())}
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
