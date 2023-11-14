import React from "react";
import { MenuDetail } from "../../../../models/coffee";
import styled from "styled-components";

const CoffeeLine = styled.div`
  display: flex;
  align-items: center;
  width: 600px;
  @media (max-width: 500px) {
    display: inline;
  }
`

const LineLeft = styled.div`
  flex-grow: 1;
  margin-bottom: 20px;
  h3 {
    font-size: 30px;
    padding-bottom: 10px;
    margin-bottom: 10px;
    border-bottom: 1px solid #986C4A;
    @media (max-width: 500px) {
      border-bottom: none;
    }
  }
  p {
    color: #986C4A;
  }
`

const CoffeePrice = styled.p`
  padding-left: 15px;
  font-size: 24px;
  @media (max-width: 500px) {
    padding-left: 0;
    margin-bottom: 30px;
    padding-bottom: 10px;
    border-bottom: 1px solid #986C4A;
  }
`

const MenuDetail:React.FC<MenuDetail> = React.memo(({coffeeName, coffeeIntro, coffeePrice}) => {
  return (
    <CoffeeLine className="fourth__container">
      <LineLeft className="container__left">
        <h3>{coffeeName}</h3>
        <p>{coffeeIntro}</p>
      </LineLeft>
      <div className="container__right">
        <CoffeePrice>{coffeePrice}원</CoffeePrice>
      </div>
    </CoffeeLine>
  );
})

export default MenuDetail;