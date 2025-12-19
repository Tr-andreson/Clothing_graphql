import { Inventory } from "@/domain/productEntity";
import { prop } from "@typegoose/typegoose";

class InventorySchema implements Inventory {

  @prop({ autopopulate: true })
  id: string;

  @prop()
  variant_id: string;

  @prop()
  quantity_available: number;

  @prop()
  quantity_reserved: number;

  @prop()
  low_stock_threshold: number;

  @prop()
  restock_date?: Date | undefined;

}
