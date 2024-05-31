import React, { useState } from "react";

import Items from "../../../Items/Items";

const ProceedingBanner = ({cartProceedList}) => {

  return (
    <div className="my-2 p-4 rounded-[12px] bg-green-200 justify-around  flex">
      {cartProceedList.map((item, idx) => (
        <div>
          {" "}
          <p className="text-center">
            {" "}
            <span
              className={
                !item.done
                  ? "bg-green-700 w-[40px]  leading-[40px] text-white font-bold inline-block rounded-full"
                  : ""
              }
            >
              {" "}
              {item.done ? item.tickMarks : item.default}
            </span>
          </p>{" "}
          <p className="text-center"> {item.title}</p>{" "}
        </div>
      ))}
    </div>
  );
};

export default ProceedingBanner;
