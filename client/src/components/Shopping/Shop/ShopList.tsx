import React from "react";
import { Link } from "react-router-dom";

import { useApiDataShop } from "../../../services/api";

const ShopList:React.FC = () => {

  const coffeeShopUrl = 'http://localhost:4000/api/coffeeShop'
  const {data, isError, isLoading} = useApiDataShop(coffeeShopUrl);

  if(isError) return (
    <div className='mainmenu__error'>
      <p>무엇인가 에러가 발생했습니다.</p>
    </div>
  )

  if(isLoading) return <p>로딩중입니다..</p>

  return ( 
    <>
      {data?.map(item => (
        <div key={item.coffeeNumber} className="shopping__inner">
          <Link to={`/shopdetail/${item.name}`}>
            <img src={item.imgurl} alt="#"/>
            <p>{item.name}</p>
          </Link>
          <p className="shopping__date">제조일 2023.04.25</p>
          <p className="shopping__price">{item.price} 원</p>
        </div>
      ))}
    </>
  );
}
export default ShopList;