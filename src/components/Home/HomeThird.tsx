import React from "react";
import coffeeBox from "../../assets/coffeebox.jpeg"

const ImgBox: React.FC = () => {
  return (
    <div className="carousel-slide">
      <img src={coffeeBox} alt="#" />
      <p>Vanilla Latte</p>
      <a href="/">보러가기</a>
    </div>
  );
}

const HomeThird: React.FC = () => {
  // 원하는 반복 횟수
  const repeatCount = 8;

  // ImgBox 컴포넌트를 반복하여 생성하고 렌더링
  const imgBoxes = [...Array(repeatCount)].map((_, index) => (
    <ImgBox key={index} />
  ));

  return (
    <div className="homethird">
      <h1>MENU</h1>
      <div className="third__navbar">
        <li>COFFEE</li>
        <li>COFFEE</li>
        <li>COFFEE</li>
        <li>COFFEE</li>
      </div>
      <div className="third__imgbox">
        <div className="carousel-container" id="tagContainer">
          {imgBoxes}
        </div>
      </div>
    </div>
  );
}

export default HomeThird;
