import React from "react";
import { useApiUser } from "../../services/api";

import Cookies from 'js-cookie';

const ShoppingBasket:React.FC = () => {


  const userName = Cookies.get('사용자명');
  const userDB = 'http://localhost:4000/api/user';

  const { data, isError, isLoading } = useApiUser(userDB, userName);
  
  if(isError) return (
    <div className='mainmenu__error'>
      <p>무엇인가 에러가 발생했습니다.</p>
    </div>
  )

  if(isLoading) return <p>로딩중입니다..</p>

  return ( 
    <div className="shoppingbasket">
    </div>
  );
}

export default ShoppingBasket;