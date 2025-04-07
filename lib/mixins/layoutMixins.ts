import { css } from 'styled-components';

// Define breakpoints dynamically using CSS variables
const breakpoints = {
  mb: "364px",
  tb: "764px",
  dt: "1024px",
  lg: "1200px"
} as const; // 'as const' makes the breakpoints object immutable and ensures correct typing

// Mixin generator function
const mediaQuery = (size: keyof typeof breakpoints) => (
  ...args: [TemplateStringsArray, ...any[]]
): ReturnType<typeof css> => css`
  @media (min-width: ${breakpoints[size]}) {
    ${css(...args)};
  }
`;

// Define specific breakpoints
export const mb = mediaQuery("mb");
export const tb = mediaQuery("tb");
export const dt = mediaQuery("dt");
export const lg = mediaQuery("lg");



// Define the responsiveMargin mixin
export const responsiveMargin = () => css`
  padding-right: var(--layout-margin-mb);
  padding-left: var(--layout-margin-mb);

  ${mb`
    padding-right: var(--layout-margin-mb);
    padding-left: var(--layout-margin-mb);
  `}
  
  ${tb`
    padding-right: var(--layout-margin-tb);
    padding-left: var(--layout-margin-tb);
  `}
  
  ${dt`
    padding-right: var(--layout-margin-dt);
    padding-left: var(--layout-margin-dt);
  `}
  
  ${lg`
    padding-right: var(--layout-margin-lg);
    padding-left: var(--layout-margin-lg);
  `}
`;

