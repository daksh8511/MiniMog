import { useEffect, useState } from "react";
import styled from "styled-components";
import InputBox from "./InputBox/InputBox";
import ColorSection from "./box/ColorSection";
import ProductImage from "./box/ProductImage";
import { useSelector } from "react-redux";

const AddingProduct = () => {
  const [description, setDescription] = useState("");

  const inputSelector = useSelector((state) => {
    if (state.inputSlice[0] == undefined) {
      return [];
    }
    return state.inputSlice[0];
  });

  const colorSelector = useSelector((state) => {
    return state.ColorSlice;
  });

  const productImageSelector = useSelector((state) => {
    return state.ProductImageSlice;
  });

  const [isOffer, setOffer] = useState(false);

  const selectTheValue = (event) => {
    setOffer(event.target.value);
  };

  const addProducts = () => {
    fetch("http://127.0.0.1:4000/api/post-product/product-adding", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        product_name: inputSelector.product_name,
        price: inputSelector.price,
        ideal_for: inputSelector.ideal_for,
        typeOfGood: inputSelector.typeOfGood,
        stock: inputSelector.stock,
        color: colorSelector,
        product_images: productImageSelector,
        description: description,
        isOffer: isOffer,
      }),
    })
      .then((succ) => console.log("successfully added"))
      .catch((err) => console.log(err));
  };


  return (
    <Wrapper className="p-5">
      <h2 className="text-5xl">Adding Products</h2>

      {/* input boxes */}
      <InputBox />

      <textarea
        name="description"
        placeholder="Product Description"
        rows={3}
        cols={52}
        value={description}
        className="border p-3 mt-3"
        onChange={(e) => setDescription(e.target.value)}
      ></textarea>

      <div className="grid grid-cols-4 gap-5">
        {/* color added section */}
        <ColorSection />

        {/* image section */}
        <ProductImage />
      </div>

      <div className="my-3 flex items-center gap-1">
        <h4>Is Offer</h4>
        <select
          name="isOffer"
          className="border"
          onChange={selectTheValue}
          id=""
        >
          <option value="false">No</option>
          <option value="true">Yes</option>
        </select>
      </div>

      <button
        className="bg-black text-white px-10 py-2 mt-4 cursor-pointer"
        onClick={addProducts}
      >
        Adding Products
      </button>
    </Wrapper>
  );
};

export default AddingProduct;

const Wrapper = styled.div`
  input {
    border: 1px solid #000;
    padding: 5px;
  }
`;
