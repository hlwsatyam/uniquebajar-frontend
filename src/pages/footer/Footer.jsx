import React from "react";
import SubscribeLetter from "./subscribeletter/SubscribeLetter";
import SocialPayment from "./social/SocialPayment";
import { Link } from "react-router-dom";

const Footer = () => {
  const footerHeadList = [
    // {
    //   label: "categories",
    //   childList: [
    //     { label: "cloth", url: "/cloth" },
    //     { label: "Fanstion", url: "/fansion" },
    //     { label: "Electronics", url: "/electronics" },
    //     { label: "kitchen", url: "/kitchen" },
    //     { label: "Mobile", url: "/mobile" },
    //     { label: "beauty", url: "/beauty" },
    //   ],
    // },
    {
      label: "about us",
      childList: [
        { label: "about us", url: "/about-us" },
        { label: "contact us", url: "/contact" },
        { label: "  FAQ", url: "/faq" },
      ],
    },

    {
      label: "our policies",
      childList: [
        { label: "Privacy Policy", url: "/privacy-policy" },
        { label: "  Terms & Conditions", url: "/terms-conditions" },
        {
          label: "  Shipping & Delevery Policy",
          url: "/shipping&delivery-policy",
        },
        {
          label: "Refund Policy",
          url: "refund-policy",
        },
        {
          label: "Return Policy",
          url: "return-policy",
        },
        { label: "  Recycling Policy", url: "/recycling-policy" },
        { label: "  Delevery Policy", url: "/shipping&delivery-policy" },
      ],
    },
    {
      label: "sign up to sty updated",
      childList: [{ label: "help center", url: "/helpcentre" }],
    },
  ];
  return (
    <div className="">
      <div className=" bg-slate-500 text-white">
        <div className="flex gap-x-10 gap-y-16 pt-16 pb-3 justify-around flex-wrap  ">
          {footerHeadList.map((item, idx) => (
            <div key={idx}>
              {" "}
              <p className="uppercase mb-3 font-semibold ">{item.label}</p>{" "}
              {item.childList?.map((childItem,idx) => (
                <p className="my-1" key={idx} >
                  <a className="capitalize text-[12px] " href={childItem.url}>
                    {childItem.label}
                  </a>
                </p>
              ))}
            </div>
          ))}
          <SubscribeLetter />
        </div>
        <p className="px-3 border-t-2 py-3 ">
          Do You Have Your Own Products ?{" "}
          <a href="/seller" className="text-green-500">
            Sell Here
          </a>{" "}
        </p>
      </div>
      <div className=" bg-slate-500 text-white">
        <SocialPayment />
        <p className="text-center text-sm pt-4">© 2019-2024, uniquebajar.com</p>
        <p className="text-center text-sm pb-4">
          Designed by{" "}
          <a
            className="text-green-400 font-bold "
            href="https://rvbmuniverse.com/"
          >
            Rvbm Universe Pvt Ltd{" "}
          </a>
        </p>
      </div>
    </div>
  );
};

export default Footer;
