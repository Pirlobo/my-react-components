import React, { useState, useEffect, useRef } from "react";
import Image from "./Image";
import "./carousel.css";
import useCarousel from "../../hooks/useCarousel";
const Carousel = (props) => {
  const { counter, setCounter, handleNextBtn, handlePreviousBtn } =
    useCarousel(props);
  const images = props.imageList;
  const convertIntoImageObject = (imageArray) => {
    let imageObjects = [];
    imageArray.map((image, index) => {
      imageObjects.push({ url: image, id: index });
    });
    return imageObjects;
  };
  let imageObjects = convertIntoImageObject(images);
  const [renderedImage, setRenderedImage] = useState(imageObjects[counter]);
  useEffect(() => {
    setRenderedImage(imageObjects[counter]);
  }, [counter]);

  return (
    <div className="carousel-content">
      <i
        onClick={handlePreviousBtn}
        className="fas fa-angle-double-left icon-left "
      ></i>
      <i
        onClick={handleNextBtn}
        class="fas fa-angle-double-right icon-right "
        id="nextBtn"
      ></i>
      <Image renderedImage={renderedImage} counter={counter}></Image>
    </div>
  );
};

export default Carousel;
