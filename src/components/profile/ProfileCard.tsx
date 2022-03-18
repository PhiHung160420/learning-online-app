import { ProgressBar, TextButton } from 'components/common'
import React from 'react'
import { View, TouchableOpacity, Image, Text, StyleSheet } from 'react-native'
import { useAppSelector } from 'store'
import colors from 'utils/colors'
import { fonts } from 'utils/fonts'
import icons from 'utils/icons'
import images from 'utils/images'
import I18n from 'utils/language/i18n'
import { sizes } from 'utils/sizes'

const ProfileCard = () => {
  const appTheme = useAppSelector(state => state?.theme?.appTheme);

  return (
    <View style={styles(appTheme).profileCard}>
      <TouchableOpacity style={styles().ImageContainer}>
        <Image source={images.profile} style={styles().imageProfile} resizeMode="contain"/>

        <View style={styles().camara}>
          <View style={styles().camaraContainer}>
            <Image source={icons.camera} style={styles().camaraIcon} resizeMode="contain"/>
          </View>
        </View>
      </TouchableOpacity>

      <View style={styles().profileDetail}>
        <Text style={styles().profileName}>{I18n.t('PROFILE_SCREEN_INFO_NAME')}</Text>

        <Text style={styles().profileJob}>{I18n.t('PROFILE_SCREEN_INFO_JOB')}</Text>
        
        <ProgressBar 
          progress="50%" 
          progressStyle={styles().progress}
          progressName={I18n.t('PROFILE_SCREEN_OVERALL_PROGRESS')}
        />

        <TextButton 
          label={`+ ${I18n.t('PROFILE_SCREEN_BECOME_MEMBER')}`}
          buttonStyle={styles(appTheme).memberButton}
          labelStyle={styles(appTheme).memberButtonLabel}
          onPress={() => {}}
        />
      </View>
    </View>
  )
};

const styles = (appTheme?: any) => StyleSheet.create({
  profileCard: {
    flexDirection: 'row',
    marginTop: sizes.padding,
    paddingHorizontal: sizes.radius,
    paddingVertical: sizes.size_20,
    borderRadius: sizes.radius,
    backgroundColor: appTheme?.backgroundColor2,
  },
  ImageContainer: {
    width: sizes.size_80,
    height: sizes.size_80
  },
  imageProfile: {
    width: '100%',
    height: '100%',
    borderRadius: sizes.size_40,
    borderWidth: sizes.size_1,
    borderColor: colors.white
  },
  camara: {
    position: 'absolute',
    justifyContent: 'flex-end',
    alignItems: 'center',
    width: '100%',
    height: '100%',
    bottom: -sizes.size_10
  },
  camaraContainer: {
    width: sizes.size_30,
    height: sizes.size_30,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: sizes.size_15,
    backgroundColor: colors.primary
  },
  camaraIcon: {
    width: sizes.size_17,
    height: sizes.size_17
  },
  profileDetail: {
    flex: 1,
    marginLeft: sizes.radius,
    alignItems: 'flex-start'
  },
  profileName: {
    color: colors.white,
    ...fonts.h2
  },
  profileJob: {
    color: colors.white,
    ...fonts.body4
  },
  progress: {
    marginTop: sizes.radius
  },
  memberButton: {
    height: sizes.size_35,
    marginTop: sizes.padding,
    paddingHorizontal: sizes.size_20,
    backgroundColor: appTheme?.backgroundColor4
  },
  memberButtonLabel: {
    color: appTheme?.textColor2
  }
});

export default ProfileCard