import { MerchantRepository } from "../../../infrastructure/db/mongodb/merchantModel";
import { MerchantUserCase } from "../../../application/usecases/merchant/MerchantUseCase";
import { Arg, Mutation, Query, Resolver } from "type-graphql";
import { MerchantRequestT, MerchantResposeT } from "./dto";

@Resolver()
export class MerchantResolver {
  public merchanteUseCase: MerchantUserCase

  constructor() {
    this.merchanteUseCase = new MerchantUserCase(new MerchantRepository())
  }

  @Query(() => [MerchantResposeT])
  public async findMerchant() {
    return this.merchanteUseCase.findAll()
  }

  @Mutation(() => String)
  public async addMerchant(
    @Arg("body") body: MerchantRequestT
  ) {
    await this.merchanteUseCase.add(body)
    return "Merchant Added succesfully"

  }


}
