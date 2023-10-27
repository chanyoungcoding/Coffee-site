import React from "react";

import '../../styles/basket.scss';
import BasketProfile from "./components/BasketProfile";
import BasketSave from "./components/BasketSave";

const ShoppingBasket:React.FC = () => {
  
  return ( 
    <div className="shoppingbasket">
      <div className="basket__profile">
        <BasketProfile />
      </div>
      <div className="basket__save">
        <BasketSave />
      </div>
    </div>
  );
}

export default ShoppingBasket;