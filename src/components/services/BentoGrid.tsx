import styled from 'styled-components';
import { dt } from '../../../lib/mixins/layoutMixins';
import React from 'react';

// Use React.HTMLProps<HTMLDivElement> for correct typing
interface Props extends React.HTMLProps<HTMLDivElement> {
    minWidth?: number;
    maxWidth?: number;
}

const Grid = styled.div<{
  $minWidth: number;
  $maxWidth: number;
}>`
  min-width: ${({ $minWidth }) => $minWidth}px;
  max-width: ${({ $maxWidth }) => $maxWidth}px;
  display: grid;
  gap: 12px;
  width: 100%;
  height: auto;
  min-height: fit-content;

  grid-template-columns: 1fr;
  grid-template-rows: auto;
  gap: 20px;
  padding-top: 24px;

  ${dt`
      aspect-ratio: 9/4;
      grid-template-columns: repeat(12, 1fr);
      grid-template-rows: repeat(12, auto);
      padding-top: 40px;
  `}
`;

const BentoGrid = ({
    minWidth = 300,
    maxWidth = 900,
    children,
    className = "",
    ...rest
}: Props) => {
  return (
    <Grid
        $minWidth={minWidth}
        $maxWidth={maxWidth}
        className={className}
        {...rest}
    >
        {children}
    </Grid>
  );
};

export default BentoGrid;
