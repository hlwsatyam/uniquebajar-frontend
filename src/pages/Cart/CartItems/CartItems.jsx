import React, { useState } from "react";
import SignleCart from "../SingleCart/SignleCart";
import { useSelector } from "react-redux";
const CartItems = ({ setPriceData, ...style }) => {
  const LatestCartData = useSelector((s) => s.cartValue);

  const [priceCalculation, setPriceCalculation] = useState({
    total_price: 0,
    discount_price: 0,
    delivery_fees: 0,
  });
  setPriceData(priceCalculation);
  // console.log(priceCalculation);
  return (
    <div {...style}>
      {" "}
      <h1 className=" font-extrabold text-2xl px-2 ">My Cart</h1>
      {LatestCartData.map((item) => (
        <SignleCart
          priceCalculation={priceCalculation}
          setPriceCalculation={setPriceCalculation}
          Item={item}
        />
      ))}
    </div>
  );
};

export default CartItems;
