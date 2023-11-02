import React from "react";

import '../../styles/shopBasket.scss';

import ShopProgress from "./ShopBasket/ShopProgress";
import ShopItem from "./ShopBasket/ShopItem";
import ShopTotal from "./ShopBasket/ShopTotal";


const ShopBasket:React.FC = () => {

  return ( 
    <div className="shopbasket">
      <h1>장바구니</h1>
      <ShopProgress/>
      <h3>장바구니에 담긴 상품은 2일 동안 보관됩니다.</h3>
      <ShopItem/>
      <ShopTotal/>
      <div className="basket__order">
        <button>주문하기</button>
      </div>
    </div>
  );
}
export default ShopBasket;