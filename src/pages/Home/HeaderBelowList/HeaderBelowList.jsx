import React, { useState } from "react";
import { FaAppleWhole } from "react-icons/fa6";
import { GiCoolSpices } from "react-icons/gi";
import { VscMirror } from "react-icons/vsc";
import { Link } from "react-router-dom";
import { GiPowder } from "react-icons/gi";
import { ImSpoonKnife } from "react-icons/im";
import { MdMicrowave } from "react-icons/md";
import { BiHome, BiMobile } from "react-icons/bi";
const categories = [
  {
    icon: BiHome,
    text: "Home",
    link: "/",
  },
  {
    icon: GiCoolSpices,
    text: "Caring Products",

    // subcategory: [
    //   {
    //     subcategoryName: "Facewash",
    //   },
    //   {
    //     subcategoryName: "Lotion",
    //   },
    //   {
    //     subcategoryName: "Oil",
    //   },
    //   {
    //     subcategoryName: "Shop",
    //   },
    // ],
  },
  {
    icon: VscMirror,
    text: "Cloth",
    // subcategory: [
    //   {
    //     subcategoryName: "Shirt",
    //   },
    //   {
    //     subcategoryName: "Jeans",
    //   },
    //   {
    //     subcategoryName: "Saari",
    //   },
    //   {
    //     subcategoryName: "Lehenga",
    //   },
    //   {
    //     subcategoryName: "Suit",
    //   },
    //   {
    //     subcategoryName: "Jacket",
    //   },
    //   {
    //     subcategoryName: "Frak",
    //   },
    //   {
    //     subcategoryName: "Frak",
    //   },
    //   {
    //     subcategoryName: "Skirt",
    //   },
    // ],
  },
  {
    icon: BiMobile,
    text: "Mobiles",

    // subcategory: [
    //   {
    //     subcategoryName: "Mi",
    //     // againSubCategory: [
    //     //   // { subcategoryName: "Almonds" },
    //     //   // { subcategoryName: "Raisins" },
    //     //   // { subcategoryName: "Munnakka" },
    //     //   // { subcategoryName: "Nuts Dry Fruit Mix" },
    //     // ],
    //   },
    //   {
    //     subcategoryName: "Oppo",
    //     // againSubCategory: [
    //     //   // { subcategoryName: "Almonds" },
    //     //   // { subcategoryName: "Raisins" },
    //     //   // { subcategoryName: "Munnakka" },
    //     //   // { subcategoryName: "Nuts Dry Fruit Mix" },
    //     // ],
    //   },
    //   { subcategoryName: "Vivo" },
    //   { subcategoryName: "Samsung" },
    // ],
  },
  { icon: ImSpoonKnife, text: "Kitchen" },
  {
    icon: MdMicrowave,
    text: "Electronics",

    // subcategory: [
    //   {
    //     subcategoryName: "Micro-Wave",
    //     // againSubCategory: [
    //     //   // { subcategoryName: "Almonds" },
    //     //   // { subcategoryName: "Raisins" },
    //     //   // { subcategoryName: "Munnakka" },
    //     //   // { subcategoryName: "Nuts Dry Fruit Mix" },
    //     // ],
    //   },
    //   {
    //     subcategoryName: "Headphones",
    //     // againSubCategory: [
    //     //   // { subcategoryName: "Almonds" },
    //     //   // { subcategoryName: "Raisins" },
    //     //   // { subcategoryName: "Munnakka" },
    //     //   // { subcategoryName: "Nuts Dry Fruit Mix" },
    //     // ],
    //   },
    //   {
    //     subcategoryName: "Laptops",
    //     // againSubCategory: [
    //     //   // { subcategoryName: "Almonds" },
    //     //   // { subcategoryName: "Raisins" },
    //     //   // { subcategoryName: "Munnakka" },
    //     //   // { subcategoryName: "Nuts Dry Fruit Mix" },
    //     // ],
    //   },
    //   {
    //     subcategoryName: "Camera",
    //     // againSubCategory: [
    //     //   // { subcategoryName: "Almonds" },
    //     //   // { subcategoryName: "Raisins" },
    //     //   // { subcategoryName: "Munnakka" },
    //     //   // { subcategoryName: "Nuts Dry Fruit Mix" },
    //     // ],
    //   },
    //   {
    //     subcategoryName: "Television",
    //     // againSubCategory: [
    //     //   // { subcategoryName: "Almonds" },
    //     //   // { subcategoryName: "Raisins" },
    //     //   // { subcategoryName: "Munnakka" },
    //     //   // { subcategoryName: "Nuts Dry Fruit Mix" },
    //     // ],
    //   },

    //   // { subcategoryName: "Munnakka" },
    //   // { subcategoryName: "Nuts Dry Fruit Mix" },
    //   // { subcategoryName: "Dry Dates" },
    //   // { subcategoryName: "Cashew nut" },
    //   // { subcategoryName: "Roasted Pistachios" },
    //   // { subcategoryName: "Akhroat" },
    //   // { subcategoryName: "Makhana" },
    //   // { subcategoryName: "Dried fig Anjeer" },
    //   // { subcategoryName: "Peanut" },
    // ],
  },
];
function HeaderBelowList() {
  const [hoveredSubcategory, setHoveredSubcategory] = useState(null);
  const handleMouseEnter = (subCategory) => {
    setHoveredSubcategory(subCategory);
  };
  const handleMouseLeave = () => {
    setHoveredSubcategory(null);
  };
  return (
    <div className="flex items-center my-1 justify-center gap-x-0 sm:gap-x-12">
      {categories.map((category, index) => (
        <div key={index} className="relative group ">
          <Link
            to={category?.link}
            className="text-[12px] sm:text-xl flex items-center gap-x-2"
          >
            <category.icon className="text-red-500" /> {category.text}
          </Link>
          {category.subcategory && (
            <div
              className={
                index > categories.length / 2
                  ? "hidden  transition ease-in-out delay-700 w-[200px]   bg-green-500 absolute top-7 left-[-120px]  p-2 shadow-2xl border-gray-300  rounded-md group-hover:block"
                  : "hidden  transition ease-in-out delay-700 w-[200px]   bg-green-500 absolute top-7 left-0  p-2 shadow-2xl border-gray-300  rounded-md group-hover:block"
              }
            >
              <div className="flex flex-col space-y-2">
                {category.subcategory.map((item, subIndex) => (
                  <div
                    key={subIndex}
                    className="relative group"
                    onMouseEnter={() => handleMouseEnter(item.subcategoryName)}
                    onMouseLeave={handleMouseLeave}
                  >
                    <Link
                      className="text-white"
                      to={`/search/${item.subcategoryName.toLowerCase()}`}
                    >
                      {item.subcategoryName}
                    </Link>
                    {item.againSubCategory &&
                      hoveredSubcategory === item.subcategoryName && (
                        <div className="hidden text-black absolute top-0 left-full bg-white p-2 border border-gray-300 shadow-md rounded-md group-hover:block">
                          {item.againSubCategory.map((subItem, subSubIndex) => (
                            <div key={subSubIndex}>
                              <Link className="text-black">
                                {subItem.subcategoryName}
                              </Link>
                            </div>
                          ))}
                        </div>
                      )}
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
export default HeaderBelowList;
