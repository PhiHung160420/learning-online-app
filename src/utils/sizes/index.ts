import { PixelRatio, Dimensions } from 'react-native';
import { Platform } from 'react-native';

const { width, height } = Dimensions.get('window');
const realWidth = height > width ? width : height;
const realHeight = width > height ? width : height;

const isTablet = () => {
	let pixelDensity = PixelRatio.get();
	let adjustedWidth = width * pixelDensity;
	let adjustedHeight = height * pixelDensity;
	if (pixelDensity < 2 && (adjustedWidth >= 1000 || adjustedHeight >= 1000)) {
		return true;
	} else {
		return (
			pixelDensity === 2 && (adjustedWidth >= 1920 || adjustedHeight >= 1920)
		);
	}
};

const size = (value: number) => {
	let divider = isTablet() ? 600 : 375;
	return Math.round((value * realWidth) / divider);
};

export const isIOS = Platform.OS === 'ios';
export const isAndroid = Platform.OS === 'android';

export function isIphoneXorAbove() {
	const dimen = Dimensions.get('window');
	return (
		Platform.OS === 'ios' &&
    !Platform.isPad &&
    !Platform.isTVOS &&
    (dimen.height === 812 ||
			dimen.width === 812 ||
			dimen.height === 896 ||
			dimen.width === 896)
	);
}

export const deviceWidth = realWidth;
export const deviceHeight = realHeight;

export const sizes = {
  // global sizes
  base: 8,
  font: 14,
  radius: 12,
  padding: 24,

  // font sizes
  largeTitle: 40,
  h1: 30,
  h2: 22,
  h3: 16,
  h4: 14,
  h5: 12,
  body1: 30,
  body2: 22,
  body3: 16,
  body4: 14,
  body5: 12,
};

export type TFontWeight = 'normal' | 'bold' | '100' | '200' | '300' | '400' | '500' | '600' | '700' | '800' | '900' | undefined;

export const fontWeights = {
	fontWeight_100: '100' as TFontWeight,
	fontWeight_200: '200' as TFontWeight,
	fontWeight_300: '300' as TFontWeight,
	fontWeight_400: '400' as TFontWeight,
	fontWeight_500: '500' as TFontWeight,
	fontWeight_600: '600' as TFontWeight,
	fontWeight_700: '700' as TFontWeight,
	fontWeight_800: '800' as TFontWeight,
	fontWeight_900: '900' as TFontWeight
};