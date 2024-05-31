// SellerAuth.js
import axios from "axios";
import React, { useState } from "react";
import { Toaster, toast } from "react-hot-toast";
import { BaseApiUrl } from "../../../components/Fetchings/OnlineData";
import CategoryList from "../../../Data/Category.json";
const SellerAuth = () => {
  const [formData, setFormData] = useState({
    companyName: "",
    yourName: "",
    email: "",
    password: "",
    confirmPassword: "",
    contactNumber: "",
    address: "",
    category: "",
    cin: "",
    shopImage: null,
    storeName: "",
    storeDescription: "",
    storeLogo: null,
    otp: "",
  });
  const handleChange = (e) => {
    const { name, value, type, files } = e.target;
    // Handle file input separately
    if (type === "file") {
      setFormData({
        ...formData,
        [name]: files[0], // Assuming single file upload
      });
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    // Additional logic for handling file uploads
    const formDataForApi = new FormData();
    for (const key in formData) {
      if (key === "storeLogo" || key === "shopImage") {
      } else {
        formDataForApi.append(key, formData[key]);
      }
    }

    formDataForApi.append("storeLogo", formData.storeLogo);
    formDataForApi.append("shopImage", formData.shopImage);

    await axios
      .post(`${BaseApiUrl}/api/sellercreate`, formDataForApi)
      .then((res) => {
        if (res.status === 200) {
          setIsProcessStart(!isProcessStart);
        } else {
          toast.error(res.data?.message, {
            position: "top-left",
            style: {
              marginTop: 150,
            },
          });
        }
      })
      .catch((err) => {
        console.log(err);
        toast.error("something Went Worng!", {
          position: "top-right",
          style: {
            marginTop: 150,
          },
        });
      });
  };

  const [isProcessStart, setIsProcessStart] = useState(false);
  return (
    <div className="py-4 bg-gradient-to-b from-blue-500 via-blue-700 flex-col to-blue-900 flex items-center justify-center">
      <Toaster />
      <p className="text-center text-white my-4 font-bold text-xl">
        Seller Registration
      </p>
      {isProcessStart ? (
        <div className="bg-white py-3 px-3 rounded  ">
          <p className="text-xl my-3 text-green-700">
            We Sent Verification Email On Registred Email!
          </p>
          <p className="my-6 text-sm ">Please Verify Your Acount</p>
          <button className="bg-green-500 py-1 px-4 text-white rounded-full">
            <a href="/">Home</a>
          </button>
        </div>
      ) : (
        <>
          <form
            className="bg-white w-full sm:w-[60%] flex shadow-md rounded-md px-8 pt-6 pb-8 mb-4  flex-col gap-x-10  transition-transform transform "
            onSubmit={handleSubmit}
          >
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Your Name:
              </label>
              <input
                type="text"
                name="yourName"
                value={formData.yourName}
                onChange={handleChange}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Company Name:
              </label>
              <input
                type="text"
                name="companyName"
                value={formData.companyName}
                onChange={handleChange}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Email:
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Password:
              </label>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Confirm Password:
              </label>
              <input
                type="password"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Contact Number:
              </label>
              <input
                type="tel"
                name="contactNumber"
                value={formData.contactNumber}
                onChange={handleChange}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Address:
              </label>
              <input
                type="text"
                name="address"
                value={formData.address}
                onChange={handleChange}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Category:
              </label>
              <select
                onChange={handleChange}
                name="category"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id=" "
              >
                {CategoryList.map((item, index) => {
                  return (
                    <option key={index} value={item.categoryd}>
                      {item.category}
                    </option>
                  );
                })}
              </select>
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                CIN (Company Identification Number):
              </label>
              <input
                type="text"
                name="cin"
                value={formData.cin}
                onChange={handleChange}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Shop Image:
              </label>
              <input
                type="file"
                name="shopImage"
                onChange={handleChange}
                accept="image/*"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Store Name:
              </label>
              <input
                type="text"
                name="storeName"
                value={formData.storeName}
                onChange={handleChange}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Store Description:
              </label>
              <textarea
                name="storeDescription"
                value={formData.storeDescription}
                onChange={handleChange}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Store Logo:
              </label>
              <input
                type="file"
                name="storeLogo"
                onChange={handleChange}
                accept="image/*"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
          </form>
          <div className="mb-4">
            <button
              onClick={handleSubmit}
              type="submit"
              className="bg-gradient-to-r from-green-400 to-blue-500 hover:bg-gradient-to-r hover:from-pink-500 hover:to-yellow-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline transition-colors duration-300"
            >
              Register
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default SellerAuth;
