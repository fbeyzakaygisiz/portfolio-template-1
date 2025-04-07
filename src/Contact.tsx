import  { useRef, useState } from 'react'
import styled from 'styled-components'
import Section from '../lib/components/Section'
import UnderlinedHeading from '../lib/components/UnderlinedHeading'
import { dt } from '../lib/mixins/layoutMixins'
import ContactForm from './components/contact/ContactForm'
import ContactCard from './components/contact/ContactCard'
import { personalInfo } from './utils/info'
import emailjs from '@emailjs/browser';
import MailSentAnimation from './components/contact/MailSentAnimation'

const Container = styled(Section)`
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: var(--gap-lg);
    min-height: 60vh;
    padding-bottom: 64px;
    margin-bottom: 120px;
    height: min-content;
    overflow: hidden;
    ${dt`
        height: 80vh;

    `}
`

const MainContent = styled.div`
    margin-top: 40px;
    width:100%;
    display: flex;
    align-items: center;
    flex-direction:column;
    height: fit-content;
    overflow: hidden;


    gap: var(--gap-xl);
    ${dt`
        height:100%;
        justify-content: space-between;
        flex-direction:row;
    `}
`
function Contact() {

    const form = useRef<HTMLFormElement>(null);
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_CONTACT_TEMPLATE_ID;

    
    const [ mailSent , setMailSent] = useState(false);

    const handleSubmitForm =(e: React.FormEvent<HTMLFormElement>) => {

        e.preventDefault();
        if(!form.current) return;
          emailjs
            .sendForm(serviceId, templateId, form.current, {
              publicKey:publicKey,
            })
            .then(
              () => {
                setMailSent(true)
              },
              (error) => {
                console.log('FAILED...', error);
              },
            );
        };
    
  return (
    <Container
      id="contact"        
    >
        <UnderlinedHeading>Contact Me</UnderlinedHeading>        
        <MainContent>
           {
            !mailSent ? 
           <ContactForm ref={form} handleSubmitForm={handleSubmitForm}/>:
            <MailSentAnimation
              onComplete={()=> setMailSent(false)}
            />}
            <ContactCard 
                mail={personalInfo.email} 
                socials={personalInfo.socials}
                />
            
        </MainContent>
    </Container>
  )
}

export default Contact