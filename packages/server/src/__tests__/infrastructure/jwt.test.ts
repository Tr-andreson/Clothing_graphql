import { JwtService } from "../../infrastructure/security/jwtService"

describe("Jwt Service", () => {
  let jwtService: JwtService;

  beforeAll(() => {
    jwtService = new JwtService()
  })

  it("should generate token", async () => {
    let userId = "testing"
    const token = await jwtService.generateToken(userId)
    console.log(token, "token debug");
    expect(typeof token).toBe("string")
  })

})
