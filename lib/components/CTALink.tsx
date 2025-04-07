import NavLink, { INavLink } from "./NavLink"
import styled from 'styled-components'
import {solidBox} from "../mixins/styledBoxMixin"
import { BoxVariant, IBoxStyle } from '../types/StylingTypes'
import { dt } from '../mixins/layoutMixins'

export interface ICTALink extends INavLink, IBoxStyle{
    $variant?: BoxVariant
}


const StyledLink = styled(NavLink)<ICTALink>`
    border-radius: var(--br-md);
    font-weight: 600;
    ${solidBox}

    &:hover{
        color: var(--primary-on-hover);

        a{
            text-shadow: none;
            color: currentColor;
        }
    }

    ${dt`
        margin-top:0;
    `}

`
const CTALink = ({
    label,
    url,
    className,
    onClick

}: ICTALink) => {


  return (
    <StyledLink
        label={label}
        url={url}
        className={className}
        onClick={onClick}
        $variant={"primary"}
    >

    </StyledLink>
  )
}

export default CTALink