import { Collection } from "@/domain/productEntity";
import { getModelForClass, modelOptions, prop } from "@typegoose/typegoose";

modelOptions({ schemaOptions: { collection: "collection" } })
class CollectionSchema implements Collection {
  @prop({ autopopulate: true })
  id: string;

  @prop({ required: true })
  name: string;

  @prop({ required: true })
  slug: string;

  @prop()
  description?: string | undefined;

  @prop()
  image_url?: string | undefined;

  @prop()
  is_active: boolean;

  @prop()
  start_date?: Date | undefined;

  @prop()
  end_date?: Date | undefined;

}

const CollectionModel = getModelForClass(CollectionSchema)
