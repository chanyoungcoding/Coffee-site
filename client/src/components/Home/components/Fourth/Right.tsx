import React from "react";
import { useSpring, animated } from 'react-spring'

import MenuDetail from "../Fourth/Menudetail";

interface InView {
  inView: boolean
}

const Right:React.FC<InView> = ({inView}) => {

  const springPropsRight = useSpring({
    opacity: inView ? 1 : 0,
    transform: inView ? 'translateX(0)' : 'translateX(100%)',
  });
  
  return ( 
    <animated.div style={springPropsRight} className="fourth__right">
      <MenuDetail coffeeIntro="스팀 밀크를 먼저 따르고 에스프레소를 부어 흔적을 만든 커피" coffeeName="마키아토" coffeePrice="4000"/>
      <MenuDetail coffeeIntro="에스프레소를 베이스로 위에 크림을 올려주는 커피" coffeeName="콘 파나" coffeePrice="4200"/>
      <MenuDetail coffeeIntro="헤이즐넛 시럽과 에스프레소를 첨가한 우유 커피" coffeeName="헤즐럿 라떼" coffeePrice="4900"/>
      <MenuDetail coffeeIntro="카라멜시럽이 들어간 마키아토" coffeeName="카라멜 마키아토" coffeePrice="5900"/>
      <MenuDetail coffeeIntro="카라멜시럽과 초코시럽이 들어간 우유 커피" coffeeName="카라멜 모카" coffeePrice="5500"/>
    </animated.div>
  );
}

export default Right;