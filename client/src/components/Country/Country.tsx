import React from "react";
import '../../styles/country.scss';

import kena from '../../assets/케냐.png';
import kenaflaver from '../../assets/케냐커피맛.jpg';
import kenacoffee from '../../assets/케냐커피.jpg';

const Country:React.FC = () => {
  return ( 
    <div className="country">
      <div className="country__top">
        <h1>SINGLE ORIGIN COFFEE</h1>
        <h2>Which country's coffee beans do you want?</h2>
      </div>
      <div className="country__banner">
        <h1>the bean country</h1>
      </div>
      <div className="country__map"></div>
      <div className="country__inner">
        <p>
          커피는 나라마다 품종이 다르고, 맛도 너무나도 다르며 Roast 즉 구운 정도에 따라서
          맛도 다양하기 때문에 이러한 정보를 참고하면 내가 원하는 맛의 커피를 마실 수 있습니다.<br/>
          이 정보를 가지고 여러분만의 커피 원두를 찾아보세요.
        </p>
        <div className="inner__type">
          <div className="type__banner">
            <p>Country</p>
            <p>Taste</p>
            <p>Roast</p>
          </div>
          <div className="type__intro">
            <div className="intro__box">
              <img src={kena} alt="#" />
              <p>케냐</p>
            </div>
            <div className="intro__box">
              <img src={kenaflaver} alt="" />
              <p>apple</p>
            </div>
            <div className="intro__box">
              <img src={kenacoffee} alt="" />
              <p>dark</p>
            </div>
          </div>
          <div className="type__intro"></div>
        </div>
      </div>
    </div>
  );
}
export default Country;