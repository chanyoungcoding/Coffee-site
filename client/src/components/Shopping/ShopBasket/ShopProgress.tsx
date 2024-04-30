import styled from "styled-components";

const BasketProgressContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 100px;
`
const BasketProgressBox = styled.div`
  display: flex;
  align-items: center;

  // iPhone XR ~ 15
  @media (max-width:600px) {
    flex-direction: column;
  }
`
const BasketProgressLine = styled.div`
  width: 10%;
  height: 2px;
  margin: 0px 20px;
  background-color: #cccccc;
`
const ProgressNumber = styled.p`
  padding: 20px;
  border-radius: 50px;
  font-size: 20px;
  font-weight: bold;
  color: white;
`
const ProgressName = styled.p`
  margin-left: 20px;
  font-size: 20px;
  font-weight: bold;

  // iPhone XR ~ 15
  @media (max-width:600px) {
    margin:10px 0px;
    font-size: 16px;
  }
`

const ShopProgress = () => {
  return ( 
    <BasketProgressContainer className="basket__progress">

      <BasketProgressBox className="progress__basket">
        <ProgressNumber className="basket__procedure">01</ProgressNumber>
        <ProgressName className="basket__procedurename">장바구니</ProgressName>
      </BasketProgressBox>

      <BasketProgressLine/>

      <BasketProgressBox className="progress__order">
        <ProgressNumber className="basket__procedure">02</ProgressNumber>
        <ProgressName className="basket__procedurename">주문/결제</ProgressName>
      </BasketProgressBox>

      <BasketProgressLine/>

      <BasketProgressBox className="progress__complete">
        <ProgressNumber className="basket__procedure">03</ProgressNumber>
        <ProgressName className="basket__procedurename">주문완료</ProgressName>
      </BasketProgressBox>
      
    </BasketProgressContainer>
  );
}
export default ShopProgress;