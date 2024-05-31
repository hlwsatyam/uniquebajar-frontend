import React, { useState } from "react";
import { toast, Toaster } from "react-hot-toast";
const PanCardInformation = () => {
  const [someThingChange, setSomeThingChange] = useState(false);
  const showToast = () => {
    toast(
      (t) => (
        <div className="toast-content">
          <p className="text-xl font-bold">Declaration</p>
          <p>
            I, buyer, do hereby declare that above quoted Permanent Account
            Number is belongs to me and is valid. Further, I hereby undertake to
            indemnify and hold Reliance Retail Limited (JioMart) harmless from
            all claims, actions from the tax authorities or any other authority,
            risks, exposure arising to Reliance Retail Limited (JioMart) on
            account of Reliance Retail Limited (JioMart) using this declaration.
          </p>
          <button onClick={() => toast.dismiss(t.id)}>❌</button>
        </div>
      ),
      {
        duration: 10000,
        style: {
          marginTop: "300px",
        },
      }
    );
  };
  return (
    <div>
      <Toaster />
      <div className="border rounded-[12px] p-2">
        <p className="text-xl font-bold">PAN Card Information</p>
        <p className=" my-2 flex items-center gap-x-3 py-3 px-2 bg-slate-300 rounded-[12px] font-semibold ">
          <span>Note</span>{" "}
          <span>
            For orders exceeding the value of ₹1,00,000, PAN Card details are
            mandatory.
          </span>
          <span className="bg-green-500 py-3 text-white rounded-2xl px-2">
            Coming Soon
          </span>
        </p>
        <p className="text-sm mt-8">PAN Number</p>
        <input
          type="text"
          className="w-full outline-none border-b-[2px] border-green-500"
        />
        <p className="text-red-500 mb-7 text-sm"> Enter Valid PAN </p>

        <div className="text-sm ">
          <input type="checkbox" className="" name="" id="" /> I agree to the
          terms mentioned in the declaration.{" "}
          <span className="cursor-pointer text-green-700" onClick={showToast}>
            View Declaration
          </span>
        </div>
      </div>

      {someThingChange ? (
        <button className="bg-green-600 font-bold w-full py-3 my-4 rounded-full text-white">
          {" "}
          Save Change{" "}
        </button>
      ) : (
        <button className="bg-green-200 cursor-auto  font-bold w-full py-3 my-4 rounded-full text-white">
          {" "}
          Save Change{" "}
        </button>
      )}
    </div>
  );
};

export default PanCardInformation;
