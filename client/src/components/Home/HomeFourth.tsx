import React, { useState } from "react";
import { useSpring, animated } from 'react-spring'
import _ from 'lodash';
import { MenuDetail } from "../../models/coffee";

const MenuDetail:React.FC<MenuDetail> = React.memo(({coffeeName, coffeeIntro, coffeePrice}) => {
  return(
    <div className="fourth__container">
      <div className="container__left">
        <h3>{coffeeName}</h3>
        <p>{coffeeIntro}</p>
      </div>
      <div className="container__right">
        <p>${coffeePrice}</p>
      </div>
    </div>
  )
})

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
          <MenuDetail coffeeIntro="Fresh Coffee and strong taste" coffeeName="CAFFEE LATTE" coffeePrice="29"/>
          <MenuDetail coffeeIntro="Fresh Coffee and strong taste" coffeeName="CAFFEE LATTE" coffeePrice="29"/>
          <MenuDetail coffeeIntro="Fresh Coffee and strong taste" coffeeName="CAFFEE LATTE" coffeePrice="29"/>
          <MenuDetail coffeeIntro="Fresh Coffee and strong taste" coffeeName="CAFFEE LATTE" coffeePrice="29"/>
          <MenuDetail coffeeIntro="Fresh Coffee and strong taste" coffeeName="CAFFEE LATTE" coffeePrice="29"/>
        </animated.div>
        <animated.div style={springPropsRight} className="fourth__right">
          <MenuDetail coffeeIntro="Fresh Coffee and strong taste" coffeeName="CAFFEE LATTE" coffeePrice="29"/>
          <MenuDetail coffeeIntro="Fresh Coffee and strong taste" coffeeName="CAFFEE LATTE" coffeePrice="29"/>
          <MenuDetail coffeeIntro="Fresh Coffee and strong taste" coffeeName="CAFFEE LATTE" coffeePrice="29"/>
          <MenuDetail coffeeIntro="Fresh Coffee and strong taste" coffeeName="CAFFEE LATTE" coffeePrice="29"/>
          <MenuDetail coffeeIntro="Fresh Coffee and strong taste" coffeeName="CAFFEE LATTE" coffeePrice="29"/>
        </animated.div>
      </div>
    </div>
  );
}

export default HomeFourth