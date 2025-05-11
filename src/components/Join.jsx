import React from "react";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import EmailIcon from "@mui/icons-material/Email";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";

const joinData = [
  {
    img: "/join1.png",
    name: "Garden Care",
    about:
      "We are an online plant shop offering a wide range of cheap and trendy plants.",
  },
  {
    img: "/join2.png",
    name: "Plant Renovation",
    about:
      "We are an online plant shop offering a wide range of cheap and trendy plants.",
  },
  {
    img: "join1.png",
    name: "Watering Graden",
    about:
      "We are an online plant shop offering a wide range of cheap and trendy plants.",
  },
];
function Join() {
  return (
    <div className="mt-20">
      <div className="flex flex-wrap gap-10">
        {joinData.map((item) => (
          <div
            key={item.name}
            className="w-[250px] relative border-r border-[#46a46c3a] px-5 max-md:w-full"
          >
            <img className="" src={item.img} alt={item.name} />
            <div className=" absolute top-3 left-[-20px] bg-[#46a46c27] rounded-full w-20 h-20 z-[-1]"></div>
            <h1 className="text-[20px] font-Cera">{item.name}</h1>
            <p className="p-silent">{item.about}</p>
          </div>
        ))}
        <div className="w-[300px] px-5 max-md:w-full">
          <p className="text-[20px] font-Cera">
            Would you like to join newsletters?
          </p>
          <div className=" shadow-2xl w-full h-10 flex items-center justify-between mt-5">
            <input className="w-full h-full" type="text" name="" id="" />
            <button className="w-30 h-full bg-[#46A46C] rounded-r-md text-white cursor-pointer">
              Join
            </button>
          </div>
          <p className="p-silent mt-5">
            We usually post offers and challenges in newsletter. We’re your
            online houseplant destination. We offer a wide range of houseplants
            and accessories shipped directly from our (green)house to yours!
          </p>
        </div>
      </div>

      <div className="flex justify-between items-center mt-10 bg-[#46A3581A] px-5 py-5 flex-wrap gap-5">
        <img src="/logo.png" alt="" />
        <p className="p-text">
          <span className="text-[#46A46C]">
            <LocationOnIcon />
          </span>
          70 West Buckingham Ave. Farmingdale, NY 11735
        </p>
        <p className="p-text">
          <span className="text-[#46A46C]">
            <EmailIcon />
          </span>
          contact@greenshop.com
        </p>
        <p className="p-text">
          <span className="text-[#46A46C]">
            <LocalPhoneIcon />
          </span>
          +88 01911 717 490
        </p>
      </div>
    </div>
  );
}

export default Join;
