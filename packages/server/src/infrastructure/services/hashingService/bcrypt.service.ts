import bcrypt from "bcryptjs";
import { IHashService } from "../../../domain/services/IHashService";

export class BcryptService implements IHashService {
  hash(plain: string): Promise<string> {
    let salt = 10
    return bcrypt.hash(plain, salt)
  }
  compare(password: string, hash: string): Promise<boolean> {
    return bcrypt.compare(password, hash);
  }
}
