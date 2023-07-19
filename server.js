import { config } from "dotenv";
import fastify from "fastify";
import Stripe from "stripe";

config();

// Require the framework and instantiate it
const fastifyp = fastify({ logger: true });
// const secretKey =
//   "sk_test_51NVU2CSCjGfm4lCe6K3bspHaYCsd0GEP6EfRUffxq631m3GhqhXGpAvBBxaJmUKl6m1rHH5Fh1VoaKw6useW6Nfz00KnA5ZhbH";
const secretKey =
  "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";
const publishKey =
  "pk_live_51NVU2CSCjGfm4lCe1jozKlDObpABqt0jJ0kxH3dkVmtNPkpS0vrESG4hPmJnQL2XQfWtJj0QTOB9xehIKfUsCJYv00riAnwlTD";
const stripe = Stripe(secretKey);

fastifyp.get("/publishable-key", () => {
  return {
    publishable_key:
      // "pk_test_51NVU2CSCjGfm4lCeNIhRcYbt81ohE3vFdLvGzDQ958j5gkG2amqWZyavvxx5r4af2qgAyB6J33iypbPLrv4vLQfE00PBMfcYbO",
      publishKey,
  };
});

// Create a payment intent and return its client secret
fastifyp.post("/create-payment-intent", async () => {
  const paymentIntent = await stripe.paymentIntents.create({
    amount: 999,
    currency: "inr",
    payment_method_types: ["card"],
  });

  return { client_secret: paymentIntent.client_secret };
});

// Run the server
const start = async () => {
  try {
    await fastifyp.listen(5252);
    console.log("Server listening ... ");
  } catch (err) {
    fastifyp.log.error(err);
    process.exit(1);
  }
};

start();
