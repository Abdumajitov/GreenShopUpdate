import * as React from "react";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import { useDispatch, useSelector } from "react-redux";
import { saveChange, filter } from "../toolkit/ProdSlice/prodSlice";

export default function Range() {
  const dispatch = useDispatch();

  const handleChange = (event, newValue) => {
    dispatch(saveChange({ name: "price", value: newValue }));
    dispatch(filter());
  };

  const data = useSelector((state) => state.ProdSlice);

  return (
    <Box sx={{ width: 300 }}>
      <Slider
        value={data.price}
        onChange={handleChange}
        valueLabelDisplay="auto"
        disableSwap
        color="success"
        min={0}
        max={250}
      />

      <div className="flex gap-2 items-center">
        <p>Price:</p>
        <p className="p-active2">${data.price[0]}</p>
        <span className="p-active2">-</span>
        <p className="p-active2">${data.price[1]}</p>
      </div>
    </Box>
  );
}
