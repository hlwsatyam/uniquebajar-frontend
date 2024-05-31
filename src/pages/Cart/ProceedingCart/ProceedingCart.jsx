import React, { useState } from "react";
import ProceedingBanner from "./ProcedingBanner/ProceedingBanner";
import PaymentCalculation from "./PaymentCalculation/PaymentCalculation";
import { IoIosCheckmarkCircle } from "react-icons/io";
const ProceedingCart = ({ priceChart, ...style }) => {
  const [cartProceedList, setCartProceedList] = useState([
    {
      default: "1",
      done: false,
      tickMarks: <IoIosCheckmarkCircle className="text-green-700 text-5xl" />,
      title: "Your Cart",
    },
    {
      default: "2",
      done: false,
      tickMarks: <IoIosCheckmarkCircle className="text-green-700 text-5xl" />,
      title: "Order Review",
    },
    {
      default: "3",
      done: false,
      tickMarks: <IoIosCheckmarkCircle className="text-green-700 text-5xl" />,
      title: "Payment",
    },
  ]);

  return (
    <div {...style}>
      <ProceedingBanner
        setCartProceedList={setCartProceedList}
        cartProceedList={cartProceedList}
      />
      <PaymentCalculation
        cartProceedList={cartProceedList}
        setCartProceedList={setCartProceedList}
        priceChart={priceChart}
      />
    </div>
  );
};

export default ProceedingCart;
