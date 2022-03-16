import React, { Children } from 'react'
import { ImageBackground, ImageSourcePropType, ImageStyle, StyleProp, StyleSheet } from 'react-native'
import images from 'utils/images'
import { sizes } from 'utils/sizes';

interface LargeCardProps {
  backgroundImage?: ImageSourcePropType;
  children?: any,
  containerStyle?: StyleProp<ImageStyle>
}

const LargeCard = (props: LargeCardProps) => {
  const {
    backgroundImage,
    containerStyle,
    children
  } = props;
  return (
    <ImageBackground 
      source={backgroundImage ? backgroundImage : images.loadingImage}
      style={[styles.background, containerStyle]}
      imageStyle={styles.imageStyle}
    >
      {children}
    </ImageBackground>
  )
};

const styles = StyleSheet.create({
  background: {
    alignItems: 'flex-start',
    marginTop: sizes.padding,
    padding: sizes.size_15,
  },
  imageStyle: {
    borderRadius: sizes.radius
  }
});

export default LargeCard