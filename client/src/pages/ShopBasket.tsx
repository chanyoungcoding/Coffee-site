import React from "react";

import '../styles/shopBasket.scss';

import ShopProgress from "../components/Shopping/ShopBasket/ShopProgress";
import ShopItem from "../components/Shopping/ShopBasket/ShopItem";
import ShopTotal from "../components/Shopping/ShopBasket/ShopTotal";
import { Link } from "react-router-dom";


const ShopBasket:React.FC = () => {

  return ( 
    <div className="shopbasket">
      <h1>장바구니</h1>
      <ShopProgress/>
      <h3>장바구니에 담긴 상품은 2일 동안 보관됩니다.</h3>
      <ShopItem/>
      <ShopTotal/>
      <div className="basket__order">
        <Link to={'/shoporder'} className="order__button">주문하기</Link>
      </div>
    </div>
  );
}
export default ShopBasket;