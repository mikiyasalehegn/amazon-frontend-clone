import React from "react";
import { Carousel } from "react-responsive-carousel";
import { images } from "./images/data";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import classes from "./carousel.module.css";
// import { FaChevronLeft } from "react-icons/fa6";
// import { FaChevronRight } from "react-icons/fa6";

function CarouselEffect() {
  return (
    <div className={classes.carousel_box}>
      <Carousel
        autoPlay={true}
        infiniteLoop={true}
        showIndicators={false}
        showThumbs={false}
        showArrows={false}
        showStatus={false}
      >
        {images.map((image, key) => {
          return <img key={key} src={image} />;
        })}
      </Carousel>
      <div className={classes.hero__img}></div>
      <div className={classes.separator}></div>
    </div>
  );
}

export default CarouselEffect;
