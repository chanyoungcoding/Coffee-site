import React, { useState } from "react";
import styled from 'styled-components';
import { useRecoilState } from "recoil";

import '../../styles/shopDetail.scss';
import { orderPrice } from "../../recoil/shop";
import 동진시장 from '../../assets/동진시장.jpeg';

const ShopImg = styled.img`
  width: 550px;
  height: 550px;
`

const ShopDetail:React.FC = () => {

  const [num, setNum] = useState(1);
  const [price, setPrice] = useRecoilState(orderPrice);

  const onClickPlus = () => {
    setNum(num => num + 1);
    setPrice(price => price + 15000);
  }

  const onClickMinus = () => {
    if(num === 1) {
      return alert('최소 1개 이상 주문해야 합니다.');
    }
    setNum(num => num - 1);
    setPrice(price => price - 15000);
  }

  return ( 
    <div className="shopdetail">
      <div className="detail__shop">
        <div className="detail__img">
          <ShopImg src={동진시장} alt="#"/>
        </div>

        <div className="detail__intro">
          <h1>동진시장 블렌드</h1>
          <h2>15,000원</h2>
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
              <p>{num}</p>
              <button onClick={onClickPlus}>+</button>
            </div>
          </div>

          <p className="total__price">총 금액 {price}</p>

          <div className="intro__button">
            <button>바로 구매하기</button>
            <button className="button_2">장바구니 담기</button>
          </div>
        </div>
      </div>

      <div className="detail__shopdetail">

      </div>
    </div>
  );
}

export default ShopDetail;