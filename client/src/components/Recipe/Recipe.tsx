import React from "react";
import imgbox from '../../assets/아이스아메리카노.png';

import '../../styles/recipe.scss';

const Recipe:React.FC = () => {
  return ( 
    <div className="recipe">
      <div className="recipeimg">
        <img src={imgbox} alt="#" />
      </div>
      <div className="recipe__intro">
        <h3>아이스 아메리카노</h3>
        <h1>ICEAMERICANO</h1>
        <div className="intro__box">
          <div className="box__left">
            <p>INTRODUCE</p>
          </div>
          <div className="box__right">
            <p className="right__h1">준비물</p>
            <p>얼음 조각</p>
            <p>에스프레소</p>
            <p>코코넛 칩</p>
          </div>
        </div>
        <div className="recipe__li">
          <li>1.얼음 4조각을 넣어줍니다.</li>
          <li>2.그 위 에프레소를 첨가합니다.</li>
          <li>3.코코넛 칩으로 완성합니다.</li>
        </div>
      </div>
    </div>
  );
}
export default Recipe;