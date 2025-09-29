import jwt from "jsonwebtoken"

export class JwtService {
  async generateToken(userId: string): Promise<string> {
    let token = jwt.sign({ userId }, "secretcode", { expiresIn: "7d" })
    return token
  }
}
