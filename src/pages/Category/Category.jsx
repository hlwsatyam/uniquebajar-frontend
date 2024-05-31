import React from "react";

import { FaAppleWhole } from "react-icons/fa6";
import { GiCoolSpices } from "react-icons/gi";
import { VscMirror } from "react-icons/vsc";
import { Link } from "react-router-dom";
import { GiPowder } from "react-icons/gi";
import { ImSpoonKnife } from "react-icons/im";
import { MdMicrowave } from "react-icons/md";
const categories = [
  {
    icon: FaAppleWhole,
    text: "Dry Fruits",
    link: "/dry_fruits",
    tag: "Fruits, Dry Fruits, Fresh Fruits ",
  },
  {
    icon: GiCoolSpices,
    text: "Spices",
    link: "/spices",
    tag: "Fruits, Dry Fruits, Fresh Fruits ",
  },
  { icon: VscMirror, text: "Fashion", link: "/fashion", tag: "daal, puls" },
  {
    icon: GiPowder,
    text: "Beauty",
    link: "/beauty",
    tag: "baby care, home care, fashwash, powder",
  },
  {
    icon: ImSpoonKnife,
    text: "Kitchen",
    link: "/kitchen",
    tag: "home decor,prayer,tableware,microwave, heater",
  },
  {
    icon: MdMicrowave,
    text: "Electronics",
    link: "/electronics",
    tag: "Tv,Router,Lamp,Fan, Pump",
  },
];

function Category() {
  return (
    <div className="flex  justify-start my-1  flex-col gap-y-14 sm:gap-x-12">
      {categories.map((category, index) => (
        <div className="border-b-2 pb-3 px-3" >
          <Link
            key={index}
            to={category.link}
            className="text-2xl  flex items-center gap-x-2"
          >
            <category.icon className="text-red-500 text-6xl " /> {category.text}
          </Link>
          <p> {category.tag}</p>
        </div>
      ))}
    </div>
  );
}

export default Category;
