import React from "react";
import { useRecoilValue, useRecoilState } from "recoil";
import { shoppingBasket, shoppingLength, shoppingList, shoppingPrice } from "../../recoil/shop";

interface ShoppingItem {
  id: number;
  name: string;
  price: number;
}

const Shopping:React.FC = () => {
  const data = useRecoilValue(shoppingList);
  const [basket, setBasket] = useRecoilState(shoppingBasket);

  const basketLength = useRecoilValue(shoppingLength);
  const basketPrice = useRecoilValue(shoppingPrice);

  const onClick = (item:ShoppingItem,e:React.MouseEvent<HTMLButtonElement>) => {
    e.currentTarget.disabled = true;
    setBasket([...basket, item])
  }

  return ( 
    <div className="shopping">
      {data.map(item => (
        <div key={item.id}>
          <p>{item.name} - {item.price}</p>
          <button onClick={(e) => onClick(item ,e)}>장바구니</button>
        </div>
      ))}

      <h1>장바구니에 추가된 목록</h1>
      {basket.map(x => (<p key={x.id}>{x.name} - {x.price}</p>))}
      <h2>장바구니 목록 개수 - {basketLength}</h2>
      <h3>장바구니 목록 총 가격 - {basketPrice}</h3>
    </div>
  );
}
export default Shopping;