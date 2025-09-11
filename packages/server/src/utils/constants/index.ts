const DatabaseUrl = process.env.DATABASE_URL
const Port = process.env.PORT

export const CONSTANT = { DatabaseUrl, Port }


export enum MERCHANT_STATUS {
  "Waiting_Approval",
  "Rejected",
  "Approved"
}
