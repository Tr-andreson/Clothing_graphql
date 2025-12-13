import dotenv from "dotenv"
dotenv.config()
import mongoose from "mongoose";

const mongoUrl = process.env.DATABASE_URL ?? "mongodb://localhost:27017/mydatabase";

export const databaseConnection = async () => {
  console.log(mongoUrl, "mongoUrl debug");
  try {
    await mongoose.connect(mongoUrl);
    console.log("✅ MongoDB connection successful");
  } catch (error) {
    console.error("❌ MongoDB connection error:", error);
    process.exit(1); // stop the app if db connection fails
  }
};
