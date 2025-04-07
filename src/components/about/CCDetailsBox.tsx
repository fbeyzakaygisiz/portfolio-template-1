import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import React, { useEffect, useRef } from 'react'
import styled from 'styled-components'

const Container = styled.div`
  position: fixed;
  border-radius: var(--br-lg);
  background-color: var(--background-secondary);
  padding: 40px 20px;
  font-size: var(--fs-p-lg);
  width: 340px;
  height: fit-content;
  pointer-events: none;
  box-shadow: var(--elevation-xl);
  line-height: 140%;
  z-index: 10;
  font-family: var(--font-secondary);


  opacity: 0;
  transform: scale(0.55);
  top: 2px;

  & > span {
    opacity: 0;
  }
`

type Props = {
  isOpen: boolean
  children: React.ReactNode
}

function CVDetailsBox({ isOpen, children }: Props) {
  const boxRef = useRef<HTMLDivElement>(null)
  const tlRef = useRef<gsap.core.Timeline | null>(null)

  // Create GSAP timeline once
  useGSAP(() => {
    const box = boxRef.current
    if (!box) return

    const tl = gsap.timeline({ paused: true })
    tl.to(box, {
      opacity: 1,
      scale: 1,
      duration: 0.3,
      ease: 'power3.out'
    })

    tl.to(
      box.querySelector('.details'),
      {
        opacity: 1,
        duration: 0.1,
        ease: 'power2.out'
      },
      '-=0.2'
    )

    tlRef.current = tl
  }, [])

  useEffect(() => {
    if (tlRef.current) {
      if (isOpen) {
        tlRef.current.play() // normal speed
      } else {
        tlRef.current.timeScale(5).reverse() // 2x speed for exit
      }
    }
  }, [isOpen])
  
  // Smooth follow with GSAP
  useEffect(() => {
    const box = boxRef.current
    if (!box) return

    const moveBox = (e: MouseEvent) => {
      const x = e.clientX
      const y = e.clientY

      gsap.to(box, {
        x,
        y,
        duration: 0.3,
        ease: 'power3.out'
      })
    }

    window.addEventListener('mousemove', moveBox)
    return () => window.removeEventListener('mousemove', moveBox)
  }, [])

  return (
    <Container ref={boxRef}>
      <span className="details">{children}</span>
    </Container>
  )
}

export default CVDetailsBox
