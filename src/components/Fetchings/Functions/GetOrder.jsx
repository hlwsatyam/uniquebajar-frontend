import axios from "axios";
import { BaseApiUrl } from "../OnlineData";

async function getOrder() {
  try {
    const response = await axios.post(`${BaseApiUrl}/api/customer/order/orderlist`, {
      customerId: localStorage.getItem("customerToken"),
    });

    // Assuming the response contains the order data
    return response.data;
  } catch (error) {
    console.error("Error fetching orders:", error);

    // Optionally handle specific error cases
    if (error.response) {
      // The request was made and the server responded with a status code
      console.error("Server responded with error status:", error.response.status);
    } else if (error.request) {
      // The request was made but no response was received
      console.error("No response received from the server.");
    } else {
      // Something happened in setting up the request that triggered an Error
      console.error("Error setting up the request:", error.message);
    }

    // Redirect to the home page or handle the error in a way that makes sense for your application
    window.location.href = "/";
    // You may also throw the error again to propagate it to the calling code
    // throw error;
  }
}

export default getOrder;
