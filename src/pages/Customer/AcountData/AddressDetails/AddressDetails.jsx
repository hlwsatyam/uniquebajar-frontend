import React, { useEffect, useState } from "react";
import globalDelivery from "../../../../assets/Background/Global delivery.gif";
import { Toaster } from "react-hot-toast";
import { AddAddress } from "../../../../components/SupportiveFunction/AddingNewAddress";
import { GetAddresses } from "../../../../components/Fetchings/Functions/GetUserData";
const AddressDetails = () => {
  const [adresses, setAddresses] = useState([]);
  useEffect(() => {
    GetAllAddress();
  }, []);
  const GetAllAddress = async () => {
    const allAddress = await GetAddresses();
    setAddresses(allAddress);
  };
  return (
    <div className="p-2 ">
      <p className="text-xl">Saved Addresses</p>
      {adresses.length == 0 ? (
        <BlankAddress />
      ) : (
        <ListOfAddress allAddress={adresses} />
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
};

export default AddressDetails;

export const BlankAddress = () => (
  <div>
    <img
      className="w-[200px] m-auto h-auto"
      src={globalDelivery}
      alt=""
      srcset=""
    />
    <p className="text-center text-xl font-bold my-3">
      You don't have any address saved!
    </p>
    <p className="text-center font-semibold text-sm">
      Please provide your address details to find the best products and offers
      in your area.
    </p>
  </div>
);
export const ListOfAddress = ({
  allAddress,
  currentIndex,
  setDeleveryAddress,
  deleveryAddress,
  setCurrentIndex,
}) => {
  const changeAddress = (item, idx) => {
    if(!setCurrentIndex){
      return
    }
    setCurrentIndex(idx);
    setDeleveryAddress(allAddress[idx].address_id);
  };
  useEffect(() => {
    if(setDeleveryAddress){
     setDeleveryAddress(allAddress[0].address_id); 
    }
    
  }, []);
  return (
    <div className=" cursor-pointer flex gap-x-5 flex-wrap gap-y-4 my-3">
      {allAddress.map((item, idx) => (
        <div
          key={idx + 12.5}
          onClick={() => changeAddress(item, idx)}
          className={
            currentIndex == idx
              ? "max-w-sm p-6 bg-white border-green-600 border-[3px] rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
              : "max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
          }
        >
          <p className="border-b-2 pb-2"> {item.address} </p>
          <p>Pin No: {item.pin_code}</p>
          <p>House No: {item.house_no}</p>
          <p>Floor No: {item.floor_no}</p>
          <p>Tower No: {item.tower_no}</p>
          <p>Building: {item.building_name}</p>
          <p> {`${item.city},${item.state} ${item.pin_code}`} </p>
        </div>
      ))}
    </div>
  );
};
