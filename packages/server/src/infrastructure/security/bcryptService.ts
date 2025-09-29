import bcrypt from "bcryptjs";

interface IBcryptService {
  hash: (password: string) => Promise<string>;
  compare: (password: string, hash: string) => Promise<boolean>;
}

export class BcryptService implements IBcryptService {
  async hash(password: string): Promise<string> {
    const saltRounds = 10;
    return bcrypt.hash(password, saltRounds);
  }

  async compare(password: string, hash: string): Promise<boolean> {
    return bcrypt.compare(password, hash);
  }
}
