import React, { useEffect } from "react";
import { useApiUser } from "../../services/api";

import Cookies from 'js-cookie';
import { useRecoilState, useRecoilValue } from "recoil";
import { shoppingBasket, shoppingLength } from "../../recoil/shop";

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
          {coffee?.map((item,index) => (<p key={index}>{item.coffeeName}</p>))}
        </div>
      </div>
      <div className="basket__profile">
        <p>사용자 이름 : {userName}</p>
      </div>
    </div>
  );
}

export default ShoppingBasket;