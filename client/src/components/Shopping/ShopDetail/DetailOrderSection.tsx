import React from "react";
import { useParams } from "react-router-dom";
import styled from 'styled-components';

import { useApiDataShopDetail } from "../../../services/api";
import NumberOfProduct from "./components/NumberOfProduct";
import ProductInfo from "./components/ProductInfo";

const ShopImg = styled.img`
  width: 550px;
  height: 550px;
  margin-right: 10px;
  background-color: #EDE2D2;
  @media (max-width: 500px) {
    width: 300px;
    height: 300px;
    margin-bottom: 50px;
  }
`

const DetailOrderSection:React.FC = () => {

  const {name} = useParams();

  const coffeeShopDetailDB = 'https://port-0-coffeesiteserver-32updzt2alpmp3ic8.sel4.cloudtype.app/api/coffeeShopDetail';
  const {data, isError, isLoading} = useApiDataShopDetail(coffeeShopDetailDB, name);


  if(isError) return <p>에러가 발생했습니다.</p>
  if(isLoading) return <p>로딩중입니다..</p>

  return (
    <>
      <div className="detail__img">
        <ShopImg src={data ? data[0].imgurl : ''} alt="#"/>
      </div>
      <div className="detail__intro">
        <ProductInfo data={data}/>
        <div className="intro__delivery">
          <div className="delivery__inner">
            <h4>배송 방법</h4>
            <p>택배</p>
          </div>
          <div className="delivery__inner">
            <h4>배송비</h4>
            <p>3000원 - 40,000원 이상 구매시 무료</p>
          </div>
        </div>
        <NumberOfProduct data={data}/>
      </div>
    </>

  );
}

export default DetailOrderSection;