import React, { useEffect, useState } from "react";
import { RatingStar } from "../../BrandNameHeader/BrandNameHeader";
import { FaStar } from "react-icons/fa";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import { useSelector } from "react-redux";
import { BaseApiUrl } from "../../../../components/Fetchings/OnlineData";
const RevRateData = ({
  noOfComment,
  fiveStar,
  fourStar,
  threeStar,
  twoStar,
  oneStar,
  ...style
}) => {
  const productNo = useLocation().pathname.split("/").filter(Boolean).pop();
  const loginStatus = useSelector((s) => s.loginStatus);
  const navigate = useNavigate();
  const [selectStarIndex, setSelectIndex] = useState(-1);
  const [reviewData, setaReviewData] = useState({
    star: 0,
    subject: "",
    product_id: productNo,
    description: "",
  });
  const changeHandler = (e) => {
    const { name, value } = e.target;
    setaReviewData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  useEffect(() => {
    setaReviewData((prev) => ({
      ...prev,
      star: selectStarIndex,
    }));
  }, [selectStarIndex]);
  const saveHandler = async () => {
    if (!loginStatus.isLogged) {
      return navigate("/account/login");
    }
    await axios
      .post(`${BaseApiUrl}/api/product/addComment`, {
        token: localStorage.getItem("customerToken"),
        reviewData,
      })
      .then((res) => {
        if (res.status == 200) {
          window.location.reload();
        }
      });
  };
  const RatingData = [
    { name: "5", rating: fiveStar },
    { name: "4", rating: fourStar },
    { name: "3", rating: threeStar },
    { name: "2", rating: twoStar },
    { name: "1", rating: oneStar },
  ];
  return (
    <div {...style}>
      <p className="text-2xl font-bold">Ratings & Reviews</p>
      <div className="flex items-center ">
        <div className="w-[50%]">
          <p className="text-3xl font-bold my-3 ">
            {" "}
            {fiveStar + fourStar + threeStar + twoStar + oneStar}{" "}
          </p>
          <RatingStar stars={4} canWeShowNOofStar={false} />
          <p className="flex "> {noOfComment} Ratings </p>
        </div>
        <div className="w-[50%]">
          {RatingData.map((item) => (
            <p className="flex items-center gap-x-3">
              {" "}
              <span className="flex items-center gap-x-2">
                {" "}
                {item.name} <FaStar />
              </span>{" "}
              <p className=" rounded bg-slate-500 h-3  w-[70%]">
                <p
                  style={{ width: `${item.rating}%` }}
                  className={`h-3 rounded  bg-yellow-400`}
                ></p>
              </p>
              <span>{item.rating}%</span>
            </p>
          ))}
        </div>
      </div>
      <p className="text-2xl my-3 font-bold">Review this product</p>
      <p className="font-semibold my-3 text-gray-600">
        Help others make an informed decision!
      </p>
      <p>
        <p className="flex gap-x-3">
          {RatingData.map((item, idx) => (
            <FaStar
              key={idx}
              onClick={() => setSelectIndex(idx)}
              className={`cursor-pointer hover:text-yellow-500 ${
                idx <= selectStarIndex ? "text-yellow-500" : "text-gray-400"
              }`}
            />
          ))}
        </p>
      </p>
      <div>
        <input
          type="text"
          name="subject"
          onChange={changeHandler}
          placeholder="Subject Of Comment"
          className="w-full border-2 my-1 py-2 px-2 placeholder:text-green-600 font-semibold text-[12px] rounded-full outline-none "
        />
        <input
          type="text"
          name="description"
          onChange={changeHandler}
          placeholder="Description Of Comment"
          className="w-full border-2 my-1 py-2 px-2 placeholder:text-green-600 font-semibold text-[12px] rounded-full outline-none "
        />

        <button
          type="button"
          onClick={saveHandler}
          className="text-[14px] my-2 transition ease-in-out duration-700 font-bold w-full text-center hover:bg-yellow-400 border rounded py-2 px-2 border-x-yellow-400 border-x-2"
        >
          Write a Review
        </button>
      </div>
    </div>
  );
};

export default RevRateData;
