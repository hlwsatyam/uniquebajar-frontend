import React, { useState } from "react";
import { IoIosClose } from "react-icons/io";
import SellerTabHead from "../../../../../components/Reusable/SellerTabHead";
import SellerOrderedProductList from "../../../../../components/Reusable/SellerOrderedProductList";
function SellerHome() {
  return (
    <div>
      <SellerTabHead title={"Dashboard"} />
      <div>
        {/* <MarketStats TotalEarning={560} /> */}
        <SellerOrderedProductList />
      </div>
    </div>
  );
}

export default SellerHome;

export const SellerFooter = () => (
  <div className=" text-center py-12 text-sm   ">
    {" "}
    Unique Bajar Dashboard-Admin Template Made By{" "}
    <a
      href="https://rvbmuniverse.com/"
      target="_blank"
      className="text-blue-400 font-bold"
    >
      {" "}
      RVBM UNIVERSE{" "}
    </a>{" "}
  </div>
);
const MarketStats = ({ TotalEarning }) => {
  const [shown, setShown] = useState(true);
  const changeVisiblity = () => setShown(!shown);
  return (
    <div
      className={`p-4 shadow my-6 bg-blue-950 ${shown ? "block" : "hidden"} `}
    >
      <p className="flex items-center justify-between">
        <span>Market Stats</span>
        <IoIosClose className="cursor-pointer" onClick={changeVisiblity} />
      </p>
      <p className="text-3xl font-thin "> ₹{TotalEarning} Earned</p>
    </div>
  );
};
