import { Merchant } from "../entities/Merchant"

export interface IMerchantRepository {
  findAll(): Promise<string>
  add(data: Merchant): Promise<string>
}
