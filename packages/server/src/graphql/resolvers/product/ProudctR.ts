import { Resolver, Query, Mutation, Arg } from "type-graphql";
import { ProductInputT, ProductT } from "./dto";
import { ProductUseCase } from "@/application/usecases/product/productUseCase";
import { ProductRepository } from "@/infrastructure/db/mongodb/productModel";
import { GraphQLError } from "graphql";

@Resolver()
export class ProductR {
  private readonly productUseCase: ProductUseCase;

  constructor() {
    this.productUseCase = new ProductUseCase(new ProductRepository());
  }

  @Query(() => [ProductT])
  public async Products() {
    try {
      const value = await this.productUseCase.get();
      return value;

    } catch (err) {
      console.log(err, "err debug");
      throw new GraphQLError(err);
    }
  }


  @Mutation(() => String)
  public async addProduct(
    @Arg("body") body: ProductInputT
  ) {
    // await ProductModel.create(body)
    await this.productUseCase.add(body)
    return "product added succesfully"

  }
}
