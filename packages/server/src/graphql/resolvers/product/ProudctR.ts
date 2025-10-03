import { ProductUseCase } from "../../../application/usecases/product/productUseCase";
import { ProductModel, ProductRepository } from "../../../infrastructure/db/productModel";
import { Resolver, Query, Mutation, Arg } from "type-graphql";
import { ProductInputT, ProductT } from "./dto";

@Resolver()
export class ProductR {
  private readonly productUseCase: ProductUseCase;

  constructor() {
    this.productUseCase = new ProductUseCase(new ProductRepository());
  }

  @Query(() => [ProductT])
  public async products() {
    const value = await this.productUseCase.get();
    return value;
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
