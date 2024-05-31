import axios from "axios";
import { getToken } from "./GetUserData";
import { BaseApiUrl } from "../OnlineData";

export async function AddToWishlist(
  wishlistAdded,
  setWishlistAdded,
  productId
) {
  

  await axios
    .post(`${BaseApiUrl}/api/customer/whishlistupdate`, {
      token: getToken(),
      productId,
    })
    .then((res) => {
      if (res.status === 200) {
        setWishlistAdded(res.data.isInWishlist);
      } else {
        setWishlistAdded(false);
      }
    })
    .catch((err) => {
      window.location.href = "/account/login";
    });
}
export async function CheckWishList(
  wishlistAdded,
  setWishlistAdded,
  productId
) {
  await axios
    .post(`${BaseApiUrl}/api/customer/whishlistCheck`, {
      token: getToken(),
      productId,
    })
    .then((res) => {
      if (res.status === 200) {
        setWishlistAdded(res.data.isInWishlist);
      } else {
        setWishlistAdded(false);
      }
    })
    .catch((err) => {});
}
