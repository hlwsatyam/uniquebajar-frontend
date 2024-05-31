import React, { useEffect, useState } from "react";
import { CiCirclePlus, CiCircleMinus } from "react-icons/ci";
import { useDispatch } from "react-redux";
import { AddToCart } from "../../../Redux/Action";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { BaseApiUrl } from "../../../components/Fetchings/OnlineData";
const SignleCart = ({
  priceCalculation,
  setPriceCalculation,
  Item,
  ...style
}) => {
  const [productData, setProductData] = useState(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const productChangeHandler = (id, condition) => {
    let allProDuctFromCart = JSON.parse(localStorage.getItem("cart")) || [];
    if (condition === "inc") {
      let targetObj = allProDuctFromCart.find((obj) => obj.id === id);
      if (targetObj) {
        targetObj.count = targetObj.count + 1;

        setPriceCalculation((prevData) => ({
          ...prevData,
          total_price: prevData.total_price + productData.real_price,
          discount_price:
            prevData.discount_price +
            (productData.real_price - productData.discount_price),
          delivery_fees:
            prevData.delivery_fees + (productData?.delivery_fees || 0),
        }));
      }

      localStorage.setItem("cart", JSON.stringify(allProDuctFromCart));
    } else {
      let targetObj = allProDuctFromCart.find((obj) => obj.id === id);
      if (targetObj) {
        if (targetObj.count == 1) {
          allProDuctFromCart.splice(targetObj, 1);
          setPriceCalculation((prevData) => ({
            ...prevData,
            total_price: prevData.total_price - productData.real_price,
            discount_price:
              prevData.discount_price -
              (productData.real_price - productData.discount_price),
            delivery_fees:
              prevData.delivery_fees - (productData?.delivery_fees || 0),
          }));
          localStorage.setItem("cart", JSON.stringify(allProDuctFromCart));
          dispatch(AddToCart(id));
          window.location.href = "/checkout/cart";
        } else {
          targetObj.count = targetObj.count - 1;
          setPriceCalculation((prevData) => ({
            ...prevData,
            total_price: prevData.total_price - productData.real_price,
            discount_price:
              prevData.discount_price -
              (productData.real_price - productData.discount_price),
            delivery_fees:
              prevData.delivery_fees - (productData?.delivery_fees || 0),
          }));

          localStorage.setItem("cart", JSON.stringify(allProDuctFromCart));
        }
      }
    }
    dispatch(AddToCart());
  };

  useEffect(() => {
    ProductById();
  }, []);

  const ProductById = async () => {
    try {
      const response = await axios.get(
        `${BaseApiUrl}/api/data/singlef/${Item.id}`
      );
      setPriceCalculation((prevData) => ({
        ...prevData,
        total_price:
          prevData.total_price + Item.count * response.data.real_price,
        discount_price:
          prevData.discount_price +
          Item.count *
            (response.data.real_price - response.data.discount_price),
        delivery_fees:
          prevData.delivery_fees + (response.data?.delivery_fees || 0),
      }));
      setProductData(response.data);
    } catch (error) {
      console.error("Error fetching product data:", error);
      // Handle the error, e.g., set an error state
    }
  };

  return (
    productData && (
      <div className="p-6 border-b-2 ">
        <h1 className="flex justify-between my-3 ">
          {" "}
          <span className="font-bold ">{productData.product_brand}</span>
          <span className="font-bold ">
            {" "}
            ₹ {Item.count * productData.discount_price}{" "}
          </span>
        </h1>
        <div className="flex items-center gap-x-6 ">
          <img
            onClick={() =>
              navigate(
                `/${productData.product_title}/${productData.product_id}`
              )
            }
            className="cursor-pointer w-[100px] h-[100px]"
            src={`${BaseApiUrl}/uploads/${
              JSON.parse(productData.image_urls)[0]
            }`}
            alt="cart_image"
          />
          <div>
            <p
              onClick={() =>
                navigate(
                  `/${productData.product_title}/${productData.product_id}`
                )
              }
              className="text-[14px] cursor-pointer my-2"
            >
              {productData.product_title}
            </p>
            <p className="text-[14px] my-2">₹{productData.discount_price}</p>
            <p className="text-[14px] line-through font-bold my-2">
              ₹{productData.real_price}
            </p>
            <p className="text-[14px] my-2 text-green-900 font-bold inline px-3 py-1 text-left bg-green-300 rounded-[100px]">
              You Save ₹
              {(
                Number(Item.count) *
                (Number(productData.real_price) -
                  Number(productData.discount_price))
              ).toFixed(2)}{" "}
              {/* Fixed to 2 decimal places for currency */}
            </p>
          </div>
        </div>
        <p className="flex justify-end items-center">
          {" "}
          <CiCircleMinus
            onClick={() => productChangeHandler(Item.id, "dec")}
            className="inline cursor-pointer text-3xl "
          />
          <span className="mx-4 text-2xl ">{Item.count}</span>{" "}
          <CiCirclePlus
            onClick={() => productChangeHandler(Item.id, "inc")}
            className="inline cursor-pointer text-3xl "
          />
        </p>
      </div>
    )
  );
};

export default SignleCart;
