import React from "react";
import { MdCheckCircle } from "react-icons/md";

function PaymentSuccess() {
  return (
    <div className="flex flex-col items-center justify-center  bg-gray-50">
      <div className="bg-white p-8 rounded-lg shadow-lg text-center">
        <MdCheckCircle className="h-24 w-24 text-green-500 mx-auto" />
        <h1 className="text-3xl font-bold mt-4 text-gray-800">
          Payment Successful!
        </h1>
        <p className="text-gray-600 mt-2">
          Thank you for your purchase. Your transaction has been completed.
        </p>
        <button
          className="mt-6 px-6 py-2 bg-blue-600 text-white text-lg font-medium rounded hover:bg-blue-700 transition duration-300"
          onClick={() => (window.location.href = "/")}
        >
          Back to Home
        </button>
        <button
          className="mt-4 px-6 py-2 bg-gray-200 text-gray-800 text-lg font-medium rounded hover:bg-gray-300 transition duration-300"
          onClick={() => (window.location.href = "/customer/profile")}
        >
          View Order Details
        </button>
      </div>
    </div>
  );
}

export default PaymentSuccess;
