import React, { useState } from "react";
import axios from "axios";
import { BaseApiUrl } from "../../../components/Fetchings/OnlineData";

const SubscribeLetter = () => {
  const [email, setEmail] = useState("");
  const [showThankYou, setShowThankYou] = useState(false);

  const handleSubmit = async () => {
    try {
      const response = await axios.post(`${BaseApiUrl}/api/newsletter/submit`, {
        email: email,
      });

      if (response.status === 200) {
        // Form submitted successfully
        setShowThankYou(true);
      } else {
        // Handle error cases
        console.error("Failed to submit form");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  return (
    <div>
      {showThankYou ? (
        <p className="text-green-600 font-semibold bg-white py-4 px-4 shadow-2xl animate-pulse mb-6">Thank you for subscribing!</p>
      ) : (
        <>
          <p className="uppercase mb-6 font-semibold">Sign up to stay updated</p>
          <p className="my-1">
            <input
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="border text-black outline-none placeholder:text-[12px] rounded py-4 px-4"
              placeholder="ENTER YOUR EMAIL ADDRESS"
            />
          </p>
          <p className="my-3">
            <button onClick={handleSubmit} className="py-2 rounded font-semibold bg-slate-950 px-6">
              Subscribe
            </button>
          </p>
        </>
      )}
    </div>
  );
};

export default SubscribeLetter;
