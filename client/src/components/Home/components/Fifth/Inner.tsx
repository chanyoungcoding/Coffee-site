import React from "react";
import Button from "../../../Button";

const Inner:React.FC = () => {
  return ( 
    <div className="inner__box">          
      <h1>레시피</h1>
      <h2>커피 레시피를 참고해서 커피를 만들어 보세요.</h2>
      <Button href="/recipeHome">보러 가기</Button>
    </div>
  );
}

export default Inner;