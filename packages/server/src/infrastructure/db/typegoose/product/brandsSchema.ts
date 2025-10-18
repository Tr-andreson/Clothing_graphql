import { Brand } from "@/domain/productEntity";
import { getModelForClass, prop } from "@typegoose/typegoose";

class BrandSchema implements Brand {
  @prop({ autopopulate: true })
  id: string;

  @prop()
  name: string;

  @prop()
  slug: string;

  @prop()
  description: string

  @prop()
  logo_url: string

  @prop()
  is_active: boolean;

}

const BrandModel = getModelForClass(BrandSchema)
