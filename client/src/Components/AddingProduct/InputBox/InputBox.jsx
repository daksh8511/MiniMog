import React, { useEffect } from "react";
import { useState } from "react";

import {useDispatch} from 'react-redux'

import { setInputs } from "../../../reducers/InputBoxSlices";

const InputBox = () => {
  const [product_name, setProductName] = useState("");
  const [price, setPrice] = useState("");
  const [ideal_for, setIdealFor] = useState("");
  const [typeOfGood, setTypeOfGood] = useState("");
  const [stock, setStock] = useState(0);

  const dispatch = useDispatch()


  const filledData = {
    product_name,price,ideal_for,typeOfGood,stock
  }

  useEffect(() => {
    dispatch(setInputs([filledData]))
  }, [product_name, price, ideal_for, typeOfGood, stock])


  return (
    <div className="grid grid-cols-3 gap-5 mt-10">
      <input
        type="text"
        placeholder="Enter Product Name"
        value={product_name}
        onChange={(e) => setProductName(e.target.value)}
      />
      <input
        type="text"
        placeholder="Enter Price"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
      />
      <input
        type="text"
        placeholder="Ideal For"
        value={ideal_for}
        onChange={(e) => setIdealFor(e.target.value)}
      />
      <input
        type="text"
        placeholder="Type Of Good"
        value={typeOfGood}
        onChange={(e) => setTypeOfGood(e.target.value)}
      />
      <input
        type="number"
        placeholder="Set Stock"
        value={stock}
        onChange={(e) => setStock(e.target.value)}
      />
    </div>
  );
};

export default InputBox;
