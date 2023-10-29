import React from "react";

import coffeecup from "../../../../assets/coffeecup1.png";
import coffeecup1 from "../../../../assets/coffeecup2.png";

import { animated, useTrail } from 'react-spring';

const Right:React.FC = () => {
  const items = [coffeecup, coffeecup1]; 

  const springPropsRight = useTrail(items.length, {
    from: {opacity: 0},
    to: {opacity: 1},
    config: { mass: 2, tension: 80, friction: 20, delay: 5000 },
  });
  return ( 
    <>
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
    </>
  );
}

export default Right;