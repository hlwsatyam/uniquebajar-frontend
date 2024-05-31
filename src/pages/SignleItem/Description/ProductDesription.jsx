import React from "react";

const ProductDesription = ({ description }) => {
  return (
    <div className="my-3 border-b-2 p-3">
         <p className="text-xl font-bold my-1">Description</p>
      <p>{description}</p>
    </div>
  );
};

export default ProductDesription;
