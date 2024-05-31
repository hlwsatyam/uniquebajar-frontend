import React from "react";
import { IoDiamond } from "react-icons/io5";
import SellerTabHead from "../../../../../components/Reusable/SellerTabHead";
function SellerWidgets() {
  return (
    <div>
      <TopProfit totalEarning={"576"} />
    </div>
  );
}

export default SellerWidgets;

const TopProfit = ({ totalEarning }) => {
  return (
    <div>
      <SellerTabHead title={"Widgets"} />
      <div className="bg-blue-900  my-4 shadow p-4 rounded ">
        <div className="flex items-center gap-x-3 text-2xl">
          <IoDiamond className="text-5xl" />{" "}
          <div>
            <p>Total Profit</p>
            <p>₹ {totalEarning} </p>
          </div>
        </div>
        <div className="flex justify-between items-center gap-x-4">
          <div>
            <p>Last Month</p>
            <p>₹ {totalEarning} </p>
          </div>
          <div>
            <p>Last Week</p>
            <p className="text-xl ">₹ {totalEarning} </p>
          </div>
        </div>
      </div>
    </div>
  );
};
