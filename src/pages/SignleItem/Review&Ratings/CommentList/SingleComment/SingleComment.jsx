import React from "react";
import { RatingStar } from "../../../BrandNameHeader/BrandNameHeader";
import { FaThumbsUp } from "react-icons/fa6";
import { MdVerifiedUser } from "react-icons/md";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { BaseApiUrl } from "../../../../../components/Fetchings/OnlineData";
function SingleComment({
  nameOfCommenter,
  productNo,
  dateOfComment,
  isVeriFied,
  likesOnComment,
  CommentSubject,
  CommentDescription,
  starFromCommenter,
}) {
  const navigate = useNavigate();
  const likeOnCommentHandler = async () => {
    if (!localStorage.getItem("customerToken")) {
      return navigate("/login");
    }
    await axios.post(`${BaseApiUrl}/api/product/likeproduct`, {
      token: localStorage.getItem("customerToken"),
      product_id: productNo,
    });
  };
  return (
    <div className="my-3 border-b-2 pb-3">
      <p className="flex my-1 gap-x-3 items-center">
        {" "}
        <RatingStar stars={starFromCommenter} canWeShowNOofStar={false} />{" "}
        {isVeriFied ? (
          <span className="flex  items-center">
            {" "}
            <MdVerifiedUser color="green" /> Verified Purchase{" "}
          </span>
        ) : null}
        <span>
          {nameOfCommenter} Posted On {dateOfComment}
        </span>
      </p>
      <p className="font-bold my-1"> {CommentSubject}</p>
      <p> {CommentDescription}</p>
      <p className=" hidden flex justify-end gap-x-1 items-center ">
        {" "}
        <span>
          {" "}
          {
            <FaThumbsUp
              className="cursor-pointer"
              onClick={likeOnCommentHandler}
            />
          }{" "}
        </span>{" "}
        {likesOnComment}
      </p>
    </div>
  );
}

export default SingleComment;
