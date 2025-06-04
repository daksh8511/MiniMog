import mongoose from "mongoose";

export const ConnectDB = async () => {
  try {
    await mongoose.connect(`${process.env.MONGODB_URI}/products_data`);
    console.log("Database Are Conneted Successfully");
  } catch (error) {
    console.log("Database Error");
  }
};
