import React from "react";
import { AiOutlinePlus  } from "react-icons/ai";
import {LuEqual} from "react-icons/lu";
import { useRecoilValue } from "recoil";

import { shopBaketPrice } from "../../../recoil/shop";

const ShopTotal:React.FC = () => {

  const totalPrice = useRecoilValue(shopBaketPrice);

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