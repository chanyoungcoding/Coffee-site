import React, { ReactNode } from 'react';
import styled from 'styled-components'

// Button components
const StyledButton = styled.button`
  /* 공통 스타일 */
  display: flex;
  justify-content: center;
  align-items: center;
  outline: none;
  border: 2px solid #986C4A;
  border-radius: 4px;
  color: white;
  font-weight: bold;
  cursor: pointer;
  padding-left: 1rem;
  padding-right: 1rem;

  /* 크기 */
  height: 2.25rem;
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

  /* 기타 */
  & + & {
    margin-left: 1rem;
  }
`;

interface ButtonProps {
  children: ReactNode;
}

const Button:React.FC<ButtonProps> = ({children}) => {
  return <StyledButton>{children}</StyledButton>
}

export default Button;