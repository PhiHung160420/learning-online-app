import { IconText } from 'components/common';
import React from 'react';
import {
  Image, ImageBackground, StyleProp,
  StyleSheet, Text, TouchableOpacity, View, ViewStyle
} from 'react-native';
import { useAppSelector } from 'store';
import colors from 'utils/colors';
import { fonts } from 'utils/fonts';
import icons from 'utils/icons';
import images from 'utils/images';
import { sizes } from 'utils/sizes';

export interface IPopularCourseData {
  id: number;
  title: string;
  duration: string;
  instructor: string;
  ratings: number;
  price: number;
  is_favourite: boolean;
  thumbnail: any;
}

interface IProps {
  containerStyle?: StyleProp<ViewStyle>;
  course: IPopularCourseData;
  index?: number;
  onPress: () => void;
}

const HorizontalCoursesCard = ({
  containerStyle,
  course,
  index,
  onPress,
}: IProps) => {
  const title = course?.title || '';
  const duration = course?.duration || '';
  const instructor = course?.instructor || '';
  const ratings = course?.ratings || 0;
  const price = course?.price || 0;
  const is_favourite = course?.is_favourite || false;
  const thumbnail = course?.thumbnail || images.thubnailDefault;

  const appTheme = useAppSelector(state => state?.theme?.appTheme);

  return (
    <TouchableOpacity
      style={[
        styles.container,
        containerStyle,
        {
          marginTop: index === 0 ? sizes.radius : sizes.padding,
        },
      ]}
      onPress={onPress}>
      <ImageBackground
        source={thumbnail}
        resizeMode="cover"
        style={styles.background}
        imageStyle={styles.image}>
        {/* favorite icon */}
        <View style={styles.iconContainer}>
          <Image
            resizeMode="contain"
            source={icons.favourite}
            style={[
              styles.iconStyle,
              {
                tintColor: is_favourite
                  ? colors.secondary
                  : colors.additionalColor4,
              },
            ]}
          />
        </View>
      </ImageBackground>

      {/* Detail */}
      <View style={styles.detail}>
        <Text style={[styles.title, {color: appTheme?.textColor}]}>
          {title}
        </Text>

        <View style={styles.info}>
          <Text style={[styles.instructor, {color: appTheme?.textColor}]}>
            {instructor}
          </Text>

          <IconText
            icon={icons.time}
            label={duration}
            containerStyle={styles.timeText}
            iconStyle={styles.timeIconStyle}
            labelStyle={styles.timeLabelStyle}
          />
        </View>

        <View style={styles.priceAndRating}>
          <Text style={styles.price}>${price.toFixed(2)}</Text>

          <IconText
            icon={icons.star}
            label={ratings.toString()}
            containerStyle={styles.ratingText}
            iconStyle={styles.ratingIconStyle}
            labelStyle={styles.ratingLabelStyle}
          />
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  background: {
    width: sizes.size_130,
    height: sizes.size_130,
    marginBottom: sizes.radius,
  },
  image: {
    borderRadius: sizes.radius,
  },
  iconContainer: {
    position: 'absolute',
    top: sizes.size_10,
    right: sizes.size_10,
    width: sizes.size_30,
    height: sizes.size_30,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: sizes.size_5,
    backgroundColor: colors.white,
  },
  iconStyle: {
    width: sizes.size_20,
    height: sizes.size_20,
  },
  detail: {
    flex: 1,
    marginLeft: sizes.padding,
  },
  title: {
    ...fonts.h3,
    fontSize: sizes.size_18,
  },
  info: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: sizes.base,
  },
  instructor: {
    ...fonts.body3,
  },
  timeText: {
    marginLeft: sizes.base,
  },
  timeIconStyle: {
    width: sizes.size_15,
    height: sizes.size_15,
  },
  timeLabelStyle: {
    ...fonts.body4,
  },
  priceAndRating: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: sizes.base,
  },
  price: {
    ...fonts.h2,
    color: colors.primary,
  },
  ratingText: {
    marginLeft: sizes.base,
  },
  ratingIconStyle: {
    width: sizes.size_15,
    height: sizes.size_15,
    tintColor: colors.primary2,
  },
  ratingLabelStyle: {
    marginLeft: sizes.size_5,
    color: colors.black,
    ...fonts.h3,
  },
});

export default HorizontalCoursesCard;
