import React from "react";
import styled from "styled-components";

const SecondTitle = styled.h1`
  margin-bottom: 20px;
  font-size: 60px;
  @media (max-width: 500px) {
    font-size: 30px;
  }
`

const SecondIntro = styled.p`
  width: 600px;
  font-size: 25px;
  word-break: keep-all;

  @media (max-width: 500px) {
    width: 300px;
  }
`

const Right:React.FC = () => {
  return (
    <>
      <SecondTitle>MY STORY</SecondTitle>
      <SecondIntro>
        어렸을 때부터 커피를 좋아해서 혼자서 커피도 만들어 보고 
        레시피도 외워 보기도 하면서 나중에 내가 가지고 있는 커피에 대한
        지식을 공유해 봤으면 좋겠다는 생각에 찬스 커피 사이트를 만들게 되었습니다.
      </SecondIntro>
    </>
  );
}

export default Right;