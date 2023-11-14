import React from "react";
import { useInView } from "react-intersection-observer";

import Left from "./components/Fourth/Left";
import Right from "./components/Fourth/Right";
import styled from "styled-components";
import { animated } from "react-spring";

const FourthContainer = styled(animated.div)`
  display: flex;
  justify-content: space-around;
  padding: 10px;
  @media (max-width: 1200px) {
    flex-direction: column;
    align-items: center;
  }
  @media (max-width: 500px) {
    align-items: normal;
  }
`

const FourthTitle = styled.h1`
  margin-bottom: 60px;
  text-align: center;
  font-size: 50px;
`

const FourthSubTitle = styled.h2`
  margin-bottom: 10px;
  text-align: center;
  font-size: 25px;
`

const HomeFourth:React.FC = () => {

  const [ref, inView] = useInView({
    threshold: 0.3
  })

  return ( 
    <div className="homefourth">
      <FourthSubTitle>What Happens Here</FourthSubTitle>
      <FourthTitle>요즘 커피 가격</FourthTitle>
      <FourthContainer ref={ref} className="homefourth__container">
        <Left inView={inView}/>
        <Right inView={inView}/>
      </FourthContainer>
    </div>
  );
}

export default HomeFourth