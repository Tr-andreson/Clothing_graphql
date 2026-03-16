import { ITokenService } from "@/domain/services/ITokenService"
import jwt from "jsonwebtoken"

export class JwtService implements ITokenService {
  async hash(data: any): Promise<string> {
    return jwt.sign(data, "secret")
  }
  verify(token: string) {
    return jwt.verify(token, "secret")
  }


}
