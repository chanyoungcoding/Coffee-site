import React from 'react';
import '../../styles/home.scss';
import Button from '../Button';
import coffeeCup from '../../assets/coffeecup2.png';

import {animated, useSpring} from 'react-spring';

const HomeFifth:React.FC = () => {

  const lineText = ['COFFEE','COFFEE','COFFEE','COFFEE','COFFEE','COFFEE'];

  const springs1 = useSpring({
    from: { y: 0 },
    to: async (next) => {
      while (next) {
        await next({ y: -100 });
        await next({ y: 0 });
      }
    },
    config: { duration: 3000 },
  });

  return ( 
    <div className="homefifth">
      <div className="homefifth__line">
        {lineText.map((text,index) => (<p key={index}>{text}</p>))}
      </div>
      <div className="homefifth__inner">
        <animated.div style={{transform: springs1.y.to((y) => `translateY(${y}px)`)}}>
          <img className='inner__img' src={coffeeCup} alt="#" />
        </animated.div>
        <div className="inner__box">          
          <h1>레시피</h1>
          <h2>커피 레시피를 참고해서 커피를 만들어 보세요.</h2>
          <Button href="/recipeHome">보러 가기</Button>
        </div>
      </div>
    </div>
  );
}
export default HomeFifth;