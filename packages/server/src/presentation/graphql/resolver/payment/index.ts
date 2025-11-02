import Stripe from "stripe";
import { Arg, Mutation, Resolver } from "type-graphql";


// Initialize Stripe
const stripe = new Stripe("YOUR_SECRET_KEY", {
});
@Resolver()
class PaymentResolver {
  @Mutation(() => String)
  async payment(
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


export default PaymentResolver
