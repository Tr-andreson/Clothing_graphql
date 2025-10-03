import { UserRepository } from "../../../infrastructure/db/userModel";

describe("User model", () => {
  let userRepository: UserRepository;


  beforeAll(() => {
    userRepository = new UserRepository()
  })

  it("Should return products", async () => {
    const user = await userRepository.findAll()
    expect(user).not.toBe(user)
  })

})
