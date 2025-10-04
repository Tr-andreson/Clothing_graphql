import { model, Schema } from "mongoose";
import { User } from "../../../domain/entities/User";
import { IUserRepository } from "../../../domain/repositories/IUserRepository";


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


export class UserRepository implements IUserRepository {
  async save(user: User): Promise<User> {
    const userr = await UserModel.create(user)
    await userr.save()
    return user
  }
  async findAll(): Promise<any> {
    return await UserModel.find({})
  }
  async findByEmail(email: string): Promise<any> {
    return await UserModel.findOne({ email: email })
  }


}


