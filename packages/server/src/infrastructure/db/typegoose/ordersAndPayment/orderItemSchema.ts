import { OrderItem } from "@/domain/orderEntity";

class OrderItemSchema implements OrderItem {
  id: string;
  order_id: string;
  variant_id: string;
  product_name: string;
  variant_attributes: Record<string, any>;
  quantity: number;
  unit_price: number;
  total_price: number;
}
