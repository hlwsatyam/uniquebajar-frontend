import React from "react";
import refundMoney from "../../../../../assets/Background/money.png";
import { Link } from "react-router-dom";
function Refund() {
  return (
    <div>
      <BlankRefund />
    </div>
  );
}

export default Refund;

const BlankRefund = () => {
  return (
    <div className="my-12">
      <img className="m-auto w-[100px] " src={refundMoney} alt="" />
      <p className="text-center font-bold">There are no refunds to show</p>
      <p className="text-center font-bold">
        You haven’t placed any refund request yet. Get help with returns and
        refunds.
      </p>
      <div className="text-center my-4">
        <button className="bg-green-500 text-white py-2 px-12  rounded-full font-bold text-sm">
          <Link to="/faq"> Need Help </Link>
        </button>
      </div>
    </div>
  );
};
