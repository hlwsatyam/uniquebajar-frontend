import React, { useEffect, useState } from "react";
import RevRateData from "./RevRateData/RevRateData";

import CommentList from "./CommentList/CommentList";
import "./Review&Ratings.scss";
import GetReviewList from "../../../components/Fetchings/Functions/GetReviewList";
import { useLocation } from "react-router-dom";
import CountStar from "../../../components/Fetchings/Functions/CountStar";
const ReviewRatings = () => {
  const productNo = useLocation().pathname.split("/").filter(Boolean).pop();
  const [reviewData, setReviewData] = useState({
    Details: {
      noOfComment: 169,
      fiveStar: 65,
      fourStar: 12,
      threeStar: 2,
      twoStar: 4,
      oneStar: 17,
    },
    CommentList: [],
  });

  useEffect(() => {
    GetRev();
  }, [true]);

  const GetRev = async () => {
    const data = await GetReviewList(productNo);
    setReviewData((prev) => ({
      ...prev,
      CommentList: data,
      Details: {
        noOfComment: data.length,
        fiveStar: CountStar(data, 5),
        fourStar: CountStar(data, 4),
        threeStar: CountStar(data, 3),
        twoStar: CountStar(data, 2),
        oneStar: CountStar(data, 1),
      },
    }));
  };

  return (
    <div className="my-3 rev-responsive  ">
      <RevRateData
        className="w-[40%] rev-rate-data p-3 "
        noOfComment={reviewData.Details.noOfComment}
        fiveStar={reviewData.Details.fiveStar}
        fourStar={reviewData.Details.fourStar}
        threeStar={reviewData.Details.threeStar}
        twoStar={reviewData.Details.twoStar}
        oneStar={reviewData.Details.oneStar}
      />
      <CommentList
        data={reviewData.CommentList}
        productNo={productNo}
        className="w-[60%] comment-list p-3 "
      />
    </div>
  );
};

export default ReviewRatings;
