import { useSelector } from "react-redux";
import "./App.css";
import Home from "./Components/HomePage/Home";
import { Navbar } from "./Components/Navbar/Navbar";
import { NavbarMobile } from "./Components/Navbar/NavbarMobile";
import { Resize } from "./context/Resize";
import "./Styles/style.css";
import Cart from "./Components/CartPage/Cart";
import { Routes, Route } from "react-router-dom";

function App() {
  const size = Resize();
  return (
    <>
      <Navbar />
      {size <= 750 && <NavbarMobile />}
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/cart" element={<Cart />} />
      </Routes>
      {/* <Cart />
      <Home /> */}
    </>
  );
}

export default App;
