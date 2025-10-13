import { Schema, model } from "mongoose"
import { BrandEntity } from "../../../domain/entities/Brand";
import { IBrandInterface } from "../../../domain/repositories/IBrandRepository";

// Brand Schema
const BrandSchema = new Schema({
  name: {
    type: String,
    trim: true
  },
  slug: {
    type: String,
    slug: 'name',
    unique: true
  },
  imageUrl: {
    type: String,
    trim: true
    // data: Buffer,
    // contentType: String
  },
  description: {
    type: String,
    trim: true
  },
  isActive: {
    type: Boolean,
    default: true
  },
  merchant: {
    type: Schema.Types.ObjectId,
    ref: 'Merchant',
    default: null
  },
  updated: Date,
  created: {
    type: Date,
    default: Date.now
  }
});

export const BrandModel = model('Brand', BrandSchema);


export class BrandRepository implements IBrandInterface {
  async add(data: BrandEntity): Promise<any> {
    return await BrandModel.create(data)
  }
  async findAll(): Promise<any> {
    let brand = await BrandModel.find()
    return brand
  }

  async findAlll(props: any): Promise<any> {
    let brand = await BrandModel.find().select(props)
    return brand
  }
}


