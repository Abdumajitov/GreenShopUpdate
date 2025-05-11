import React from "react";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";

const baner = [
  {
    id: 1,
    name: "Cactus & Succulent Care Tips",
    top: "September 12  I Read in 6 minutes",
    title: "Cacti are succulents are easy care plants for any home.",
    img: "/blog/01.png",
  },
  {
    id: 2,
    name: "Top 10 Succulents for Your",
    top: "September 13  I Read in 3 minutes",
    title: "Best in hanging baskets. Prefers medium to high light.",
    img: "/blog/02.png",
  },
  {
    id: 3,
    name: "Cacti & Succulent Care Tips",
    top: "September 14  I Read in 5 minutes",
    title: "Cacti and succulents thrive in containers and because.",
    img: "/blog/03.png",
  },
  {
    id: 4,
    name: "Best Houseplants Room by",
    top: "September 17  I Read in 9 minutes",
    title: "The benefits of houseplants are endless. In addition to..",
    img: "/blog/04.png",
  },
];
function OurBlog() {
  const [open, setOpen] = React.useState(false);

  const handleClick = (id) => {
    setOpen(id);
  };
  return (
    <div className="mt-20">
      <h1 className="text-[30px] font-Cera text-center">Our Blog</h1>
      <p className="p-silent text-center">
        We are an online plant shop offering a wide range of cheap and trendy
        plants.
      </p>
      <div className="grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] gap-3 px-5 mt-10">
        {baner.map((item) => (
          <div key={item.name} className="">
            <img className="" src={item.img} alt={item.name} />
            <div className="flex flex-col justify-between">
              <p className="p-active2 mt-5">{item.top}</p>
              <h1 className="text-[20px] font-Cera">{item.name}</h1>
              <p className="p-silent">{item.title}</p>
              <button
                onClick={() => handleClick(item.id)}
                className={`bg-transparent ${
                  open === item.id ? "text-[#46A46C]" : "text-black"
                } flex items-center mt-5 cursor-pointer`}
              >
                Read More <ArrowRightAltIcon />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default OurBlog;
