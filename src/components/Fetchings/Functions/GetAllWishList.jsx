import axios from "axios";
import { getToken } from "./GetUserData";
import { BaseApiUrl } from "../OnlineData";

async function GetAllWishList() {
  try {
    const response = await axios.post(`${BaseApiUrl}/api/customer/whishlist`, {
      token: getToken(),
    });
    return response.data;
  } catch (error) {
    window.location.href = "/account/login";
  }
}
export default GetAllWishList;