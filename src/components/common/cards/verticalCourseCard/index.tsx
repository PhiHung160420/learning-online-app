import React from 'react';
import { Text, View } from 'react-native';
import { Image, StyleProp, StyleSheet, TouchableOpacity, ViewStyle } from 'react-native';
import colors from 'utils/colors';
import { sizes } from 'utils/sizes';
import {IconButton, IconText} from 'components/common';
import icons from 'utils/icons';
import { fonts } from 'utils/fonts';
import data from 'utils/data';

export interface ICourseData {
  id: number,
  title: string,
  duration: string,
  thumbnail: any
}

interface IProps {
  containerStyle?: StyleProp<ViewStyle>,
  course: ICourseData,
  index: number
};

const VerticalCourseCard = ({containerStyle, course, index}: IProps) => {
  const title = course?.title || '';
  const duration = course?.duration || '';
  const thumnail = course?.thumbnail || '';

  return (
    <TouchableOpacity 
      style={[
        styles.container, 
        containerStyle,
        {
          marginLeft: index === 0 ? sizes.padding : sizes.base,
          marginRight: index === data.courses_list_1.length - 1 ? sizes.padding : 0
        }
      ]}>
      <Image 
        source={thumnail}
        style={styles.image}
      />

      <View style={styles.content}>
        {/* Play Button */}
        <IconButton
          containerStyle={styles.playButton} 
          icon={icons.play} 
          iconStyle={styles.playIcon}
          onPress={() => {}}
        />

        <View style={styles.info}>
          <Text style={styles.title}>{title}</Text>
          <IconText icon={icons.time} label={duration} containerStyle={styles.iconLabel}/>
        </View>
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    width: sizes.size_250
  },
  image: {
    width: '100%',
    height: sizes.size_150,
    marginBottom: sizes.radius,
    borderRadius: sizes.radius
  },
  content: {
    flexDirection: 'row'
  },
  playButton: {
    width: sizes.size_45,
    height: sizes.size_45,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: sizes.size_25,
    backgroundColor: colors.primary
  },
  playIcon: {
    width: sizes.size_20,
    height: sizes.size_20,
  },
  info: {
    flexShrink: 1,
    paddingHorizontal: sizes.size_10
  },
  title: {
    flex: 1,
    ...fonts.h3,
    fontSize: sizes.size_16
  },
  iconLabel: {
    marginTop: sizes.base
  }
});

export default VerticalCourseCard