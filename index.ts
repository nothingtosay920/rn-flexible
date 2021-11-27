import { Dimensions, PixelRatio } from 'react-native'

// 获取设备屏幕大小
const deviceWidth = Dimensions.get('window').width
const deviceHeight = Dimensions.get('window').height

/**
 * 
 * @param {number} width 
 * @returns number
 * 此函数接收一个代表宽度值的数值，返回的是
 */
export const widthUnit = (width: number): number => {
  return PixelRatio.roundToNearestPixel(width * deviceWidth / 10)
}

/**
 * 
 * @param {number} height 
 * @returns number
 * 此函数接收一个代表宽度值的数值，返回的是
 */
export const heightUnit = (height: number) => PixelRatio.roundToNearestPixel(height * deviceHeight / 10)

// const setDefaultWidth = (value) => PixelRatio.roundToNearestPixel(value * 100 * scale)

function parseParams(arg1, arg2, arg3) {
  
}

export function setDefaultWidth (setUnit: number): number
export function setDefaultWidth (minUnit: number, maxUnit: number): number
export function setDefaultWidth (defaultUnit: number, majorUnit: number, maxUnit: number):  number
export function setDefaultWidth (arg1?: number, arg2?: number, arg3?: number) {
  parseParams(arg1, arg2, arg3)
  return arg1 + arg2
}
setDefaultWidth(1, 2)


// setDefaultWidth<stringnumber>(1, 2, 3)
// min max 等比增长 ----小红书




// let defaultWidth = 750
// const scale = deviceWidth / defaultWidth

// /**
//  * 
//  * @param {number} 
//  * @param {`number`}  
//  * @returns {number} 
//  * 此函数接收一个代表宽度值的数值，返回的是
//  */
// export const standardUnit = (value) => PixelRatio.roundToNearestPixel(value * 100 * scale)


// export const setDefaultWidth = (value) => { 
//   if (value !== defaultWidth) {
//     defaultWidth = value
//   }
//   return defaultWidth
// }