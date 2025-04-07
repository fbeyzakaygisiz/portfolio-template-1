import IconButton from "./IconButton"
import {responsiveMargin} from "../mixins/layoutMixins"
import styled from 'styled-components'
import {SupportedLinkTypes} from "../types/LinkTypes"

type SocialLink = {
    link?:string;
    type:SupportedLinkTypes | string;
    username?:string;
}
type Props = {
    name:string;
    title:string;
    socials: SocialLink[]
}

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;

    background-color: var(--background-tertiary);
    padding-top: 40px;
    padding-bottom: 20px;
    gap: var(--gap-xl);
    ${responsiveMargin}

`

function SimpleFooter({
    name,
    title,
    socials=[]

}: Props) {

    const currentYear = new Date().getFullYear();

  return (
    <Container>

        <div className='w-full flex gap-md flex-wrap justify-between items-start'>
            <div>
                <p className='!text-[1.5rem] !font-bold'>{name}</p>
                <p className='text-text-secondary'>{title}</p>
            </div>
            <div className='flex items-center justify-end'>
                {socials.map(social => 
                <a target='_blank' href={social.link} key={`footer-social-${social.type}`}>
                    <IconButton size='lg' boxStyle='link' icon={social.type}/>
                </a>
            )}
            </div>
        </div>
        <div className='w-full pt-[12px] text-text-tertiary text-center border-t-separator'>
            <p>Designed & built by <a target='_blank' className=' text-text-primary hover:text-text-focus' href='https://www.beyzakaygisiz.com/'>Beyza Kaygisiz</a></p>
            <p> All rights reserved – {currentYear}©</p>
        </div>
        
    </Container>
  )
}

export default SimpleFooter