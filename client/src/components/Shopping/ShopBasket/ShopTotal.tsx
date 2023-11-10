import React from "react";
import { AiOutlinePlus  } from "react-icons/ai";
import {LuEqual} from "react-icons/lu";

interface dataa {
  count: number;
  name: string;
  price: number;
}

interface dataaa {
  data: dataa[] | undefined;
}

const ShopTotal:React.FC<dataaa> = ({data}) => {  
  
  const totalPrice = React.useMemo(() => {
    return data?.reduce((prev,cur) => prev + cur.price, 0);
  },[data])?.toString();
    
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