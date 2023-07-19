import React, { useState } from "react";
import {
  useStripe,
  useElements,
  PaymentElement,
} from "@stripe/react-stripe-js";
import { redirect } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const CheckoutForm = () => {
  const stripe = useStripe();
  const elements = useElements();

  const navigate = useNavigate();

  const [errorMessage, setErrorMessage] = useState(null);
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const { error } = await stripe.confirmPayment({
      elements,
      confirmParams: {
        return_url: "http://localhost:4242/",
      },
    });

    if (error) {
      setErrorMessage(error.message);
    } else {
      navigate("/");
      alert("Your payment is Successful");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <PaymentElement />
      <button
        style={{
          width: "fit-content",
          padding: "8px 12px",
          fontSize: "1.2rem",
          background: "#fff",
          boxShadow: "1px 1px 18px 3px rgba(0,0,0,0.3)",
          margin: "5px auto",
          borderRadius: "5px",
        }}
        disabled={!stripe}
      >
        Submit
      </button>
      {errorMessage && <div>{errorMessage}</div>}
    </form>
  );
};

export default CheckoutForm;
