import "./App.css";
import Home from "./Components/HomePage/Home";
import ReactDOM from "react-dom/client";
import { Navbar } from "./Components/Navbar/Navbar";
import { NavbarMobile } from "./Components/Navbar/NavbarMobile";
import { Resize } from "./context/Resize";
import "./Styles/style.css";
import Cart from "./Components/CartPage/Cart";
import { Routes, Route, Navigate } from "react-router-dom";
import Login from "./Components/LoginPage/Login";
import Register from "./Components/RegisterPage/Register";
import { useContext, useEffect } from "react";
import { AuthContext, SetContextProvider } from "./context/SetContext";
import store, { resetCart } from "./ReduxReducers/Slice";
import Checkout from "./Components/CheckoutPage/Checkout";
import { Provider, useDispatch, useSelector } from "react-redux";

const App = () => {
  const size = Resize();
  const cart = useSelector((data) => data.allFeatures.cart);
  const dispatch = useDispatch();
  const { currentUser } = useContext(AuthContext);

  useEffect(() => {
    let user = JSON.parse(localStorage.getItem("user"));
    if (user) {
      return;
    } else {
      dispatch(resetCart());
    }
  }, []);

  const NavigateToHome = ({ children }) => {
    if (currentUser && cart.length > 0) {
      return children;
    } else {
      return <Navigate to="/" />;
    }
  };

  return (
    <>
      <Navbar />
      {size <= 750 && <NavbarMobile />}
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/cart" element={<Cart />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/register" element={<Register />} />
        <Route
          exact
          path="/checkout"
          element={
            <NavigateToHome>
              <Checkout />
            </NavigateToHome>
          }
        />
      </Routes>
    </>
  );
};

export default App;
