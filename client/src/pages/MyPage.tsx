import React from "react";

import '../styles/basket.scss';
import BasketProfile from "../components/MyPage/BasketProfile";
import BasketSave from "../components/MyPage/BasketSave";

const MyPage:React.FC = () => {
  
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

export default MyPage;