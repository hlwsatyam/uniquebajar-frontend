import { useState } from "react";
import { toast, Toaster } from "react-hot-toast";
import { useDispatch } from "react-redux";
import { loginAction } from "../../Redux/Action";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { BaseApiUrl } from "../Fetchings/OnlineData";

export const CancelOrder = (order_id) => {
  toast(
    (t) => (
      <div className="toast-content">
        <p className="text-right">
          {/* <button onClick={() => >❌</button>} */}
        </p>
        <CancelProduct
          order_id={order_id}
          clickToCancel={() => toast.dismiss()}
        />
      </div>
    ),
    {
      duration: 3000000,
      style: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        border: "none",
        boxShadow: "none",
        background: "transparent",
        height: "100vh",
        width: "100vw",
      },
    }
  );
};

const CancelProduct = ({ clickToCancel, order_id }) => {
  const [reason, setReason] = useState("");
  const LogoutHandler = async () => {
    alert(reason);
    await axios.post(`${BaseApiUrl}/api/customer/order/ordercancel`, {
      token: localStorage.getItem("customerToken"),
      order_id: order_id,
      reason,
    });
    clickToCancel();
  };
  return (
    <div className=" border p-5 bg-red-800 text-white rounded-[12px] ">
      <p className="font-bold text-sm ">Are You Really Want To Cancel Item?</p>
      <input
        type="text"
        onChange={(e) => setReason(e.target.value)}
        className="my-4 px-3 py-3 w-full rounded-xl text-black outline-none"
        placeholder="Reason*"
      />
      <div className="flex gap-x-3">
        <button
          onClick={LogoutHandler}
          className="bg-green-500 text-white font-bold  w-full py-3 rounded-full"
        >
          Proceed
        </button>
        <button
          onClick={clickToCancel}
          className=" text-green-500 border  font-bold  w-full py-3 rounded-full"
        >
          Cancel
        </button>
      </div>
    </div>
  );
};
