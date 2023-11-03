import React from "react";
import { CoffeeShopData } from "../../../../models/coffee";

interface NumberOfProduct {
  data: CoffeeShopData[] | undefined
}

const ProductInfo:React.FC<NumberOfProduct> = ({data}) => {
  return ( 
    <>
      <h1>{data ? data[0].name : '이름을 찾을 수 없습니다.'}</h1>
      <h2>{data ? data[0].price : '?'} 원</h2>
      <h4>제조일 2023.10.30</h4>
    </>
  );
}
export default ProductInfo;