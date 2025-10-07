import { Schema, model } from "mongoose";
import { IMerchantRepository } from "../../../domain/repositories/IMerchantRepository";
import { Merchant } from "../../../domain/entities/Merchant";
import { MERCHANT_STATUS } from "../../../utils/constants";



// Merchant Schema
const MerchantSchema = new Schema({
  name: {
    type: String,
    trim: true
  },
  email: {
    type: String
  },
  phoneNumber: {
    type: String
  },
  brandName: {
    type: String
  },
  business: {
    type: String,
    trim: true
  },
  isActive: {
    type: Boolean,
    default: false
  },
  brand: {
    type: Schema.Types.ObjectId,
    ref: 'Brand',
    default: null
  },
  status: {
    type: String,
    default: MERCHANT_STATUS.Waiting_Approval,
    enum: [
      MERCHANT_STATUS.Waiting_Approval,
      MERCHANT_STATUS.Rejected,
      MERCHANT_STATUS.Approved
    ]
  },
  updated: Date,
  created: {
    type: Date,
    default: Date.now
  }
});

const MerchantModel = model('Merchant', MerchantSchema);



export class MerchantRepository implements IMerchantRepository {
  async findAll(): Promise<any> {
    let merchant = await MerchantModel.find({
      isActive: true
    }).populate("brand")
    return merchant
  }
  async add(data: Merchant): Promise<any> {
    const merchant = await MerchantModel.create(data)
    await merchant.save()
    return merchant
  }


}
