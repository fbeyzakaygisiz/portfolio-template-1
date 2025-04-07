import  { AnchorHTMLAttributes, useRef } from 'react'
import styled from 'styled-components'
import { outlinedBox } from '../../../lib/mixins/styledBoxMixin'
import { IBoxStyle } from '../../../lib/types/StylingTypes'
import Icon from '../../../lib/components/Icon'
import { useGSAP } from '@gsap/react'
import { gsap } from 'gsap'
import { SupportedIconNames } from '../../../lib/types/IconTypes'

interface Props extends AnchorHTMLAttributes<HTMLAnchorElement> {
  icon?: string | SupportedIconNames;
  username?: string;
  link?: string;
}

const Container = styled.a<IBoxStyle>`
  height: var(--button-h-md, 40px);
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 100px;
  padding: 8px 20px;
  gap: var(--gap-xs);
  ${outlinedBox}
  cursor: pointer;

  .icon{
    opacity: 0;
    transition: all 300ms cubic-bezier(0.39, 0.575, 0.565, 1);
  }

  &:hover .icon{
    opacity: 1;
  }
`

const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`

const SocialsButton = ({
  type,
  username,
  link,
  ...rest
}: Props) => {
  const iconRef = useRef<HTMLDivElement>(null)
  const containerRef = useRef<HTMLAnchorElement>(null)

  useGSAP(() => {
    const icon = iconRef.current
    if (!icon) return;

    const hoverAnim = gsap.to(icon, {
      visibility: "visible",
      x: 6,
      duration: 0.3,
      ease: "power2.out",
      paused: true,
    })

    // Handle hover event directly in useEffect for better cleanup
    const handleMouseEnter = () => hoverAnim.play()
    const handleMouseLeave = () => hoverAnim.reverse()

    const container = containerRef.current
    if (container) {
      container.addEventListener("mouseenter", handleMouseEnter)
      container.addEventListener("mouseleave", handleMouseLeave)
    }

    return () => {
      if (container) {
        container.removeEventListener("mouseenter", handleMouseEnter)
        container.removeEventListener("mouseleave", handleMouseLeave)
      }
    }
  }, [])

  return (
    <Container target='_blank' href={link} ref={containerRef} $variant='neutral' {...rest}>
      <Icon icon={type} />
      <p className='w-full text-ellipsis'>{username}</p>
      <IconWrapper ref={iconRef}>
        <Icon className='icon' icon={"goTo"} />
      </IconWrapper>
    </Container>
  )
}

export default SocialsButton
