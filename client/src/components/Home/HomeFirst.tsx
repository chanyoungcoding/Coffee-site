import React from "react";
import coffeecup from "../../assets/coffeecup1.png";
import coffeecup1 from "../../assets/coffeecup2.png";

import { useSpring, animated } from 'react-spring';

const HomeFirst:React.FC = () => {

  const springPropsLeft = useSpring({
    from: {opacity: 0, x: -200},
    to: {opacity: 1, x: 0},
    config: { duration: 500}
  })

  const springPropsRight1 = useSpring({
    from: {opacity: 0},
    to: {opacity: 1},
    delay: 500,
  })

  const springPropsRight2 = useSpring({
    from: {opacity: 0},
    to: {opacity: 1},
    delay: 1000
  })

  return ( 
    <div className="homeFirst">
      <animated.div style={springPropsLeft} className="firstLeft">
        <h1>COFFEE</h1>
        <h2>An online coffee store</h2>
        <p>Learn more about coffee, and learn more about its types and recipes.</p>
        <div className="leftButton">
          <button>Explore our products</button>
          <button>Log in / sign up</button>
        </div>
      </animated.div>
      <div className="firstRight">
        <div className="right__box">
          <animated.img style={springPropsRight1} className="box__img1" src={coffeecup} alt="#"></animated.img>
          <animated.img style={springPropsRight2} className="box__img2" src={coffeecup1} alt="#"></animated.img>
        </div>
      </div>

    </div>
  );
}

export default HomeFirst;