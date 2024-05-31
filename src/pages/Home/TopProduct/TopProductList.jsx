import React, { useState, useEffect } from "react";
import axios from "axios";
import Slider from "react-slick";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {
  addToCartLocalHost,
  getLatestCart,
} from "../../../components/Fetchings/LocalHost";
import { useDispatch, useSelector } from "react-redux";
import { AddToCart } from "../../../Redux/Action";
import { useNavigate } from "react-router-dom";
import { BaseApiUrl } from "../../../components/Fetchings/OnlineData";

const TopProductList = ({ subCategory, category, title, page = 1 }) => {
  const [items, setItems] = useState([]);
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);
  const LatestCartData = useSelector((s) => s.cartValue);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const addToCart = (productId) => {
    dispatch(AddToCart(productId));
  };

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const response = await axios.get(
          `${BaseApiUrl}/api/latestproduct?page=${page}&category=${category}&product_title=${title}&sub_category=${subCategory}`
        );
        if (!response || !response.data || !Array.isArray(response.data)) {
          throw new Error("Invalid response format");
        }
        setItems(response.data);
        window.scrollTo(0, 0);
      } catch (error) {
        console.error("Error fetching data:", error.message);
      }
    };
    fetchItems();
  }, [navigate]);

  const renderCarouselItems = () => {
    return items.map((item) => (
      <div className="p-3  " key={item.id}>
        <div className="border h-[300px] p-2 rounded-[30px] ">
          <img
            onClick={() =>
              navigate(`/${item.product_title}/${item.product_id}`)
            }
            src={`${BaseApiUrl}/uploads/${JSON.parse(item.image_urls)[0]}`}
            className="w-[200px] cursor-pointer m-auto h-[200px]"
            alt={item}
          />
          <div>
            <h3
              onClick={() =>
                navigate(`/${item.product_title}/${item.product_id}`)
              }
              className=" font-semibold cursor-pointer overflow-hidden overflow-ellipsis whitespace-nowrap"
            >
              {item.product_title}
            </h3>
          </div>
          <div>
            <h3 className="text-xl font-bold">₹{item.discount_price}</h3>
          </div>
          <div>
            {LatestCartData.map((cartItem) => cartItem.id).includes(
              item.product_id
            ) ? (
              <button
                onClick={() => addToCart(item.product_id)}
                className="border bg-red-900 text-white py-1 text-[10px] rounded-full w-full font-bold"
              >
                {" "}
                Remove From Cart
              </button>
            ) : (
              <button
                onClick={() => addToCart(item.product_id)}
                className="border  bg-green-600 text-white py-1 text-[12px]  rounded-full w-full font-bold"
              >
                {" "}
                Add To Cart
              </button>
            )}
          </div>
        </div>
      </div>
    ));
  };

  const CustomNextArrow = (props) => (
    <button
      {...props}
      className="slick-arrow absolute top-1/2 right-4 bg-red-700 p-4  rounded-full  z-[1]  transform -translate-y-1/2 text-black"
    >
      <FaArrowRight className="text-white" />
    </button>
  );

  const CustomPrevArrow = (props) => (
    <button
      {...props}
      className="slick-arrow  absolute top-1/2 left-4 transform bg-red-700 p-4 z-[1] rounded-full -translate-y-1/2 text-black"
    >
      <FaArrowLeft className="text-white" />
    </button>
  );

  const slickSettings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 6,
    slidesToScroll: 5,
    nextArrow: <CustomNextArrow />,
    prevArrow: <CustomPrevArrow />,
    accessibility: true, // Enable arrow key navigation
    responsive: [
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 1150,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 1300,
        settings: {
          slidesToShow: 4,
        },
      },
    ],
  };

  return (
    <div className="  overflow-hidden">
      <div className="mx-auto max-w-full px-12  relative">
        <Slider
          {...slickSettings}
          afterChange={(index) => setActiveSlideIndex(index)}
        >
          {renderCarouselItems()}
        </Slider>
      </div>
    </div>
  );
};

export default TopProductList;
