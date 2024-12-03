import mongoose from "mongoose";

export const connectDb = async () => {
  try {
    console.log("process.env.MONGO_URI", process.env.MONGO_URI);
    const conn = await mongoose.connect(process.env.MONGO_URI);
    console.log(`MongoDb connected: ${conn.connection.host}`);
  } catch (error) {
    console.error(`Error connecting to MongoDB: ${error.message}`);
    process.exit(1); //1 for failure 0 for success
  }
};
