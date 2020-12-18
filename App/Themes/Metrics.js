import { Dimensions, Platform } from 'react-native'

const { width, height } = Dimensions.get('window')
const designWidth = 360
const desighHeight = 720

// Used via Metrics.baseMargin
const metrics = {
	marginHorizontal: 10,
	marginVertical: 10,
	section: 25,
	baseMargin: 10,
	doubleBaseMargin: 20,
	smallMargin: 5,
	doubleSection: 50,
	horizontalLineHeight: 1,
	headerHeight: 64 * (height / desighHeight),
	screenWidth: width < height ? width : height,
	screenHeight: width < height ? height : width,
	screenHeightWithHeader: height - 64 * (height / desighHeight),
	scaledWidth: (w) => {
		return w * (width / designWidth)
	},
	scaledHeight: (h) => {
		return h * (height / desighHeight)
	},
	navBarHeight: Platform.OS === 'ios' ? 64 : 54,
	buttonRadius: 4,
	icons: {
		tiny: 15,
		small: 20,
		medium: 30,
		large: 45,
		xl: 50
	},
	images: {
		small: 20,
		medium: 40,
		large: 60,
		logo: 200
	}
}

export default metrics
