import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addProductImage,removeProductImage } from "../../../reducers/ProductImage";

const ProductImage = () => {
  const [productImageText, setProductImageText] = useState("");
  const [productImages, setProductImages] = useState([]);

  const productImageSlice = useSelector((state) => {
    return state.ProductImageSlice
  })

  const dispatch = useDispatch()

  const handleAddImage = () => {
    const trimmed = productImageText.trim();
    if (trimmed && !productImages.includes(trimmed)) {
      const updated = [...productImages, trimmed]
      setProductImages([...productImages, trimmed]);
      dispatch(addProductImage(updated))
    }
    setProductImageText("");
  };

  const removeImage = (myImage) => {
    setProductImages(productImages.filter((images) => images !== myImage));
    dispatch(removeProductImage(myImage))
  };

  return (
    <div>
      <div className="flex justify-between">
        <input
          type="text"
          placeholder="Add Image URL"
          onChange={(e) => setProductImageText(e.target.value)}
          value={productImageText}
          className="border w-60 ps-2"
        />
        <button
          className="px-5 py-2 bg-black text-white"
          onClick={handleAddImage}
        >
          Add
        </button>
      </div>

      <ul
        className={`mt-2 p-2 gap-3 ${
          productImages.length === 0 ? "hidden" : "flex border"
        }`}
      >
        {productImages.map((img, i) => (
          <img
            src={img}
            onClick={() => removeImage(img)}
            key={i}
            className="w-10 p-1 cursor-pointer"
          />
        ))}
      </ul>
    </div>
  );
};

export default ProductImage;
