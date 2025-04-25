
import bcrypt from "bcryptjs"

export const HashPassword = async (password: string) => {
  return bcrypt.hashSync(password, 10)
}
