import { Dimensions, PixelRatio } from 'react-native'

// 获取设备屏幕大小
const deviceWidth = Dimensions.get('window').width
const deviceHeight = Dimensions.get('window').height

// 
let baseUnit = deviceWidth / 10 
/**
 * 
 * @param {number} width 
 * @returns number
 * 此函数接收一个代表宽度值的数值，返回的是
 */
export const widthUnit = (width) => PixelRatio.roundToNearestPixel(width * deviceHeight / 10)

/**
 * 
 * @param {number} height 
 * @returns number
 * 此函数接收一个代表宽度值的数值，返回的是
 */
export const heightUnit = (height) => PixelRatio.roundToNearestPixel(height * deviceHeight / 10)

export const unit = () =>  PixelRatio.roundToNearestPixel(width * baseUnit)

export const setDefaultWidth = (...params) => parseParams(...params)


const equalDeviceWidth = () => deviceWidth / 375

function parseParams(arg1, arg2, arg3) {
  if (!arg1) return 
  baseUnit = arg1
  arg2 && parseEqualParams(arg2)
  arg3 && parseSectionParams(arg2, arg3)
}

function parseEqualParams(max) {
  baseUnit = Math.min(baseUnit, max) * equalDeviceWidth()
  return
}

function parseSectionParams(marjor, large) {
  if (deviceWidth > 1080) {
    baseUnit = large
  } else if (deviceWidth > 540) {
    baseUnit = marjor
  }
  return
}