import React from "react";

import Button from "../../../Button";
import styled from "styled-components";

const CoffeeTitle = styled.h1`
  margin-top: 70px;
  font-size: 150px;
  background: -webkit-linear-gradient(90deg, rgba(76,29,21,1) 0%, rgba(132,77,68,1) 48%, rgba(178,145,143,1) 100%);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

  @media (max-width: 1024px) {
    font-size: 100px;
  }
`;

const CoffeeSubtitle = styled.h2`
  margin:35px 0px;
  color: #361306;
  font-size: 70px;

  @media (max-width: 1024px) {
    font-size: 40px;
  }
`

const ButtonBox = styled.div`
  display: flex;
  margin-top: 50px;
  @media (max-width: 1024px) {
    flex-direction: column;
    button {
      margin-bottom: 20px;
      padding: 10px 20px;
      font-size: 15px;
    }
  }
`

const Left:React.FC = () => {
  return ( 
    <>
      <CoffeeTitle>COFFEE</CoffeeTitle>
      <CoffeeSubtitle>An online coffee store</CoffeeSubtitle>
      <p>Learn more about coffee, and learn more about its types and recipes.</p>
      <ButtonBox className="leftButton">
        <Button href={'/test'}>Explore our products</Button>
        <Button href={'/login'}>Log in / Sign up</Button>
      </ButtonBox>
    </>
  );
}

export default Left;