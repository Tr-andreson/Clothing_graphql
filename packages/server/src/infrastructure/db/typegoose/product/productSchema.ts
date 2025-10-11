import { Product } from "@/domain/productEntity";
import { Gender, ProductStatus } from "@/utils/constants/enums";
import { getModelForClass, prop } from "@typegoose/typegoose";


class ProductSchema implements Product {
  @prop({ autopopulate: true })
  id: string;

  @prop()
  sku: string;

  @prop()
  name: string;

  @prop()
  slug: string;

  @prop()
  description?: string;

  @prop()
  care_instructions?: string;

  @prop()
  material_composition?: string;

  @prop()
  brand_id?: string;

  @prop()
  category_id: string;

  @prop()
  collection_id?: string

  @prop()
  status: ProductStatus;

  @prop()
  gender: Gender;

  @prop()
  season?: string | undefined;

  @prop()
  tags: string[];

  @prop()
  meta_title?: string | undefined;

  @prop()
  meta_description?: string | undefined;

  @prop()
  created_at: Date;

  @prop()
  updated_at: Date;

}


const productModel = getModelForClass(ProductSchema)
