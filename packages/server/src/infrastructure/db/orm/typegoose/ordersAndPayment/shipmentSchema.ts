import { Shipment } from "@/domain/orderEntity";
import { ShipmentStatus } from "@/utils/constants/enums";

class ShipmentSchema implements Shipment {
  id: string;
  order_id: string;
  tracking_number: string;
  carrier: string;
  status: ShipmentStatus;
  shipped_at?: Date | undefined;
  delivered_at?: Date | undefined;

}
