
export type ColorGroup = 'primary' | 'secondary' | 'neutral' | 'success' | 'warning' | 'danger' | 'background' | 'text';
export type MainColorGroup = 'primary' | 'secondary' | 'neutral' | 'success' | 'warning' | 'danger' ;

export type TextColorVariant = 'primary' | 'secondary' | 'tertiary' | 'success' | 'warning' | 'danger'  | 'focus' | 'disabled';


export type BoxStates = 'default' | 'hover' | 'focus' | 'disabled'
export const colorGroups: ColorGroup[] = [
    'primary',
    'secondary',
    'neutral',
    'success',
    'warning',
    'danger',
    'background',
    'text'
];
export const mainColorGroups: MainColorGroup[] = [
    'primary',
    'secondary',
    'neutral',
    'success',
    'warning',
    'danger'
];


export const mainColorValues = [100, 200, 300, 400, 500, 600, 700, 800, 900]
export const states: BoxStates[] = ['default' , 'hover' , 'focus' , 'disabled']


export type BoxStyle = 'solid' | 'ghost' | 'outlined' | 'link';
export type BoxVariant = "primary" | "secondary" | "neutral" | "success" | "warning" | "danger";

export interface IBoxStyle {
  $variant?: BoxVariant;
  $boxStyle?: BoxStyle;
  variant?: BoxVariant;
  boxStyle?: BoxStyle;
  $stateful?: boolean;
}
