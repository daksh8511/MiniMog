import mongoose from "mongoose";

const ProductSchema = new mongoose.Schema({
  product_name: { type: String, required: true, unique: true },
  price: { type: String, required: true },
  ideal_for: { type: String, required: true },
  typeOfGood: { type: String, required: true },
  color: { type: [String], default: [] },
  product_images: { type: [String], default: [] },
  rating: { type: Number, default: 0 },
  description: { type: String, default: "" },
  stock: { type: Number, default: 0 },
  isOffer: { type: Boolean, default: false },
});

const ProductModel = mongoose.model("products", ProductSchema);

export default ProductModel;
