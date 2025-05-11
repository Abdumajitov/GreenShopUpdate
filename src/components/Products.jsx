import React from "react";
import { useSelector } from "react-redux";
import Category from "./Category";
import TopCategory from "./TopCategory";
import { useState } from "react";
import CustomPagination from "../ui/CustomPagination";
import ProductItem from "./ProductItem";

function Products() {
  const { filteredData } = useSelector((state) => state.ProdSlice);
  const [openFilter, setOpenFilter] = useState(false);

  const [page, setPage] = useState(1);
  const [lowPage, setLowPage] = useState(9);

  const lastIndex = page * lowPage;
  const postPage = lastIndex - lowPage;
  return (
    <div className="mt-20 flex gap-13">
      <div className="max-lg:hidden">
        <Category />
      </div>
      <div className=" w-full">
        <div className="max-lg:hidden">
          <TopCategory />
        </div>
        <div className="min-lg:hidden px-5">
          <button
            onClick={() => setOpenFilter(!openFilter)}
            className="btn-filter"
          >
            {openFilter ? "Close" : "Open"} Filter
          </button>
        </div>
        <div className="px-5">{openFilter && <Category />}</div>

        <div className=" mt-10 px-5">
          <ProductItem
            filteredData={filteredData}
            postPage={postPage}
            lastIndex={lastIndex}
          />
        </div>
        <div className="">
          <CustomPagination
            count={Math.ceil(filteredData?.length / lowPage)}
            page={page}
            setPage={setPage}
          />
        </div>
      </div>
    </div>
  );
}

export default Products;
