import React, { useState } from "react";
import { useSpring, animated } from 'react-spring'
import _ from 'lodash';

import MenuDetail from "./components/Menudetail";

const HomeFourth:React.FC = () => {

  const [isVisible, setIsVisible] = useState<boolean>(false);

  const handleScroll = _.throttle(() => {
    const scrollY = window.scrollY;
    const windowHeight = window.innerHeight;
    const scrollPositionToShow = windowHeight * 1.5;

    if(scrollY > scrollPositionToShow) {
      setIsVisible(true)
    } else {
      setIsVisible(false);
    }
  }, 300)
  
  window.addEventListener('scroll', handleScroll);

  const springPropsLeft = useSpring({
    opacity: isVisible ? 1 : 0,
    transform: isVisible ? 'translateX(0)' : 'translateX(-100%)',
  });

  const springPropsRight = useSpring({
    opacity: isVisible ? 1 : 0,
    transform: isVisible ? 'translateX(0)' : 'translateX(100%)',
  });

  return ( 
    <div className="homefourth">
      <h2>What Happens Here</h2>
      <h1>요즘 커피 가격</h1>
      <div className="homefourth__container">
        <animated.div style={springPropsLeft} className="fourth__left">
          <MenuDetail coffeeIntro="원두가루에 뜨거운 물을 고압으로 통과시켜 뽑아낸 커피" coffeeName="에스프레소" coffeePrice="4000"/>
          <MenuDetail coffeeIntro="에스프레소에 뜨거운 물을 희석시켜 만든 음료" coffeeName="아메리카노" coffeePrice="4500"/>
          <MenuDetail coffeeIntro="에스프레소에 뜨거운 우유를 곁들인 커피 " coffeeName="카페 라떼" coffeePrice="5000"/>
          <MenuDetail coffeeIntro="우유를 섞은 커피에 계피가루를 뿌린 커피" coffeeName="카푸치노" coffeePrice="5000"/>
          <MenuDetail coffeeIntro="에스프레소에 초콜릿 시럽이나 가루를 넣어 인위적으로 초콜릿 맛을 강조한 커피" coffeeName="카페 모카" coffeePrice="5500"/>
        </animated.div>
        <animated.div style={springPropsRight} className="fourth__right">
          <MenuDetail coffeeIntro="스팀 밀크를 먼저 따르고 에스프레소를 부어 흔적을 만든 커피" coffeeName="마키아토" coffeePrice="4000"/>
          <MenuDetail coffeeIntro="에스프레소를 베이스로 위에 크림을 올려주는 커피" coffeeName="콘 파나" coffeePrice="4200"/>
          <MenuDetail coffeeIntro="헤이즐넛 시럽과 에스프레소를 첨가한 우유 커피" coffeeName="헤즐럿 라떼" coffeePrice="4900"/>
          <MenuDetail coffeeIntro="카라멜시럽이 들어간 마키아토" coffeeName="카라멜 마키아토" coffeePrice="5900"/>
          <MenuDetail coffeeIntro="카라멜시럽과 초코시럽이 들어간 우유 커피" coffeeName="카라멜 모카" coffeePrice="5500"/>
        </animated.div>
      </div>
    </div>
  );
}

export default HomeFourth