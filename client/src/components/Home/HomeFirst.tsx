import React from "react";
import coffeecup from "../../assets/coffeecup1.png";
import coffeecup1 from "../../assets/coffeecup2.png";

const HomeFirst:React.FC = () => {
  return ( 
    <div className="homeFirst">
      <div className="firstLeft">
        <h1>COFFEE</h1>
        <h2>An online coffee store</h2>
        <p>Learn more about coffee, and learn more about its types and recipes.</p>
        <div className="leftButton">
          <button>Explore our products</button>
          <button>Log in / sign up</button>
        </div>
      </div>
      <div className="firstRight">
        <div className="right__box">
          <img className="box__img1" src={coffeecup} alt="#" />
          <img className="box__img2" src={coffeecup1} alt="#" />
        </div>
      </div>

    </div>
  );
}

export default HomeFirst;