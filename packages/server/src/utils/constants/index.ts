import { registerEnumType } from "type-graphql";

import { Request, Response } from "express";

const DatabaseUrl = process.env.DATABASE_URL
const Port = process.env.PORT

export const CONSTANT = { DatabaseUrl, Port }


export enum MERCHANT_STATUS {
  "Waiting_Approval",
  "Rejected",
  "Approved"
}

export const ROLES = {
  Admin: 'ROLE ADMIN',
  Member: 'ROLE MEMBER',
  Merchant: 'ROLE MERCHANT'
};

// export const MERCHANT_STATUS = {
//   Rejected: 'Rejected',
//   Approved: 'Approved',
//   Waiting_Approval: 'Waiting Approval'
// };

registerEnumType(MERCHANT_STATUS, {
  name: "Direction",
  description: "The basic directions",
});

export const CART_ITEM_STATUS = {
  Processing: 'Processing',
  Shipped: 'Shipped',
  Delivered: 'Delivered',
  Cancelled: 'Cancelled',
  Not_processed: 'Not processed'
};

export const REVIEW_STATUS = {
  Rejected: 'Rejected',
  Approved: 'Approved',
  Waiting_Approval: 'Waiting Approval'
};

export const EMAIL_PROVIDER = {
  Email: 'Email',
  Google: 'Google',
  Facebook: 'Facebook'
};

export const JWT_COOKIE = 'x-jwt-cookie';


export interface GraphQLContext {
  req: Request;
  res: Response;
}
