import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import styled from 'styled-components'

type Props = {
    src:string | undefined;
    delay?:number
}


const Container  = styled.div`
    position: absolute;
    bottom: 0;
    flex-shrink: 0;
    min-width: 320px;
    max-width: 60vh;
    width: 40%;

    display: flex;
    justify-content: center;
    align-items: end;
    z-index: 10;
`

const Image = styled.img`
    width: 100%;
    height: auto;
    aspect-ratio: 4/5;
    object-fit: contain;
    object-position: bottom;
    z-index: 1;


    position: relative;
    filter: drop-shadow(0 10px 20px rgba(0, 0, 0, 0.25));

`


const HeroImage = ({
    src="",
    delay=0
}: Props) => {
    useGSAP(() => {

        gsap.from("#image-box-image", {
            opacity:0,
            scaleX: 0,
            scaleY: 0,
            delay: delay,
            duration: 1,
            transformOrigin: "center bottom",
            ease:"power2.in"
        });

    }, []);
  return (
    <Container
        id={"#image-box-container"}
    >
     <Image
        id="image-box-image"
        src={src}
                />    
    </Container>
  )
}

export default HeroImage