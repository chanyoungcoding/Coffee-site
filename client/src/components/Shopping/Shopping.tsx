import React from "react";
import { useRecoilValue } from "recoil";
import { shoppingList } from "../../recoil/shop";

const Shopping:React.FC = () => {
  const data = useRecoilValue(shoppingList);

  const onClick = (e:React.MouseEvent<HTMLButtonElement>) => {
    e.currentTarget.disabled = true;
  }

  return ( 
    <div className="shopping">
      {data.map(item => (
        <div key={item.id}>
          <p>{item.name} - {item.price}</p>
          <button onClick={onClick}>장바구니</button>
        </div>
      ))}
    </div>
  );
}
export default Shopping;