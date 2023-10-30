import Button from "../../../Button";
import { Imgbox } from "../../../../models/coffee";
import React from "react";

const ImgBox:React.FC<Imgbox> = ({imgsrc, imgintro, imghref}) => {
  return (
    <div className="carousel-slide">
      <img src={imgsrc} alt="#" />
      <p>{imgintro}</p>
      <Button href={imghref}>보러가기</Button>
    </div>
  );
}

export default ImgBox;