import React from "react";
import { NavLink } from "react-router-dom";
import '../../../styles/coffeeStory.scss';

const StoryLink:React.FC = () => {
  return ( 
    <div className="storylink">
      <li><NavLink to={'/coffeeproductionprocess'}>커피재배와 생산과정</NavLink></li>
      <li><NavLink to={'/coffeehistory'}>커피의 역사</NavLink></li>
      <li><NavLink to={'/coffeetypes'}>커피의 종류</NavLink></li>
      <li><NavLink to={'/coffeehealth'}>커피의 건강</NavLink></li>
    </div>
  );
}

export default StoryLink;