import React from "react";
import '../styles/shopping.scss';
import ShopList from "../components/Shopping/Shop/ShopList";


const Shopping:React.FC = () => {

  return ( 
    <div className="shopping">
      <ShopList/>
    </div>
  );
}
export default Shopping;