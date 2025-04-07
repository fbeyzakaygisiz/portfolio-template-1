import React from 'react';
import styled from 'styled-components';
import { IButton } from "../types/IButton";
import { styledBoxProp } from '../mixins/styledBoxMixin';

// Define StyledButton component
const StyledButton = styled.button<IButton>`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  border-radius: var(--br-md);
  font-family: var(--font-secondary);

  font-weight: bold;
  height: ${({ $size = 'md' }) => `var(--input-h-${$size})`};
  padding: ${({ $size = 'md' }) => `var(--input-p-${$size})`};
  gap: ${({ $size = 'md' }) => `var(--input-g-${$size})`};
  font-size: ${({ $size = 'md' }) => `var(--input-fs-${$size})`};
  width:  ${({ $fw = false }) =>  $fw ? "100%" : "fit-content"};

  &:hover , &:focus{
    box-shadow: var(--elevation-md);
  }
  ${styledBoxProp}


`;

const Button: React.FC<IButton> = ({
  variant = 'primary',
  boxStyle = 'solid',
  size = 'md',
  fw = false,
  className = '',
  head,
  tail,
  children,
  ...rest
}) => {
  return (
    <StyledButton 
      className={`Button ${className}`} {...rest}
      $variant={variant}
      $boxStyle={boxStyle}
      $size={size}
      $fw={fw}
      >
      {head && <span>{head}</span>}
      
      {children}
      {tail && <span>{tail}</span>}
    </StyledButton>
  );
};

export default Button;
