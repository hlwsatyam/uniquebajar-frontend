import React, { useState } from "react";
import SellerTabHead from "../../../../../components/Reusable/SellerTabHead";

function UserManagement() {
  const [sellerCredentials, setCredentials] = useState({
    avtar: "",
    Name: "Satyam Kumar",
    Phone: "+91 8059424475",
    Email: "satyampandit021#gmail.com",
    Password: "20172522",
  });
  return (
    <div className="bg-blue-900 w-[50%] sm:w-full rounded  shadow p-3">
      <SellerTabHead title={"User Management"} />
      {Object.entries(sellerCredentials).map((val, idx) => (
        <p className="flex my-3 items-center  ">
          <span className="w-1/2"> {val[0]}</span>
          <span className="w-1/2"> {val[1]}</span>
        </p>
      ))}
    </div>
  );
}

export default UserManagement;
