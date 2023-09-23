import React from 'react';
import styled from 'styled-components';
import coffeLogo from '../assets/coffeeicon.png'

const StyledLogo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 120px;
  height: 120px;
  background: #986C4A;
  border-radius: 100%;
`

const Logo:React.FC = () => {
  return (
  <StyledLogo>
    <img src={coffeLogo} alt='#'></img>
  </StyledLogo>)
}

export default Logo;