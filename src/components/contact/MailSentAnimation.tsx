import styled from 'styled-components';
import Lottie from 'react-lottie';
import { dt } from '../../../lib/mixins/layoutMixins';
import animation from "../../assets/animations/mail.json";

// Define the container for the animation
const Container = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: var(--gap-sm);
    width: 100%;
    height: 400px;
    min-width: 300px;
    background-color: var(--background-secondary);
    border-radius: var(--br-xl);

    ${dt`
        height: 100%;
    `}
`;

interface MailSentAnimationProps {
  onComplete: () => void;
}

function MailSentAnimation({ onComplete }: MailSentAnimationProps) {
  const defaultOptions = {
    loop: false,
    autoplay: true, 
    animationData: animation,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
  };

  // Explicitly typing the event listeners with allowed event names
  const eventListeners: { eventName: 'complete'; callback: () => void }[] = [
    {
      eventName: 'complete',
      callback: onComplete
    }
  ];

  return (
    <Container>
      <Lottie
        options={defaultOptions}
        height={200}
        width={200}
        eventListeners={eventListeners}
      />
    </Container>
  );
}

export default MailSentAnimation;
