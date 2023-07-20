import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { formatPrice } from "../../context/SetContext";
import StripeCheckout from "react-stripe-checkout";

let publishKey = import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY.toString();

const Checkout = () => {
  const cart = useSelector((data) => data.allFeatures.cart);
  const totalAmount = cart
    .map((item) => item.price * item.quantity)
    .reduce((a, b) => a + b, 0);

  const onToken = (token) => {
    console.log(token);
  };

  return (
    <main className="checkout--wrapper">
      <h1>Checkout</h1>
      <p>
        Your Total Item <span>{cart.length}</span> and Price{" "}
        <span>₹{formatPrice(totalAmount)}</span>{" "}
      </p>
      <StripeCheckout
        name="Shopsy"
        billingAddress={true}
        description="Enter your Details"
        currency="INR"
        amount={totalAmount * 100}
        token={onToken}
        stripeKey={publishKey}
      />
    </main>
  );
};
export default Checkout;
