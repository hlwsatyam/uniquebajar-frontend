import React from "react";
import EmptyCartImg from "../../../assets/Cart/blankBacket.jpg";
import { Link } from "react-router-dom";
function EmptyCart() {
  return (
    <div className=" mb-7  ">
      <img
        className="w-[300px] m-auto h-[300px]"
        src={EmptyCartImg}
        alt=""
        srcset=""
      />
      <p className="text-2xl text-center font-extrabold">Your Cart is Empty!</p>
      <p className=" text-center text-[14px] ">
        It's a nice day to buy the items you saved for later!
      </p>
      <p className=" text-center  ">
        or{" "}
        <Link to="/" className="text-blue-500">
          Continue Shoping
        </Link>
      </p>
    </div>
  );
}

export default EmptyCart;
