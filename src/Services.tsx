import styled from 'styled-components';
import Section from '../lib/components/Section';
import UnderlinedHeading from '../lib/components/UnderlinedHeading';
import BentoGrid from './components/services/BentoGrid';
import { servicesSection } from './utils/info';
import BentoBox from './components/services/BentoBox';



const Container = styled(Section)`
  padding-top: 64px;
  min-height: 80vh;
  height: fit-content;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  gap: var(--gap-xl);

  margin-bottom: 64px;
`;






function Services() {



  return (
    <Container id="services">
      <UnderlinedHeading>Services</UnderlinedHeading>
      <BentoGrid>
          {servicesSection.map(service => <BentoBox
            id={service.id}
            key={`servive-${service.id}`}
            imgSrc={service.imgSrc}
            overlayText={service.title}
            details={service.details}
            column={service.column}
            row={service.row}
          >

          </BentoBox>)}
      </BentoGrid>
    </Container>
  );
}

export default Services;
