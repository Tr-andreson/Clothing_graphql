import { BrandRepository } from "@/infrastructure/db/orm/mongoose/brandModel"

export class BrandUseCase {
  private readonly branduseCase: BrandRepository
  constructor() {
    this.branduseCase = new BrandRepository()
  }

  public async findAll(props: any) {
    return await this.branduseCase.findAlll(props)
  }

  public async add(data: any) {
    return await this.branduseCase.add(data)
  }


}
