import { Dimensions, PixelRatio } from 'react-native'

const deviceWidth = Dimensions.get('window').width
const deviceHeight = Dimensions.get('window').height


export const widthUnit = (width) => {
  return PixelRatio.roundToNearestPixel(width * deviceWidth / 10)
}

export const heightUnit = (height) => {
  return PixelRatio.roundToNearestPixel(height * deviceHeight / 10)
}

export const standardUnit = (value) => {
  return PixelRatio.roundToNearestPixel(value * 100/ PixelRatio.get())
}