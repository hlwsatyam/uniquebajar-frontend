import React from "react";

const PriceHeader = ({ soldBy, delDate, price, realPrice, OfferPresent }) => {
  return (
    <div className=" my-2  border-b-2  p-3">
      <div className="flex justify-between items-center ">
        <p>
          {" "}
          <span className="font-bold"> ₹{price}.00</span>{" "}
          <span className="font-bold  px-1 py-1 bg-green-400 ml-4 rounded">
            {" "}
            {OfferPresent}% Off
          </span>{" "}
        </p>
        <p className="text-[10px]">T&C Apply</p>
      </div>

      <p className="text-[12px] my-2">
        {" "}
        M.R.P:₹<span className="line-through">{realPrice}</span> (Inc. of all
        taxes){" "}
      </p>
      <p className="text-[13px]">
        Sold By :  {soldBy}
      </p>
      <p className="text-[12px] my-1">
        {" "}
        Delivery Between <span> {delDate} </span>{" "}
      </p>
    </div>
  );
};

export default PriceHeader;
