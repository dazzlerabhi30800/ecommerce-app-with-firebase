import { useSelector } from "react-redux";
import CartItemComp from "./CartItemComp";
import { AuthContext, formatPrice } from "../../context/SetContext";
import { useContext, useEffect } from "react";
import { Link } from "react-router-dom";

const Cart = () => {
  const cart = useSelector((data) => data.allFeatures.cart);
  const totalPrice = cart
    .map(({ price, quantity }) => price * quantity)
    .reduce((a, b) => a + b, 0);

  const { currentUser } = useContext(AuthContext);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <main className="cartWrapper">
      <h1>
        {cart.length > 0
          ? `Total Items - ${cart.length}`
          : "Your Cart is Empty"}
      </h1>
      {cart.length > 0 && (
        <div style={{ fontSize: "1.5rem" }} className="totalCartPrice">
          Total Price -{" "}
          <span style={{ fontWeight: "700" }}>₹{formatPrice(totalPrice)}</span>
        </div>
      )}
      <div className="cartContainer">
        {cart.length > 0 &&
          cart.map((item, index) => <CartItemComp item={item} key={index} />)}
      </div>
      {currentUser && cart.length > 0 && (
        <Link className="checkout--btn" to="/checkout">
          Proceed to Checkout
        </Link>
      )}
    </main>
  );
};
export default Cart;
