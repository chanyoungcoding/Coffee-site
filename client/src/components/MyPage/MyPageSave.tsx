import React from "react";
import { useRecoilValue } from "recoil";
import { shoppingLength } from "../../recoil/shop";
import SaveInner from "./SaveInner";

const BasketSave:React.FC = () => {
  const basketLength = useRecoilValue(shoppingLength);

  return ( 
    <>
      <div className="save__top">
        <p>저장한 커피들</p>
        <p>좋아요 개수 : {basketLength}</p>
      </div>
      <div className="save__inner">
        <SaveInner/>
      </div>
    </>
  );
}

export default BasketSave;