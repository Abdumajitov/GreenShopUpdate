import React, { useEffect } from "react";
import Home from "./components/Home";
import { useGetAllDataQuery } from "./toolkit/ProdSlice/prodApi";
import { useDispatch } from "react-redux";
import { saveDataToState } from "./toolkit/ProdSlice/prodSlice";
import Products from "./components/Products";
import Summer from "./components/Summer";
import OurBlog from "./components/OurBlog";
import Footer from "./components/Footer";
import Join from "./components/Join";

function App() {
  const dispatch = useDispatch();

  const { data, isLoading } = useGetAllDataQuery();

  useEffect(() => {
    if (!isLoading) {
      dispatch(saveDataToState(data));
    }
  }, [isLoading]);

  return (
    <div className="max-width">
      <Home />
      <Products />
      <Summer />
      <OurBlog />
      <Join />
      <Footer />
    </div>
  );
}

export default App;
