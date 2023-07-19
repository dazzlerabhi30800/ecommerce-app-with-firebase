import { config } from "dotenv";
import fastify from "fastify";
import Stripe from "stripe";

config();

// Require the framework and instantiate it
const fastifyp = fastify({ logger: true });
const secretKey =
  "sk_test_51NVU2CSCjGfm4lCe6K3bspHaYCsd0GEP6EfRUffxq631m3GhqhXGpAvBBxaJmUKl6m1rHH5Fh1VoaKw6useW6Nfz00KnA5ZhbH";
const stripe = Stripe(secretKey);

fastifyp.get("/publishable-key", () => {
  return {
    publishable_key:
      "pk_test_51NVU2CSCjGfm4lCeNIhRcYbt81ohE3vFdLvGzDQ958j5gkG2amqWZyavvxx5r4af2qgAyB6J33iypbPLrv4vLQfE00PBMfcYbO",
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
