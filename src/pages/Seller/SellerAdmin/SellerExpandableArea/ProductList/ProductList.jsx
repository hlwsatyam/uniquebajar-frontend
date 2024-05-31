import axios from "axios";
import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { BaseApiUrl } from "../../../../../components/Fetchings/OnlineData";
import toast from "react-hot-toast";
const ProductList = () => {
  const [sellerProducts, setSellerProducts] = useState([]);
  const navigation = useNavigate();
  // Fetch seller products from the server
  const fetchSellerProducts = async () => {
    try {
      const response = await axios.post(`${BaseApiUrl}/api/seller/allproduct`, {
        token: localStorage.getItem("SellerToken"),
      });

      if (response.status == 200) {
        setSellerProducts(response.data);
      } else {
      }
    } catch (error) {
      toast.error("Something went wrong", { position: "top-right" });
    }
  };

  // useEffect to fetch data when the component mounts
  useEffect(() => {
    fetchSellerProducts();
  }, []);

  // Handle product deletion

  const updateHandler = (id) => {
    navigation("/seller/updateProduct", { state: { productId: id } });
  };
  return (
    <div>
      <div className="flex gap-4 flex-wrap items-center">
        {sellerProducts.map((item) => (
          <div class="relative m-1 bg-lime-900   sm:m-3 flex w-full max-w-xs flex-col overflow-hidden rounded-lg border border-gray-100  shadow-md">
            <Link
              to={`/${item.product_title}/${item.product_id}`}
              class="relative mx-3 mt-3 flex h-60 overflow-hidden rounded-xl"
              href="#"
            >
              <img
                class="object-cover"
                src={`${BaseApiUrl}/uploads/${JSON.parse(item.image_urls)[0]}`}
                alt="product image"
              />
              <span class="absolute top-0 left-0 m-2 rounded-full bg-black px-2 text-center text-sm font-medium text-white">
                {item.discount}% OFF
              </span>
            </Link>
            <div class="mt-4 px-5 pb-5">
              <a href="#">
                <h5 class="text-xl tracking-tight text-slate-900 overflow-hidden whitespace-nowrap overflow-ellipsis">
                  {item.product_title}
                </h5>
              </a>
              <div class="mt-2 mb-5 flex items-center justify-between">
                <p>
                  <span class="text-3xl font-bold text-slate-900">
                    ₹{item.discount_price}{" "}
                  </span>
                  <span class="text-sm text-slate-900 line-through">
                    ₹{item.real_price}
                  </span>
                </p>
                <div class="flex items-center">
                  <svg
                    aria-hidden="true"
                    class="h-5 w-5 text-yellow-300"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                  </svg>
                  <svg
                    aria-hidden="true"
                    class="h-5 w-5 text-yellow-300"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                  </svg>
                  <svg
                    aria-hidden="true"
                    class="h-5 w-5 text-yellow-300"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                  </svg>
                  <svg
                    aria-hidden="true"
                    class="h-5 w-5 text-yellow-300"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                  </svg>
                  <svg
                    aria-hidden="true"
                    class="h-5 w-5 text-yellow-300"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                  </svg>
                  <span class="mr-2 ml-3 rounded bg-yellow-200 px-2.5 py-0.5 text-xs font-semibold">
                    5.0
                  </span>
                </div>
              </div>
              <div>
                <button
                  className="bg-black border py-2 rounded  px-3 text-sm hover:bg-slate-700 h "
                  onClick={() => updateHandler(item.product_id)}
                >
                  Update
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
