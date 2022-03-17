import { Container, ProgressBar } from 'components/common';
import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    ScrollView,
    TouchableOpacity,
    Image
} from 'react-native';
import colors from 'utils/colors';
import { fonts } from 'utils/fonts';
import icons from 'utils/icons';
import images from 'utils/images';
import I18n from 'utils/language/i18n';
import { sizes } from 'utils/sizes';
import ProfileCard from './ProfileCard';

const ProfileComponent = () => {
  return (
    <Container 
      isHeader
      headerTitle={I18n.t('PROFILE_SCREEN_HEADER_TITLE')}
      headerIcon={icons.sun}
    >
      <ScrollView contentContainerStyle={styles.container}>
        <ProfileCard />
      </ScrollView>
    </Container>
  )
};

const styles = StyleSheet.create({
  container: {
    paddingBottom: sizes.size_150
  },
  
});

export default ProfileComponent;