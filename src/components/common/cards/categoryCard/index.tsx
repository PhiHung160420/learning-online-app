import React from 'react';
import { ImageBackground, StyleProp, StyleSheet, Text, TouchableOpacity, ViewStyle } from 'react-native';
import colors from 'utils/colors';
import data from 'utils/data';
import { fonts } from 'utils/fonts';
import { sizes } from 'utils/sizes';

interface ICategoryData {
  id: number,
  title: string,
  thumbnail: any
}

interface IProps {
  category?: ICategoryData,
  containerStyle?: StyleProp<ViewStyle>,
};

const CategoryCard = (props: IProps) => {
  const {
    category,
    containerStyle,
  } = props;

  const title = category?.title || '';
  const thumbnail = category?.thumbnail || '';

  return (
    <TouchableOpacity>
      <ImageBackground
        source={thumbnail}
        resizeMode="cover"
        style={[styles.imageBackgroud, containerStyle]}
        imageStyle={styles.radius}
      >
        <Text style={styles.title}>{title}</Text>
      </ImageBackground>
    </TouchableOpacity>
  )
};

const styles = StyleSheet.create({
  imageBackgroud: {
    height: sizes.size_150,
    width: sizes.size_200,
    paddingVertical: sizes.padding,
    paddingHorizontal: sizes.radius,
    justifyContent: 'flex-end',
    borderRadius: sizes.radius
  },
  radius: {
    borderRadius: sizes.radius
  },
  title: {
    color: colors.white,
    ...fonts.h2
  }
});

export default CategoryCard