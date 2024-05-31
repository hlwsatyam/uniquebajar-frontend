import React from "react";
import { BsPencilFill } from "react-icons/bs";
import { SelectAddress } from "../../../components/SupportiveFunction/SelectAddress";
function Deliverto({ isAvlaible, location }) {
  return (
    <div className="p-3 border-b-2 my-2">
      <p className="text-xl font-bold my-1">Delever to</p>
      <p className="flex justify-between items-start">
        {" "}
        <span>{location} </span>
        <BsPencilFill
          onClick={SelectAddress}
          className=" cursor-pointer text-2xl"
        />
      </p>
      <p>
        {" "}
        {isAvlaible ? (
          <span className="text-green-500 text-[12px] ">
            {" "}
            Available In Your Area{" "}
          </span>
        ) : (
          <span className="text-red-500 text-[12px] ">
            {" "}
            Not Available In Your Area{" "}
          </span>
        )}{" "}
      </p>
    </div>
  );
}

export default Deliverto;
