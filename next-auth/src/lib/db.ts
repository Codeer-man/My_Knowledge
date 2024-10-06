import mongoose from "mongoose";

const connectDB = async () => {
  try {
    const mongoUrl = process.env.MONGO_URL;
    if (!mongoUrl) {
      throw new Error("MONGO_URL is not defined in environment variables.");
    }

    await mongoose.connect(mongoUrl);
    console.log("✅ MongoDB connection successful");
  } catch (error: unknown) {
    if (error instanceof Error) {
      console.error(`❌ MongoDB connection error: ${error.message}`);
    } else {
      console.error("❌ Unknown error occurred during MongoDB connection");
    }
    process.exit(1);
  }
};

export default connectDB;
