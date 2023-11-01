import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from 'styled-components';
import Cookies from "js-cookie";

import '../../styles/shopDetail.scss';
import { useApiDataShopDetail, useBasketMutation } from "../../services/api";
import { BasketData } from "../../models/coffee";

const ShopImg = styled.img`
  width: 550px;
  height: 550px;
  background-color: #EDE2D2;
`

const ShopDetail:React.FC = () => {

  const {name} = useParams();
  const userName = Cookies.get('사용자명');
  const coffeeShopDetailDB = 'http://localhost:4000/api/coffeeShopDetail';
  const {data, isError, isLoading} = useApiDataShopDetail(coffeeShopDetailDB, name);

  const { mutate } = useBasketMutation();

  const [count, setCount] = useState(1);
  const [price, setPrice] = useState(0);

  useEffect(() => {
    if (data) {
      setPrice(data[0].price);
    }
  }, [data])

  const onClickPlus = () => {
    setCount(num => num + 1);
    if(data) {
      setPrice(price => price + data[0].price)
    }
  }

  const onClickMinus = () => {
    if(count === 1) {
      return alert('최소 1개 이상 주문해야 합니다.');
    }
    setCount(num => num - 1);
    if(data) {
      setPrice(price => price - data[0].price)
    }
  }


  const onClickBasket = (name:string, price:number, count:number, userName:string | undefined) => {
    const data: BasketData = { name, price, count, userName };
    mutate(data);
  }

  if(isError) return <p>에러가 발생했습니다.</p>
  if(isLoading) return <p>로딩중입니다..</p>

  return ( 
    <div className="shopdetail">
      <div className="detail__shop">
        <div className="detail__img">
          <ShopImg src={data ? data[0].imgurl : ''} alt="#"/>
        </div>

        <div className="detail__intro">
          <h1>{data ? data[0].name : '이름을 찾을 수 없습니다.'}</h1>
          <h2>{data ? data[0].price : '?'} 원</h2>
          <h4>제조일 2023.10.30</h4>

          <div className="intro__delivery">
            <div className="delivery__inner">
              <h4>배송 방법</h4>
              <p>택배</p>
            </div>
            <div className="delivery__inner">
              <h4>배송비</h4>
              <p>3000원 - 40,000원 이상 구매시 무료</p>
            </div>
          </div>

          <div className="intro__order">
            <p>동진시장 블렌드</p>
            <div className="order__calculate">
              <button onClick={onClickMinus}>-</button>
              <p>{count}</p>
              <button onClick={onClickPlus}>+</button>
            </div>
          </div>

          <p className="total__price">총 금액 {price}</p>

          <div className="intro__button">
            <button>바로 구매하기</button>
            {data?.map(item => (
              <button 
                key={item.coffeeNumber} 
                className="button_2" 
                onClick={() => onClickBasket(item.name, price, count, userName)}
              >
                장바구니 담기
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="detail__shopdetail">

      </div>
    </div>
  );
}

export default ShopDetail;