import { Product } from "../entities/Product";

export interface IProductRepository {
  findAll(): Promise<Product[]>
  add(data: Product): Promise<string>
  update(data: Product): Promise<string>
  delete(id: string): Promise<string>
}
