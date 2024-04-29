import Left from './components/Second/Left'
import Right from './components/Second/Right'
import styled from 'styled-components';

import coffeeBackground from '../../assets/coffeebackground2.webp';

const SecondBox = styled.div`
  height: 700px;
  display: flex;

  //iPhone XR
  @media (max-width: 500px) {
    justify-content: center;
    width: 414px;
    height: 500px;
    margin: 50px auto 0px;
  }
`
const LeftBox = styled.div`
  flex-grow: 1;
  background: url(${coffeeBackground}) no-repeat bottom/ contain;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  @media (max-width: 500px) {
    text-align: start;
  }
`

const RightBox = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  margin-left: 80px;

  // iPad Pro && Air && Mini
  @media (max-width: 1024px) {
    display: none;
  }
`

const HomeSecond = () => {
  return ( 
    <SecondBox className="homesecond">

      <LeftBox className="second__left">
        <Left/>
      </LeftBox>

      <RightBox className="second__right">
        <Right/>
      </RightBox>
      
    </SecondBox>
  );
}

export default HomeSecond;