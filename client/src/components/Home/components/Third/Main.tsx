import React from "react";
import styled from "styled-components";

const Title = styled.h1`
  margin-top: 50px;
  text-align: center;
  font-size: 50px;
`

const ThirdNavbar = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 30px;
  li {
    margin-right: 30px;
    font-size: 25px;
    padding-bottom: 10px;
    border-bottom: 2px solid #361306;
    &:nth-child(4) {
      margin-right: 0;
    }

    @media (max-width: 500px) {
      font-size: 20px;
    }
  }

`

const Main:React.FC = () => {
  const navbarLists = ['COFFEE','TASTE','COUNTRY',"SMELL"]
  return ( 
    <>
      <Title>MENU</Title>
      <ThirdNavbar>
        {navbarLists.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ThirdNavbar>
    </>
  );
}

export default Main;