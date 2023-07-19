import { useEffect, useState } from "react";
import axios from "axios";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import CheckoutForm from "./CheckoutForm";
import { useSelector } from "react-redux";

const initStripe = async () => {
  const res = await axios.get("/api/publishable-key");
  const publishableKey = await res.data.publishable_key;

  return loadStripe(publishableKey);
};

const Checkout = () => {
  const cart = useSelector((data) => data.allFeatures.cart);
  const stripePromise = initStripe();
  let secretKey = import.meta.env.VITE_STRIPE_SECRET_KEY;
  let publishKey = import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY;

  console.log(stripePromise);

  const [clientSecretSettings, setClientSecretSettings] = useState({
    clientSecret: secretKey,
    loading: true,
  });

  useEffect(() => {
    async function createPaymentIntent() {
      const response = await axios.post("/api/create-payment-intent", {});
      console.log(response);
      setClientSecretSettings({
        clientSecret: response.data.client_secret,
        loading: false,
      });
    }

    createPaymentIntent();
  }, []);

  return (
    <main className="checkout--wrapper">
      Checkout Wrapper
      <div>
        {clientSecretSettings.loading ? (
          <h3>Loading..</h3>
        ) : (
          <Elements
            stripe={stripePromise}
            options={{
              clientSecret: clientSecretSettings.clientSecret,
              appearance: { theme: "stripe" },
              layout: {
                type: "tabs",
              },
            }}
          >
            <CheckoutForm />
          </Elements>
        )}
      </div>
    </main>
  );
};

export default Checkout;
