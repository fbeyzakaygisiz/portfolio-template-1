import Section from '../lib/components/Section'
import styled from 'styled-components'
import BackgroundDecoration from './components/hero/BackgroundDecoration'
import HeroImage from './components/hero/HeroImage'
import NameReveal from './components/hero/NameReveal'


type Props = {
  heroImage?:string;
  name?:string
  title?:string
}
const Container = styled(Section)`

    position: relative;
    width: 100%;
    height: 90vh;
    display: flex;
    flex-direction: column;
    justify-content: center;  
    align-items: center;
    padding-top: 40px;
    
    gap: var(--gap-xl);
    margin-bottom: 120px;
    /* border: 1px solid pink !important; */
`

const HeroSection = ({

  name,
  heroImage,
  title
}: Props) => {


  return (
    <Container id='hero'>
        <NameReveal name={name} title={title}/>
        <BackgroundDecoration delay={5.5}/>
        <HeroImage src={heroImage} delay={5}/>

    </Container>
  )
}

export default HeroSection