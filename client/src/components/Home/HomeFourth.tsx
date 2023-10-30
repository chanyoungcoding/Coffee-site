import React from "react";
import { useInView } from "react-intersection-observer";

import Left from "./components/Fourth/Left";
import Right from "./components/Fourth/Right";

const HomeFourth:React.FC = () => {

  const [ref, inView] = useInView({
    threshold: 0.8
  })

  return ( 
    <div className="homefourth">
      <h2>What Happens Here</h2>
      <h1>요즘 커피 가격</h1>
      <div ref={ref} className="homefourth__container">
        <Left inView={inView}/>
        <Right inView={inView}/>
      </div>
    </div>
  );
}

export default HomeFourth