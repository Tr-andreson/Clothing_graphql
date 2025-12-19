import { Payment } from "@/domain/orderEntity";
import { PaymentStatus } from "@/utils/constants/enums";

class PaymentSchema implements Payment {
  id: string;
  order_id: string;
  payment_method: string;
  payment_gateway: string;
  amount: number;
  currency: string;
  status: PaymentStatus;
  gateway_transaction_id?: string | undefined;
  created_at: Date;

}
