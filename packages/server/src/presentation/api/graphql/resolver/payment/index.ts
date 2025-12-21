import Stripe from "stripe";
import { Arg, Mutation, Resolver } from "type-graphql";


const stripe = new Stripe("YOUR_SECRET_KEY", {
});

@Resolver()
export class PaymentResolver {
  @Mutation(() => String)
  async Payment(
    @Arg("amount") amount: number,
    @Arg("currency", () => String, { defaultValue: "usd" }) currency: string
  ) {
    try {
      const paymentIntent = await stripe.paymentIntents.create({
        amount: amount,
        currency,
        payment_method_types: ["card"],
      });

      return paymentIntent.client_secret;
    } catch (error: any) {
      console.error("Payment Error:", error.message);
      throw new Error(error.message);
    }
  }
}


