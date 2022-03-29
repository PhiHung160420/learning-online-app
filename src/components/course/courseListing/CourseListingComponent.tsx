import { FilterModal } from 'components/common';
import React, { useRef } from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import { Extrapolate, interpolate, useAnimatedScrollHandler, useAnimatedStyle, useSharedValue, withDelay, withTiming } from 'react-native-reanimated';
import { useAppSelector } from 'store';
import { HEADER_HEIGHT } from 'utils/constants';
import { deviceHeight } from 'utils/sizes';
import CourseHeader from './CourseHeader';
import ListingCourses from './ListingCourses';

interface IProps {
  category: any,
  sltClassType: number,
  onSelectedClassType: (value: number) => void,
  sltClassLevel: number,
  onSelectedClassLevel: (value: number) => void,
  sltCreateWithin: number,
  onSelectedCreateWithIn: (value: number) => void,
  onClickCourseDetail: (courseId: any) => void
};

const CourseListingComponent = (props: IProps) => {
  const {
    category,
    sltClassType,
    sltClassLevel,
    sltCreateWithin,
    onSelectedClassType,
    onSelectedClassLevel,
    onSelectedCreateWithIn,
    onClickCourseDetail
  } = props;
  const appTheme = useAppSelector(state => state?.theme?.appTheme);

  const flatlistRef = useRef<FlatList>(null);

  const scrollY = useSharedValue(0);

  const filterModalSharedValue1 = useSharedValue(deviceHeight);
  const filterModalSharedValue2 = useSharedValue(deviceHeight);

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

  const onPressFilterButton = () => {
    filterModalSharedValue1.value = withTiming(0, {
      duration: 100
    });

    filterModalSharedValue2.value = withDelay(100, withTiming(0, {
      duration: 500
    }));
  };

  const onPressCancelButtonModal = () => {
    filterModalSharedValue1.value = withDelay(500, withTiming(deviceHeight, {
      duration: 100
    }));

    filterModalSharedValue2.value = withTiming(deviceHeight, {
      duration: 500
    });
  };

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

      <ListingCourses 
        flatlistRef={flatlistRef} 
        onScroll={onScroll}
        onPressFilterButton={onPressFilterButton}
        onClickCourseDetail={onClickCourseDetail}
      />

      <FilterModal 
        filterModalSharedValue1={filterModalSharedValue1}
        filterModalSharedValue2={filterModalSharedValue2}
        onPressCancelButtonModal={onPressCancelButtonModal}
        sltClassType={sltClassType}
        onSelectedClassType={onSelectedClassType}
        sltClassLevel={sltClassLevel}
        onSelectedClassLevel={onSelectedClassLevel}
        sltCreateWithin={sltCreateWithin}
        onSelectedCreateWithIn={onSelectedCreateWithIn}
      />
    </View>
  )
};

const styles = (appTheme?: any) => StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: appTheme?.backgroundColor1
  },
});

export default CourseListingComponent