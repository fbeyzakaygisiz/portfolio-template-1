import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'
import { SplitText } from "gsap-trial/SplitText"
import React, { ReactNode, useRef } from 'react'
import styled from 'styled-components'

gsap.registerPlugin(SplitText)
gsap.registerPlugin(ScrollTrigger)

type Props = {
    id: string;
    children?: ReactNode;
    highlightColor?: string;
    duration?: number;
};

const StyledP = styled.p`
    color: var(--text-tertiary);
    overflow: hidden;
`;

function HighlightedParagraph({
    id,
    children,
    highlightColor = "var(--text-primary)",
    duration = 1
}: Props) {
    const paragraphRef = useRef<HTMLParagraphElement>(null);

    useGSAP(() => {
        if (!paragraphRef.current) return;

        // Split the text inside the paragraph
        const split = new SplitText(paragraphRef.current, { type: "words, chars" });

        gsap.to(split.chars, {
            duration: duration,
            color: highlightColor,
            stagger: 0.05,

            ease:"back",
            scrollTrigger: {
              trigger: paragraphRef.current,
              start: "top 40%",
              
          }


        });

    }, [children, id]);

    return <StyledP ref={paragraphRef} id={id}>{children}</StyledP>;
}

export default HighlightedParagraph;
