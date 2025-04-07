import React, { ReactNode, RefObject } from 'react'
import styled from 'styled-components'
import { MouseParallax, ScrollParallax } from 'react-just-parallax'
import absPositionMixin from '../mixins/absPositionMixin'
import { AbsPosition, IAbsPos } from '../types/PositionTypes'
type Props = {
    parallaxRef?:RefObject<HTMLElement>; 
    position?:AbsPosition,
    gap?:number | "string",
    children?:ReactNode,
    className?:string
}


const FloatingBoxContainer = styled.div<IAbsPos>`
    border: var(--border-separator);
    padding: 8px 12px;
    border-radius: 200px;
    display: flex;
    gap: var(--gap-sm);
    position: absolute;
    background-color: #0000002f;
    backdrop-filter: var(--blur-md);
    min-height: 40px;

    ${absPositionMixin}

`
const FloatingBox = ({
    parallaxRef,
    position="top-start",
    gap,
    children,
    className=""

}:Props) => {

    return <ScrollParallax isAbsolutelyPositioned>
        <MouseParallax parallaxContainerRef={parallaxRef}>
            <FloatingBoxContainer
                position={position}
                outside={true}
                gap={gap}
                className={className}
            >
                {children}
            </FloatingBoxContainer>
        </MouseParallax>
    </ScrollParallax>

}


export default FloatingBox