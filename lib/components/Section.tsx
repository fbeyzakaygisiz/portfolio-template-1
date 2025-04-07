import styled from 'styled-components';
import { responsiveMargin } from "../mixins/layoutMixins";
import { ReactNode, forwardRef } from 'react';

// Define the type for the props
type Props = {
  className?: string;
  id?: string;
  children?: ReactNode;
};

// Styled component
const Container = styled.section`
  position: relative;
  ${responsiveMargin}
`;

// ForwardRef component
const Section = forwardRef<HTMLElement, Props>(({ className, id, children }, ref) => {
  return (
    <Container className={className} id={id} ref={ref}>
      {children}
    </Container>
  );
});

Section.displayName = 'Section';

export default Section;
