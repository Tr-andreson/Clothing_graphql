import { Product } from "@/domain/entities/Product";
import { ProductRepository } from "@/infrastructure/db/mongodb/productModel";
import { RedisService } from "@/infrastructure/services/cachingService/ioredis";

export class ProductUseCase {
  private readonly cachedService: RedisService

  constructor(
    private readonly productRepo: ProductRepository,
  ) {
    this.cachedService = new RedisService()
  }

  public async get(): Promise<Product[]> {
    let cachedKey = "product"
    let cacheProduct = await this.cachedService.get<Product[]>(cachedKey)
    if (cacheProduct) return cacheProduct
    const products = await this.productRepo.findAll();
    await this.cachedService.set({
      key: cachedKey,
      value: products
    });
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
