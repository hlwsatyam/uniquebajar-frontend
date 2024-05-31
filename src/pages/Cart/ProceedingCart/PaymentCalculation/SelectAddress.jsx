import React, { useEffect, useState } from "react";
import { GetAddresses } from "../../../../components/Fetchings/Functions/GetUserData";
import {
  BlankAddress,
  ListOfAddress,
} from "../../../Customer/AcountData/AddressDetails/AddressDetails";
import { Toaster } from "react-hot-toast";
import { AddAddress } from "../../../../components/SupportiveFunction/AddingNewAddress";
function SelectAddress({ deleveryAddress, setDeleveryAddress }) {
  const [adresses, setAddresses] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  useEffect(() => {
    GetAllAddress();
  }, []);
  const GetAllAddress = async () => {
    const allAddress = await GetAddresses();
    setAddresses(allAddress);
  };
  return (
    <div className="p-2 ">
      <p className="text-xl">Select Address</p>
      {adresses.length == 0 ? (
        <BlankAddress />
      ) : (
        <ListOfAddress
          deleveryAddress={deleveryAddress}
          setDeleveryAddress={setDeleveryAddress}
          currentIndex={currentIndex}
          setCurrentIndex={setCurrentIndex}
          allAddress={adresses}
        />
      )}
      <Toaster />
      <button
        onClick={AddAddress}
        className="bg-green-500 text-white py-3 rounded-full w-full my-5 text-xl font-bold"
      >
        + Add New Address{" "}
      </button>
    </div>
  );
}

export default SelectAddress;
