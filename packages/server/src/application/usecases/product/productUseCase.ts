import { Product } from "@/domain/entities/Product";
import { ProductRepository } from "@/infrastructure/db/mongodb/productModel";

export class ProductUseCase {
  constructor(
    private readonly productRepo: ProductRepository
  ) { }

  public async get(): Promise<Product[]> {
    const products = await this.productRepo.findAll();
    return products;
  }

  public async getById(id: string): Promise<Product[]> {
    const products = await this.productRepo.findById(id);
    return products;
  }


  public async add(data: any): Promise<string> {
    await this.productRepo.add(data)
    return "Product added succesfully"
  }
}
