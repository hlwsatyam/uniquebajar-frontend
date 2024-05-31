import { useState } from "react";
import { toast, Toaster } from "react-hot-toast";

export const AddToCartNotification = ({ text }) => {
  // toast(
  //   (t) => (
  //     <div className="">
  //       {/* <Container text={text} /> */}
  //     </div>
  //   ),
  //   {
  //     position: "bottom-left",
  //     duration: 2000,
  //     style: {width:200},
  //   }
  // );
};

const Container = ({text}) => (
  <div className="w-[200px] font-extrabold text-xl text-green-500">{text}</div>
);
