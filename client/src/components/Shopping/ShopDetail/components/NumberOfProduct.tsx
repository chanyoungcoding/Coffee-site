import React, {useState, useEffect} from "react";
import Cookies from "js-cookie";

import { useBasketMutation } from "../../../../services/api";
import { CoffeeShopData, BasketData } from "../../../../models/coffee";
import { useNavigate } from "react-router-dom";

interface NumberOfProduct {
  data: CoffeeShopData[] | undefined
}

const NumberOfProduct:React.FC<NumberOfProduct> = ({data}) => {

  const userName = Cookies.get('사용자명');
  const navigate = useNavigate();

  const [count, setCount] = useState(1);
  const [price, setPrice] = useState(0);

  const { mutate } = useBasketMutation();

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


  const onClickBasket = (e:React.MouseEvent<HTMLButtonElement>,name:string, price:number, count:number, userName:string | undefined, itemPrice: number | undefined) => {
    if(userName === undefined) {
      alert('로그인 후 이용하실 수 있습니다.')
      return
    }
    if(e.currentTarget.id === '바로-구매-버튼') {
      const data: BasketData = { name, price, count, userName, itemPrice };
      mutate(data);
      navigate('/shopbasket')
    } else {
      const data: BasketData = { name, price, count, userName, itemPrice };
      mutate(data);
    }
  }

  return ( 
    <>
      <div className="intro__order">
        <p>동진시장 블렌드</p>
        <div className="order__calculate">
          <button onClick={onClickMinus}>-</button>
          <p>{count}</p>
          <button onClick={onClickPlus}>+</button>
        </div>
      </div>
      <p className="total__price">총 금액 {price}</p>
      {data?.map(item=> (
        <div className="intro__button" key={item.coffeeNumber}>
          <button 
            id="바로-구매-버튼"
            onClick={(e) => onClickBasket(e, item.name, price, count, userName, item.price)}
          >
            바로 구매하기
          </button>
          <button 
            className="button_2" 
            onClick={(e) => onClickBasket(e, item.name, price, count, userName, item.price)}
          >
            장바구니 담기
          </button>
        </div>
      ))}
    </>
  );
}

export default NumberOfProduct;