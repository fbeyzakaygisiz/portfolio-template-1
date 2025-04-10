import  { useRef } from 'react'
import styled from 'styled-components'
import Section from '../lib/components/Section'
import UnderlinedHeading from "../lib/components/UnderlinedHeading"
import ScrollTrigger from 'gsap/all'
import gsap from 'gsap'
import AboutParagraph from './components/about/AboutParagraph'
import { aboutSection, personalInfo } from './utils/info'
import CVSection from './components/about/CVSection'


gsap.registerPlugin(ScrollTrigger)


const Container = styled(Section)`
    display: flex;
    flex-direction: column;
    align-items: center;
    min-height: 90vh;
    width: 100%;
    gap: var(--gap-md);
    padding-top: 80px;
`
export default function AboutMe() {

    const containerRef = useRef<HTMLDivElement>(null)
    return (
    <Container ref={containerRef} id={"about"}>
            <UnderlinedHeading>Hakkımda</UnderlinedHeading>
            <AboutParagraph 
                about={personalInfo.about}
                scrollTrigger={`#about`}
            />

            <div className='w-full flex flex-col min-w-[300px] max-w-[900px]'>

                {aboutSection.map(
                    (section,i) =>  <CVSection
                    triggerRef={containerRef}
                    {...section}
                    key={`section-${i}`}
                />
                )}
            </div>








    </Container>
  )
}