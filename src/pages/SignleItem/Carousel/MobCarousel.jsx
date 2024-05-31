import { useState } from "react";
import ReactSimplyCarousel from "react-simply-carousel";

import logo from "../../../assets/AuthIMG/Unique Bazar.png";
import { useDispatch, useSelector } from "react-redux";
import { AddToCart } from "../../../Redux/Action";
import { BaseApiUrl } from "../../../components/Fetchings/OnlineData";
function CardFeedBack({ productData, ...style }) {
  let imageUrls;
  if (productData) {
    imageUrls = JSON.parse(productData.image_urls);
  }
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);
  const LatestCartData = useSelector((s) => s.cartValue);
  const dispatch = useDispatch();
  const addToCart = (productId) => {
    dispatch(AddToCart(productId));
  };

  return (
    imageUrls && (
      <div {...style}>
        <ReactSimplyCarousel
          activeSlideIndex={activeSlideIndex}
          onRequestChange={setActiveSlideIndex}
          itemsToShow={5}
          itemsToScroll={5}
          forwardBtnProps={{
            //here you can also pass className, or any other button element attributes
            style: {
              alignSelf: "center",
              background: "black",
              border: "none",
              borderRadius: "50%",
              color: "white",
              cursor: "pointer",
              fontSize: "20px",
              height: 30,
              lineHeight: 1,
              textAlign: "center",
              width: 30,
            },
            children: <span>{`>`}</span>,
          }}
          backwardBtnProps={{
            //here you can also pass className, or any other button element attributes
            style: {
              alignSelf: "center",
              background: "black",
              border: "none",
              borderRadius: "50%",
              color: "white",
              cursor: "pointer",
              fontSize: "20px",
              height: 30,
              lineHeight: 1,
              textAlign: "center",
              width: 30,
            },
            children: <span>{`<`}</span>,
          }}
          responsiveProps={[
            {
              itemsToShow: 1,
              itemsToScroll: 1,
              minWidth: 768,
            },
            {
              itemsToShow: 1,
              itemsToScroll: 1,
              maxWidth: 768,
            },
          ]}
          speed={400}
          easing="linear"
        >
          {/* here you can also pass any other element attributes. Also, you can use your custom components as slides */}
          {imageUrls.map((item) => (
            <div>
              <div className="text-white bg-gradient-to-r h-[60vh]  w-[300px]  shadow-2xl p-4 ">
                <img
                  src={`${BaseApiUrl}/uploads/${item}`}
                  alt=""
                  className="h-full my-2"
                />
                <p className="font-bold "> {productData.description} </p>
                <p className="text-right my-5 ">
                  {" "}
                  <span className="bg-green-500 font-semibold rounded-full py-2 px-2">
                    {productData.product_title}
                  </span>{" "}
                </p>
              </div>
            </div>
          ))}
        </ReactSimplyCarousel>
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

export default CardFeedBack;
