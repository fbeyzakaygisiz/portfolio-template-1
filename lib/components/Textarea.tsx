import React, { useRef, useState } from 'react';
import styled from 'styled-components';

// Styled textarea component
const StyledTextarea = styled.textarea`
  display: block;
  width: 100%;
  height: 200px;
  outline: none;
  background-color: transparent;

  position: relative;
  resize: none;

  border: none;
  outline: none;

  &:hover, &:focus {
    border: none;
    outline: none;
  }
`;

const TextareaContainer = styled.div<{$isActive: boolean}>`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-height: 120px;
  height: fit-content !important;
  width: 100%;
  position: relative;
  margin-bottom: 20px;
  border-left: var(--border-separator);
  border-bottom: var(--border-separator);
  border-radius: var(--br-default);

  padding: var(--input-p-md);

  &:hover {
    border: var(--border-separator);
  }

  ${({ $isActive }) =>
    $isActive &&
    `
    border: 1px solid var(--swatches-primary);
    box-shadow: 0 -1px 1px var(--background-primary),
                0 0 5px var(--primary-600),
                0 0 7px var(--primary-700),
                0 0 9px var(--primary-900);
    &:hover {
      border: 1px solid var(--swatches-primary);
    }
  `}

  &:focus {
    border: 1px solid var(--swatches-primary);
    box-shadow: 0 -1px 1px var(--background-primary),
                0 0 5px var(--primary-600),
                0 0 7px var(--primary-700),
                0 0 9px var(--primary-900);
  }
`;

interface ITextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  className?: string;
}

const Textarea = ({
  className = '',
  ...rest
}: ITextareaProps) => {
  const [isActive, setIsActive] = useState(false);

  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const handleFocus = () => {
    setIsActive(true);
  };

  const handleBlur = () => {
    setIsActive(false);
  };

  return (
    <TextareaContainer className={className} $isActive={isActive}>
      <StyledTextarea
        ref={textareaRef}
        onFocus={handleFocus}
        onBlur={handleBlur}
        {...rest}
      />
    </TextareaContainer>
  );
};

export default Textarea;
