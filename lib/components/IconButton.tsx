import React from 'react';
import styled from 'styled-components';
import { IIconButton } from "../types/IButton";
import { styledBoxProp } from '../mixins/styledBoxMixin';
import Icon from "./Icon"
// Define StyledButton component
const StyledButton = styled.button<IIconButton>`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  border-radius: var(--input-r-default);
  font-weight: 600;
  height: ${({ $size = 'md' }) => `var(--input-h-${$size})`};
  width: ${({ $size = 'md' }) => `var(--input-h-${$size})`};
  padding: ${({ $size = 'md' }) => `var(--input-p-${$size})`};

  
  
  ${styledBoxProp}


  &:hover , &:focus{
    box-shadow: var(--elevation-md);
  }

  svg {
    height: ${({ $size = 'md' }) => `var(--input-fs-${$size})`};
    width:auto;
  }
`;

const IconButton: React.FC<IIconButton> = ({
  variant = 'neutral',
  boxStyle = 'ghost',
  size = 'md',  
  className = '',
  icon='heart',
  children,
  ...rest
}) => {
  return (
    <StyledButton 
      className={`Button ${className}`} {...rest}
      $variant={variant}
      $boxStyle={boxStyle}
      $size={size}
      >
      {icon && <Icon icon={icon}/>}
      {children}
    </StyledButton>
  );
};

export default IconButton;
