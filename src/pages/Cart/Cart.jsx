import React, { useState } from "react";
import EmptyCart from "./Empty/EmptyCart";
import CartItems from "./CartItems/CartItems";
import ProceedingCart from "./ProceedingCart/ProceedingCart";
import { useSelector } from "react-redux";

const Cart = () => {
  const [priceScore, setPriceScore] = useState(null);
  const LatestCartData = useSelector((s) => s.cartValue);
  const setPriceData = (data) => {
    setPriceScore(data);
  };
  return (
    <div>
      {" "}
      {LatestCartData.length == 0 ? (
        <EmptyCart />
      ) : (
        <div className="  sm:p-6 rev-responsive ">
          <CartItems
            setPriceData={setPriceData}
            className="rev-rate-data w-[60%]"
          />
          <ProceedingCart
            priceChart={priceScore}
            className="comment-list  w-[40%] p-2"
          />
        </div>
      )}
    </div>
  );
};

export default Cart;
