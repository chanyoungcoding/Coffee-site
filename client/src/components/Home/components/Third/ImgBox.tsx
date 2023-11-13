import Button from "../../../Button";
import { Imgbox } from "../../../../models/coffee";
import React from "react";
import styled from "styled-components";

const CarouselSlide = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  p {
    padding: 20px;
    font-size: 2rem;

    // iPad Pro && iPad Air
    @media (max-width: 1200px) {
      font-size: 26px;
    }
  }
`
const CarouselImg = styled.img`
  width: 370px;
  height: 370px;
  background-color: #986C4A;
  border-radius: 15px;
  object-fit: contain;

  // iPad Pro && iPad Air
  @media (max-width: 1200px) {
    width: 265px;
    height: 265px;
  }
  
    // iPad Mini
  @media (max-width: 900px) {
    width: 200px;
    height: 200px;
  }
`

const ImgBox:React.FC<Imgbox> = ({imgsrc, imgintro, imghref}) => {
  return (
    <CarouselSlide>
      <CarouselImg src={imgsrc} alt="#" />
      <p>{imgintro}</p>
      <Button href={imghref}>보러가기</Button>
    </CarouselSlide>
  );
}

export default ImgBox;