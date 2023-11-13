import React, {useEffect} from "react";

import { useRecoilValue, useRecoilState } from "recoil";
import { userName, shopBaket } from "../../../recoil/shop";
import { useApiBaket, useDeleteBasket } from "../../../services/api";

const ShopItem:React.FC = () => {

  const userDB = 'http://localhost:4000/api/Basket';
  const username = useRecoilValue(userName);

  const {mutate} = useDeleteBasket();

  const { data, isError, isLoading } = useApiBaket(userDB, username);
  const [coffee, setCoffee] = useRecoilState(shopBaket);

  useEffect(() => {
    setCoffee(data);
  },[setCoffee,data])

  const onClickPlus = (itemName:string | undefined ) => {
    const plus = 'plus';
    mutate({username, itemName, plus})
  }

  const onClickMinus = (itemName:string | undefined) => {
    const minus = 'minus';
    mutate({username, itemName, minus})
  }

  if(isError) return (
    <div className='mainmenu__error'>
      <p>무엇인가 에러가 발생했습니다.</p>
    </div>
  )

  if(isLoading) return <p>로딩중입니다..</p>

  return (
    <>
      {coffee?.map((item,index)=> (
        <div key={index} className="basket__inner">
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
              <div className="bottom__count">
                <button onClick={() => onClickMinus(item.name)}>-</button>
                <p>{item.count}</p>
                <button onClick={() => onClickPlus(item.name)}>+</button>
              </div>
              <p>{item.price}원</p>
              <p>무료</p>
            </div>
          </div>
        </div>
      ))}
    </>

  );
}
export default ShopItem;