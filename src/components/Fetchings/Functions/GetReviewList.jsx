import axios from "axios";
import { BaseApiUrl } from "../OnlineData";

async function getReviewList(product_no) {
  try {
    const response = await axios.post(`${BaseApiUrl}/api/product/review `, {
      product_no,
    });

    // Assuming the response data contains the reviews
    return response.data;
  } catch (error) {
    // Handle errors here
    console.error("Error fetching review list:", error.message);
    throw error; // Re-throw the error to let the caller handle it
  }
}

export default getReviewList;
