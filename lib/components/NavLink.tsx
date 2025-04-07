import styled from 'styled-components';
import { dt } from '../mixins/layoutMixins';
import { HTMLAttributes, ReactNode } from 'react';

export interface INavLink  {
    label: string;
    url: string;
    onClick?: React.MouseEventHandler<HTMLDivElement>;
    className?: string;
    children?:ReactNode;
    isCta?:boolean;
}

const Container = styled.div<HTMLAttributes<HTMLDivElement>>`
  padding: 12px 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: var(--text-secondary);
  font-size: var(--fs-h1);
  opacity: 1;
  transition: color 0.3s ease;
  font-family: var(--font-secondary);

  a {
    position: relative;
    transition: color 0.3s ease, text-shadow 0.3s ease;
  }

  &:hover {
    color: var(--text-focus);
    
    a {
    text-shadow: 
        -1px 0 1px var(--background-primary),
        0 1px 1px var(--background-primary),
        1px 0 1px var(--background-primary),
        0 -1px 1px  var(--background-primary),
        0 0 20px var(--primary-300),
        0 0 50px var(--primary-400),
        0 0 70px var(--primary-400);
    /* This creates both the outline and neon effect */
    }
  }



  ${dt`
    font-size: var(--fs-p-md);

      &:hover {
        
        a {
        text-shadow: 
            -1px 0 1px var(--background-primary),
            0 1px 1px var(--background-primary),
            1px 0 1px var(--background-primary),
            0 -1px 1px  var(--background-primary),
            0 0 12px var(--primary-300)
        }
    }
  `}
`;

const NavLink = ({
    label,
    url,
    onClick,
    className,
    children
}: INavLink) => {
    return <Container 
        onClick={onClick}
        className={className}
        >
        <a
            href={url}
        >{
           label }</a>

           {children}
    </Container>
}

export default NavLink