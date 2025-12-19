import { Arg, Info, Mutation, Query, Resolver } from "type-graphql";
import { BrandRequestT, BrandResponseT } from "./dto";
import { BrandUseCase } from "@/application/usecases/brand/BrandUseCase";
import { GraphQLResolveInfo } from "graphql";
import graphqlFields from "graphql-fields";

@Resolver()
export class BrandResovler {
  public readonly brandService: BrandUseCase

  constructor(
  ) {
    this.brandService = new BrandUseCase()
  }

  @Query(() => [BrandResponseT])
  public async Brand(
    @Info() info: GraphQLResolveInfo
  ) {
    const fields = graphqlFields(info);
    const selectedFields = Object.keys(fields).join(" ");
    return await this.brandService.findAll(selectedFields)
  }

  @Mutation(() => String)
  public async addBrand(
    @Arg("body") body: BrandRequestT
  ) {
    await this.brandService.add(body)
    return "Brand Added succesfullyjd"
  }

}

