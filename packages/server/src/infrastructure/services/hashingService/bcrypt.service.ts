import bcrypt from "bcryptjs";
import { IHasingService } from "./interface";

export class BcryptService implements IHasingService {
  hash(plain: string): Promise<string> {
    let salt = 10
    return bcrypt.hash(plain, salt)
  }
  compare(password: string, hash: string): Promise<boolean> {
    return bcrypt.compare(password, hash);
  }
}
