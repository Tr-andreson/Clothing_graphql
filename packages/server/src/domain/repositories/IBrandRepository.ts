import { BrandEntity } from "../entities/Brand"

export interface IBrandInterface {
  findAll(): Promise<any>
  add(data: BrandEntity): Promise<any>

}
