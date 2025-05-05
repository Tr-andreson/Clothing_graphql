import { User } from "../../../db/modals/user.modal";
import { Arg, Ctx, Mutation, Query, Resolver } from "type-graphql";
import bcrypt from "bcryptjs"
import { Response, Request } from "express"
import { HashPassword } from "../../../services/bcrypt.service";
import { loginSchema } from "../../../schema";
import { ZodError } from "zod";
import crypto from "node:crypto"
import { AuthInputT, AuthLoginT, AuthForgotT } from "./dto/auth.dto";

declare module "express-session" {
  interface Session {
    userId?: string;  // Add the userId property
  }
}




@Resolver()
export class AuthResolver {
  @Query(() => String)
  public async check() {
    try {
      return "Working"

    } catch (error) {
      return "error"

    }
  }

  @Mutation(() => String)
  public async registerUser(
    @Arg("body") body: AuthInputT,
  ) {
    try {
      const hashedPassword = await HashPassword(body.password)

      const user = new User({
        email: body.email,
        password: hashedPassword,
        firstName: body.firstName,
        lastName: body.lastName,
        phoneNumber: body.phoneNumber
      })

      const savedUser = await user.save()

      if (!savedUser) {
        return "Error in try"
      }


      return "User registerd"

    } catch (error) {
      console.log(error)
      return "Error Occured"

    }
  }



  @Mutation(() => String)
  public async loginUser(
    @Arg("body") body: AuthLoginT,
    @Ctx("res") res: Response,
    @Ctx("req") req: Request
  ) {
    try {
      const { email, password } = loginSchema.parse(body);

      const existingUser = await User.findOne({ email });

      if (!existingUser || !existingUser.password) {
        return "User does not exist or password is not set";
      }
      const passwordCheck = await bcrypt.compare(password, existingUser.password);

      if (!passwordCheck) {
        res.status(401);
        return "Password is incorrect";
      }



      req.session!.userId = existingUser.id


      res.status(200);
      return "Login Successful";
    } catch (error) {
      if (error instanceof ZodError) {
        res.status(400);
        return JSON.stringify({ error: error.errors });
      }
      res.status(500);
      console.log(error)
      return "Error Occurred";
    }
  }

  @Mutation(() => String)
  public async forgot(
    @Arg("body") body: AuthForgotT,
    @Ctx("res") res: Response
  ) {
    try {
      const { email } = body

      const isEmailExist = await User.findOne({ email: email })

      if (!isEmailExist) {
        return "no Email is present"

      }

      const buffer = crypto.randomBytes(48);
      const resetToken = buffer.toString('hex');
      isEmailExist.resetPasswordToken = resetToken;
      isEmailExist.resetPasswordExpires = new Date(Date.now() + 3600000);
      isEmailExist.save();
      return `Reset password is ${resetToken}`
    } catch (error) {
      if (error instanceof ZodError) {
        res.status(400);
        return JSON.stringify({ error: error.errors });
      }
      res.status(500);
      return "Error Occurred";
    }

  }

  @Mutation(() => String)
  public async logout(
    @Ctx("res") res: Response
  ) {
    try {
      res.clearCookie("redisSession")
      return "Logout succesfully"
    } catch (error) {
      return "Error created"

    }
  }

}





