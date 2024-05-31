import axios from "axios";
import React, { useState, useEffect } from "react";
import { BaseApiUrl } from "../../../../components/Fetchings/OnlineData";

const ProfileDetails = ({ UserData }) => {
  const [someThingChange, setSomeThingChange] = useState(false);
  const [latestUserData, setLatestUserData] = useState({
    first_name: UserData.first_name,
    email: UserData.email,
    phone: UserData.phone_number,
    last_name: UserData.last_name,
    gender: UserData.gender,
    dob: UserData.dob, // assuming UserData.dob is in the format "11-03-2002"
  });

  const formatDisplayDate = (inputDate) => {
    const [year, month, day] = inputDate.split("-");
    return `${day}-${month}-${year}`;
  };
  const changeHander = (e) => {
    setSomeThingChange(true);
    const { name, value } = e.target;

    setLatestUserData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  const saveHandler = (e) => {
    if (!someThingChange) return;
    axios.post(`${BaseApiUrl}/api/customer/updateProfile`, {
      token: localStorage.getItem("customerToken"),
      latestUserData,
    });
    setSomeThingChange(false);
  };

  return (
    <div>
      <div className="p-2 border rounded-[12px]">
        <p className="font-bold text-xl ">Edit Profile Details</p>
        <div className="my-3">
          <p className="text-sm">First Name</p>
          <input
            name="first_name"
            onChange={changeHander}
            type="text"
            value={latestUserData.first_name}
            className="border-b-2 py-2 outline-none w-full  text-sm font-bold"
          />
        </div>
        <div className="my-3">
          <p className="text-sm">Last Name</p>
          <input
            type="text"
            name="last_name"
            onChange={changeHander}
            value={latestUserData.last_name}
            className="border-b-2 py-2 outline-none w-full  text-sm font-bold"
          />
        </div>
        <div className="my-3">
          <p className="text-sm">Mobile Number</p>
          <input
            type="text"
            value={latestUserData.phone}
            className="border-b-2 py-2  w-full  outline-none text-sm font-bold"
          />
        </div>
        <div className="my-3">
          <p className="text-sm">Email</p>
          <input
            type="email"
            name="email"
            required
            onChange={changeHander}
            value={latestUserData.email}
            className="border-b-2 py-2 w-full  outline-none text-sm font-bold"
          />
        </div>
        <div className="my-3">
          <p className="text-sm">Gender</p>
          <p>
            <select
              onChange={changeHander}
              className="w-full outline-none border-b-2 py-2 "
              name="gender"
              id="gender"
            >
              <option value="M" selected={latestUserData.gender === "M"}>
                Male
              </option>
              <option value="F" selected={latestUserData.gender === "F"}>
                Female
              </option>
              <option
                value="O"
                selected={!["M", "F"].includes(latestUserData.gender)}
              >
                Others
              </option>
            </select>
          </p>
        </div>
        <div className="my-3">
          <p className="text-sm">Date Of Birth*</p>
          <input
            type="date"
            className="outline-none my-3"
            id=""
            onChange={(e) =>
              setLatestUserData({
                ...latestUserData,
                dob: e.target.value.toString().slice(0, 10),
              })
            }
          />

          <p>Your DATE OF BIRTH: {formatDisplayDate(latestUserData.dob)}</p>
        </div>
        {someThingChange ? (
          <button
            onClick={saveHandler}
            className="bg-green-600 font-bold w-full py-3  rounded-full text-white"
          >
            {" "}
            Save Change{" "}
          </button>
        ) : (
          <button className="bg-green-200 cursor-auto  font-bold w-full py-3  rounded-full text-white">
            {" "}
            Save Change{" "}
          </button>
        )}
      </div>
    </div>
  );
};

export default ProfileDetails;
