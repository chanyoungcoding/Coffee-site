import React from "react";

import '../styles/shopBasket.scss';

import ShopProgress from "../components/Shopping/ShopBasket/ShopProgress";
import ShopItem from "../components/Shopping/ShopBasket/ShopItem";
import ShopTotal from "../components/Shopping/ShopBasket/ShopTotal";
import { Link } from "react-router-dom";
import styled from "styled-components";

const BasketTitle = styled.h1`
  margin: 150px 0px 0px;
  color: #353535;
  text-align: center;
  font-size: 3rem;
  font-weight: 600;
`
const BasketCaution = styled.h3`
  margin: 100px 0px 50px;
  font-size: 20px;
  text-align: center;
`
const OrderButtonBox = styled.div`
  display: flex;
  justify-content: center;
`
const OrderButton = styled(Link)`
  text-align: center;
  width: 300px;
  margin: 100px 0px;
  padding: 25px;
  background-color: #333333;
  color: white;
  font-size: 20px;
  font-weight: bold;
  outline: none;
  border: none;
`

const ShopBasket:React.FC = () => {

  return ( 
    <div className="shopbasket">
      <BasketTitle>장바구니</BasketTitle>
      <ShopProgress/>
      <BasketCaution>장바구니에 담긴 상품은 2일 동안 보관됩니다.</BasketCaution>
      <ShopItem/>
      <ShopTotal />
      <OrderButtonBox>
        <OrderButton to={'/shoporder'} className="order__button">주문하기</OrderButton>
      </OrderButtonBox>
    </div>
  );
}
export default ShopBasket;