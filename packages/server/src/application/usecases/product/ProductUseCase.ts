import { Product } from "@/domain/entities/Product";
import { ProductRepository } from "@/infrastructure/db/orm/mongoose/productModel";
import { RedisService } from "@/infrastructure/services/cachingService/ioredis";

export class ProductUseCase {
  private readonly cachedService: RedisService

  private cachedKey = "product"

  constructor(
    private readonly productRepo: ProductRepository,
  ) {
    this.cachedService = new RedisService()
  }

  public async get(): Promise<Product[]> {
    // get data from cache products
    let cacheProduct = await this.cachedService.get<Product[]>(this.cachedKey)
    if (cacheProduct) return cacheProduct

    // If not available get data from database and store it in cache
    // get data from cache products
    const products = await this.productRepo.findAll();
    await this.cachedService.set({
      key: this.cachedKey,
      value: products
    });

    return products;
  }

  public async getById(id: string): Promise<Product[]> {
    const products = await this.productRepo.findById(id);
    return products;
  }


  public async add(data: any): Promise<string> {
    // Add Data to database
    await this.productRepo.add(data)

    // Delete the existing cache  while creating new product
    await this.cachedService.delete(this.cachedKey)
    return "Product added succesfully"
  }
}
