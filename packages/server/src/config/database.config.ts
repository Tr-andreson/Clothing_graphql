// import { logger } from "@/infrastructure/services/loggingService/winston.service";
import dotenv from "dotenv"
dotenv.config()
import mongoose from "mongoose";

const mongoUrl = process.env.DATABASE_URL ?? "mongodb://localhost:27017/mydatabase";

export const databaseConnection = async () => {
  try {
    await mongoose.connect(mongoUrl);
		console.log(mongoUrl)
		console.log("MONGODB -- Database Connected Succesfully");
    // logger.info("MONGO DB CONNECTION Success")
  } catch (error) {
    console.error("❌ MongoDB connection error:", error);
    process.exit(1);
  }
};
