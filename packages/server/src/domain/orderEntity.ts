import { AddressType, OrderStatus, PaymentStatus, ShipmentStatus } from "@/utils/constants/enums";

export interface Order {
  id: string;
  order_number: string;
  user_id: string;
  status: OrderStatus;
  subtotal: number;
  tax_amount: number;
  shipping_amount: number;
  discount_amount: number;
  total: number;
  currency: string;
  customer_note?: string;
  created_at: Date;
  updated_at: Date;
}

export interface OrderItem {
  id: string;
  order_id: string;
  variant_id: string;
  product_name: string;
  variant_attributes: Record<string, any>; // JSON structure
  quantity: number;
  unit_price: number;
  total_price: number;
}

export interface OrderAddress {
  order_id: string;
  type: AddressType;
  first_name: string;
  last_name: string;
  street_address: string;
  city: string;
  state: string;
  country: string;
  zip_code: string;
  phone: string;
}

export interface Payment {
  id: string;
  order_id: string;
  payment_method: string;
  payment_gateway: string;
  amount: number;
  currency: string;
  status: PaymentStatus;
  gateway_transaction_id?: string;
  created_at: Date;
}

export interface Shipment {
  id: string;
  order_id: string;
  tracking_number: string;
  carrier: string;
  status: ShipmentStatus;
  shipped_at?: Date;
  delivered_at?: Date;
}

export interface CreateOrderInput {
  user_id: string;
  shipping_address: Omit<OrderAddress, 'order_id'>;
  billing_address: Omit<OrderAddress, 'order_id'>;
  items: Array<{
    variant_id: string;
    quantity: number;
  }>;
  customer_note?: string;
  discount_code?: string;
}

export interface OrderWithDetails extends Order {
  items: OrderItem[];
  shipping_address: OrderAddress;
  billing_address: OrderAddress;
  payments: Payment[];
  shipments: Shipment[];
}
