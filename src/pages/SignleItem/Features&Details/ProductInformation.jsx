import React from "react";

const ProductInformation = ({ productData }) => {
   
  return (
    productData && (
      <div className="my-3 border-b-2 p-3">
        <p className="text-xl font-bold my-1 ">Product Information</p>
        {JSON.parse(productData.product_informations).map((item) => (
          <p className="flex my-2 ">
            {" "}
            <span className="w-[50%] font-bold"> {item.key} </span>{" "}
            <span className="w-[50%]">{item.value} </span>{" "}
          </p>
        ))}
        <p className="text-xl font-bold my-5 pt-3 border-t-2  ">About This Item</p>
        {JSON.parse(productData.feature_details).map((item) => (
          <p className="flex my-2 ">
            {" "}
            <span className="w-[50%] font-bold"> {item.key} </span>{" "}
            <span className="w-[50%]">{item.value} </span>{" "}
          </p>
        ))}
      </div>
    )
  );
};

export default ProductInformation;
