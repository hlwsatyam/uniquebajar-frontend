import { useState } from "react";
import { toast, Toaster } from "react-hot-toast";
import { useDispatch } from "react-redux";
import { loginAction } from "../../Redux/Action";
import { useNavigate } from "react-router-dom";

export const LogoutSeller = () => {
  toast(
    (t) => (
      <div className="toast-content">
        <p className="text-right">
          {/* <button onClick={() => >❌</button>} */}
        </p>
        <LogOut clickToCancel={() => toast.dismiss()} />
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

const LogOut = ({ clickToCancel }) => {
 
  const navigate = useNavigate();
  const LogoutHandler = () => {
    localStorage.removeItem("SellerToken");
   
    clickToCancel();
    navigate("/seller");
  };
  return (
    <div className=" border p-5 bg-cyan-800 text-white rounded-[12px] ">
      <p className="font-bold text-xl "> Sign Out?</p>
      <p className="font-bold text-sm my-2">
        {" "}
        Are you sure you want to sign out?
      </p>
      <button
        onClick={LogoutHandler}
        className="bg-green-500 text-white font-bold  w-full py-3 rounded-full"
      >
        Sign Out
      </button>
      <button
        onClick={clickToCancel}
        className=" text-green-500 border my-4 font-bold  w-full py-3 rounded-full"
      >
        Cancel
      </button>
    </div>
  );
};
