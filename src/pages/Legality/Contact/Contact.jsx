import React from "react";
import { CiSquarePlus } from "react-icons/ci";
import { LiaFacebookSquare } from "react-icons/lia";
import { GrInstagram } from "react-icons/gr";
const Contact = () => {
  return (
    <div className="my-4 p-2">
      <p className="text-2xl  font-light my-2">Contact us</p>
      <p className="border-b-2 my-2 pb-2 border-b-orange-600">
        To reach our customer service team please email us at:{" "}
        <a
          className="ml-3 text-green-400 font-semibold"
          href="mailto:info@rvbmuniverse@gmail.com"
        >
          {" "}
          info@rvbmuniverse@gmail.com{" "}
        </a>{" "}
      </p>
      <p className="border-b-2 my-2 pb-2 border-b-orange-600">
        To submit a customer service request:{" "}
        <a className="ml-3 text-green-400 font-semibold" href="/helpcentre">
          {" "}
          Click Here{" "}
        </a>{" "}
      </p>
      <p className="border-b-2 my-2 pb-2 border-b-orange-600">
        [All calls to our customer support number 9690413556 will be recorded
        for internal training and quality purposes.]
      </p>

      <p className="text-3xl font-extralight mt-4">Office Address:</p>
      <div className="my-2">
        <p
          className="flex items-center cursor-pointer  justify-between bg-gradient-to-r
from-green-900 to-blue-500 text-white p-2 font-bold "
        >
          {" "}
          <span>Noida</span>
          <CiSquarePlus className="text-3xl" />
        </p>
        <div className={"border p-2"}>
          <p className="text-[19px] font-light my-2">Rvbm Universe Pvt Ltd.</p>
          <p className="text-[12px]">G-47 Sector-3 Near Metro station sec-16</p>
          <p className="text-[12px]">5th Floor</p>
          <p className="text-[12px]">Noida , Uttar Pradesh 201301 </p>
          <p className="text-[12px]"> Tell:9690413556</p>
        </div>

        <p className="border-b-2 my-2 pb-2 text-2xl border-b-orange-600">
          Email Id:{" "}
          <a
            className="ml-3 text-green-400 text-xl font-semibold"
            href="mailto:info@rvbmuniverse@gmail.com"
          >
            {" "}
            info@rvbmuniverse@gmail.com{" "}
          </a>{" "}
        </p>
        <p className="flex gap-x-4">
          <a href="https://www.facebook.com/people/Uniquebajar/100066631302298/">
            <LiaFacebookSquare className="text-4xl text-blue-700" />{" "}
          </a>{" "}
          <a href="https://www.instagram.com/uniquebajar1/">
            <GrInstagram className="text-4xl text-red-700" />
          </a>{" "}
        </p>
      </div>
    </div>
  );
};

export default Contact;
