import axios from "axios";
import { BaseApiUrl } from "../OnlineData";

export const GetUserData = async () => {
  const getToken = () => localStorage.getItem("customerToken");

  try {
    const response = await axios.post(`${BaseApiUrl}/api/customer`, {
      token: getToken(),
    });
    return response.data;
  } catch (error) {
    localStorage.removeItem("customerToken");
    window.location.href = "/";
    throw error;
  }
};
 export const getToken = () => localStorage.getItem("customerToken");

export const GetAddresses = async () => {

  try {
    const response = await axios.post(`${BaseApiUrl}/api/customer/address`, {
      token: getToken(),
    });
    console.log(response.data)
    return response.data;
  } catch (error) {
    localStorage.removeItem("customerToken");
    window.location.href = "/";
    throw error;
  }
};


