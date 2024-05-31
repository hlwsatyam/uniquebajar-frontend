import axios from "axios";
import { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { BaseApiUrl } from "../../../../components/Fetchings/OnlineData";

const CartCalculation = ({
  cartProceedList,
  setCartProceedList,
  DeleveryAddress,
  priceChart,
}) => {
  const [currentIndex, setcurrentIndex] = useState(0);
  const navigate = useNavigate();
  const loginStatus = useSelector((s) => s.loginStatus);
  const nextHandler = async () => {
    if (!loginStatus.isLogged) {
      return navigate("/account/login");
    }
    if (DeleveryAddress != "") {
      return await axios
        .post(`${BaseApiUrl}/api/customer/order/payment`, {
          // productDetails: localStorage.getItem("cart"),
          // customerId: localStorage.getItem("customerToken"),
          // DeleveryAddress,
          MUID: "MUID" + Date.now(),
          transactionId:"T" + Date.now(),
          number: 8059424475,
          name: "Satyam",
          amount: 22,
        })
        .then((res) => {
          if (res.data && res.data.data.instrumentResponse.redirectInfo.url) {
            window.location.href = res.data.data.instrumentResponse.redirectInfo.url;
        }
        })
        .catch((err) => {
          alert("Server Internal Error!");
        });
    }

    if (cartProceedList[1]?.done && DeleveryAddress != "") {
      return await axios
        .post(`${BaseApiUrl}/api/customer/order/orderplace`, {
          productDetails: localStorage.getItem("cart"),
          customerId: localStorage.getItem("customerToken"),
          DeleveryAddress,
        })
        .then((res) => {
          console.log(res.data);
          return alert("Pay Now");
        })
        .catch((err) => {
          alert("Server Internal Error!");
        });
    }

    const newCartProceedList = cartProceedList.map((item, index) => {
      if (index === currentIndex) {
        return { ...item, done: !item.done };
      }
      return item;
    });
    setCartProceedList(newCartProceedList);
    setcurrentIndex((prevIndex) => (prevIndex + 1) % cartProceedList.length);
  };

  return (
    <div className="border rounded-[12px] p-2">
      <p className="font-bold text-[14px]">Payment Details</p>
      <div>
        <p className="border-b-2 my-2 ">
          {" "}
          MRP Totel{" "}
          <span className="float-right">₹{priceChart?.total_price}</span>{" "}
        </p>
        <p className="border-b-2 my-2 ">
          {" "}
          Product Discount{" "}
          <span className="float-right">
            ₹{priceChart?.discount_price}
          </span>{" "}
        </p>
        <p className="border-b-2 my-2 ">
          {" "}
          Delevery Fees{" "}
          <span className="float-right">₹{priceChart?.delivery_fees}</span>{" "}
        </p>
        <p className="b-2 my-2 ">
          {" "}
          Total{" "}
          <span className="float-right">
            ₹{priceChart?.total_price - priceChart?.discount_price}
          </span>{" "}
        </p>
        <p className="b-2 my-2 text-green-600 font-bold text-right ">
          You saved ₹{priceChart?.discount_price}
        </p>
      </div>
      <button
        onClick={nextHandler}
        className="py-2 px-3 rounded-full bg-green-600 text-white w-full font-bold "
      >
        {cartProceedList[1]?.done
          ? "Pay Now"
          : !loginStatus.isLogged
          ? "Login To Continue"
          : DeleveryAddress == ""
          ? "Select Address"
          : "Continue"}
      </button>
    </div>
  );
};

export default CartCalculation;
