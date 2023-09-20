import React from 'react';
import '../styles/home.scss';

import HomeFirst from "../components/Home/HomeFirst";
import HomeThird from "../components/Home/HomeThird";
import HomeSecond from "../components/Home/HomeSecond";

const Home:React.FC = () => {
  return ( 
    <div className="home">
      <HomeFirst/>
      <HomeSecond/>
      <HomeThird/>
    </div>
  );
}

export default Home;