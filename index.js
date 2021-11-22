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
export const widthUnit = (width) => {
  return PixelRatio.roundToNearestPixel(width * deviceWidth / 10)
}

/**
 * 
 * @param {number} height 
 * @returns number
 * 此函数接收一个代表宽度值的数值，返回的是
 */
export const heightUnit = (height) => {
  return PixelRatio.roundToNearestPixel(height * deviceHeight / 10)
}

/**
 * 
 * @param {number} value 
 * @returns number
 * 此函数接收一个代表宽度值的数值，返回的是
 */
export const standardUnit = (value) => {
  return PixelRatio.roundToNearestPixel(value * 100/ PixelRatio.get())
}
