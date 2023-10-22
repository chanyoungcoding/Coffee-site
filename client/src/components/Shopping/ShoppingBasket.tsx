import React, { useState } from "react";


const ShoppingBasket:React.FC = () => {

  const getItem = localStorage.getItem('shoppingBasket')
  const initialState = getItem ? JSON.parse(getItem) : [];
  const [state, setState] = useState(initialState);
  console.log(state)

  return ( 
    <div className="shoppingbasket">
      <p>{state.length > 0 ? state[0].name : 'Shopping Basket is empty'}</p>
    </div>
  );
}

export default ShoppingBasket;