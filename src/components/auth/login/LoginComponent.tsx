import { Container, IconLabelButton, InputField, PrimaryButton, TextButton } from 'components/common';
import { navigate } from 'navigation/service';
import React from 'react'
import { ImageBackground, ScrollView, StyleSheet, Text, View } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import colors from 'utils/colors';
import { fonts } from 'utils/fonts';
import icons from 'utils/icons';
import images from 'utils/images';
import I18n from 'utils/language/i18n';
import screenNames from 'utils/screenName';
import { fontWeights, sizes } from 'utils/sizes';

interface IProps {
  email: string,
  password: string,
  setEmail: (value: string) => void,
  setPassword: (value: string) => void,
  onPressLogin: () => void,
  onPressSignup: () => void
}

const LoginComponent = (props: IProps) => {
  const {
    email,
    password,
    setEmail,
    setPassword,
    onPressLogin,
    onPressSignup
  } = props;

  const insets = useSafeAreaInsets();

  return (
    <Container containerStyle={styles.container}>
      <View style={styles.background}>
        <ImageBackground 
          source={images.bg}
          imageStyle={[styles.bgImage, {marginTop: -insets.top}]}
        >
          <Text style={styles.header}>{I18n.t('LOGIN_HEADER')}</Text>
        </ImageBackground>
      </View>

      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        {/* Email */}
        <InputField 
          label={I18n.t('LOGIN_TEXTFIELD_1')}
          value={email}
          onChangeValue={email => setEmail(email)}
          keyboardType="email-address"
        />

        {/* Password */}
        <InputField 
          label={I18n.t('LOGIN_TEXTFIELD_2')}
          value={password}
          containerStyle={styles.input}
          isPassword
          onChangeValue={password => setPassword(password)}
        />

        {/* Login Button */}
        <PrimaryButton 
          title={I18n.t('LOGIN_BUTTON')}
          primary
          containerStyle={styles.marginTop}
          buttonStyles={styles.buttonLogin}
          onPress={onPressLogin}
        />

        {/* Or Login With */}
        <Text style={styles.orLoginWith}>{I18n.t('LOGIN_BUTTON_OPTION')}</Text>

        <View style={styles.socialLogin}>
          {/* Login With Google */}
          <IconLabelButton 
            icon={icons.google}
            label={I18n.t('LOGIN_GOOGLE')}
            containerStyle={styles.loginWithSocial}
            onPress={() => {}}
          />

          {/* Login With Facebook */}
          <IconLabelButton 
            icon={icons.facebook}
            label={I18n.t('LOGIN_FACEBOOK')}
            containerStyle={styles.loginWithSocial}
            onPress={() => {}}
          />
        </View>

        <View style={styles.signupComponent}>
          <Text style={styles.newUserText}>{I18n.t('LOGIN_NEW_USER')}</Text>
          <TextButton 
            label={I18n.t('LOGIN_SIGN_UP')}
            buttonStyle={styles.signupButton}
            labelStyle={styles.signupLabel}
            onPress={() => navigate(screenNames.REGISTER_SCREEN)}
          />
        </View>
      </ScrollView>
    </Container>
  )
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 0,
  },
  content: {
    paddingHorizontal: sizes.padding
  },
  background: {
    height: sizes.size_250,
  },
  header: {
    ...fonts.h1,
    textAlign: 'center',
  },
  bgImage: {
    width: '100%',
    height: sizes.size_250,
  },
  input: {
    marginTop: sizes.size_30
  },
  marginTop: {
    marginTop: sizes.padding * 2
  },
  buttonLogin: {
    borderRadius: sizes.size_30,
    paddingVertical: sizes.size_15
  },
  orLoginWith: {
    color: colors.black,
    marginTop: sizes.radius,
    textAlign: 'center'
  },
  socialLogin: {
    flexDirection: 'row',
    marginTop: sizes.padding,
    justifyContent: 'space-between'
  },
  loginWithSocial: {
    width: sizes.size_155,
    paddingVertical: sizes.radius,
    backgroundColor: colors.gray10,
    borderRadius: sizes.size_25
  },
  signupComponent: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: sizes.padding
  },
  newUserText: {
    color: colors.gray30
  },
  signupButton: {
    backgroundColor: colors.white,
    height: sizes.size_30,
    paddingHorizontal: 0,
    marginLeft: sizes.base
  },
  signupLabel: {
    color: colors.primary,
    fontWeight: fontWeights.fontWeight_600,
    ...fonts.h3
  }
});

export default LoginComponent