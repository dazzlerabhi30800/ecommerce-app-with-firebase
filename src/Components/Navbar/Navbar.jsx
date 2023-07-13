import React, { useState } from "react";
import Logo from "/logo.png";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { Scroll } from "../../context/Scroll";

export const Navbar = () => {
  const [show, setShow] = useState(false);
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
            <a href="#">Projects</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
        </ul>
      </nav>
      <div className="additional--btns">
        <a
          className="btn cartBtn"
          href="#"
          onClick={() => setShow((prevState) => !prevState)}
        >
          <AiOutlineShoppingCart />
          <span className={show ? "cartQuantity show" : "cartQuantity"}>0</span>
        </a>
        <span className="username">Hi, Username</span>
        <button className="btn logoutBtn">Logout</button>
      </div>
    </header>
  );
};
