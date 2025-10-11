import { Category } from "@/domain/productEntity";
import { getModelForClass, modelOptions, prop } from "@typegoose/typegoose";

import { IUserRepository } from "@/domain/repositories/IUserRepository";
import { User } from "@/domain/entities/User";

@modelOptions({ schemaOptions: { collection: "Categories" } })
export class CategoriesSchema implements Category {
  @prop()
  id: string;
  @prop()
  name: string;

  @prop()
  slug: string;

  @prop()
  description?: string

  @prop()
  parent_id?: string

  @prop()
  image_url?: string

  @prop()
  meta_title?: string

  @prop()
  meta_description?: string

  @prop()
  is_active: boolean;

  @prop()
  sort_order: number;
}

const CategoriesModel = getModelForClass(CategoriesSchema)

export class CategoriesRepository implements IUserRepository {
  async findAll(): Promise<User[] | any> {
    const categories = await CategoriesModel.find({})
    return categories
  }
  findByEmail(_email: string): Promise<User | null> {
    throw new Error("Method not implemented.");
  }
  async save(user: User): Promise<User | any> {
    const categories = await CategoriesModel.create(user)
    return categories
  }

}
