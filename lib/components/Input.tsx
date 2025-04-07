import React, { useRef } from 'react';
import styled from 'styled-components';

// Styled input component
const StyledInput = styled.input`
  display: block;
  width: 100%;
  border-radius: var(--br-default);
  height: ${({ size = 'md' }) => `var(--input-h-${size})`}; /* Set input height */
  font-size: ${({ size = 'md' }) => `var(--input-fs-${size})`}; /* Font size */
  padding: ${({ size = 'md' }) => `var(--input-p-${size})`}; /* Padding */
  border: none;
  outline: none;
  background-color: transparent;
  border-bottom: var(--border-separator);
  position: relative;

  /* Hover animation */
  &:hover {
    border:  var(--border-separator);
  }

  /* Focus effect */
  &:focus {
    border: 1px solid var(--swatches-primary);
    box-shadow:
        0 -1px 1px  var(--background-primary),
        0 0 5px var(--primary-600),
        0 0 7px var(--primary-700),
        0 0 9px var(--primary-900);
  }

  /* Keyframe animation for border wrap */
  @keyframes border-animation {
    0% {
      width: 0;
      height: 0;
    }
    50% {
      width: 100%;
      height: 0;
    }
    100% {
      width: 100%;
      height: 100%;
    }
  }
`;

// Correct typing for the Input component, allowing all props of an HTML input element
const Input: React.FC<React.InputHTMLAttributes<HTMLInputElement>> = ({ ...props }) => {
  const inputRef = useRef<HTMLInputElement>(null);

  return <StyledInput ref={inputRef} {...props} />;
};

export default Input;
