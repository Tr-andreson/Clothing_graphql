import { Inventory } from "@/domain/productEntity";

class InventorySchema implements Inventory {
  id: string;
  variant_id: string;
  quantity_available: number;
  quantity_reserved: number;
  low_stock_threshold: number;
  restock_date?: Date | undefined;

}
