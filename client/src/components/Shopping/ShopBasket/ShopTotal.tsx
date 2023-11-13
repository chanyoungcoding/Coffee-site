import React, { useEffect } from "react";
import { AiOutlinePlus  } from "react-icons/ai";
import {LuEqual} from "react-icons/lu";
import { useRecoilState, useRecoilValue } from "recoil";
import { shopBaket, userName } from "../../../recoil/shop";
import { useApiBaket } from "../../../services/api";

const ShopTotal:React.FC = () => {  

  const userDB = 'http://localhost:4000/api/Basket';
  const username = useRecoilValue(userName);


  const { data } = useApiBaket(userDB, username);
  const [coffee, setCoffee] = useRecoilState(shopBaket);

  useEffect(() => {
    setCoffee(data);
  },[setCoffee,data])

  const totalPrice = coffee?.reduce((prev,cur) => prev + cur.price, 0).toString();

  return ( 
    <div className="basket__total">
      <div className="equal__product">
        <p className="equal__name">총 상품금액</p>
        <p className="equal__price">{totalPrice}</p>
      </div>
      <div className="total__plus">
        <AiOutlinePlus size="30"/>
      </div>
      <div className="equal__product">
        <p className="equal__name">총 배송비</p>
        <p className="equal__price">0원</p>
      </div>
      <div className="total__equal">
        <LuEqual size="30"/>
      </div>
      <div className="equal__product">
        <p className="equal__name">결제예정금액</p>
        <p className="equal__price">{totalPrice}</p>
      </div>
    </div>
  );
}
export default ShopTotal;