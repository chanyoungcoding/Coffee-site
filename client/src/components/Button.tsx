import React, { ReactNode } from 'react';
import styled from 'styled-components'
import { Link } from 'react-router-dom';

// Button components
const StyledButton = styled.button`
  /* 공통 스타일 */
  display: inline-block;
  margin: 0 5px;
  padding: 1rem 2rem;
  border: 2px solid #986C4A;
  border-radius: 4px;
  outline: none;
  color: white;
  font-weight: bold;
  cursor: pointer;

  /* 크기 */
  font-size: 1rem;

  /* 색상 */
  color: black;
  background: white;
  &:hover {
    background: #986C4A;
  }
  &:active {
    background: #986C4A;
    transform: scale(0.9);
  }

`;

interface ButtonProps {
  href: string;
  children: ReactNode;
}

const Button:React.FC<ButtonProps> = ({children, href}) => {
  return (
    <>
    <Link to={href}> 
      <StyledButton>{children}</StyledButton>
    </Link>
    </>
  )
}

export default  Button;