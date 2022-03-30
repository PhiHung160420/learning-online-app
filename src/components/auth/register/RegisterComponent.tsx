import { Container, IconLabelButton, InputField, PrimaryButton, RoleButton, TextButton } from 'components/common';
import { navigate } from 'navigation/service';
import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import colors from 'utils/colors';
import { fonts } from 'utils/fonts';
import icons from 'utils/icons';
import I18n from 'utils/language/i18n';
import screenNames from 'utils/screenName';
import { fontWeights, sizes } from 'utils/sizes';

interface IProps {
  accountRole: string,
  username: string,
  email: string,
  password: string,
  setUsername: (username: string) => void,
  setEmail: (email: string) => void,
  setPassword: (password: string) => void,
  onSelectRole: (role: string) => void
}

const RegisterComponent = (props: IProps) => {
  const {
    username,
    email,
    password,
    setUsername,
    setEmail,
    setPassword,
    accountRole, 
    onSelectRole} = props;
  return (
    <Container
      isHeader
      headerTitle={I18n.t('REGISTER_HEADER')}
      headerTitleStyle={styles.header}
      containerStyle={styles.container}
    >
      <View style={styles.roleComponent}>
        <RoleButton 
          role={I18n.t('REGISTER_STUDENT')} 
          isSelected={accountRole === 'STUDENT'}
          onPress={() => onSelectRole('STUDENT')}
        />
        <RoleButton 
          role={I18n.t('REGISTER_TUTOR')}
          isSelected={accountRole === 'TUTOR'}
          onPress={() => onSelectRole('TUTOR')}
        />
      </View>

      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        <InputField
          value={username}
          label={I18n.t('REGISTER_USERNAME')}
          onChangeValue={(username) => setUsername(username)}
        />

        <InputField
          value={email}
          label={I18n.t('REGISTER_EMAIL')}
          onChangeValue={(email) => setEmail(email)}
          containerStyle={styles.marginTop}
          keyboardType="email-address"
        />

        <InputField
          value={password}
          label={I18n.t('REGISTER_PASSWORD')}
          isPassword
          containerStyle={styles.marginTop}
          onChangeValue={(password) => setPassword(password)}
        />

        <PrimaryButton 
          title={I18n.t('REGISTER_CREATE_ACCOUNT')}
          buttonStyles={styles.createAccount}
          primary
          onPress={() => navigate(screenNames.LAYOUT_SCREEN)}
        />

        {/* Or Login With */}
        <Text style={styles.orLoginWith}>{I18n.t('REGISTER_OR_SIGNUP_WITH')}</Text>

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
          <Text style={styles.newUserText}>{I18n.t('REGISTER_ALREADY_USER')}</Text>
          <TextButton 
            label={I18n.t('REGISTER_LOGIN_BUTTON')}
            buttonStyle={styles.signupButton}
            labelStyle={styles.signupLabel}
            onPress={() => navigate(screenNames.LOGIN_SCREEN)}
          />
        </View>
      </ScrollView>
    </Container>
  )
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: sizes.padding,
  },
  header: {
    textAlign: 'center',
    ...fonts.h1
  },
  roleComponent: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: sizes.padding
  },
  content: {
    marginTop: sizes.size_40,
  },
  marginTop: {
    marginTop: sizes.padding
  },
  createAccount: {
    borderRadius: sizes.size_25,
    marginTop: sizes.padding * 2,
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

export default RegisterComponent