import { BrandRepository } from "../../../infrastructure/db/mongodb/brandModel";

export class BrandUseCase {
  private readonly branduseCase: BrandRepository
  constructor() {
    this.branduseCase = new BrandRepository()
  }

  public async findAll() {
    return await this.branduseCase.findAll()
  }

  public async add(data: any) {
    return await this.branduseCase.add(data)
  }


}
