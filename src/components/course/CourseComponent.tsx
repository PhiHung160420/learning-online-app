import React, { useRef } from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import { Extrapolate, interpolate, useAnimatedScrollHandler, useAnimatedStyle, useSharedValue } from 'react-native-reanimated';
import { useAppSelector } from 'store';
import CourseHeader from './CourseHeader';
import ListingCourses from './ListingCourses';
import {HEADER_HEIGHT} from 'utils/constants';

interface IProps {
  category: any
};

const CourseComponent = ({category}: IProps) => {
  const appTheme = useAppSelector(state => state?.theme?.appTheme);

  const flatlistRef = useRef<FlatList>(null);

  const scrollY = useSharedValue(0);

  const onScroll = useAnimatedScrollHandler((event) => {
    scrollY.value = event.contentOffset.y
  });

  const inputRange = [0, HEADER_HEIGHT - 50];

  const headerHeightAnimatedStyle = useAnimatedStyle(() => {
    return {
      height: interpolate(scrollY.value, inputRange, [HEADER_HEIGHT, 120], Extrapolate.CLAMP)
    }
  });

  const headerHideOnScrollAnimatedStyle = useAnimatedStyle(() => {
    return {
      opacity: interpolate(scrollY.value, [0, 80], [1, 0], Extrapolate.CLAMP),
      transform: [
        {
          translateY: interpolate(scrollY.value, inputRange, [0, 200], Extrapolate.CLAMP),
        }
      ]
    }
  });

  const headerShowOnScrollAnimatedStyle = useAnimatedStyle(() => {
    return {
      opacity: interpolate(scrollY.value, [0, 80], [0, 1], Extrapolate.CLAMP),
      transform: [
        {
          translateY: interpolate(scrollY.value, inputRange, [80, 140], Extrapolate.CLAMP),
        }
      ]
    }
  });

  return (
    <View style={styles(appTheme).container}>
      <CourseHeader 
        category={category} 
        headerHeightAnimatedStyle={headerHeightAnimatedStyle}
        headerHideOnScrollAnimatedStyle={headerHideOnScrollAnimatedStyle}
        headerShowOnScrollAnimatedStyle={headerShowOnScrollAnimatedStyle}
      />

      <ListingCourses flatlistRef={flatlistRef} onScroll={onScroll}/>
    </View>
  )
};

const styles = (appTheme?: any) => StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: appTheme?.backgroundColor1
  },
});

export default CourseComponent