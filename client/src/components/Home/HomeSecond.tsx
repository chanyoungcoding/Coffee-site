import Left from './components/Second/Left'
import Right from './components/Second/Right'
import styled from 'styled-components';

import coffeeBackground from '../../assets/coffeebackground2.png';

const SecondBox = styled.div`
  height: 700px;
  display: flex;
`
const LeftBox = styled.div`
  flex-grow: 1;
  background: url(${coffeeBackground}) no-repeat bottom/ contain;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`

const RightBox = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  margin-left: 80px;
  @media (max-width: 1024px) {
    display: block;
    text-align: start;
    margin-left: 70px;
    background: none;
  }

  // iPad Pro
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