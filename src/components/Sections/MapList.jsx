import React, { useState } from "react";

const ListBanner = ({ list, selectedVal, textInCenter, ...style }) => {
  const [selectedItem, setSelectedItem] = useState(0);

  const handleItemClick = (index) => {
    setSelectedItem(index);
    selectedVal(index);
  };

  return (
    <div {...style}>
      {list.map((item, idx) => (
        <p
          key={idx}
          className={
            textInCenter
              ? `py-2 font-semibold rounded-full cursor-pointer w-full text-center ${
                  selectedItem === idx
                    ? "bg-green-500 text-white"
                    : " text-black"
                }`
              : `py-2 font-semibold rounded-full cursor-pointer w-full ${
                  selectedItem === idx
                    ? "bg-green-500 text-white"
                    : " text-black"
                }`
          }
          onClick={() => handleItemClick(idx)}
        >
          {item.text}
        </p>
      ))}
    </div>
  );
};

export default ListBanner;
