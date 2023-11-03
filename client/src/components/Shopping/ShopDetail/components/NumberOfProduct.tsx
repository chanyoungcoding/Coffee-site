import React, {useState, useEffect} from "react";
import Cookies from "js-cookie";

import { useBasketMutation } from "../../../../services/api";
import { CoffeeShopData, BasketData } from "../../../../models/coffee";

interface NumberOfProduct {
  data: CoffeeShopData[] | undefined
}

const NumberOfProduct:React.FC<NumberOfProduct> = ({data}) => {

  const userName = Cookies.get('사용자명');

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


  const onClickBasket = (name:string, price:number, count:number, userName:string | undefined) => {
    const data: BasketData = { name, price, count, userName };
    mutate(data);
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
    </>
  );
}

export default NumberOfProduct;