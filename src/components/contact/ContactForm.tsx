import React from 'react'
import styled from 'styled-components'
import Input from '../../../lib/components/Input'
import Textarea from '../../../lib/components/Textarea'
import Button from '../../../lib/components/Button'

type Props = {
  handleSubmitForm: (e: React.FormEvent<HTMLFormElement>) => void;  // Corrected type here
  ref: React.RefObject<HTMLFormElement> | null; // Corrected type for ref
};
// Styled container for the form
const Container = styled.form`
    display: flex;
    flex-direction: column;
    gap: var(--gap-sm);
    width: 100%;
    min-width: 300px;
`

// ContactForm component wrapped with forwardRef
const ContactForm = React.forwardRef<HTMLFormElement, Props>(({ handleSubmitForm }, ref) => {
  return (
    <Container ref={ref} onSubmit={handleSubmitForm}>
      <h4 className='text-text-tertiary mb-2'>Let me know how I can help!</h4>
      <Input id="name" name="name" placeholder="Name" />
      <Input id="email" name="email" type="email" placeholder="Email" />
      <Textarea id="message" name="message" placeholder="How can I help you?" />
      <Button fw>Send Message</Button>
    </Container>
  )
})

// Set displayName for better debugging
ContactForm.displayName = "ContactForm";

export default ContactForm;
