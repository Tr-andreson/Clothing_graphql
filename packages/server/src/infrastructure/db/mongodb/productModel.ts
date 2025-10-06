import { model, Schema } from "mongoose";
import { Product } from "../../../domain/entities/Product";
import { IProductRepository } from "../../../domain/repositories/IProductRepository";


const ProductSchema = new Schema({
  sku: {
    type: String
  },
  name: {
    type: String,
    trim: true
  },
  slug: {
    type: String,
    unique: true
  },
  imageUrl: {
    type: String
  },
  imageKey: {
    type: String
  },
  description: {
    type: String,
    trim: true
  },
  quantity: {
    type: Number
  },
  price: {
    type: Number
  },
  taxable: {
    type: Boolean,
    default: false
  },
  isActive: {
    type: Boolean,
    default: true
  },
  updated: Date,
  created: {
    type: Date,
    default: Date.now
  }
});

export const ProductModel = model('Product', ProductSchema);


export class ProductRepository implements IProductRepository {
  async findAll(): Promise<any> {
    const products = await ProductModel.find({});
    return products
  }

  async f(): Promise<any> {
    throw new Error("methord not implemented")
  }
  async add(data: Product): Promise<string> {
    await ProductModel.create(data);
    return "Product added successfully";
  }
  async update(_data: Product): Promise<string> {
    throw new Error("Method not implemented.");
  }
  async delete(id: string): Promise<string> {
    await ProductModel.deleteOne({ id: id })
    return "Product deleted succesfully"
  }


}
