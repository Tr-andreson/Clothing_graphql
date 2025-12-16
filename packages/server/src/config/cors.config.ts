import cors from "cors"
import { Express } from "express"


export const corsConfig = (app: Express) => {
  app.use(cors({
    origin: process.env.NODE_ENV === "production" ? ["http://localhost:3000", "http://localhost:8081"] : ["http://localhost:5173", "https://studio.apollographql.com"],
    credentials: true
  }))

}
