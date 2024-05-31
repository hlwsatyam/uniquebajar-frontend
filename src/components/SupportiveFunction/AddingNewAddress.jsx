import { useState } from "react";
import { toast, Toaster } from "react-hot-toast";
import axios from "axios";
import { BaseApiUrl } from "../Fetchings/OnlineData";
export const AddAddress = () => {
  toast(
    (t) => (
      <div className=" overflow-scroll max-h-screen shadow-[50px]  ">
        <p className="text-right">
          {" "}
          <button onClick={() => toast.dismiss(t.id)}>❌</button>
        </p>
        <NewAddres dismiss={() => toast.dismiss(t.id)} />
      </div>
    ),
    {
      
      duration: 10000000,
       
    }
  );
};

const NewAddres = ({ dismiss }) => {
  const [someThingChange, setSomeThingChange] = useState(false);
  const [addressData, setAddressData] = useState({
    pin_code: "",
    house_no: "",
    floor_no: "",
    tower_no: "",
    building_name: "",
    address: "",
    city: "",
    state: "",
  });

  const changeHandler = (e) => {
    setSomeThingChange(true);
    const { name, value } = e.target;
    setAddressData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  const saveHandler = (e) => {
    if (!someThingChange) return;
    axios
      .post(`${BaseApiUrl}/api/customer/addaddress`, {
        token: localStorage.getItem("customerToken"),
        addressData,
      })
      .then((res) => {
        window.location.reload();
      });
    setSomeThingChange(false);
    dismiss();
  };
  return (
    <div className="">
      <p className="text-xl font-semibold my-3 ">Address Details </p>
      <div className="my-3">
        <p className="text-sm">Pin Code*</p>
        <input
          type="text"
          name="pin_code"
          onChange={changeHandler}
          value={addressData.pin_code}
          className="border-b-2 pb-2 outline-none w-full  text-sm font-bold"
        />
      </div>
      <div className="my-3">
        <p className="text-sm">House No.</p>
        <input
          type="text"
          name="house_no"
          onChange={changeHandler}
          value={addressData.house_no}
          className="border-b-2 pb-2 outline-none w-full  text-sm font-bold"
        />
      </div>
      <div className="my-3">
        <p className="text-sm">Floor No.</p>
        <input
          type="text"
          name="floor_no"
          value={addressData.floor_no}
          onChange={changeHandler}
          className="border-b-2 pb-2 outline-none w-full  text-sm font-bold"
        />
      </div>
      <div className="my-3">
        <p className="text-sm">Tower No.</p>
        <input
          type="text"
          name="tower_no"
          onChange={changeHandler}
          value={addressData.tower_no}
          className="border-b-2 pb-2 outline-none w-full  text-sm font-bold"
        />
      </div>
      <div className="my-3">
        <p className="text-sm">Building / Apartment Name.</p>
        <input
          type="text"
          onChange={changeHandler}
          name="building_name"
          value={addressData.building_name}
          className="border-b-2 pb-2 outline-none w-full  text-sm font-bold"
        />
      </div>
      <div className="my-3">
        <p className="text-sm">Address*</p>
        <input
          type="text"
          name="address"
          onChange={changeHandler}
          value={addressData.address}
          className="border-b-2 pb-2 outline-none w-full  text-sm font-bold"
        />
      </div>
      <div className="my-3">
        <p className="text-sm">City *</p>
        <input
          type="text"
          name="city"
          onChange={changeHandler}
          value={addressData.city}
          className="border-b-2 pb-2 outline-none w-full  text-sm font-bold"
        />
      </div>
      <div className="my-3">
        <p className="text-sm">State *</p>
        <input
          type="text"
          name="state"
          onChange={changeHandler}
          value={addressData.state}
          className="border-b-2 pb-2 outline-none w-full  text-sm font-bold"
        />
      </div>
      <button
        onClick={saveHandler}
        className="bg-green-600 text-white py-2 rounded-full my-3 px-3 w-full"
      >
        Add{" "}
      </button>
      <button
        onClick={() => toast.dismiss()}
        className="bg-green-600 text-white py-2 rounded-full my-3 px-3 w-full"
      >
        Cancel
      </button>
    </div>
  );
};
