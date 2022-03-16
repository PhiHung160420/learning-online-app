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
  index?: number
};

const CategoryCard = (props: IProps) => {
  const {
    category,
    containerStyle,
    index
  } = props;

  const title = category?.title || '';
  const thumbnail = category?.thumbnail || '';

  return (
    <TouchableOpacity>
      <ImageBackground
        source={thumbnail}
        resizeMode="cover"
        style={[
          styles.imageBackgroud, 
          containerStyle,
          {
            marginLeft: index === 0 ? sizes.padding : sizes.base,
            marginRight: index === data.categories.length - 1 ? sizes.padding : 0
          }
        ]}
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
  },
  title: {
    color: colors.white,
    ...fonts.h2
  }
});

export default CategoryCard