import mongoose from "mongoose";

const dbConnection = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      dbName: "RESTAURANT",
    });
    console.log("Connected to the database successfully");
  } catch (err) {
    console.error(`Error connecting to the database: ${err.message}`);
    process.exit(1); 
  }
};

export default dbConnection;


