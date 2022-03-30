import { Container, PrimaryButton } from 'components/common';
import { navigate } from 'navigation/service';
import React from 'react'
import { Image, StyleSheet, Text } from 'react-native';
import { fonts } from 'utils/fonts';
import images from 'utils/images';
import I18n from 'utils/language/i18n';
import screenNames from 'utils/screenName';
import { fontWeights, sizes } from 'utils/sizes';

const LandingComponent = () => {
  return (
    <Container containerStyle={styles.container}>
      <Text style={styles.header}>{I18n.t('LANDING_HEADER_1')}</Text>
      <Text style={styles.header}>{I18n.t('LANDING_HEADER_2')}</Text>

      <Text style={styles.title}>{I18n.t('LANDING_TITLE')}</Text>

      <Image source={images.work} style={styles.image} resizeMode="contain"/>

      <PrimaryButton
        primary
        containerStyle={styles.button}
        title={I18n.t('LANDING_GET_STARTED')}
        onPress={() => navigate(screenNames.REGISTER_SCREEN)}
      />
    </Container>
  )
};

const styles = StyleSheet.create({
  container: {
    marginTop: sizes.size_70
  },
  header: {
    fontSize: sizes.size_30,
    fontWeight: fontWeights.fontWeight_800
  },
  title: {
    ...fonts.body3,
    marginTop: sizes.padding
  },
  image: {
    width: '100%',
    height: '60%',
    marginTop: sizes.padding
  },
  button: {
    marginTop: sizes.padding
  }
});

export default LandingComponent