import { MERCHANT_STATUS } from "@/utils/constants";

export class Merchant {
  constructor(
    public readonly name: string,
    public readonly email: string,
    public readonly phoneNumber: number,
    public readonly brandName: string,
    public readonly business: string,
    public readonly isActive: boolean,
    // public readonly brand: boolean,
    public readonly status: MERCHANT_STATUS.Approved | MERCHANT_STATUS.Rejected | MERCHANT_STATUS.Waiting_Approval,
  ) {


  }

}
