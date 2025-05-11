import React from "react";
import Range from "../ui/Range";
import {
  filter,
  saveChange,
  clearFilters,
} from "../toolkit/ProdSlice/prodSlice";
import { useDispatch, useSelector } from "react-redux";

const categorys = [
  "House Plants",
  "Potter Plants",
  "Seeds",
  "Small Plants",
  "Big Plants",
  "Succulents",
  "Trerrariums",
  "Gardening",
  "Accessories",
];

const size = ["Small", "Medium", "Large"];

function Category() {
  const dispatch = useDispatch();
  const { originalData, category: selectedCategory } = useSelector(
    (state) => state.ProdSlice
  );

  const categoryCounts = categorys.reduce((acc, cat) => {
    const count = originalData?.filter((item) => item.category === cat).length;
    acc[cat] = count;
    return acc;
  }, {});

  const getCategory = (item) => {
    dispatch(saveChange({ name: "category", value: item }));
    dispatch(filter());
  };

  const getCategorySize = (item) => {
    dispatch(saveChange({ name: "size", value: item }));
    dispatch(filter());
  };

  return (
    <div className="flex flex-col gap-4">
      <h2 className="p-text2">Category</h2>
      <div className="flex flex-col gap-5">
        {categorys.map((item) => (
          <div key={item} className="flex justify-between items-center px-5">
            <p
              onClick={() => getCategory(item)}
              className={`p-text cursor-pointer ${
                selectedCategory === item ? "p-active2" : ""
              }`}
            >
              {item}
            </p>
            <p
              className={`p-text cursor-pointer ${
                selectedCategory === item ? "p-active2" : ""
              }`}
            >
              ({categoryCounts[item] || 0})
            </p>
          </div>
        ))}
      </div>

      <h2 className="p-text2">Price Range</h2>
      <div className="">
        <Range />
      </div>

      <h2 className="p-text2">Size</h2>
      <div className="flex flex-col gap-5 mt-2">
        {size.map((item) => (
          <div key={item} className="flex justify-between items-center px-5">
            <p
              onClick={() => getCategorySize(item)}
              className="p-text cursor-pointer"
            >
              {item}
            </p>
          </div>
        ))}
      </div>
      <button className="btn" onClick={() => dispatch(clearFilters())}>Clear filters</button>
      <img className="max-lg:hidden" src="/sale.png" alt="" />
    </div>
  );
}

export default Category;
