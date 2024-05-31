import React from "react";

function Offer({ img, ...className }) {
  return (
    <div {...className}>
      <img src={img} className="h-full w-full" alt="coupon" />
    </div>
  );
}

export default Offer;
