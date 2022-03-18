import { LineDivider, ProfileButton } from 'components/common';
import React from 'react'
import { StyleSheet, View } from 'react-native';
import colors from 'utils/colors';
import data from 'utils/data';
import icons from 'utils/icons';
import I18n from 'utils/language/i18n';
import { sizes } from 'utils/sizes';

const ProfileSectionMain = () => {
  return (
    <View style={styles.container}>
      <ProfileButton 
        icon={icons.profile}
        label={I18n.t('PROFILE_SCREEN_FIELD_NAME')}
        value={data?.profile?.name}
        onPress={() => {}}
      />

      <LineDivider />

      <ProfileButton 
        icon={icons.email}
        label={I18n.t('PROFILE_SCREEN_FIELD_EMAIL')}
        value={data?.profile?.email}
        onPress={() => {}}
      />

      <LineDivider />

      <ProfileButton 
        icon={icons.password}
        label={I18n.t('PROFILE_SCREEN_FIELD_PASSWORD')}
        value={I18n.t('PROFILE_SCREEN_FIELD_PASSWORD_UPDATED')}
        onPress={() => {}}
      />

      <LineDivider />
      
      <ProfileButton 
        icon={icons.call}
        label={I18n.t('PROFILE_SCREEN_FIELD_CONTACT')}
        value={data?.profile?.phone}
        onPress={() => {}}
      />
    </View>
  )
};

const styles = StyleSheet.create({
  container: {
    marginTop: sizes.padding,
    paddingHorizontal: sizes.padding,
    borderWidth: sizes.size_1,
    borderRadius: sizes.radius,
    borderColor: colors.gray20,
  }
});

export default ProfileSectionMain