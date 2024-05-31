import React from "react";
import { FaFacebookF, FaTwitter } from "react-icons/fa";
import { IoLogoYoutube } from "react-icons/io5";
import { FaPinterest } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
const SocialPayment = () => {
  return (
    <div className="flex  items-center gap-8  flex-wrap py-4 justify-center px-4">
      <span className="text-[13px]">Payment Method</span>{" "}
      <img
        src="https://www.naturesbasket.co.in/Images/icons-card-payments-mode.png"
        alt=""
      />
      <div className="flex items-center gap-3 ">
        <span className="text-[13px]">Keep In Touch</span>{" "}
        <FaFacebookF className="text-2xl cursor-pointer" />
        <FaTwitter className="text-2xl cursor-pointer" />
        <IoLogoYoutube className="text-2xl cursor-pointer" />
        <FaInstagram className="text-2xl cursor-pointer" />
        <FaPinterest claclssName="text-2xl cursor-pointer" />
      </div>
    </div>
  );
};

export default SocialPayment;
