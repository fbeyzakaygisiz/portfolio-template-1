import { css } from "styled-components";
import type { AbsPosition, IAbsPos } from "../types/PositionTypes"; // Adjust the import path as needed

const absPositionMixin = ({ position, outside, gap = "0px" }: IAbsPos) => {
  // Fallback to "top" if no position is provided.
  const pos: AbsPosition = position || "top";
  // Convert gap to a string with "px" if it's a number.
  const gapStr: string = typeof gap === "number" ? `${gap}px` : gap;

  const getPositionStyles = (pos: AbsPosition): string => {
    switch (pos) {
      case "top":
        return `
          ${outside ? `bottom: calc(100% + ${gapStr})` : `top: ${gapStr}`};
          left: 50%;
          transform: translateX(-50%);
        `;
      case "bottom":
        return `
          ${outside ? `top: calc(100% + ${gapStr})` : `bottom: ${gapStr}`};
          left: 50%;
          transform: translateX(-50%);
        `;
      case "right":
        return `
          top: 50%;
          transform: translateY(-50%);
          ${outside ? `left: calc(100% + ${gapStr})` : `right: ${gapStr}`};
        `;
      case "left":
        return `
          top: 50%;
          transform: translateY(-50%);
          ${outside ? `right: calc(100% + ${gapStr})` : `left: ${gapStr}`};
        `;
      case "center":
        return `
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
        `;
      case "top-start":
        return `
          ${outside ? `bottom: calc(100% + ${gapStr})` : `top: ${gapStr}`};
          left: 0;
        `;
      case "top-end":
        return `
          ${outside ? `bottom: calc(100% + ${gapStr})` : `top: ${gapStr}`};
          right: 0;
        `;
      case "bottom-start":
        return `
          ${outside ? `top: calc(100% + ${gapStr})` : `bottom: ${gapStr}`};
          left: 0;
        `;
      case "bottom-end":
        return `
          ${outside ? `top: calc(100% + ${gapStr})` : `bottom: ${gapStr}`};
          right: 0;
        `;
      case "right-start":
        return `
          ${outside ? `left: calc(100% + ${gapStr})` : `right: ${gapStr}`};
          top: 0;
        `;
      case "right-end":
        return `
          ${outside ? `left: calc(100% + ${gapStr})` : `right: ${gapStr}`};
          bottom: 0;
        `;
      case "left-start":
        return `
          ${outside ? `right: calc(100% + ${gapStr})` : `left: ${gapStr}`};
          top: 0;
        `;
      case "left-end":
        return `
          ${outside ? `right: calc(100% + ${gapStr})` : `left: ${gapStr}`};
          bottom: 0;
        `;
      default:
        return `
          top: 0;
          left: 0;
        `;
    }
  };

  return css`
    ${getPositionStyles(pos)}
  `;
};

export default absPositionMixin;
