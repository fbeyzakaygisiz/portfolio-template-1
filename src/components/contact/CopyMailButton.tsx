import { forwardRef, RefObject, useRef } from 'react'
import Icon from '../../../lib/components/Icon'
import styled from 'styled-components'
import { solidBox } from '../../../lib/mixins/styledBoxMixin'
import { copyTextToClipboard } from "../../../lib/functions/clipboard"
import { IBoxStyle } from '../../../lib/types/StylingTypes'
import gsap from 'gsap'

type Props = {
    id?:string;
    mail?: string;
    ref?: RefObject<HTMLDivElement> // Make ref optional
}

const Container = styled.div`
    position: relative;
    width: 100%;
    margin-bottom: 12px;
`

const CopyButton = styled.div<IBoxStyle>`
    height: var(--button-h-md, 40px);
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-radius: 100px;
    padding: 12px 12px 12px 20px;
    gap: var(--gap-xxs);

    ${solidBox}
`

const Tooltip = styled.div`
    display: none;
    position: absolute;
    top: calc(100%);
    left: 50%;
    right: 50%;
    transform: translateX(-50%);
    padding: 12px 20px;
    border-radius: 100px;
    gap: var(--gap-xs);
    white-space: nowrap;
    border: var(--border-separator);
    width: fit-content;
    background-color: var(--background-secondary);
`

const CopyMailButton = forwardRef<HTMLDivElement, Props>(({
    mail,
    id
}: Props, forwardedRef) => {

    const tooltipRef = useRef<HTMLDivElement>(null);

    const animateTooltip = () => {
        const tl = gsap.timeline();
        tl.to(tooltipRef.current, {
            display: "flex",
            y: 20,
            duration: 0.5
        })

        tl.to(tooltipRef.current, {
            display: "none",
            delay: 1.5
        })

        tl.to(tooltipRef.current, {
            y: 0
        })
    }

    const handleCopy = async () => {
        if (typeof mail !== "string") return;
        const isCopied = await copyTextToClipboard(mail);

        if (isCopied) {
            animateTooltip()
        }
    };

    return (
        <Container ref={forwardedRef} id={id} onClick={handleCopy}>
            <CopyButton $variant={"neutral"}>
                <Icon icon={"mail"} />
                <p className='w-full text-ellipsis font-medium'>{mail}</p>
                <Icon icon={"link"} />
            </CopyButton>

            <Tooltip ref={tooltipRef}>
                Email copied <Icon icon={"check"} />
            </Tooltip>
        </Container>
    );
});

export default CopyMailButton
