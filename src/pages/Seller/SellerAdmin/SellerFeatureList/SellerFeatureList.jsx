import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { IoHome } from "react-icons/io5";
import { IoArrowForwardOutline } from "react-icons/io5";
import { MdArrowDownward } from "react-icons/md";
import { FaCircleUser } from "react-icons/fa6";
import { SellerTabAccAction } from "../../../../Redux/Action";
import { IoIosLogOut } from "react-icons/io";
import { LogoutSeller } from "../../../../components/SupportiveFunction/LogoutSeller";
const SellerFeatureList = () => {
  const list = [
    {
      Head: "DashBoard",
      icon: <IoHome />,
      subList: [
        { label: "Home", tab: "SellerHome" },
        { label: "Analytics", tab: "SellerAnalytic" },
        { label: "Widgets", tab: "SellerWidgets" },
      ],
    },
    {
      Head: "E-commerce",
      icon: <FaCircleUser />,
      subList: [
        { label: "Product Management", tab: "ProductManagement" },
        { label: "Product List", tab: "ProductList" },
      ],
    },
    {
      Head: "Log Out",
      icon: <IoIosLogOut />,
      subList: [
        { label: "Log Out", tab: "ProductManagement" },
        { label: "Product List", tab: "ProductList" },
      ],
    },
  ];
  const [indexForOpen, setIndexForOpen] = useState(null);
  const dispatch = useDispatch();
  const handleItemClick = (idx, tab, item) => {
    if (item == "Log Out") {
      LogoutSeller();
      return;
    }
    if (idx === indexForOpen) {
      // Clicked on the already opened table, close it
      setIndexForOpen(null);
    } else {
      // Clicked on a different table, toggle it and dispatch navigation action
      setIndexForOpen(idx);
    }
  };
  return (
    <div className="flex  bg-gray-800    min-h-screen px-3 select-none">
      <div>
        {list.map((item, idx) => (
          <div className="my-3" key={idx}>
            <div
              onClick={() =>
                handleItemClick(idx, item.subList[0]?.tab, item.Head)
              }
              className="cursor-pointer justify-between flex items-center gap-x-3"
            >
              {item.icon} {item.Head}{" "}
              {idx !== indexForOpen ? (
                <IoArrowForwardOutline />
              ) : (
                <MdArrowDownward />
              )}
            </div>
            {idx !== indexForOpen ? (
              ""
            ) : (
              <ul className="px-4 bg-blue-900 py-3">
                {item.subList.map((subItem, subIdx) => (
                  <li 
                    onClick={() => dispatch(SellerTabAccAction(subItem.tab))}
                    key={subIdx}
                    className="cursor-pointer flex gap-x-3 items-center py-2 my-4 border-b-2"
                  >
                    {subItem.label}
                    <IoArrowForwardOutline />
                  </li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default SellerFeatureList;
