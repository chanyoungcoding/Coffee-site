import React from "react";
import { Link } from "react-router-dom";

import { useApiDataShop } from "../../../services/api";
import styled from "styled-components";

const ShopImg = styled.img`
  width: 400px;
  height: 400px;
  object-fit: cover;
  background-color: #EDE2D2;
`

const ShopProductName = styled.p`
  position: relative;
  display: inline-block;
  top: -40px;
  margin-left: 20px;
  font-size: 20px;
  font-weight: bold;
`

const ShopProductPrice = styled.p`
  margin: 10px 0px;
  font-size: 20px;
  font-weight: bold;
`

const ShopProductData = styled.p`
  color: #7D7D7D;
`

const ShopList:React.FC = () => {

  const coffeeShopUrl = 'https://port-0-coffeesiteserver-32updzt2alpmp3ic8.sel4.cloudtype.app/api/coffeeShop'
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
            <ShopImg src={item.imgurl} alt="#"/>
            <ShopProductName>{item.name}</ShopProductName>
          </Link>
          <ShopProductData className="shopping__date">제조일 2023.04.25</ShopProductData>
          <ShopProductPrice className="shopping__price">{item.price} 원</ShopProductPrice>
        </div>
      ))}
    </>
  );
}
export default ShopList;