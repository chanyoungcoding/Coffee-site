import React from "react";
import { RecipeData } from "../../../models/coffee";
import styled from "styled-components";

const OrderContainer = styled.div`
  width: 1200px;
  margin: 0 auto 50px;
  padding: 0px 150px;
  display: flex;
  flex-direction: column;
  @media (max-width: 500px) {
    width: 400px;
    padding: 0;
  }
`

const OrderList = styled.li`
  padding: 10px;
  font-size: 2rem;
  font-weight: 300;
  @media (max-width: 500px) {
    font-size: 20px;
  }
`

const RecipeOrder:React.FC<RecipeData> = ({data}) => {
  return ( 
    <OrderContainer>
      {data?.[0].howToMake.map((item,index) => (<OrderList key={index}>{index + 1}.{item}</OrderList>))}
    </OrderContainer>
  );
}
export default RecipeOrder;