import { LineDivider } from 'components/common';
import React, { createRef, useCallback, useEffect, useRef, useState } from 'react'
import { Animated, Keyboard, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { useAppSelector } from 'store';
import colors from 'utils/colors';
import { renderKeyItem } from 'utils/common';
import constants from 'utils/constants';
import { fonts } from 'utils/fonts';
import { deviceHeight, deviceWidth, sizes } from 'utils/sizes';
import CourseChapters from './courseTabs/CourseChapters';
import CourseDiscussions from './courseTabs/CourseDiscussions';
import CourseFiles from './courseTabs/CourseFiles';

interface IProps {
  flatlistRef: any,
  scrollX: any
};

interface ITabIndicator {
  measureLayout: any[],
  scrollX: any
}

const course_detail_tabs = constants.course_details_tabs.map((item) => ({
  ...item,
  ref: createRef<TouchableOpacity>()
}));

const TabIndicator = ({measureLayout, scrollX}: ITabIndicator) => {
  const inputRange = course_detail_tabs.map((_, i) => i * deviceWidth);

  const tabIndicatorWidth = scrollX.interpolate({
    inputRange,
    outputRange: measureLayout.map(measure => measure.width)
  });

  const translateX = scrollX.interpolate({
    inputRange,
    outputRange: measureLayout.map(measure => measure.x)
  });

  return (
    <Animated.View style={[styles.tabIndicator, {width: tabIndicatorWidth, transform: [{translateX}]}]} />
  )
};

const Tabs = ({scrollX, onPressTab, appTheme}: any) => {
  const [measureLayout, setMeasureLayout] = useState<any[]>([]);
  const containerRef = useRef<View>(null);

  useEffect(() => {
    let ml: any[] = [];

    course_detail_tabs.forEach(course_detail_tab => {
      course_detail_tab?.ref?.current?.measure(
        (x, y, width, height) => {
          ml.push({
            x, y, width, height
          })

          if(ml.length === course_detail_tabs.length) {
            setMeasureLayout(ml);
          }
        }
      )
    })
  }, [containerRef.current]);

  return (
    <View ref={containerRef} style={styles.tabContainer}>
      {/* Tab Indicator */}
      {measureLayout.length > 0 && <TabIndicator measureLayout={measureLayout} scrollX={scrollX}/>}

      {/* Tabs */}
      {course_detail_tabs.map((item, index) => {
        return (
          <TouchableOpacity 
            key={renderKeyItem('Tab', index)}
            ref={item.ref}
            style={styles.tabButton}
            onPress={() => {
              onPressTab(index);
              Keyboard.dismiss();
            }}
          >
            <Text style={[styles.tabLabel, {color: appTheme?.textColor}]}>{item?.label || ''}</Text>
          </TouchableOpacity>
        )
      })}
    </View>
  )
}

const CourseContent = ({flatlistRef, scrollX}: IProps) => {
  const onPressTab = useCallback((tabIndex: number) => {
    flatlistRef?.current?.scrollToOffset({
      offset: tabIndex * deviceWidth
    }) 
  }, []);

  const appTheme = useAppSelector(state => state?.theme?.appTheme);

  return (
    <View style={[styles.container, {backgroundColor: appTheme?.backgroundColor1}]}>
        {/* Tabs */}
        <View style={styles.tabs}>
          <Tabs scrollX={scrollX} onPressTab={onPressTab} appTheme={appTheme}/>
        </View>

        {/* Line Divider */}
        <LineDivider lineStyle={styles.lineStyle}/>

        {/* Content */}
        <Animated.FlatList 
          ref={flatlistRef}
          horizontal
          pagingEnabled
          snapToAlignment="center"
          snapToInterval={deviceWidth}
          decelerationRate="fast"
          keyboardDismissMode="on-drag"
          showsHorizontalScrollIndicator={false}
          data={constants.course_details_tabs}
          keyExtractor={item => renderKeyItem('CourseDetailTabs', item.id)}
          onScroll={
            Animated.event([
              {nativeEvent: {contentOffset: {x: scrollX}}}],
              {
                useNativeDriver: false
              }  
            )
          }
          renderItem={({item, index}) => {
            return (
               <View style={{width: deviceWidth}}>
                 {index == 0 && <CourseChapters />}
                 {index == 1 && <CourseFiles />}
                 {index == 2 && <CourseDiscussions />}
               </View>
            )
          }}
        />
    </View>
  )
};

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  tabs: {
    height: sizes.size_60,
  },
  lineStyle: {
    backgroundColor: colors.gray20,
  },
  tabContainer: {
    flex: 1,
    flexDirection: 'row',
  },
  tabButton: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center'
  },
  tabLabel: {
    ...fonts.h3,
    fontSize: deviceHeight > 800 ? sizes.size_18 : sizes.size_17
  },
  tabIndicator: {
    position: 'absolute',
    bottom: 0,
    height: 4,
    borderRadius: sizes.radius,
    backgroundColor: colors.primary
  }
});

export default CourseContent