import React, { useEffect } from "react";
import { AiOutlinePlus  } from "react-icons/ai";
import {LuEqual} from "react-icons/lu";
import { useRecoilState, useRecoilValue } from "recoil";
import { shopBaket, userName } from "../../../recoil/shop";
import { useApiBaket } from "../../../services/api";
import styled from "styled-components";

const TotalPriceContainer = styled.div`
  display: flex;
  justify-content: space-around;
  width: 60%;
  margin: 0 auto;
  padding: 50px;
  background-color: #F9F9F9;

  // iPhone XR ~ 15
  @media (max-width:500px) {
    width: 80%;
  }
`
const PriceBox = styled.p`
  font-size: 30px;
  font-weight: bold;
  color: #333333;
  @media (max-width:500px) {
    font-size: 20px;
  }
`
const InformationBox = styled.p`
  margin-bottom: 20px;
  color: #777777;
` 
const FormulaBox = styled.div`
  display: flex;
  align-items: center;
`

const ShopTotal:React.FC = () => {  

  const userDB = 'https://port-0-coffeesiteserver-32updzt2alpmp3ic8.sel4.cloudtype.app/api/Basket';
  const username = useRecoilValue(userName);


  const { data } = useApiBaket(userDB, username);
  const [coffee, setCoffee] = useRecoilState(shopBaket);

  useEffect(() => {
    setCoffee(data);
  },[setCoffee,data])

  const totalPrice = coffee?.reduce((prev,cur) => prev + cur.price, 0).toString();

  return ( 
    <TotalPriceContainer>
      <div>
        <InformationBox>총 상품금액</InformationBox>
        <PriceBox>{totalPrice}원</PriceBox>
      </div>
      <FormulaBox>
        <AiOutlinePlus size="25"/>
      </FormulaBox>
      <div>
        <InformationBox>총 배송비</InformationBox>
        <PriceBox>0원</PriceBox>
      </div>
      <FormulaBox>
        <LuEqual size="25"/>
      </FormulaBox>
      <div>
        <InformationBox>결제예정금액</InformationBox>
        <PriceBox>{totalPrice}원</PriceBox>
      </div>
    </TotalPriceContainer>
  );
}
export default ShopTotal;