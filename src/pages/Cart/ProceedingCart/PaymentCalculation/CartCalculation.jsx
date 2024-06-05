import axios from "axios";
import { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { BaseApiUrl } from "../../../../components/Fetchings/OnlineData";
import toast from "react-hot-toast";
import { v4 as uuidv4 } from "uuid";
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

    if (cartProceedList[0]?.done && DeleveryAddress != "") {
      return await axios
        .post(`${BaseApiUrl}/api/customer/order/orderplace`, {
          productDetails: localStorage.getItem("cart"),
          customerId: localStorage.getItem("customerToken"),
          DeleveryAddress,
        })
        .then((res) => {
          if (res.status === 200) {
           
            fetch(`${BaseApiUrl}/api/customer/order/payment`, {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({
                name: "Satyam",
                amount:
                  priceChart?.total_price - priceChart?.discount_price || 0,
                number: "8059424475",
                orderIds: res.data.orderIds,
                MUID: `MUID${uuidv4()}`,
                transactionId: `T${uuidv4()}`,
              }),
            })
              .then((response) => response.json())
              .then((data) => {
                window.location.href = data;
              })
              .catch((error) =>
                toast.error(error?.message || "Something Went Worng", {
                  duration: 5000,
                  position: "top-right",
                  // Styling
                  style: {
                    background: "#333",
                    color: "#fff",
                  },
                })
              );
          } else {
            toast.error(res?.data?.message || "Something went wrong", {
              duration: 5000,
              position: "top-right",
              // Styling
              style: {
                background: "#333",
                color: "#fff",
              },
            });
          }
        })
        .catch((err) => {
          toast.error(err?.message || "Something went wrong", {
            duration: 5000,
            position: "top-right",
            // Styling
            style: {
              background: "#333",
              color: "#fff",
            },
          });
        });
    }

    if (cartProceedList[1].done && !DeleveryAddress) {
      return toast.error("Please Select Delevery Address", {
        duration: 5000,
        position: "top-right",
        // Styling
        style: {
          background: "#333",
          color: "#fff",
        },
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
