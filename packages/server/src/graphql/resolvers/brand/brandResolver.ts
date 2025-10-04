import { BrandUseCase } from "../../../application/usecases/brand/BrandUseCase";
import { Arg, Mutation, Query, Resolver } from "type-graphql";
import { BrandRequestT, BrandResponseT } from "./dto";

@Resolver()
export class BrandResovler {
  public readonly brandService: BrandUseCase

  constructor(
  ) {
    this.brandService = new BrandUseCase()
  }


  @Query(() => [BrandResponseT])
  public async Brand() {
    return this.brandService.findAll()
  }

  @Mutation(() => String)
  public async addBrand(
    @Arg("body") body: BrandRequestT

  ) {
    await this.brandService.add(body)
    return "Brand Added succesfullyjd"
  }

}

