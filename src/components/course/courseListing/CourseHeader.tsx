import { IconButton } from 'components/common';
import { goback } from 'navigation/service';
import React from 'react';
import { Image, StyleSheet, Text } from 'react-native';
import Animated from 'react-native-reanimated';
import colors from 'utils/colors';
import { fonts } from 'utils/fonts';
import icons from 'utils/icons';
import { sizes } from 'utils/sizes';

interface IProps {
  category?: any,
  headerHeightAnimatedStyle?: any,
  headerHideOnScrollAnimatedStyle?: any,
  headerShowOnScrollAnimatedStyle?: any
};

const CourseHeader = (props: IProps) => {
  const {
    category,
    headerHeightAnimatedStyle,
    headerHideOnScrollAnimatedStyle,
    headerShowOnScrollAnimatedStyle
  } = props;

  return (
    <Animated.View style={[styles.container, headerHeightAnimatedStyle]}>
      {/* Background */}
      <Image source={category?.thumbnail} resizeMode="cover" style={styles.image}/>

      {/* Title On Scroll */}
      <Animated.View style={[styles.titleOnScroll, headerShowOnScrollAnimatedStyle]}>
        <Text style={styles.titleCenter}>{category?.title}</Text>
      </Animated.View>
      
      {/* Title */}
      <Animated.View style={[styles.titleContainer, headerHideOnScrollAnimatedStyle]}>
        <Text style={styles.title}>{category?.title}</Text>
      </Animated.View>
      
      {/* Back Button */}
      <IconButton 
        icon={icons.back}
        iconStyle={styles.backIcon}
        containerStyle={styles.backButton}
        onPress={() => goback()}
      />
      
      {/* Category Image */}
      <Animated.Image 
        source={category?.image} 
        resizeMode="contain" 
        style={[styles.categoryImage, headerHideOnScrollAnimatedStyle]}
      />
    </Animated.View>
  )
};

const styles = StyleSheet.create({
  container: {
    height: sizes.size_250,
    overflow: 'hidden',
  },
  image: {
    height: '100%',
    width:'100%',
    borderBottomLeftRadius: sizes.size_60
  },
  titleContainer: {
    position: 'absolute',
    bottom: sizes.size_70,
    left: sizes.size_30
  },
  title: {
    position: 'absolute',
    color: colors.white,
    ...fonts.h1
  },
  backIcon: {
    tintColor: colors.black
  },
  backButton: {
    position: 'absolute',
    top: sizes.size_40,
    left: sizes.size_20,
    width: sizes.size_50,
    height: sizes.size_50,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: sizes.size_25,
    backgroundColor: colors.white
  },
  categoryImage: {
    position: 'absolute',
    right: sizes.size_10,
    bottom: -sizes.size_30,
    width: sizes.size_150,
    height: sizes.size_200,
  },
  titleOnScroll: {
    position: 'absolute',
    top: -sizes.size_80,
    left: 0,
    right: 0
  },
  titleCenter: {
    textAlign: 'center',
    color: colors.white,
    ...fonts.h1
  }
});

export default CourseHeader