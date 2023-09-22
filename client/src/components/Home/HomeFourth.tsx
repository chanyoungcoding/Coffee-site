import React, { useState } from "react";
import { useSpring, animated } from 'react-spring'
import _ from 'lodash';

const HomeFourth:React.FC = () => {

  const [isVisible, setIsVisible] = useState<boolean>(false);

  const handleScroll = _.throttle(() => {
    const scrollY = window.scrollY;
    console.log(scrollY)
    const windowHeight = window.innerHeight;
    const scrollPositionToShow = windowHeight * 1.5;
    console.log(scrollPositionToShow)

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
          <div className="fourth__container">
            <div className="container__left">
              <h3>CAFFE LATTE</h3>
              <p>Fresh Coffee and strong taste</p>
            </div>
            <div className="container__right">
              <p>$29.5</p>
            </div>
          </div>
          <div className="fourth__container">
            <div className="container__left">
              <h3>CAFFE LATTE</h3>
              <p>Fresh Coffee and strong taste</p>
            </div>
            <div className="container__right">
              <p>$29.5</p>
            </div>
          </div>
          <div className="fourth__container">
            <div className="container__left">
              <h3>CAFFE LATTE</h3>
              <p>Fresh Coffee and strong taste</p>
            </div>
            <div className="container__right">
              <p>$29.5</p>
            </div>
          </div>
          <div className="fourth__container">
            <div className="container__left">
              <h3>CAFFE LATTE</h3>
              <p>Fresh Coffee and strong taste</p>
            </div>
            <div className="container__right">
              <p>$29.5</p>
            </div>
          </div>
          <div className="fourth__container">
            <div className="container__left">
              <h3>CAFFE LATTE</h3>
              <p>Fresh Coffee and strong taste</p>
            </div>
            <div className="container__right">
              <p>$29.5</p>
            </div>
          </div>
        </animated.div>
        <animated.div style={springPropsRight} className="fourth__right">
          <div className="fourth__container">
              <div className="container__left">
                <h3>CAFFE LATTE</h3>
                <p>Fresh Coffee and strong taste</p>
              </div>
              <div className="container__right">
                <p>$29.5</p>
              </div>
          </div>
          <div className="fourth__container">
            <div className="container__left">
              <h3>CAFFE LATTE</h3>
              <p>Fresh Coffee and strong taste</p>
            </div>
            <div className="container__right">
              <p>$29.5</p>
            </div>
          </div>
          <div className="fourth__container">
            <div className="container__left">
              <h3>CAFFE LATTE</h3>
              <p>Fresh Coffee and strong taste</p>
            </div>
            <div className="container__right">
              <p>$29.5</p>
            </div>
          </div>
          <div className="fourth__container">
            <div className="container__left">
              <h3>CAFFE LATTE</h3>
              <p>Fresh Coffee and strong taste</p>
            </div>
            <div className="container__right">
              <p>$29.5</p>
            </div>
          </div>
          <div className="fourth__container">
            <div className="container__left">
              <h3>CAFFE LATTE</h3>
              <p>Fresh Coffee and strong taste</p>
            </div>
            <div className="container__right">
              <p>$29.5</p>
            </div>
          </div>
        </animated.div>
      </div>
    </div>
  );
}

export default HomeFourth