import React, { useEffect, useState } from "react";
import AccountSettingList from "./AccountSettingList/AccountSettingList";
import Accountdata from "./AcountData/Accountdata";
import AutoAccountDetails from "./AutoAccountDetails/AutoAccountDetails";
import { useSelector } from "react-redux";
import { GetUserData } from "../../components/Fetchings/Functions/GetUserData";
// import [GetUserData] from "../../components/Fetchings/";
const Customer = () => {
  const NavigationTabVal = useSelector((s) => s.profileNavigatoreValue);
  const [UserData, setUserData] = useState({
    first_name: "Satyam",
    last_name: "Kumar",
    email: "satyampandit021@gmail.com",
    phone_number: "+918059424475",
    gender: "0",
    dob: "11-02-2002",
  });
  const loginStatus = useSelector((s) => s.loginStatus);
  console.log(loginStatus);
  useEffect(() => {
    UseData();
  }, []);
  const UseData = async () => {
    try {
      const data = await GetUserData();
      setUserData((prev) => {
        return Object.keys(prev).reduce((updatedData, key) => {
          updatedData[key] = data[key] || "";
          return updatedData;
        }, {});
      });
    } catch (error) {
      console.error("Error updating user data:", error);
    }
    console.log(UserData);
  };
  return (
    loginStatus.isLogged && (
      <div className="my-3">
        <div className="flex   ">
          <AccountSettingList
            className=" sm:relative absolute sm:w-[30%]"
            UserData={UserData}
          />
          {NavigationTabVal === null ? (
            <AutoAccountDetails
              className=" w-[100%] mt-8 sm:w-[70%]"
              UserData={UserData}
            />
          ) : (
            <Accountdata
              NavigationTabVal={NavigationTabVal}
              className="w-[70%] mt-8"
              UserData={UserData}
            />
          )}
        </div>
      </div>
    )
  );
};
export default Customer;
