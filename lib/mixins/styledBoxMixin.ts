import { css } from "styled-components";

import {IBoxStyle} from "../types/StylingTypes"
// Mixin for solid button
export const solidBox = css<IBoxStyle>`
  background-color: ${({ $variant }) => `var(--${$variant}-default)`};
  color: ${({ $variant }) => `var(--${$variant}-on-default)`};
  border-color: transparent;

  ${({ $stateful = true }) =>
    $stateful &&
    css<IBoxStyle>`
      &:hover {
        background-color: ${({ $variant }) => `var(--${$variant}-hover)`};
        color: ${({ $variant }) => `var(--${$variant}-on-hover)`};
      }

      &:focus {
        background-color: ${({ $variant }) => `var(--${$variant}-focus)`};
        color: ${({ $variant }) => `var(--${$variant}-on-focus)`};
      }

      &:disabled,
      &.disabled {
        background-color: ${({ $variant }) => `var(--${$variant}-disabled)`};
        color: ${({ $variant }) => `var(--${$variant}-on-disabled)`};
      }
    `}
`;

// Mixin for ghost button
export const ghostBox = css<IBoxStyle>`
  background-color: ${({ $variant }) => `var(--${$variant}-default-variant)`};
  color: ${({ $variant }) => `var(--${$variant}-on-default-variant)`};
  border: none !important;

  ${({ $stateful = true }) =>
    $stateful &&
    css<IBoxStyle>`
      &:hover {
        background-color: ${({ $variant }) => `var(--${$variant}-hover-variant)`};
        color: ${({ $variant }) => `var(--${$variant}-on-hover-variant)`};
      }

      &:focus {
        background-color: ${({ $variant }) => `var(--${$variant}-focus-variant)`};
        color: ${({ $variant }) => `var(--${$variant}-on-focus-variant)`};
      }

      &:disabled,
      &.disabled {
        background-color: ${({ $variant }) => `var(--${$variant}-disabled-variant)`};
        color: ${({ $variant }) => `var(--${$variant}-on-disabled-variant)`};
      }
    `}
`;

// Mixin for outlined button
export const outlinedBox = css<IBoxStyle>`
  background-color: transparent;
  border: var(--border-separator);
  color: ${({ $variant }) => `var(--${$variant}-on-default-$variant)`};

  ${({ $stateful = true }) =>
    $stateful &&
    css<IBoxStyle>`
      &:hover {
        color: ${({ $variant }) => `var(--${$variant}-on-hover-$variant)`};
        border-color: ${({ $variant }) => `var(--swatches-${$variant})`};
      }

      &:focus {
        color: ${({ $variant }) => `var(--${$variant}-on-focus-$variant)`};
        border-color: ${({ $variant }) => `var(--swatches-${$variant})`};
      }

      &:disabled,
      &.disabled {
        color: ${({ $variant }) => `var(--${$variant}-on-disabled-$variant)`};
        border-color: currentColor;
      }
    `}
`;

// Mixin for link button
export const linkBox = css<IBoxStyle>`
  ${outlinedBox};
  border-width: 0px;
  box-shadow: none !important;

`;

// Apply mixins based on the class
export const styledBoxClass = css<IBoxStyle>`
  &.solid {
    ${solidBox}
  }

  &.ghost {
    ${ghostBox}
  }

  &.outlined {
    ${outlinedBox}
  }

  &.link {
    ${linkBox}
    box-shadow: none !important;
  }
`;

// Apply mixins based on the prop
export const styledBoxProp = css<IBoxStyle>`
  ${({ $boxStyle }) => {
    switch ($boxStyle) {
      case "solid":
        return solidBox;
      case "ghost":
        return ghostBox;
      case "outlined":
        return outlinedBox;
      case "link":
        return linkBox;
      default:
        return solidBox; // Fallback to solid if no match
    }
  }}
`;
