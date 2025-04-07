import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'
import { RefObject, useRef } from 'react'
import styled from 'styled-components'

gsap.registerPlugin(ScrollTrigger)

type Props = {
    about?: string,
    scrollTrigger?: string | RefObject<HTMLElement>;
}

// Styled component for paragraph
const Paragraph = styled.p`
    color: var(--text-secondary);
    margin-top: 40px;
    min-width: 300px;
    max-width: 900px;
`

function AboutParagraph({
    about = "",
    scrollTrigger
}: Props) {
    // Reference for the paragraph element
    const ref = useRef<HTMLParagraphElement | null>(null)

    useGSAP(() => {
        if (!ref.current) return;

        gsap.from(ref.current, {
            opacity: 0,
            delay: 0.5,
            y: 40,
            duration: 1,
            ease: "power3.in",
            scrollTrigger: {
                trigger: typeof scrollTrigger === "string" ? scrollTrigger : scrollTrigger?.current,
                start: "top center",
                // toggleActions: "restart reset restart reset", // Uncomment if you want scroll up actions
            }
        })
    }, [ref])

    return (
        <Paragraph ref={ref}>
            {about}
        </Paragraph>
    )
}

export default AboutParagraph
