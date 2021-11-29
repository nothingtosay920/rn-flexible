import { Dimensions, PixelRatio } from 'react-native'

// 获取设备屏幕大小
const deviceWidth = Dimensions.get('window').width
const deviceHeight = Dimensions.get('window').height

// 
let unit = deviceWidth / 10 
/**
 * 
 * @param {number} width 
 * @returns number
 * 此函数接收一个代表宽度值的数值，返回的是
 */
const widthUnit = (width) => PixelRatio.roundToNearestPixel(width * unit)

/**
 * 
 * @param {number} height 
 * @returns number
 * 此函数接收一个代表宽度值的数值，返回的是
 */
const heightUnit = (height) => PixelRatio.roundToNearestPixel(height * deviceHeight / 10)

// const setDefaultWidth = (value) => PixelRatio.roundToNearestPixel(value * 100 * scale)

const equalDeviceWidth = () => deviceWidth / 375

const setDefaultWidth = (...params) => parseParams(...params)

function parseParams(arg1, arg2, arg3) {
  if (!arg1) return 
  unit = arg1
  arg2 && parseEqualParams(arg2)
  arg3 && parseSectionParams(arg2, arg3)
}

// 375
function parseEqualParams(max) {
  unit = Math.min(unit, max) * equalDeviceWidth()
  return
}

function parseSectionParams(marjor, large) {
  if (deviceWidth > 1080) {
    unit = large
  } else if (deviceWidth > 540) {
    unit = marjor
  }
  return
}


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