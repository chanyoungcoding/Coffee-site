import React, { useEffect } from "react";
import { useApiUser } from "../../services/api";

import Cookies from 'js-cookie';
import { useRecoilState, useRecoilValue } from "recoil";
import { shoppingBasket, shoppingLength } from "../../recoil/shop";

import '../../styles/basket.scss';

const ShoppingBasket:React.FC = () => {

  const [coffee, setCoffee] = useRecoilState(shoppingBasket);
  const basketLength = useRecoilValue(shoppingLength);

  const userName = Cookies.get('사용자명');
  const userDB = 'http://localhost:4000/api/user';

  const { data, isError, isLoading } = useApiUser(userDB, userName);

  useEffect(() => {
    setCoffee(data);
  },[setCoffee, data])

  if(isError) return (
    <div className='mainmenu__error'>
      <p>무엇인가 에러가 발생했습니다.</p>
    </div>
  )

  if(isLoading) return <p>로딩중입니다..</p>

  return ( 
    <div className="shoppingbasket">
      <div className="basket__save">
        <div className="save__top">
        <p>저장한 커피들</p>
        <p>장바구니 개수 : {basketLength}</p>
        </div>
        <div className="save__inner">
            {coffee?.map((item,index) => (
              <div className="inner__box">
                <div className="inner__img">
                  <img key={index} src={item.coffeeUrl}></img>
                </div>
                <div className="inner__intro">
                  <p key={index}>{item.coffeeName}</p>
                </div>
              </div>
            ))}
        </div>
      </div>
      <div className="basket__profile">
        <h1>내 정보</h1>
        <div className="profile__name">
          <p>사용자</p>
          <p>{userName}</p>
        </div>
      </div>
    </div>
  );
}

export default ShoppingBasket;