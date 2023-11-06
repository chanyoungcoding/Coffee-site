import React from "react";
import '../../styles/country.scss';

import kena from '../../assets/케냐.png';
import kenaflaver from '../../assets/케냐커피맛.jpg';
import kenacoffee from '../../assets/케냐커피.jpg';
import CountryTop from "./CountryTop";

interface introBox {
  imgsrc: string;
  intro: string;
}

const IntroBox:React.FC<introBox> = React.memo(({imgsrc, intro}) => {
  return (
    <div className="intro__box">
      <img src={imgsrc} alt="" />
      <p>{intro}</p>
    </div>
  )
})

const Country:React.FC = () => {
  return ( 
    <div className="country">
      <CountryTop/>
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
            <IntroBox imgsrc={kena} intro="케냐"/>
            <IntroBox imgsrc={kenaflaver} intro="apple"/>
            <IntroBox imgsrc={kenacoffee} intro="dark"/>
          </div>
          <div className="type__intro">
            <IntroBox imgsrc={kena} intro="케냐"/>
            <IntroBox imgsrc={kenaflaver} intro="apple"/>
            <IntroBox imgsrc={kenacoffee} intro="dark"/>
          </div>
          <div className="type__intro">
            <IntroBox imgsrc={kena} intro="케냐"/>
            <IntroBox imgsrc={kenaflaver} intro="apple"/>
            <IntroBox imgsrc={kenacoffee} intro="dark"/>
          </div>
          <div className="type__intro"></div>
        </div>
      C</div>
    </div>
  );
}
export default Country;