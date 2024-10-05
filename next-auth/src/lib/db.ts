import mongoose from "mongoose";

const connectDB = async () => {
  try {
    const MongoUrl = process.env.MONGODB_URL;
    if (!MongoUrl) throw new Error("Mongourl is not defined");

    await mongoose.connect(MongoUrl);
    console.log("MongoDB connected successfully");
  } catch (error: unknown) {
    if (error instanceof Error) {
      console.error(`❌ MongoDB connection error: ${error.message}`);
    } else {
      console.error(`�� MongoDB unknown connection error: ${error}`);
    }
    process.exit(1);
  }
};

export default connectDB;
