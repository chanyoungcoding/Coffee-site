import React from "react";
import { RecipeData } from "../../../models/coffee";
import styled from "styled-components";

const IntroContainer = styled.div`
  margin: 80px 150px; 
  display: flex;
  background-color: #F5EDE7;
  @media (max-width: 950px) {
    display: block;
  }
  @media (max-width: 500px) {
    width: 400px;
    margin: 20px auto;
  }
`
const IntroTitle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #4281C1;
  p {
    transform: rotate(90deg);
    color: white;
    font-size: 2rem;

    // iPhone XR ~ 15 && iPad All
    @media (max-width: 950px) {
      padding: 20px 0px;
      transform: rotate(0deg);
    }
  }
`
const OrderBox = styled.div`
  padding: 30px;
  flex-grow: 1;
  h2 {
    font-size: 3rem;
    font-weight: bold;
  }
  p {
    padding: 10px;
    font-size: 1.7rem;
    font-weight: 300;
  }
`


const RecipeMaterials:React.FC<RecipeData> = ({data}) => {
  return ( 
    <IntroContainer className="intro__box">
      <IntroTitle>
        <p>INTRODUCE</p>
      </IntroTitle>
      <OrderBox>
        <h2>준비물</h2>
        {data?.[0].materials.map((item,index) => (<p key={index}>{item}</p>))}
      </OrderBox>
  </IntroContainer>
  );
}

export default RecipeMaterials;