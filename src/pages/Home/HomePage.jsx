import React from "react";
import BannerCarousel from "./Carousel/BannerCarousel";
import TopProductList from "./TopProduct/TopProductList";
import Offer from "./Coupon/Caupon";
import AboutUniqueBazar from "./AboutUniqueBazar/AboutUniqueBazar";
import ClientFeedback from "./FeedBack/ClientFeedback";
const HomePage = () => {
  return (
    <div className="">
      <BannerCarousel />
      <p className="px-12 my-3 text-xl font-bold ">Top Deals</p>
      <TopProductList category={"home_care"} />
      <Offer img="https://www.jiomart.com/images/cms/aw_rbslider/slides/1708669433_Madesa_Furniture_DT.jpg?im=Resize=(1680,320)" />
      <TopProductList category={"home_care"} page={1} />
      <Offer img="https://www.jiomart.com/images/cms/aw_rbslider/slides/1693298017_Let_the_game_begin.jpg?im=Resize=(1240,150)" />
      <p className="px-12 my-3 text-xl font-bold ">Top Picks</p>
      <TopProductList category={"home_care"} page={2} />
      <ClientFeedback />
      <AboutUniqueBazar />
    </div>
  );
};

export default HomePage;
