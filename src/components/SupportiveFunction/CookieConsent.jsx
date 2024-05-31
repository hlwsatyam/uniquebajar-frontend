import { useState } from "react";
import { toast, Toaster } from "react-hot-toast";
import { Link } from "react-router-dom";
import { isCookieAccept } from "../Fetchings/LocalHost";
import { FaShopify } from "react-icons/fa6";
export const CookieConsent = () => {
  !isCookieAccept &&
    toast(
      (t) => (
        <div className="toast-content">
          <p className="text-right">
            {/* <button onClick={() => >❌</button>} */}
          </p>
          <LogOut
            clickToCancel={(e) => {
              if (e === "acc") {
                localStorage.setItem("CookieConsent", "true");
                return toast.dismiss();
              } else {
                return toast.dismiss();
              }
            }}
          />
        </div>
      ),
      { position: "bottom-left", duration: 3000000, style: {} }
    );
};

const LogOut = ({ clickToCancel }) => {
  const [logOut, setLogout] = useState(false);
  return (
    <div className="p-2 bg-white text-black rounded-[12px]">
      <p className="font-bold text-sm my-2"> 🍪 We Use Cookies!</p>
      <p className="font-bold text-sm my-2">
        We use cookies to enhance your shopping experience, personalize content,
        analyze site traffic, and serve targeted advertisements. By continuing
        to use our site, you consent to the use of cookies in accordance with
        our
      </p>
      <p className="font-bold text-sm my-2"> 🍪 Questions?</p>
      <p className="font-bold text-sm my-2">
        If you have any questions or concerns, feel free to{" "}
        <a className="text-green-500 font-bold" href="/contact">
          Contact us
        </a>
      </p>

      <p className="flex items-center gap-x-2">
        Happy Shopping !
        <FaShopify />
      </p>
      <p className="flex items-center gap-x-3">
        <button
          onClick={() => clickToCancel("acc")}
          className="bg-green-500 text-white font-bold w-full py-3 rounded-full"
        >
          Accept
        </button>
        <button
          onClick={() => clickToCancel("rej")}
          className="text-green-500 border my-4 font-bold w-full py-3 rounded-full"
        >
          Reject
        </button>
      </p>
    </div>
  );
};
