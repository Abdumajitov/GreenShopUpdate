import React from "react";

const sum = [
  {
    id: 1,
    name: "Summer cactus & succulents",
    about:
      "We are an online plant shop offering a wide range of cheap and trendy plants",
    img: "/prod/p6.png",
  },
  {
    id: 2,
    name: "Styling Trends & much more",
    about:
      "We are an online plant shop offering a wide range of cheap and trendy plants",
    img: "/prod/p5.png",
  },
];
function Summer() {
  return (
    <div className="flex justify-between gap-5 max-lg:flex-col mt-20 px-5">
      {sum.map((item) => (
        <div key={item.id} className="flex justify-between items-center gap-2">
          <img className="" src={item.img} alt={item.name} />
          <div className="text-end ">
            <h1 className="text-[20px] font-Cera">{item.name}</h1>
            <p className="p-silent mt-5">{item.about}</p>
            <button className="btn mt-5">Find More</button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Summer;
