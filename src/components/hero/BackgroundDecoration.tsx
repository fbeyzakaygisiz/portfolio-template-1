import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { useRef } from 'react'
import styled from 'styled-components'

import { ScrollTrigger } from 'gsap/all'
import { MouseParallax, ScrollParallax } from 'react-just-parallax'
import FloatingStars from '../../../lib/components/FloatingStars'

gsap.registerPlugin(ScrollTrigger)

type Props = {
  lineCount?: number,
  delay?:number,
}

const Container = styled.div`
  position: absolute;
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  z-index: 0;


`

const DecorativeLine = styled.div`
  height: 0px;
  width: auto;
  aspect-ratio: 1/1;
  position: absolute;
  
  border: var(--border-separator);
  opacity: 0;
  border-radius: 50% 50% 0 0;

`


const Lines = styled.div`
  position: relative;
  height: calc(90vh);
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;

  overflow: hidden;
  z-index: -1;

`

const BackgroundDecoration = ({ 
  lineCount = 12,
  delay=1
}: Props) => {
  const containerRef = useRef(null)

  useGSAP(() => {
    const ctx = gsap.context(() => {
      for (let i = 0; i < lineCount; i++) {
        gsap.to(`.line-${i}`, {
          y:"40vh",
          duration:0

        })
        gsap.to(`.line-${i}`, {
          height: 200 + 20 * i*i,
          opacity: 1,
          delay: delay,
          duration: 0.6 + (i * 0.3),
          ease: 'power2.out',

        })
      }
    }, containerRef)

    return () => ctx.revert()
  }, [lineCount])

  return (
    <Container ref={containerRef}>
      <ScrollParallax isAbsolutelyPositioned>
        <MouseParallax isAbsolutelyPositioned>
          <FloatingStars />
        </MouseParallax>
      </ScrollParallax>
      <Lines>
        {Array.from({ length: lineCount }, (_, i) => (
            <DecorativeLine key={`decorative-line-${i}`} className={`decorative-line line-${i}`} />
          ))}
      </Lines>


    </Container>
  )
}

export default BackgroundDecoration
