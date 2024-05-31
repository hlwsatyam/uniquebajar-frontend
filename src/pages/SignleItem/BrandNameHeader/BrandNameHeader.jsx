import React, { useEffect, useState } from "react";
import { CiStar, CiHeart, CiShare2 } from "react-icons/ci";
import { FaHeart } from "react-icons/fa";

import { useLocation } from "react-router-dom";
import {
  AddToWishlist,
  CheckWishList,
} from "../../../components/Fetchings/Functions/AddToWishlist";
import { ShareProduct } from "../../../components/SupportiveFunction/ShareSingleProduct";
const BrandNameHeader = ({ brand, brandName, noOfRatings }) => {
  const productId = useLocation().pathname.split("/").filter(Boolean).pop();
  const [wishlistAdded, setWishlistAdded] = useState(false);
  const addToWhishlist = (wishlistAdded, setWishlistAdded, productId) => {
    AddToWishlist(wishlistAdded, setWishlistAdded, productId);
  };
  const checkWishListForSingleCart = async (
    wishlistAdded,
    setWishlistAdded,
    productId
  ) => {
    CheckWishList(wishlistAdded, setWishlistAdded, productId);
  };
  const shareProduct = () => {
    ShareProduct();
  };
  useEffect(() => {
    checkWishListForSingleCart(wishlistAdded, setWishlistAdded, productId);
  }, [true]);
  return (
    <div className="p-2">
      <p className="font-bold text-blue-600 cursor-pointer">{brand}</p>
      <p className="font-semibold ">{brandName}</p>
      <div className="flex items-center justify-between">
        <RatingStar stars={5} canWeShowNOofStar={true} />
        <p className="flex items-center gap-x-4 ">
          <FaHeart
            onClick={() =>
              addToWhishlist(wishlistAdded, setWishlistAdded, productId)
            }
            className={
              wishlistAdded
                ? " text-2xl text-red-600  cursor-pointer "
                : " text-2xl text-slate-500 cursor-pointer"
            }
          />
          <CiShare2
            onClick={shareProduct}
            className=" text-2xl cursor-pointer "
          />
        </p>
      </div>
    </div>
  );
};

export default BrandNameHeader;

const Star = ({ style }) => <CiStar className={style} />;

export const RatingStar = ({ stars, canWeShowNOofStar = true }) => {
  const starIcons = Array.from({ length: stars }, (_, index) => (
    <Star key={index} style={"text-yellow-400 text-xl"} />
  ));
  const blankStarIcons = Array.from({ length: 5 - stars }, (_, index) => (
    <Star key={index} style={"text-xl"} />
  ));

  return (
    <div className="flex items-center gap-x-1 font-bold cursor-pointer">
      {starIcons} {blankStarIcons}
      <span className="ml-1">{canWeShowNOofStar ? stars : ""}</span>
    </div>
  );
};
