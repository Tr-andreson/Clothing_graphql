import { MerchantRepository } from "@/infrastructure/db/orm/mongoose/merchantModel"

export class MerchantUserCase {
  constructor(
    private readonly merchantRepo: MerchantRepository
  ) { }

  public async findAll() {
    return this.merchantRepo.findAll()
  }

  public async add(data: any) {
    return this.merchantRepo.add(data)
  }

}
