import React from "react";
import styled from "styled-components";

const LineContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 1920px;
  position: absolute;
  top: -40px;
  height: 100px;
  background-color: #361306;
  transform: rotate(-2deg);
  p {
    color: rgb(233, 233, 233);
    font-size: 3rem;
  }
`

const Line:React.FC = () => {
  const lineText = ['COFFEE','COFFEE','COFFEE','COFFEE','COFFEE','COFFEE'];

  return ( 
    <LineContainer className="homefifth__line">
      {lineText.map((text,index) => (<p key={index}>{text}</p>))}
    </LineContainer>
  );
}
export default Line;