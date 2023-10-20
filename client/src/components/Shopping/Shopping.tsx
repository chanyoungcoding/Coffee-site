import React from "react";
import { useRecoilValue } from "recoil";
import { shoppingList } from "../../recoil/shop";

const Shopping:React.FC = () => {
  const data = useRecoilValue(shoppingList);

  return ( 
    <div className="shopping">
      {data.map(item => (<p>{item.name} - {item.price}</p>))}
    </div>
  );
}
export default Shopping;