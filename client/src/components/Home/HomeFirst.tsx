import React from "react";
import coffeecup from "../../assets/coffeecup1.png";
import coffeecup1 from "../../assets/coffeecup2.png";
import Button from "../Button";

import { useSpring, animated, useTrail } from 'react-spring';

const HomeFirst:React.FC = () => {

  const springPropsLeft = useSpring({
    from: {opacity: 0, x: -200},
    to: {opacity: 1, x: 0},
    config: { duration: 500}
  })

  const items = [coffeecup, coffeecup1]; 
  
  const springPropsRight = useTrail(items.length, {
    from: {opacity: 0},
    to: {opacity: 1},
    config: { mass: 2, tension: 80, friction: 20, delay: 5000 },
  });
  
  
  return ( 
    <div className="homeFirst">
      <animated.div style={springPropsLeft} className="firstLeft">
        <h1>COFFEE</h1>
        <h2>An online coffee store</h2>
        <p>Learn more about coffee, and learn more about its types and recipes.</p>
        <div className="leftButton">
          <Button href={'/test'}>Explore our products</Button>
          <Button href={'/login'}>Log in / Sign up</Button>
        </div>
      </animated.div>
      <div className="firstRight">
        <div className="right__box">
          {springPropsRight.map((styles, index) => (
            <animated.img 
              key={index} 
              style={styles} 
              className={`box__img${index + 1}`} 
              src={items[index]} 
              alt="#" 
            />
          ))}
        </div>
      </div>

    </div>
  );
}

export default HomeFirst;