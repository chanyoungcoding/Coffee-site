import React from 'react';
import '../styles/home.scss';

import HomeFirst from "../components/Home/HomeFirst";
import HomeThird from "../components/Home/HomeThird";
import HomeSecond from "../components/Home/HomeSecond";
import HomeFourth from '../components/Home/HomeFourth';

const Home:React.FC = () => {
  return ( 
    <div className="home">
      <HomeFirst/>
      <HomeSecond/>
      <HomeThird/>
      <HomeFourth/>
    </div>
  );
}

export default Home;