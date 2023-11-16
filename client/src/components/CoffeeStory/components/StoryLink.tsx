import React from "react";
import { NavLink } from "react-router-dom";
import '../../../styles/coffeeStory.scss';
import styled from "styled-components";

const StoryLinkContainer = styled.div`
  display: flex;
  justify-content: center;
  margin: 30px 0px;
  padding: 60px 0px 15px;
  border-bottom: 1px solid #CDCDCD;
`

const LinkBox = styled.div`
  display: flex;
  @media (max-width: 500px) {
    display: block;
  }
  li {
    @media (max-width: 500px) {
      margin: 30px 0px;
    }
    a {
      margin: 0px 40px;
      padding: 10px 0px;
      font-size: 20px;
      font-weight: bold;
      &.active {
        color: red;
        border-bottom: 4px solid #464646;
      }
    }
  }
`

const StoryLink:React.FC = () => {
  return ( 
    <StoryLinkContainer>
      <LinkBox>
        <li><NavLink to={'/coffeeproductionprocess'}>커피재배와 생산과정</NavLink></li>
        <li><NavLink to={'/coffeehistory'}>커피의 역사</NavLink></li>
      </LinkBox>
      <LinkBox>
        <li><NavLink to={'/coffeetypes'}>커피의 종류</NavLink></li>
        <li><NavLink to={'/coffeehealth'}>커피의 건강</NavLink></li>
      </LinkBox>
    </StoryLinkContainer>
  );
}

export default StoryLink;