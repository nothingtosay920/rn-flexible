declare module 'rn-flexbile' {
  export function setDefaultWidth (setUnit: number): number
  export function setDefaultWidth (minUnit: number, maxUnit: number): number
  export function setDefaultWidth (defaultUnit: number, majorUnit: number, maxUnit: number):  number
  export function widthUnit(width: number): number
}