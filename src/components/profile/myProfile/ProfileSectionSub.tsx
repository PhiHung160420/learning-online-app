import { LineDivider, ProfileButton } from 'components/common';
import { navigate } from 'navigation/service';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import colors from 'utils/colors';
import icons from 'utils/icons';
import I18n from 'utils/language/i18n';
import screenNames from 'utils/screenName';
import { sizes } from 'utils/sizes';

interface IProps {
  newCourseNoti: boolean,
  studyReminder: boolean,
  onChangeCourseNoti: (value: boolean) => void,
  onChangeStudyReminder: (value: boolean) => void,
}

const ProfileSectionSub = (props: IProps) => {
  const {
    newCourseNoti,
    studyReminder,
    onChangeCourseNoti,
    onChangeStudyReminder
  } = props;

  return (
    <View style={styles.container}>
      <ProfileButton 
        icon={icons.star_1}
        value={I18n.t('PROFILE_SCREEN_FIELD_PAGES')}
        onPress={() => {}}
      />

      <LineDivider />

      <ProfileButton 
        icon={icons.new_icon}
        value={I18n.t('PROFILE_SCREEN_FIELD_NOTI')}
        isRadioButton
        sltRadioButton={newCourseNoti}
        onPressRadioButton={() => onChangeCourseNoti(!newCourseNoti)}
        onPress={() => {}}
      />

      <LineDivider />

      <ProfileButton 
        icon={icons.reminder}
        value={I18n.t('PROFILE_SCREEN_FIELD_REMINDER')}
        isRadioButton
        sltRadioButton={studyReminder}
        onPressRadioButton={() => onChangeStudyReminder(!studyReminder)}
        onPress={() => {}}
      />

      <LineDivider />

      <ProfileButton 
        icon={icons.logout}
        value={I18n.t('PROFILE_SCREEN_FIELD_LOG_OUT')}
        onPress={() => navigate(screenNames.LOGIN_SCREEN)}
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

export default ProfileSectionSub