import { useEffect, useState } from "react";
import axios from "axios";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import CheckoutForm from "./CheckoutForm";
import { useSelector } from "react-redux";

let secretKey = import.meta.env.VITE_STRIPE_SECRET_KEY;
// let publishKey = import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY_2;
let publishKey =
  "pk_live_51NVU2CSCjGfm4lCe1jozKlDObpABqt0jJ0kxH3dkVmtNPkpS0vrESG4hPmJnQL2XQfWtJj0QTOB9xehIKfUsCJYv00riAnwlTD";

const initStripe = () => {
  // const res = await axios.get("/api/publishable-key");
  // const publishableKey = await res.data.publishable_key;

  return loadStripe(publishKey);
};

const Checkout = () => {
  const stripePromise = initStripe();

  const [clientSecretSettings, setClientSecretSettings] = useState({
    clientSecret: secretKey,
    loading: true,
  });

  console.log(publishKey);

  useEffect(() => {
    async function createPaymentIntent() {
      const response = await axios.post("/api/create-payment-intent", {});
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
