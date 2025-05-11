import {
  Facebook,
  Instagram,
  Twitter,
  LinkedIn,
  YouTube,
} from "@mui/icons-material";

const footerData = [
  {
    title: "My Account",
    items: ["My Account", "Our stores", "Contact us", "Career", "Specials"],
  },
  {
    title: "Help & Guide",
    items: [
      "Help Center",
      "How to Buy",
      "Shipping & Delivery",
      "Product Policy",
      "How to Return",
    ],
  },
  {
    title: "Categories",
    items: [
      "House Plants",
      "Potter Plants",
      "Seeds",
      "Small Plants",
      "Accessories",
    ],
  },
];

const socialIcons = [
  { icon: <Facebook className="text-green-700" />, href: "#" },
  { icon: <Instagram className="text-green-700" />, href: "#" },
  { icon: <Twitter className="text-green-700" />, href: "#" },
  { icon: <LinkedIn className="text-green-700" />, href: "#" },
  { icon: <YouTube className="text-green-700" />, href: "#" },
];

const paymentIcons = [
  "https://pngimg.com/uploads/paypal/paypal_PNG13.png",
  "https://pngimg.com/d/mastercard_PNG16.png",
  "https://upload.wikimedia.org/wikipedia/commons/4/41/Visa_Logo.png",
  "https://img.icons8.com/?size=512&id=13607&format=png",
];

const Footer = () => {
  return (
    <footer className="px-5 text-sm text-gray-700 mt-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {footerData.map((section, index) => (
          <div key={index}>
            <h3 className="p-text2">{section.title}</h3>
            <ul className="p-silent flex flex-col gap-2 mt-5">
              {section.items.map((item, i) => (
                <li key={i} className="hover:text-green-700 cursor-pointer">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}

        <div>
          <h3 className="font-semibold mb-4">Social Media</h3>
          <div className="flex gap-3 mt-5">
            {socialIcons.map((item, idx) => (
              <a
                key={idx}
                href={item.href}
                className="hover:scale-110 transition w-[30px] h-[30px] flex items-center justify-center border border-gray-300 rounded-[5px]"
              >
                {item.icon}
              </a>
            ))}
          </div>
          <h4 className="font-medium mt-10">We accept</h4>
          <div className="flex gap-4 mt-5">
            {paymentIcons.map((src, i) => (
              <img
                key={i}
                src={src}
                alt="payment"
                className="w-10 h-6 object-cover"
              />
            ))}
          </div>
        </div>
      </div>

      <div className="text-center text-xs mt-10 text-gray-500">
        © 2021 GreenShop. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
