import { Arg, Mutation, Query, Resolver } from "type-graphql";
import { AuthInputT, AuthResponseT } from "./dto/auth.dto";
import { UserService } from "../../../infrastructure/db/userModel";
import { BcryptService } from "../../../infrastructure/services/hashingService/bcrypt.service";

// // import { BcryptService } from "../../../infrastructure/services/hashingService/bcrypt.service";
// import { AuthInputT } from "./dto/auth.dto";




const hashService = new BcryptService()
const userService = new UserService()

@Resolver()
export class AuthResolver {
  @Query(() => [AuthResponseT])
  public async Users(): Promise<[AuthResponseT] | any> {
    try {
      const user = await userService.findAll()
      console.log(user, "user debug");
      return user
    } catch (err) {
      return "err"
    }
  }



  @Mutation(() => String)
  public async registerUser(
    @Arg("body") body: AuthInputT,
  ) {
    try {
      const hashedPassword = await hashService.hash(body.password)
      let payload = {
        email: body.email,
        firstName: body.firstName,
        lastName: body.lastName,
        password: hashedPassword,
        phoneNumber: body.phoneNumber,
        // merchant: body.merchant,
        provider: body.provider,
        // role: body.role,

      }
      console.log(payload)
      await userService.register(payload)
      return "User registerd"
    } catch (err) {
      console.log(err, "err debug");
      return "error occured"
    }
  }
}





