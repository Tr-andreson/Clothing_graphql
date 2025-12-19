import { UserRepository } from "@/infrastructure/db/orm/mongoose/userModel"
import { RedisService } from "@/infrastructure/services/cachingService/ioredis"

export class UserUseCase {
  private readonly cacheService: RedisService
  private readonly userRepo: UserRepository
  constructor(
  ) {
    this.cacheService = new RedisService()
    this.userRepo = new UserRepository()
  }

  public async getUsers() {
    // ------------ FIX: CREATE A WRAPPER FOR CACHE SERVICE ------------
    let cacheKey = "user"
    let cachedUser = await this.cacheService.get(cacheKey)
    if (cachedUser) return cachedUser

    let users = await this.userRepo.findAll()
    console.log(users, "users debug");
    console.log("get users workd")
    await this.cacheService.set({
      key: "user",
      value: users
    })
    return users
  }
}
