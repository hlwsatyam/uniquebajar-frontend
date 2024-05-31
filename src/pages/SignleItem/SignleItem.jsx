import React, { useEffect, useState } from "react";

import BrandNameHeader from "./BrandNameHeader/BrandNameHeader";
import PriceHeader from "./PriceHeader/PriceHeader";
import Deliverto from "./DeliverTo/Deliverto";
import ProductDesription from "./Description/ProductDesription";
import ProductInformation from "./Features&Details/ProductInformation";
import SignleCardMobCarousel from "./Carousel/Carousel";
import MobCarousel from "./Carousel/MobCarousel";
import ReviewRatings from "./Review&Ratings/ReviewRatings";
import { useLocation } from "react-router-dom";
import axios from "axios";
import { calculateDeliveryDate } from "../../components/SupportiveFunction/DateTime";
import TopProductList from "../Home/TopProduct/TopProductList";
import { BaseApiUrl } from "../../components/Fetchings/OnlineData";
import LoadingFullPage from "../../components/Reusable/LoadingFullPage";
const SignleItem = () => {
  const productNo = useLocation().pathname.split("/").filter(Boolean).pop();
  const [productData, setProductData] = useState(null);
  const [userLocation, setUserLocation] = useState({ pincode: "", city: "" });
  const [isLocationAvailable, setIsLocationAvailable] = useState(true);
  const ProductById = async () => {
    try {
      setProductData(null);
      const response = await axios.get(
        `${BaseApiUrl}/api/data/singlef/${productNo}`
      );
      console.log(response.data);
      setProductData(response.data);
    } catch (error) {
      console.error("Error fetching product data:", error);
      // Handle the error, e.g., set an error state
    }
  };

  useEffect(() => {
    ProductById();
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          // Successfully retrieved user's location
          const { latitude, longitude } = position.coords;
          // Call the reverse geocoding API (replace 'YOUR_API_KEY' with your actual OpenCage API key)
          fetch(
            `https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=${latitude}&lon=${longitude}`
          )
            .then((response) => response.json())
            .then((data) => {
              if (data.address) {
                setUserLocation({
                  pincode: data.address.postcode || "",
                  city: data.address.city || data.address.town || "",
                });
                setIsLocationAvailable(true);
              } else {
                setIsLocationAvailable(false);
              }
            })
            .catch((error) => {
              console.error("Error fetching location:", error);
              setIsLocationAvailable(false);
            });
        },
        (error) => {
          console.error("Error retrieving geolocation:", error);
          setIsLocationAvailable(false);
        }
      );
    } else {
      console.error("Geolocation is not supported by this browser.");
      setIsLocationAvailable(false);
    }
  }, [productNo]);
  return (
    <>
      {" "}
      {productData ? (
        <div className=" p-2 sm:p-12 ">
          <div className="flex shadow-inner rounded-[12px] shadow-zinc-500   ">
            <SignleCardMobCarousel
              productData={productData}
              className="p-3 w-[0%] sm:block hidden sm:w-[40%]"
            />
            <div className="sm:w-[60%] w-[100%]  ">
              <BrandNameHeader
                brand={productData.product_brand}
                brandName={productData.product_title}
                noOfRatings="352"
              />
              <MobCarousel
                className="sm:hidden block"
                productData={productData}
              />
              <PriceHeader
                soldBy={productData.sold_by}
                delDate={calculateDeliveryDate()}
                price={productData.discount_price}
                realPrice={productData.real_price}
                OfferPresent={productData.discount}
              />
              <Deliverto
                location={`${userLocation.pincode} ${userLocation.city}`}
                isAvailable={isLocationAvailable}
              />
              <ProductDesription description={productData.description} />
              <ProductInformation productData={productData} />
            </div>
          </div>
          <p className="my-4 text-2xl  font-bold">Related Products</p>
          <TopProductList subCategory={productData?.subcategory_name} />
          <ReviewRatings />
        </div>
      ) : (
        <LoadingFullPage />
      )}
    </>
  );
};

export default SignleItem;
