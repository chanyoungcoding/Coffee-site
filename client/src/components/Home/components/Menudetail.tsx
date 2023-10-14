import React from "react";
import { MenuDetail } from "../../../models/coffee";

const MenuDetail:React.FC<MenuDetail> = React.memo(({coffeeName, coffeeIntro, coffeePrice}) => {
  return (
    <div className="fourth__container">
      <div className="container__left">
        <h3>{coffeeName}</h3>
        <p>{coffeeIntro}</p>
      </div>
      <div className="container__right">
        <p>{coffeePrice}원</p>
      </div>
    </div>
  );
})

export default MenuDetail;