import React, { useContext } from "react";
import Logo from "/logo.png";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { Scroll } from "../../context/Scroll";
import { SetContext } from "../../context/SetContext";
import { Actions } from "../../context/SetContext";

export const Navbar = () => {
  const { data, dispatch } = useContext(SetContext);
  const scrollTop = Scroll();

  return (
    <header className="headerPc">
      <img src={Logo} className="logo--img" alt="Shopsy" />
      <nav className="navbarPc">
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
      <div className="additional--btns">
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
    </header>
  );
};
