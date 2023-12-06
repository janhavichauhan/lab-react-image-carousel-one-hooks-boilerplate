import React, { useState } from "react";
import "./Carousel.css";
import { images } from "../data/CarouselData";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

const ImageCarousel = () => {
  const [currentImage, setCurrentImage] = useState(0);

  const forwardImage = () => {
    setCurrentImage((prevImage) => (prevImage < images.length - 1 ? prevImage + 1 : 0));
  };

  const backwardImage = () => {
    setCurrentImage((prevImage) => (prevImage > 0 ? prevImage - 1 : images.length - 1));
  };

  return (
    <div className="Body">
      <div onClick={forwardImage} className="Backward">
        <ArrowBackIosIcon />
      </div>
      <div className="Heading">{images[currentImage].title}</div>
      <img src={images[currentImage].img} alt="main-body-image" />
      <div className="Subtitle">{images[currentImage].subtitle}</div>
      <div onClick={backwardImage} className="Forward">
        <ArrowForwardIosIcon />
      </div>
    </div>
  );
};

export default ImageCarousel;
