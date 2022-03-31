import { Container } from 'components/common';
import React from 'react';
import {
  ScrollView, StyleSheet
} from 'react-native';
import icons from 'utils/icons';
import I18n from 'utils/language/i18n';
import { sizes } from 'utils/sizes';
import ProfileCard from './ProfileCard';
import ProfileSectionMain from './ProfileSectionMain';
import ProfileSectionSub from './ProfileSectionSub';

interface IProps {
  newCourseNoti: boolean,
  studyReminder: boolean,
  onChangeCourseNoti: (value: boolean) => void,
  onChangeStudyReminder: (value: boolean) => void,
  onToggleTheme: () => void,
}

const MyProfileComponent = (props: IProps) => {
  const {
    newCourseNoti,
    studyReminder,
    onChangeCourseNoti,
    onChangeStudyReminder,
    onToggleTheme
  } = props;

  return (
    <Container 
      isHeader
      headerTitle={I18n.t('PROFILE_SCREEN_HEADER_TITLE')}
      headerIcon={icons.sun}
      onPressHeaderIcon={onToggleTheme}
    >
      <ScrollView contentContainerStyle={styles.container} showsVerticalScrollIndicator={false}>
        <ProfileCard />

        <ProfileSectionMain />

        <ProfileSectionSub 
          newCourseNoti={newCourseNoti}
          studyReminder={studyReminder}
          onChangeCourseNoti={onChangeCourseNoti}
          onChangeStudyReminder={onChangeStudyReminder}
        />
      </ScrollView>
    </Container>
  )
};

const styles = StyleSheet.create({
  container: {
    paddingBottom: sizes.size_100
  }
});

export default MyProfileComponent;