import React, { useState } from "react";

const ProductColorImage = () => {
  const [colorImage, setColorImage] = useState([])
  const [colorImageText, setColorImageText] = useState('')

  const handleButton = () => {
    setColorImage([...colorImage, colorImageText])
    setColorImageText('')
  }

  const removeColorImage = (cImg) => {
    setColorImage(colorImage.filter((color) => color !== cImg))
  }

  return (
    <div>
      <div className="flex justify-between">
        <input
          type="text"
          placeholder="Add Color Image URL"
          className="border w-60 ps-2"
          value={colorImageText}
          onChange={(e) => setColorImageText(e.target.value)}
        />
        <button onClick={handleButton} className="px-5 py-2 bg-black text-white">Add</button>
      </div>

      <ul  className={`mt-2 p-2 gap-3 ${
          colorImage.length === 0 ? "hidden" : "flex border"
        }`}>
        {
          colorImage.length == 0 ? '' : (
            colorImage.map((items, i) => {
              return(
                <li key={i} onClick={() => removeColorImage(items)}>{items}</li>
              )
            })
          )
        }
      </ul>
    </div>
  );
};

export default ProductColorImage;
