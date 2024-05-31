import React from "react";
import "./ClientFeedback.scss";
import  CardFeedBack from "./CardFeedBack/CardFeedBack";
const ClientFeedback = () => {
  return (
    <div className="client-feedback-bg my-3">
      <p className="text-white font-bold text-2xl py-3 text-center  sm:font-4xl ">
        Client's Feedback
      </p>
      <CardFeedBack />
    </div>
  );
};

export default ClientFeedback;
