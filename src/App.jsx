import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import Home from "./Components/HomePage/Home";
import { Navbar } from "./Components/Navbar/Navbar";
import { NavbarMobile } from "./Components/Navbar/NavbarMobile";
import { Resize } from "./context/Resize";
import "./Styles/style.css";
import Cart from "./Components/CartPage/Cart";
import { Routes, Route, Navigate } from "react-router-dom";
import Login from "./Components/LoginPage/Login";
import Register from "./Components/RegisterPage/Register";
import { useContext, useEffect } from "react";
import { AuthContext } from "./context/SetContext";
import { resetCart } from "./ReduxReducers/Slice";
import Checkout from "./Components/CheckoutPage/Checkout";

function App() {
  const size = Resize();
  const dispatch = useDispatch();
  const { currentUser } = useContext(AuthContext);
  // console.log(currentUser.photoURL);

  useEffect(() => {
    let user = JSON.parse(localStorage.getItem("user"));
    if (user) {
      return;
    } else {
      dispatch(resetCart());
    }
  }, []);

  return (
    <>
      <Navbar />
      {size <= 750 && <NavbarMobile />}
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/cart" element={<Cart />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/register" element={<Register />} />
        <Route exact path="/checkout" element={<Checkout />} />
      </Routes>
      {/* <Cart />
      <Home /> */}
    </>
  );
}

export default App;
