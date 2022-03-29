import { IconButton } from 'components/common';
import { goback } from 'navigation/service';
import React from 'react'
import { View, StyleSheet } from 'react-native';
import colors from 'utils/colors';
import icons from 'utils/icons';
import { deviceHeight, sizes } from 'utils/sizes';

interface IProps {
  playVideo: boolean
};

const renderVideoComponent = () => {
  return (
    <>
      <View style={styles.flex}>
        <IconButton 
          icon={icons.back}
          iconStyle={styles.backIcon}
          containerStyle={styles.backButton}
          onPress={() => goback()}
        />
      </View>

      <View style={styles.flexRow}>
        <IconButton 
          icon={icons.media}
          iconStyle={styles.mediaIcon}
          containerStyle={styles.mediaButton}
          onPress={() => {}}
        />

        <IconButton 
          icon={icons.favourite_outline}
          iconStyle={styles.mediaIcon}
          containerStyle={styles.mediaButton}
          onPress={() => {}}
        />
      </View>
    </>
  )
};

const CourseHeader = ({playVideo}: IProps) => {
  if(playVideo) {
    return (
      <View style={styles.headerWithVideo}>
        {renderVideoComponent()}
      </View>
    )
  } else {
    return (
      <View style={styles.header}>
        {renderVideoComponent()}
      </View>
    )
  }
};

const styles = StyleSheet.create({
  header: {
    position: 'absolute',
    top: deviceHeight > 800 ? sizes.size_40 : sizes.size_20,
    left: 0,
    right: 0,
    flexDirection: 'row',
    paddingHorizontal: sizes.padding,
    zIndex: 1
  },
  headerWithVideo: {
    flexDirection: 'row',
    paddingHorizontal: sizes.radius,
    paddingBottom: sizes.base,
    height: sizes.size_85,
    backgroundColor: colors.black,
    alignItems: 'flex-end',
  },
  flex: {
    flex: 1
  },
  flexRow: {
    flexDirection: 'row'
  },
  backIcon: {
    width: sizes.size_25,
    height: sizes.size_25,
    tintColor: colors.black
  },
  backButton: {
    width: sizes.size_40,
    height: sizes.size_40,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: sizes.size_20,
    backgroundColor: colors.white
  },
  mediaIcon: {
    tintColor: colors.white
  },
  mediaButton: {
    width: sizes.size_50,
    height: sizes.size_50,
    alignItems: 'center',
    justifyContent: 'center'
  }
});

export default CourseHeader