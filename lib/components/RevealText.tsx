import { ReactNode, useRef } from "react"
import styled from "styled-components"
import { useGSAP } from '@gsap/react'
import gsap from "gsap"
import { ScrollTrigger } from 'gsap/all'

import SplitType from 'split-type'

gsap.registerPlugin(ScrollTrigger)

interface IRevealText {
    id?:string,
    delay?:number;
    className?:string;
    children?:ReactNode;
}

const RevealTextContainer = styled.div`
    width: 100%;
    text-align: center;
    font-size: 80px;
    font-weight: 900;

     & div {
        font-family: inherit;
     }

`

const RevealText = ({
    id,
    delay,
    className="",
    children
}:IRevealText) => {
    const ref = useRef(null)

    useGSAP(()=> {

        if(!ref.current) return;
        const split = new SplitType( ref.current, { types: 'words,chars' })

        gsap.from(split.chars , {
            y: 64,
            opacity:0,
            stagger:0.05,
            duration: 1,
            ease: "back",
            delay:delay
        })

        
    } , [children ,ref] )
    return <RevealTextContainer id={id} className={className} ref={ref}>
        {children}
    </RevealTextContainer>
}

export default RevealText