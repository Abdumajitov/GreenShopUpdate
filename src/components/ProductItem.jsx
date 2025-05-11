import React from "react";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

function ProductItem({ filteredData, postPage, lastIndex }) {
  return (
    <div className="grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] gap-3">
      {filteredData && filteredData.length > 0 ? (
        filteredData.slice(postPage, lastIndex).map((product) => (
          <div
            key={product.id}
            className="cursor-pointer group relative min-h-[100px]"
          >
            {/* Product Img */}
            <div className="relative">
              <img
                className=" "
                src={`/prod/${product.img}`}
                alt={product.name}
              />
              {product.sale && (
                <div className="absolute top-0 left-0 bg-[#46A46C] text-white px-5">
                  13% OFF
                </div>
              )}
            </div>

            {/* Product Name */}
            <h1 className="p-text mt-1">{product.name}</h1>

            {/* Price yoki Button Wrapper */}
            <div className="relative h-8 mt-2">
              {/* Price */}
              <div className="flex gap-2 items-center absolute inset-0 transition-opacity duration-300 group-hover:opacity-0">
                <p className="p-active2 text-sm">${product.price}</p>
                {product.sale && (
                  <p className="p-silent line-through text-sm">
                    ${product.price * 2}.00
                  </p>
                )}
              </div>

              {/* Add to Cart Button */}
              <div className="absolute inset-0 flex opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <button className="btn btn2 w-full h-full text-sm text-center flex items-center justify-center gap-2">
                  Add to Cart <ShoppingCartIcon fontSize="small"/>
                </button>
              </div>
            </div>
          </div>
        ))
      ) : (
        <div className="flex justify-center items-center h-screen">
          <h1 className="p-text2">No products found</h1>
        </div>
      )}
    </div>
  );
}

export default ProductItem;
