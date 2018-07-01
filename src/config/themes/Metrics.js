import { Dimensions, Platform, PixelRatio } from 'react-native';

const { width, height } = Dimensions.get('window');

// Used via Metrics.baseMargin

const screen = {
  screenWidth: width < height ? width : height,
  screenHeight: width < height ? height : width,
};

const scale = screen.screenWidth / 375;

const normalize = (size) => {
  if (Platform.OS === 'ios') {
    return Math.round(PixelRatio.roundToNearestPixel(size) * scale);
  }
  return Math.round(PixelRatio.roundToNearestPixel(size) * scale) - 2;
};

const metrics = {
  normalize,
  marginHorizontal: 10,
  marginVertical: 10,
  section: 25,
  baseMargin: 10,
  doubleBaseMargin: 20,
  smallMargin: 5,
  doubleSection: 50,
  horizontalLineHeight: 1,
  searchBarHeight: 30,
  screenWidth: screen.screenWidth,
  screenHeight: screen.screenHeight,
  navBarHeight: Platform.OS === 'ios' ? 64 : 54,
  buttonRadius: 4,
  icons: {
    tiny: 15,
    small: 20,
    medium: 30,
    large: 45,
    xl: 50,
  },
  images: {
    small: 20,
    medium: 40,
    large: 60,
    logo: 200,
  },
  isIphoneX: Platform.OS === 'ios' && screen.screenHeight === 812,
};

export default metrics;
