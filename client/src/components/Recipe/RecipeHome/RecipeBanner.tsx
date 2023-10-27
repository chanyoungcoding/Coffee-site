import React from "react";
import Button from "../../Button";

import backBanner from '../../../assets/coffeebackground3.png';

const RecipeBanner:React.FC = () => {
  return ( 
    <div className="recipehome__banner">
      <div className="banner__left">
        <p>Our Recipe</p>
        <h1>레시피를 보고 따라 만들어 보세요</h1>
        <Button href={`/recipe/아메리카노`}>가장 인기 있는 메뉴</Button>
      </div>
      <div className="banner__right">
        <img src={backBanner} alt="#" />
      </div>
  </div>
  );
}
export default RecipeBanner;