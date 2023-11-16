import React from "react";
import ShopList from "../components/Shopping/Shop/ShopList";
import styled from "styled-components";

const ShopContainer = styled.div`
  width: 1320px;
  margin: 100px auto;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 50px;
  @media (max-width: 1320px) {
    width: 850px;
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: 500px) {
    width: 400px;
    grid-template-columns: repeat(1, 1fr);
  }
`


const Shopping:React.FC = () => {

  return ( 
    <ShopContainer>
      <ShopList/>
    </ShopContainer>
  );
}
export default Shopping;