import { useRecoilValue } from "recoil";
import { shoppingBasket } from "../../recoil/shop";
import React from "react";


const ShoppingBasket:React.FC = () => {
  const basket = useRecoilValue(shoppingBasket);
  console.log(basket)

  return ( 
    <div className="shoppingbasket">
    </div>
  );
}

export default ShoppingBasket;