import { Transporter } from "../../../infrastructure/services/nodemailer";
import { MERCHANT_STATUS } from "../../../utils/constants";
import { Merchant } from "../../../db/modals/merchant.model";
import { Arg, Mutation, Query, Resolver } from "type-graphql"
import { registerEnumType } from "type-graphql";
import { MerchantInputT } from "./dto/merchand.dto";
import { MerchantT } from "./entities/merchant.entities";


registerEnumType(MERCHANT_STATUS, {
  name: "MerchantStatus",
  description: "The status of the merchant",
});



@Resolver()
export class MerchantResolver {
  constructor() {
  }

  @Query(() => [MerchantT])
  public async getMerchant(): Promise<MerchantT[] | any> {

    try {
      const merchant = await Merchant.find()

      return merchant
    } catch (error) {
      return "error"

    }
  }

  @Mutation(() => String)
  public async addMerchant(
    @Arg("body") body: MerchantInputT
  ): Promise<string> {
    try {
      const merchant = new Merchant({
        name: body.name,
        email: body.email,
        phoneNumber: body.phoneNumber,
        brandName: body.brandName,
        business: body.business,
        isActive: body.isActive,
        brand: null,
        status: MERCHANT_STATUS.Waiting_Approval
      });

      await merchant.save();

      let mailOptions = {
        from: 'tushar@lovoj.com', // Sender address
        to: body.email, // List of receivers
        subject: "Test Subject for merchant", // Subject line
        text: "Plain text body Merchant", // Plain text body
        // html: html, // HTML body (optional)
      };

      let info = await Transporter.sendMail(mailOptions);
      console.log('Message sent: %s', info.messageId);
      return "merchant value"

    } catch (error) {
      console.log(error)
      return "error occured"
    }
  }


}

