import styled from "styled-components";

import Button from "../../../Button";

const InnerBox = styled.div`
  h1 {
    font-size: 3rem;
  }
  h2 {
    margin: 10px 0px 30px;
    font-size: 2rem;
    @media (max-width: 500px) {
      font-size: 20px;
    }
  }
`

const Inner = () => {
  return ( 
    <InnerBox className="inner__box">          

      <h1>레시피</h1>

      <h2>커피 레시피를 참고해서 커피를 만들어 보세요.</h2>

      <Button href="/recipeHome">보러 가기</Button>
    </InnerBox>
  );
}

export default Inner;