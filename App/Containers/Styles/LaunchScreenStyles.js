import { StyleSheet } from 'react-native'
import { Metrics, ApplicationStyles, Fonts, Colors } from '../../Themes/'

export default StyleSheet.create({
  ...ApplicationStyles.screen,
  container: {
    flex: 1
  },
  contentContainer: {
    marginHorizontal: Metrics.scaledWidth(20),
    marginTop: Metrics.scaledHeight(30)
  },
  onboardingHeaderText: {
    fontFamily: Fonts.type.robotoBold,
    fontSize: 22,
    lineHeight: 26,
    color: Colors.lemonGreen,
    textAlign: 'center'
  },
  onboardingContainer: {
    marginTop: -Metrics.scaledHeight(80)
  },
  onboardingLogo: {
    resizeMode: 'contain',
    width: Metrics.scaledWidth(100),
    alignSelf: 'center'
  },
  onboardingIcon: {
    resizeMode: 'contain',
    alignSelf: 'center',
    height: Metrics.scaledHeight(100),
    marginBottom: Metrics.scaledHeight(30),
    marginTop: Metrics.scaledHeight(80)
  },
  onboardingTitleText: {
    fontFamily: Fonts.type.robotoMedium,
    fontSize: 16,
    lineHeight: 24,
    color: Colors.lemonBlack,
    marginHorizontal: Metrics.scaledWidth(20)
  },
  onboardingDescriptionText: {
    fontFamily: Fonts.type.robotoRegular,
    fontSize: 14,
    lineHeight: 21,
    color: Colors.lemonBlack,
    marginHorizontal: Metrics.scaledWidth(20)
  },
  nextText: {
    fontFamily: Fonts.type.robotoRegular,
    fontSize: 14,
    lineHeight: 21,
    color: Colors.lemonBlack,
  }
})
