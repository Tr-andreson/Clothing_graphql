import dotenv from "dotenv"
dotenv.config()
import mongoose from "mongoose";

const mongoUrl = process.env.DATABASE_URL ?? "mongodb://mongo:27017/mydatabase";
// const mongoUrl = "mongodb://localhost:27017/EcommerceGraphql"

export const databaseConnection = async () => {

  try {
    await mongoose.connect(mongoUrl);
    console.log("✅ MongoDB connection successful");
  } catch (error) {
    console.error("❌ MongoDB connection error:", error);
    process.exit(1); // optional: stop the app if DB connection fails
  }
};
