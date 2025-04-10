import  { useRef } from 'react';
import CopyMailButton from './CopyMailButton';
import SocialsButton from './SocialsButton';

import styled from 'styled-components';
import { dt } from '../../../lib/mixins/layoutMixins';

type Props = {
  mail: string;
  socials: { username: string; link: string; icon?: string }[];
};


const Container = styled.div`
    width: 100%;
    height: fit-content;
    padding: 40px ;
    display: flex;
    flex-direction: column;
    background-color: var(--background-secondary);
    border-radius: var(--br-xl);

    ${dt`
        width:40%;
        height: calc(100% - 40px);
        min-width:400px;
        margin-top:40px;

    `}
`

const ContactCard = ({ mail, socials }: Props) => {
  const copyMailButtonRef = useRef<HTMLDivElement>(null);



  return (
    <Container>
      <h4 className="text-text-tertiary mb-8">
      İsterseniz herhangi bir platformdan bana ulaşın!
            </h4>
      <CopyMailButton ref={copyMailButtonRef} id="copy-mail-button" mail={mail} />
      <div className="contact-socials w-full flex flex-col gap-md pt-4 border-t-separator">
        {socials?.map((social, i) => (
          <SocialsButton
            className="social-button"
            key={`social-${i}`}
            {...social}
            
          />
        ))}
      </div>
    </Container>
  );
};

export default ContactCard;
