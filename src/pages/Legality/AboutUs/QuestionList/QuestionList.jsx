import React, { useState } from "react";
import { CiSquarePlus, CiSquareMinus } from "react-icons/ci";
const QuestionList = () => {
  const [PanelStatus, setPanelStatus] = useState({
    q1: true,
    q2: false,
    q3: false,
  });
  const panelStatusChangeHandler = (qNo) => {
    setPanelStatus((prevStat) => ({ ...prevStat, [qNo]: !prevStat[qNo] }));
  };

  return (
    <div>
      <div className="my-2">
        <p
          onClick={() => panelStatusChangeHandler("q1")}
          className="flex items-center cursor-pointer  justify-between bg-gradient-to-r
from-green-900 to-blue-500 text-white p-2 font-bold "
        >
          {" "}
          <span>What is UniqueBazar</span>
          {PanelStatus.q1 ? (
            <CiSquareMinus className="text-3xl" />
          ) : (
            <CiSquarePlus className="text-3xl" />
          )}{" "}
        </p>
        <div
          className={PanelStatus.q1 ? "border p-2 block" : "border p-2 hidden"}
        >
          <p className="text-[13px] font-semibold my-2">
            What is uniquebazar.com
          </p>
          <p className="text-[12px]">
            uniquebazar.com (Innovative Retail Concepts Private Limited) is
            India’s largest online grocery store. With over 18,000 products and
            over a 1000 brands in our catalogue you will find everything you are
            looking for. Right from fresh Rice and Dals, Spices and Seasonings
            to Packaged products, Beverages, Personal care products, Meats – we
            have it all. Choose from a wide range of options in every category,
            exclusively handpicked to help you find the best quality available
            at the lowest prices. Select a time slot for delivery and your order
            will be delivered right to your doorstep, anywhere in Bangalore,
            Hyderabad, Mumbai, Pune, Chennai, Delhi, Noida, Mysore, Coimbatore,
            Vijayawada-Guntur, Kolkata, Ahmedabad-Gandhinagar, Lucknow-Kanpur,
            Gurgaon, Vadodara, Visakhapatnam, Surat, Nagpur, Patna, Indore and
            Chandigarh Tricity. You can pay online using your debit / credit
            card or by cash / sodexo on delivery.
          </p>
        </div>
      </div>
      <div className="my-2">
        <p
          onClick={() => panelStatusChangeHandler("q2")}
          className="flex items-center cursor-pointer  justify-between bg-gradient-to-r
from-green-900 to-blue-500 text-white p-2 font-bold "
        >
          {" "}
          <span>Why should I shop at uniquebazar?</span>
          {PanelStatus.q2 ? (
            <CiSquareMinus className="text-3xl" />
          ) : (
            <CiSquarePlus className="text-3xl" />
          )}{" "}
        </p>
        <div
          className={PanelStatus.q2 ? "border p-2 block" : "border p-2 hidden"}
        >
          <p className="text-[13px] font-semibold my-2">
            Why should I use uniquebazar.com?
          </p>
          <p className="text-[12px]">
            uniquebazar.com allows you to walk away from the drudgery of grocery
            shopping and welcome an easy relaxed way of browsing and shopping
            for groceries. Discover new products and shop for all your food and
            grocery needs from the comfort of your home or office. No more
            getting stuck in traffic jams, paying for parking , standing in long
            queues and carrying heavy bags – get everything you need, when you
            need, right at your doorstep. Food shopping online is now easy as
            every product on your monthly shopping list, is now available online
            at bigbasket.com, India’s best online grocery store!
          </p>
        </div>
      </div>
      <div className="my-2">
        <p
          onClick={() => panelStatusChangeHandler("q3")}
          className="flex items-center cursor-pointer  justify-between bg-gradient-to-r
from-green-900 to-blue-500 text-white p-2 font-bold "
        >
          {" "}
          <span>Where do we operate?</span>
          {PanelStatus.q3 ? (
            <CiSquareMinus className="text-3xl" />
          ) : (
            <CiSquarePlus className="text-3xl" />
          )}{" "}
        </p>
        <div
          className={PanelStatus.q3 ? "border p-2 block" : "border p-2 hidden"}
        >
          <p className="text-[13px] font-semibold my-2">Where do we operate?</p>
          <p className="text-[12px]">
            We currently offer our services in Bangalore, Hyderabad, Mumbai,
            Pune, Chennai, Delhi, Noida, Mysore, Coimbatore, Vijayawada-Guntur,
            Kolkata, Ahmedabad-Gandhinagar, Lucknow-Kanpur, Gurgaon, Vadodara,
            Visakhapatnam, Surat, Nagpur, Patna, Indore and Chandigarh Tricity.
            city limits.
          </p>
        </div>
      </div>
    </div>
  );
};

export default QuestionList;
