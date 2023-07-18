import { useSelector } from "react-redux";
import CartItemComp from "./CartItemComp";
import { formatPrice } from "../../context/SetContext";

const Cart = () => {
  const cart = useSelector((data) => data.allFeatures.cart);
  const totalPrice = cart
    .map(({ price, quantity }) => price * quantity)
    .reduce((a, b) => a + b, 0);
  return (
    <main className="cartWrapper">
      <h1>
        {cart.length > 0
          ? `Total Items - ${cart.length}`
          : "Your Cart is Empty"}
      </h1>
      <div className="cartContainer">
        {cart.length > 0 &&
          cart.map((item, index) => <CartItemComp item={item} key={index} />)}
      </div>
      <div style={{ fontSize: "1.5rem" }} className="totalCartPrice">
        Total Price -{" "}
        <span style={{ fontWeight: "700" }}>₹{formatPrice(totalPrice)}</span>
      </div>
    </main>
  );
};
export default Cart;
