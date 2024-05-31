import React, { useState } from "react";

function MyProfile() {
  const [sellerData, setSellerData] = useState(null);
  
  return (
    <div>
      <div className="p-4 bg-blue-950 rounded">
        <div className="relative">
          {" "}
          <img
            className="rounded"
            src="https://demo.flatlogic.com/light-blue-react/static/media/19.jpg"
            alt=""
          />
          <div className="flex justify-around items-center absolute w-full bottom-[-13px]">
            <img
              className="w-[60px] h-[60px] rounded-full border-2"
              src="https://demo.flatlogic.com/light-blue-react/static/media/a5.jpg"
              alt=""
            />
            <button className="rounded border-2 px-3  ">Share</button>
          </div>
        </div>

        <div className="grid my-6  grid-cols-2">
          <AboutSeller seller_name={"Satyam"} />
          <AboutMore />
        </div>
      </div>
    </div>
  );
}

export default MyProfile;
const AboutSeller = ({ seller_name }) => {
  return (
    <div className="text-center my-3">
      <p>Seller Name: {seller_name}</p>
      <p>Seller Email: {seller_name}</p>
      <p>Seller Contact:{seller_name}</p>
    </div>
  );
};
const AboutMore = () => {
  return (
    <div>
      <p>Addres :{"d"}</p>
      <p>Description</p>
      <p>CIN NO:"fds"</p>
    </div>
  );
};
