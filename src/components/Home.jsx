import React from "react";
import SwiperGreen from "../ui/SwiperGreen";

const baner = [
  {
    text1: "Welcome to GreenShop",
    text2: "Let’s Make a Better",
    span: "Planet",
    text3:
      "We are an online plant shop offering a wide range of cheap and trendy plants. Use our plants to create an unique Urban Jungle. Order your favorite plants!",
    btn: "Shop Now",
    img: "/home.png",
  },
  {
    text1: "Discover Our New Arrivals",
    text2: "Explore Our Latest",
    span: "Today",
    text3:
      "Check out our latest additions to the GreenShop family. From rare plants to unique planters, we've got you covered. Order your favorite plants!",
    btn: "Explore Now",
    img: "/home2.webp",
  },
];
function Home() {
  return (
    <div className="">
      <SwiperGreen baner={baner} />
    </div>
  );
}

export default Home;
