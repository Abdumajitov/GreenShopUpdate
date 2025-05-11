import React from "react";
import { useDispatch } from "react-redux";
import {
  clearFilters,
  saveChange,
  filter,
  sortData
} from "../toolkit/ProdSlice/prodSlice";

function TopCategory() {
  const dispatch = useDispatch();
  const [activeTab, setActiveTab] = React.useState("all");

  const handleChange = (sale) => {
    dispatch(saveChange({ name: "sale", value: sale }));
    dispatch(filter());
  };

  return (
    <div className="flex justify-between items-center">
      <div className="flex gap-10">
        <p
          onClick={() => {
            dispatch(clearFilters());
            setActiveTab("all");
          }}
          className={`p-text cursor-pointer ${
            activeTab === "all" ? "p-active2" : ""
          }`}
        >
          All Plants
        </p>
        <p
          onClick={() => setActiveTab("new")}
          className={`p-text cursor-pointer ${
            activeTab === "new" ? "p-active2" : ""
          }`}
        >
          New Arrivals
        </p>
        <p
          onClick={() => {
            handleChange("sale");
            setActiveTab("sale");
          }}
          className={`p-text cursor-pointer ${
            activeTab === "sale" ? "p-active2" : ""
          }`}
        >
          Sale
        </p>
      </div>

      <div className="flex gap-2 items-center">
        <p className="p-text">Sort by:</p>
        <select
          className="p-text"
          onChange={(e) => dispatch(sortData(e.target.value))}
        >
          <option value="default">Default sorting</option>
          <option value="max">Max Price</option>
          <option value="min">Min Price</option>
        </select>
      </div>
    </div>
  );
}

export default TopCategory;
