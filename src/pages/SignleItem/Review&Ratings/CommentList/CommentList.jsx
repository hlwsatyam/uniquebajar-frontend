import React from "react";
import SingleComment from "./SingleComment/SingleComment";

const CommentList = ({productNo, data, ...style }) => {
  return (
    <div {...style}>
      <p className="text-2xl font-bold">Ratings & Reviews</p>
      {data.map((item) => (
        <SingleComment  productNo={productNo}
          nameOfCommenter={item.customer_name}
          starFromCommenter={item.no_of_star}
          dateOfComment={item.date_of_comment}
          CommentSubject={item.subject}
          isVeriFied={item.is_verified}
          CommentDescription={item.description}
          likesOnComment={item.no_of_like}
        />
      ))}
      <p>
        {" "}
        <button className="border py-2 px-7 rounded-full">Prev</button>{" "}
        <button className="border py-2 px-8 rounded-full">Next</button>{" "}
      </p>
    </div>
  );
};

export default CommentList;
