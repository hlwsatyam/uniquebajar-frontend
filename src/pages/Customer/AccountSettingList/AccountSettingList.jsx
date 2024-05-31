import React, { useState } from "react";
import { FaUser } from "react-icons/fa";
import { IoIosArrowDroprightCircle } from "react-icons/io";
import { FaBorderAll } from "react-icons/fa";
import { FaRegAddressCard } from "react-icons/fa";
import { MdOutlineAddLocationAlt } from "react-icons/md";
import { MdOutlineLiveHelp } from "react-icons/md";
import { GrLogout } from "react-icons/gr";
import { SignOut } from "../../../components/SupportiveFunction/SignOut";
import { useDispatch } from "react-redux";
import { ProfileNavigationReducer } from "../../../Redux/Reducer";
import { UserProfileNavigation } from "../../../Redux/Action";
const AccountSettingList = ({ UserData, ...style }) => {
  const [showList, setShowList] = useState(true);
  const dispatch = useDispatch();
  const clickHandler = (route) => {
    dispatch(UserProfileNavigation(route));
  };
  return (
    <div {...style}>
      <label class=" top-[0]   inline-flex absolute items-center me-5 cursor-pointer">
        <input
          type="checkbox"
          value=""
          onClick={() => setShowList(!showList)}
          class="sr-only peer"
          checked={showList}
        />
        <div class="w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-4   dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all   "></div>
         
      </label>
      <div
        className={`${
          showList ? "block" : "hidden"
        }   border p-3 bg-slate-400 rounded-[18px]`}
      >
        <div>
          <p
            onClick={() => clickHandler("userEditData")}
            className="flex items-center justify-between gap-x-3 border-b-2
        my-2 py-2"
          >
            <span className="rounded-full bg-green-200 text-green-500 p-3">
              <FaUser className=" text-2xl" />{" "}
            </span>
            <div className="flex flex-col  w-full h-full">
              <p className="text-[16px] font-semibold">{`${UserData.first_name} ${UserData.last_name}`}</p>{" "}
              <p className="text-[14px]  font-semibold">{UserData.email}</p>{" "}
              <p className="text-[14px]  font-semibold">
                {UserData.phone_number}
              </p>{" "}
            </div>
            <IoIosArrowDroprightCircle className="bg-green-200 text-4xl cursor-pointer rounded-full text-green-500 " />
          </p>
          <p
            onClick={() => clickHandler("myOrder")}
            className="flex items-center gap-x-2 border-b-2 cursor-pointer 
        my-2 py-2"
          >
            <FaBorderAll className="text-4xl  text-green-500 " />
            <span className="font-semibold ">My Orders</span>
          </p>
          <p
            onClick={() => clickHandler("panCardInformation")}
            className="flex items-center gap-x-2 border-b-2 cursor-pointer 
        my-2 py-2"
          >
            <FaRegAddressCard className=" text-4xl  text-green-500 " />
            <span className="font-semibold ">PAN Card Information</span>
          </p>
          <p
            onClick={() => clickHandler("DeliveryAddress")}
            className="flex items-center gap-x-2 border-b-2 cursor-pointer 
        my-2 py-2"
          >
            <MdOutlineAddLocationAlt className=" text-4xl rounded-full text-green-500 " />
            <span className="font-semibold ">Delivery Addressess</span>
          </p>
          <p
            onClick={() => clickHandler("needHelp")}
            className="flex items-center gap-x-2 border-b-2 cursor-pointer 
        my-2 py-2"
          >
            <MdOutlineLiveHelp className=" text-4xl rounded-full text-green-500 " />
            <span className="font-semibold ">Need Help</span>
          </p>
          <p
            onClick={SignOut}
            className="flex items-center gap-x-2 border-b-2 cursor-pointer 
        my-2 py-2"
          >
            <GrLogout className=" text-4xl  text-green-500 " />
            <span className="font-semibold ">Sign Out</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default AccountSettingList;
