import React from "react";
import "./carousel.css";
const Image = (props) => {
  const renderedImage = props.renderedImage;
  return (
    <div className="carousel-slide">
      <img
        className={
          renderedImage.id == props.counter ? "slide active image" : "slide"
        }
        src={renderedImage.url}
      ></img>
    </div>
  );
};

export default Image;
