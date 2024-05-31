import React from "react";

const AutoAccountDetails = ({ UserData ,...style}) => {
  return (
    <div {...style} >
      <div className="p-4 rounded-[14px]  border">
        <p className="text-xl font-bold">Account Information</p>
        <div>
          <div className="border-b-2 py-2 text-sm">
            <p>Full Name</p>
            <p>{UserData.first_name + " " + UserData.last_name}</p>
          </div>
          <div className="border-b-2 py-2 text-sm">
            <p>Email ID</p>
            <p>{UserData.email}</p>
          </div>
          <div className="border-b-2 py-2 text-sm">
            <p>Mobile No</p>
            <p>{UserData.phone_number}</p>
          </div>
          <div className="border-b-2 py-2 text-sm">
            <p>Gender</p>
            <p>
              {UserData.gender === "M"
                ? "Male"
                : UserData.gender === "F"
                ? "Female"
                : "Other"}
            </p>
          </div>
          <div className="border-b-2 py-2 text-sm">
            <p>Default Address</p>
            <p>{UserData.defaultAddress}</p>
          </div>
        </div>
        {/* <button className="font-bold w-full bg-green-300 py-2  my-2 rounded-full">
          Edit
        </button> */}
      </div>
    </div>
  );
};

export default AutoAccountDetails;
