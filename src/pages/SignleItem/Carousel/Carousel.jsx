import React, { useState } from "react";
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
  DotGroup,
} from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";
import { useDispatch, useSelector } from "react-redux";
import { AddToCart } from "../../../Redux/Action";
import { BaseApiUrl } from "../../../components/Fetchings/OnlineData";

function SignleCardMobCarousel({ productData, ...style }) {
  let imageUrls;
  if (productData) {
    imageUrls = JSON.parse(productData.image_urls);
  }
  // console.log(JSON.parse(imageUrls)[0]);
  const [currentSlide, setCurrentSlide] = useState(0);

  const handleThumbnailHover = (index) => {
    setCurrentSlide(index);
  };
  const LatestCartData = useSelector((s) => s.cartValue);
  const dispatch = useDispatch();
  const addToCart = (productId) => {
    dispatch(AddToCart(productId));
  };

  return (
    imageUrls && (
      <div {...style}>
        <div className="flex">
          {/* Left Side: Small Thumbnails */}
          <div className="flex flex-col pr-4">
            {imageUrls?.map((image, index) => (
              <img
                key={index}
                src={`${BaseApiUrl}/uploads/${image}`}
                alt={`Thumbnail ${index + 1}`}
                className="w-16 h-16 mb-2 cursor-pointer"
                onMouseOver={() => handleThumbnailHover(index)}
              />
            ))}
          </div>

          {/* Right Side: Main Carousel */}
          <div className="flex-1   ">
            <CarouselProvider
              naturalSlideWidth={100}
              naturalSlideHeight={50}
              totalSlides={imageUrls.length}
              currentSlide={currentSlide}
            >
              <Slider>
                {imageUrls?.map((image, index) => (
                  <Slide index={index} key={index}>
                    <img
                      src={`${BaseApiUrl}/uploads/${image}`}
                      alt={`Slide ${index + 1}`}
                      className=" object-center h-full"
                    />
                  </Slide>
                ))}
              </Slider>
              <DotGroup />
              <ButtonBack className="carousel-button hidden">Back</ButtonBack>
              <ButtonNext className="carousel-button hidden">Next</ButtonNext>
            </CarouselProvider>
          </div>
        </div>
        {LatestCartData.map((cartItem) => cartItem.id).includes(
          productData.product_id
        ) ? (
          <button
            onClick={() => addToCart(productData.product_id)}
            className="flex items-center w-full justify-center rounded-md bg-slate-900 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-blue-300"
          >
            {" "}
            Remove From Cart
          </button>
        ) : (
          <button
            onClick={() => addToCart(productData.product_id)}
            className="flex items-center justify-center w-full  rounded-md bg-slate-900 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-blue-300"
          >
            {" "}
            Add To Cart
          </button>
        )}
      </div>
    )
  );
}

export default SignleCardMobCarousel;
