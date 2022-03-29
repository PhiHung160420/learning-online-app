import { Container, RoleButton } from 'components/common';
import React from 'react'
import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import colors from 'utils/colors';
import { fonts } from 'utils/fonts';
import I18n from 'utils/language/i18n';
import { sizes } from 'utils/sizes';

const RegisterComponent = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.header}>{I18n.t('REGISTER_HEADER')}</Text>

      <View style={styles.roleCompoenent}>
        <RoleButton />
      </View>
    </SafeAreaView>
  )
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    paddingHorizontal: sizes.padding,
  },
  header: {
    textAlign: 'center',
    ...fonts.h1
  },
  roleCompoenent: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  }
});

export default RegisterComponent