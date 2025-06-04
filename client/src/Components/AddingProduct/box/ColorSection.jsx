import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addColors, removeColor } from "../../../reducers/ColorSlice";

const ColorSection = () => {
  const [colorText, setColorText] = useState("");
  const [colors, setColors] = useState([]);

  const dispatch = useDispatch();
  const selector = useSelector((state) => {
      return state.ColorSlice
  });

  const handleAddColor = () => {
    const trimmed = colorText.trim();
    if (trimmed && !colors.includes(trimmed)) {
      const updated = [...colors, trimmed]
      setColors([...colors, trimmed]);
      dispatch(addColors(updated))
    }
    setColorText("");
  };

  const handleRemoveColor = (colorToRemove) => {
    setColors(colors.filter((color) => color !== colorToRemove));
    dispatch(removeColor(colorToRemove));
  };

  console.log(selector);

  return (
    <div>
      <div className="flex justify-between">
        <input
          type="text"
          placeholder="Add Colors"
          value={colorText}
          onChange={(e) => setColorText(e.target.value)}
          className="border w-60 ps-2"
        />
        <button
          className="px-5 py-2 bg-black text-white"
          onClick={handleAddColor}
        >
          Add
        </button>
      </div>

      <ul
        className={`mt-2 p-2 gap-3 ${
          colors.length === 0 ? "hidden" : "flex border"
        }`}
      >
        {colors.map((color, i) => (
          <li
            key={i}
            className="border p-1 cursor-pointer"
            onClick={() => handleRemoveColor(color)}
          >
            {color}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ColorSection;
