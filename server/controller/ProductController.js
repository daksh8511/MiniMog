import ProductModel from "../models/ProductModel.js";

export const AddProduct = async (req, res) => {
  const {
    product_name,
    price,
    ideal_for,
    typeOfGood,
    rating,
    color,
    product_images,
    description,
    stock,
    isOffer,
  } = req.body;

  try {
    const products = new ProductModel({
      product_name,
      price,
      ideal_for,
      typeOfGood,
      rating,
      color,
      product_images,
      description,
      stock,
      isOffer,
    });

    await products.save();

    return res.json({
      success: true,
      message: "Product are Successfully Added.",
    });
  } catch (error) {
    return res.json({ success: false, message: error });
  }
};

export const GetAllProduct = async (req, res) => {
  try {
    const getProduct = await ProductModel.find({});

    return res.json({
      success: true,
      message: "Successfully fetched",
      products: getProduct,
    });
  } catch (error) {
    return res.json({ success: false, message: "Fail Fetch" });
  }
};