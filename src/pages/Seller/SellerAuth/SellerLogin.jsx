// Login.js
import axios from "axios";
import React, { useState, useRef, useEffect } from "react";
import { toast, Toaster } from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import { BaseApiUrl } from "../../../components/Fetchings/OnlineData";

const SellerLogin = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();
  const [forgotPasswordModal, setForgotPasswordModal] = useState(false);
  const [resetEmail, setResetEmail] = useState("");

  const modalRef = useRef(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`${BaseApiUrl}/api/sellerlogin`, {
        email: formData.email,
        password: formData.password,
      });
      if (response.status === 200) {
        const token = response.data?.token;
        localStorage.setItem("SellerToken", token);
        navigate("/seller/dashboard");
      } else {
        toast.error(response.data.message, { position: "top-right" });
      }
    } catch (error) {
      // Handle other errors (network issues, server errors, etc.)
      console.error("Error during login:", error);
      toast.error("An error occurred during login. Please try again later.");
    }
  };
  const handleForgotPassword = async (e) => {
    try {
      e.preventDefault();
      const res = await axios.post(
        `${BaseApiUrl}/api/seller/sellerforgotpassword`,
        {
          email: resetEmail,
        }
      );
      if (res.status === 200) {
        toast.success(res.data.message, { position: "top-right" });
      } else {
        toast.error(res.data.message, { position: "top-right" });
      }
    } catch (error) {
      toast.error(error.message, { position: "top-right" });
    }
  };

  // Handle click outside modal to close it
  const handleClickOutsideModal = (e) => {
    if (modalRef.current && !modalRef.current.contains(e.target)) {
      setForgotPasswordModal(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutsideModal);
    return () => {
      document.removeEventListener("mousedown", handleClickOutsideModal);
    };
  }, []);

  return (
    <div className="div-bg  py-6  flex items-center justify-center bg-gray-100">
      <div className="bg-white/60 p-8 rounded shadow-md w-96" ref={modalRef}>
        <h2 className="text-2xl font-bold mb-6 ">Seller Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-600"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:border-blue-500"
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-600"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:border-blue-500"
              required
            />
          </div>
          <div className="flex items-center justify-between">
            <button
              type="submit"
              className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
            >
              Login
            </button>
            <a
              href="#"
              className="text-blue-500 hover:underline cursor-pointer"
              onClick={() => setForgotPasswordModal(true)}
            >
              Forgot Password?
            </a>
          </div>
          <p className="font-bold mt-3 text-sm ">
            Don't Have An Account?
            <Link
              className="ml-2 text-blue-500 hover:underline"
              to="/seller/auth"
            >
              Sign Up
            </Link>
          </p>
        </form>

        {/* Forgot Password Modal */}
        {forgotPasswordModal && (
          <div className="fixed inset-0 z-50 overflow-auto bg-black bg-opacity-50 flex items-center justify-center">
            <div className="bg-white p-8 rounded shadow-md w-96">
              <h2 className="text-2xl font-bold mb-4">Forgot Password</h2>
              <form onSubmit={handleForgotPassword}>
                <div className="mb-4">
                  <label
                    htmlFor="resetEmail"
                    className="block text-sm font-medium text-gray-600"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="resetEmail"
                    value={resetEmail}
                    onChange={(e) => setResetEmail(e.target.value)}
                    className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:border-blue-500"
                    required
                  />
                </div>
                <div className="flex items-center justify-between">
                  <button
                    type="submit"
                    className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
                  >
                    Reset Password
                  </button>
                  <a
                    href="#"
                    className="text-blue-500 hover:underline cursor-pointer"
                    onClick={() => setForgotPasswordModal(false)}
                  >
                    Cancel
                  </a>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default SellerLogin;
