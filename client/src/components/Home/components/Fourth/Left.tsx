import React from "react";
import { useSpring, animated } from 'react-spring'

import MenuDetail from "../Fourth/Menudetail";

interface InView {
  inView: boolean
}

const Left:React.FC<InView> = ({inView}) => {

  const springPropsLeft = useSpring({
    opacity: inView ? 1 : 0,
    transform: inView ? 'translateX(0)' : 'translateX(-100%)',
  });
  
  return ( 
    <animated.div style={springPropsLeft} className="fourth__left">
      <MenuDetail coffeeIntro="원두가루에 뜨거운 물을 고압으로 통과시켜 뽑아낸 커피" coffeeName="에스프레소" coffeePrice="4000"/>
      <MenuDetail coffeeIntro="에스프레소에 뜨거운 물을 희석시켜 만든 음료" coffeeName="아메리카노" coffeePrice="4500"/>
      <MenuDetail coffeeIntro="에스프레소에 뜨거운 우유를 곁들인 커피 " coffeeName="카페 라떼" coffeePrice="5000"/>
      <MenuDetail coffeeIntro="우유를 섞은 커피에 계피가루를 뿌린 커피" coffeeName="카푸치노" coffeePrice="5000"/>
      <MenuDetail coffeeIntro="에스프레소에 초콜릿 시럽이나 가루를 넣어 인위적으로 초콜릿 맛을 강조한 커피" coffeeName="카페 모카" coffeePrice="5500"/>
    </animated.div>
  );
}
export default Left;