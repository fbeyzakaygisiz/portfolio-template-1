import { InputSizes } from "./InputTypes";
import { IBoxStyle } from "./StylingTypes";
import {SupportedIconNames} from "./IconTypes"
import { SupportedLinkTypes } from "./LinkTypes";
export interface IButton extends IBoxStyle, React.ButtonHTMLAttributes<HTMLButtonElement> {
    size?: InputSizes;
    head?: React.ReactNode;
    tail?: React.ReactNode;
    className?: string;
    fw?: boolean;

    $size?: InputSizes;
    $fw?: boolean;
    children?: React.ReactNode;
}
export interface IIconButton extends IBoxStyle, React.ButtonHTMLAttributes<HTMLButtonElement> {
    size?: InputSizes;
    className?: string;
    icon?: SupportedIconNames | string | SupportedLinkTypes;
    children?: React.ReactNode;
    $size?: InputSizes;
}
