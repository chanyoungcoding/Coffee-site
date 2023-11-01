import React, { useEffect } from "react";
import { useApiBaket } from "../../services/api";
import '../../styles/shopBasket.scss';

import { useRecoilState, useRecoilValue } from "recoil";
import { shopBaket, userName } from "../../recoil/shop";


const ShopBasket:React.FC = () => {

  const userDB = 'http://localhost:4000/api/Basket';
  const username = useRecoilValue(userName);

  const { data, isError, isLoading } = useApiBaket(userDB, username);
  const [coffee, setCoffee] = useRecoilState(shopBaket);
  console.log(coffee)

  useEffect(() => {
    setCoffee(data);
  },[setCoffee,data])

  if(isError) return (
    <div className='mainmenu__error'>
      <p>무엇인가 에러가 발생했습니다.</p>
    </div>
  )

  if(isLoading) return <p>로딩중입니다..</p>

  return ( 
    <div className="shopbasket">
      <h1>장바구니</h1>
      <div className="basket__progress">
        <div className="progress__basket">
          <p className="basket__procedure">01</p>
          <p className="basket__procedurename">장바구니</p>
        </div>
        <div className="progress__line"></div>
        <div className="progress__order">
          <p className="basket__procedure">02</p>
          <p className="basket__procedurename">주문/결제</p>
        </div>
        <div className="progress__line"></div>
        <div className="progress__complete">
          <p className="basket__procedure">03</p>
          <p className="basket__procedurename">주문완료</p>
        </div>
      </div>
      <h3>장바구니에 담긴 상품은 2일 동안 보관됩니다.</h3>

      {coffee?.map(item=> (
        <div key={item.name} className="basket__inner">
          <div className="inner__left">
            <div className="left__top">
              <p>상품명</p>
            </div>
            <div className="left__bottom">
            <p>{item.name}</p>
            </div>
          </div>
          <div className="inner__right">
            <div className="right__top">
              <p>수량</p>
              <p>판매가</p>
              <p>배송비</p>
            </div>
            <div className="right__bottom">
              <p>{item.count}</p>
              <p>{item.price}</p>
              <p>무료</p>
            </div>
          </div>
        </div>
      ))}

      <div className="basket__total"></div>
    </div>
  );
}
export default ShopBasket;