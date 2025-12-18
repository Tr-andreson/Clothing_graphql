import dotenv from "dotenv"
dotenv.config()
import mongoose from "mongoose";
import { logger } from "./winston.config";

const mongoUrl = process.env.DATABASE_URL ?? "mongodb://localhost:27017/mydatabase";

export const databaseConnection = async () => {
  try {
    await mongoose.connect(mongoUrl);
    logger.info("MONGO DB CONNECTION Success")
    console.log("✅ MongoDB connection successful");
  } catch (error) {
    console.error("❌ MongoDB connection error:", error);
    process.exit(1); // stop the app if db connection fails
  }
};
