import React from "react";
import { MdError } from "react-icons/md";

function PaymentFailed() {
  return (
    <div className="flex flex-col items-center justify-center   bg-gray-50">
      <div className="bg-white p-8 rounded-lg shadow-lg text-center">
        <MdError className="h-24 w-24 text-red-500 mx-auto" />
        <h1 className="text-3xl font-bold mt-4 text-gray-800">
          Payment Failed                                                       
        </h1>
        <p className="text-gray-600 mt-2">
          We're sorry, but there was an issue processing your payment. Please
          try again or contact support.
        </p>
        <button
          className="mt-6 px-6 py-2 bg-blue-600 text-white text-lg font-medium rounded hover:bg-blue-700 transition duration-300"
          onClick={() => (window.location.href = "/")}
        >
          Back to Home
        </button>
        <button
          className="mt-4 px-6 py-2 bg-red-600 text-white text-lg font-medium rounded hover:bg-red-700 transition duration-300"
          onClick={() => (window.location.href = "/retry-payment")}
        >
          Retry Payment
        </button>
      </div>
    </div>
  );
}

export default PaymentFailed;
