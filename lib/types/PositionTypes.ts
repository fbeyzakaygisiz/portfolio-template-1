export type AbsPosition =  "top"
| "bottom"
| "right"
| "left"
| "center"
| "top-start"
| "top-end"
| "bottom-start"
| "bottom-end"
| "right-start"
| "right-end"
| "left-start"
| "left-end";

export type SpacingType =  "xxs"
| "xs"
| "sm"
| "md"
| "lg"
| "xl"
| string
| number

export const spacingTypes =  ["xxs"
, "xs"
, "sm"
, "md"
, "lg"
, "xl"
, 'string'
, 'number']

export interface IAbsPos {
    position?: AbsPosition;
    outside?: boolean;
    gap?: SpacingType;
  }
  