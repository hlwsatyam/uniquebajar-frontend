import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const BannerCarousel = () => {
  return (
    <div className="my-8">
      <Carousel
        showArrows={true}
        infiniteLoop={true}
        showThumbs={false}
        autoPlay={true}
        interval={5000}
        stopOnHover={true}
        transitionTime={500}
      >
        <div>
          <img
            src="https://rukminim2.flixcart.com/fk-p-flap/1600/270/image/67747b5b8bd540ec.jpg?q=20"
            alt="Slide 1"
          />
        </div>
        <div>
          <img
            src="https://rukminim2.flixcart.com/fk-p-flap/1600/270/image/e85756f4c5c0eac3.png?q=20"
            alt="Slide 2"
          />
        </div>
        <div>
          <img
            src="https://www.jiomart.com/images/cms/aw_rbslider/slides/1708669341_Zorbes_DT.jpg?im=Resize=(1680,320)"
          />
        </div>
        {/* Add more slides as needed */}
      </Carousel>
    </div>
  );
};

export default BannerCarousel;
