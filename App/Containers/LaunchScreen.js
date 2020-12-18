import React, { Component, useState } from 'react'
import { SafeAreaView, View, Text, Image } from 'react-native'
import SplashScreen from 'react-native-splash-screen'
import Onboarding from 'react-native-onboarding-swiper'
import * as Animatable from 'react-native-animatable'
import I18n from '../I18n'

import { Images } from '../Themes'

import styles from './Styles/LaunchScreenStyles'
import { useEffect } from 'react'

export default class LaunchScreen extends Component {
  render() {
		return <Content props={this.props} />
	}
}

const Content = ({ props }) => {
  useEffect(() => {
    SplashScreen.hide()
  }, [])

  const renderIcon = (icon) => {
    return (
      <View style={styles.contentContainer}>
        <Animatable.View animation={'zoomIn'} duration={2000}>
          <Image style={styles.onboardingLogo} source={Images.logo} />
        </Animatable.View>
        <Image style={styles.onboardingIcon} source={icon} />
      </View>
    )
  }

  return (
    <SafeAreaView style={styles.container}>
      <Onboarding
        pages={[
          {
            backgroundColor: '#fff',
            image: renderIcon(Images.ic_onboarding_1),
            title: I18n.t('OnboardingTitle0'),
            subtitle: I18n.t('OnboardingDescription0')
          },
          {
            backgroundColor: '#fff',
            image: renderIcon(Images.ic_onboarding_3),
            title: I18n.t('OnboardingTitle1'),
            subtitle: I18n.t('OnboardingDescription1')
          },
          {
            backgroundColor: '#fff',
            image: renderIcon(Images.ic_onboarding_2),
            title: I18n.t('OnboardingTitle2'),
            subtitle: I18n.t('OnboardingDescription2')
          },
          {
            backgroundColor: '#fff',
            image: renderIcon(Images.ic_onboarding_4),
            title: I18n.t('OnboardingTitle3'),
            subtitle: I18n.t('OnboardingDescription3')
          }
        ]}
        nextLabel={
          <Animatable.View animation={'fadeInUp'} duration={1000}>
            <Text style={styles.nextText}>{I18n.t('Next')}</Text>
          </Animatable.View>
        }
        skipLabel={
          <Animatable.View animation={'fadeInUp'} duration={1000}>
            <Text style={styles.nextText}>{I18n.t('Skip')}</Text>
          </Animatable.View>
        }
        bottomBarHighlight={false}
        allowFontScaling={false}
        containerStyles={styles.onboardingContainer}
        titleStyles={styles.onboardingTitleText}
        subTitleStyles={styles.onboardingDescriptionText}
        transitionAnimationDuration={100}
      />
    </SafeAreaView>
  )
}
