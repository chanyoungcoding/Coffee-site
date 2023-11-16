import React, {useEffect} from "react";

import { useRecoilValue, useRecoilState } from "recoil";
import { userName, shopBaket } from "../../../recoil/shop";
import { useApiBaket, useDeleteBasket } from "../../../services/api";
import styled from "styled-components";

const SaveProductContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 70%;
  margin: 0 auto 50px;
  @media (max-width:500px) {
    width: 100%;
  }
`
const ProductNameBox = styled.div`
  flex-grow: 2;
`
const ProductNameBoxTop = styled.div`
  font-weight: bold;
  padding: 20px;
  border-top: 2px solid #353535;
  border-bottom: 2px solid #353535;
`
const ProductNameBoxBottom = styled.div`
  padding: 25.7px;
  border-bottom: 1px solid #cccccc;
`
const ProductInformationBox = styled.div`
  flex-grow: 1;
`
const ProductInformationBoxTop = styled.div`
  display: flex;
  justify-content: space-around;
  font-weight: bold;
  padding: 20px 10px 20px 50px;
  border-top: 2px solid #353535;
  border-bottom: 2px solid #353535;
  &:nth-child(2) {
    padding-left: 30px;
  }
`
const ProductInformationBoxBottom = styled.div`
  display: flex;
  justify-content: space-around;
  padding: 25px;
  border-bottom: 1px solid #cccccc;
`
const QuantityButton = styled.button`
  border: none;
  outline: none;
  cursor: pointer;
  margin: 0px 15px;
  border-radius: 15px;
`

const ShopItem:React.FC = () => {

  const userDB = 'http://localhost:4000/api/Basket';
  const username = useRecoilValue(userName);

  const {mutate} = useDeleteBasket();

  const { data, isError, isLoading } = useApiBaket(userDB, username);
  const [coffee, setCoffee] = useRecoilState(shopBaket);

  useEffect(() => {
    setCoffee(data);
  },[setCoffee,data])

  const onClickPlus = (itemName:string, itemPrice: number | undefined) => {
    const plus = 'plus';
    mutate({username, itemName,itemPrice, plus})
  }

  const onClickMinus = (itemName:string, itemPrice: number | undefined) => {
    const minus = 'minus';
    mutate({username, itemName, itemPrice, minus})
  }

  if(isError) return (
    <div className='mainmenu__error'>
      <p>무엇인가 에러가 발생했습니다.</p>
    </div>
  )

  if(isLoading) return <p>로딩중입니다..</p>

  return (
    <>
      {coffee?.map((item,index)=> (
        <SaveProductContainer key={index} className="basket__inner">
          <ProductNameBox className="inner__left">
            <ProductNameBoxTop>
              <p>상품명</p>
            </ProductNameBoxTop>
            <ProductNameBoxBottom>
              <p>{item.name}</p>
            </ProductNameBoxBottom>
          </ProductNameBox>
          <ProductInformationBox className="inner__right">
            <ProductInformationBoxTop>
              <p>수량</p>
              <p>판매가</p>
              <p>배송비</p>
            </ProductInformationBoxTop>
            <ProductInformationBoxBottom className="right__bottom">
              <div className="bottom__count" style={{display: "flex"}}>
                <QuantityButton onClick={() => onClickMinus(item.name, item.itemPrice)}>-</QuantityButton>
                <p>{item.count}</p>
                <QuantityButton onClick={() => onClickPlus(item.name, item.itemPrice)}>+</QuantityButton>
              </div>
              <p>{item.price}원</p>
              <p>무료</p>
            </ProductInformationBoxBottom>
          </ProductInformationBox>
        </SaveProductContainer>
      ))}
    </>

  );
}
export default ShopItem;