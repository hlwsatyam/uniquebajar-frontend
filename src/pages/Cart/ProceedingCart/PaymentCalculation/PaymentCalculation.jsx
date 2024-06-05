import React, { useState } from "react";
import CartCalculation from "./CartCalculation";
import SelectAddress from "./SelectAddress";

const PaymentCalculation = ({
  cartProceedList,
  setCartProceedList,
  priceChart,
}) => {
  const [deleveryAddress, setDeleveryAddress] = useState("");
  return (
    <div className="border rounded-[12px] p-2">
      {cartProceedList[0].done ? (
        <div>
          <h2 className="text-[#000000] text-[24px] font-bold">Checkout</h2>
          <SelectAddress
            deleveryAddress={deleveryAddress}
            setDeleveryAddress={setDeleveryAddress}
          />
        </div>
      ) : (
        ""
      )}
      <CartCalculation
        cartProceedList={cartProceedList}
        setCartProceedList={setCartProceedList}
        DeleveryAddress={deleveryAddress}
        priceChart={priceChart}
      />
    </div>
  );
};

export default PaymentCalculation;
