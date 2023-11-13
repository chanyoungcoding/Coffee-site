import React from "react";
import { animated, useTrail } from 'react-spring';

import coffeecup from "../../../../assets/coffeecup1.png";
import coffeecup1 from "../../../../assets/coffeecup2.png";
import styled from "styled-components";

const RightBox = styled.div`
  position: relative;
  width: 700px;
  height: 700px;
  margin: 50px 0px;
`

const CoffeeImg = styled(animated.img)`
  position: absolute;
  width: 400px;
  height: 400px;  

  // iPad Pro
  @media (max-width: 1024px) {
    position: absolute;
    width: 300px;
    height: 300px;
  }
`

const Right:React.FC = () => {
  const items = [coffeecup, coffeecup1]; 

  const springPropsRight = useTrail(items.length, {
    from: {opacity: 0},
    to: {opacity: 1},
    config: { mass: 2, tension: 80, friction: 20, delay: 5000 },
  });

  return ( 
    <RightBox className="right__box">
      {springPropsRight.map((styles, index) => (
        <CoffeeImg 
          key={index} 
          style={styles} 
          className={`box__img${index + 1}`} 
          src={items[index]} 
          alt="#" 
        />
      ))}
    </RightBox>
  );
}

export default Right;