
import { model, Schema } from "mongoose";

const EMAIL_PROVIDER = {
  Email: 'Email',
  Google: 'Google',
  Facebook: 'Facebook'
};

const ROLES = {
  Admin: 'ROLE ADMIN',
  Member: 'ROLE MEMBER',
  Merchant: 'ROLE MERCHANT'
};

const UserSchema = new Schema({
  email: {
    type: String,
  },
  phoneNumber: {
    type: String
  },
  firstName: {
    type: String
  },
  lastName: {
    type: String
  },
  password: {
    type: String
  },
  // merchant: {
  //   type: Schema.Types.ObjectId,
  //   ref: 'Merchant',
  //   default: null,
  // },
  provider: {
    type: String,
    required: true,
    default: EMAIL_PROVIDER.Email
  },
  googleId: {
    type: String
  },
  facebookId: {
    type: String
  },
  avatar: {
    type: String
  },
  role: {
    type: String,
    default: ROLES.Member,
    enum: [ROLES.Admin, ROLES.Member, ROLES.Merchant]
  },
  resetPasswordToken: { type: String },
  resetPasswordExpires: { type: Date },
  updated: Date,
  created: {
    type: Date,
    default: Date.now
  }
});


const UserModel = model("User", UserSchema)


interface IUserService {
  findAll(): Promise<any>
  findByEmail(email: string): Promise<any>
  register(body: any): Promise<any>
  // login(email: string, password: string): Promise<any>
  // forgot(body: any): Promise<any>
  // logout(): Promise<any>

}

export class UserService implements IUserService {
  async findAll(): Promise<any> {
    return await UserModel.find({})
  }
  async findByEmail(email: string): Promise<any> {
    return await UserModel.findOne({ email: email })
  }
  async register(body: any): Promise<any> {
    const user = await UserModel.create(body)
    await user.save()
    return user
  }
  // logout(): Promise<any> {
  //   throw new Error("Method not implemented.");
  // }


}


