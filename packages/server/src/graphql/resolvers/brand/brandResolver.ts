import { Brand } from "../../../db/modals/brand.model";
import { Arg, Mutation, Query, Resolver } from "type-graphql"
import { BrandT } from "./entities/brand.entity";
import { BrandInputT } from "./dto/brand.dto";




@Resolver()
export class BrandResolver {
  constructor() {
  }

  @Query(() => [BrandT])
  public async getBrands(): Promise<BrandT[] | any> {

    try {
      const brand = await Brand.find()

      return brand
    } catch (error) {
      return "error"

    }
  }

  @Mutation(() => String)
  public async addBrand(
    @Arg("body") body: BrandInputT
  ): Promise<string> {
    try {
      const brand = new Brand({
        name: body.name,
        slug: body.slug,
        description: body.description,
        isActive: body.isActive,
        imageUrl: body.imageUrl,
        merchant: null
      });

      await brand.save();
      return "brand value"

    } catch (error) {
      console.log(error)
      return "error occured"
    }
  }


}

