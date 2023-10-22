import React from "react";
import { useRecoilValue } from "recoil";
import { shoppingBasket } from "../../recoil/shop";


const ShoppingBasket:React.FC = () => {
  const basket = useRecoilValue(shoppingBasket);
  return ( 
    <div className="shoppingbasket">
      {basket.map(x => (<p>{x.name}</p>))}
    </div>
  );
}

export default ShoppingBasket;