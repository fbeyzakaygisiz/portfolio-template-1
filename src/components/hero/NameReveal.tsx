import { useRef } from 'react'
import styled from 'styled-components'
import RevealText from '../../../lib/components/RevealText'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import absPositionMixin from '../../../lib/mixins/absPositionMixin'
import { mb } from '../../../lib/mixins/layoutMixins'

type Props = {
  name?: string
  title?: string

}

const Container = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-bottom: 100px; /* Ensure space at the bottom */
  z-index: 2;
`

const AnimatedLine = styled.div`
  position: absolute;
  ${absPositionMixin({ position: "center" })}
  height: 2px;
  width: 0px; /* Starts at 0, grows with animation */
  background-color: var(--background-separator);
  transition: none; /* Disable CSS transitions so GSAP has full control */

  ${mb`
    margin-top: 40px;
  `}
`

const NameReveal = ({ name = 'John Doe', title = "Translator" }: Props) => {
  const lineRef = useRef<HTMLDivElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)

  useGSAP(() => {
    const tl = gsap.timeline()

    // Expand the line in place
    tl.to(lineRef.current, {
      width: 400,
      duration: 0.5,
      ease: 'power2.out',
      delay: 1.2
    })

    // Move text up
    tl.to(
      '#hero-name',
      {
        y: -80,
        duration: 0.5,
        ease: 'linear',
        delay:2,

      },
      '+=0.8'
    )

    // Move line down and adjust width after text moves
    tl.to(
      lineRef.current,
      {
        bottom: 0,
        top: "100%",
        width: "120%",
        duration: 0.7,
        ease: 'linear',
        marginTop: 0,
      },
      '-=0.5'
    )

    // Move title below after line animation
    tl.to("#hero-title", {

      top: "100%",
      duration: 0.7,  // Adjusted the duration for smoothness
      ease: 'linear',
      paddingTop: 20, // Adjust padding to create space below the line
    }, '-=0.7')
  }, [])

  return (
    <Container ref={containerRef}>
      <RevealText id="hero-name"  className="font-display !font-normal !leading-[70%] !text-[10rem] ! dt:!text-[17rem]">{name}</RevealText>
      <RevealText id="hero-title" delay={1.5} className='absolute font-primary top-[60%] !text-[1.5rem] !font-medium mt-2' >{title}</RevealText>
      <AnimatedLine ref={lineRef} />
    </Container>
  )
}

export default NameReveal
