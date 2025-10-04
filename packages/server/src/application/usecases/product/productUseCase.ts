import { ProductRepository } from "../../../infrastructure/db/mongodb/productModel";
import { Product } from "../../../domain/entities/Product";

export class ProductUseCase {
  constructor(
    private readonly productRepo: ProductRepository
  ) { }

  public async get(): Promise<Product[]> {
    const products = await this.productRepo.findAll();
    return products;
  }


  public async add(data: any): Promise<string> {
    await this.productRepo.add(data)
    return "Product added succesfully"

  }
}
