import React from 'react'
import { Image, ImageSourcePropType, StyleProp, StyleSheet, Text, TouchableOpacity, ViewStyle } from 'react-native'
import colors from 'utils/colors';
import { fonts } from 'utils/fonts';
import { sizes } from 'utils/sizes';

interface IProps {
  containerStyle?: StyleProp<ViewStyle>,
  image: ImageSourcePropType,
  topic?: string,
  isSelected?: boolean,
  onPress: () => void,
}

const TopicButton = (props: IProps) => {
  const {
    containerStyle,
    image,
    topic,
    isSelected = false,
    onPress
  } = props;

  return (
    <TouchableOpacity 
      style={[
        styles.container, 
        containerStyle, 
        {
          backgroundColor: isSelected ? colors.primary3 : colors.additionalColor9          
        }
      ]}
      onPress={onPress}>
        <Image source={image} resizeMode="contain" style={[styles.image, {tintColor: isSelected ? colors.white : colors.gray80}]}/>
        <Text style={[styles.text, {color: isSelected ? colors.white: colors.gray80}]}>{topic}</Text>
    </TouchableOpacity>
  )
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: sizes.size_100,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: sizes.radius,
    borderRadius: sizes.radius,
  },
  image: {
    width: sizes.size_40,
    height: sizes.size_40,
  },
  text: {
    marginTop: sizes.base,
    ...fonts.h3
  }
});

export default TopicButton