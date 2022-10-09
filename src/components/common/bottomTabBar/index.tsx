import React, { createRef, memo, useEffect, useRef, useState } from 'react'
import { Animated, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import colors from 'utils/colors';
import { renderKeyItem } from 'utils/common';
import constants from 'utils/constants';
import { fonts } from 'utils/fonts';
import { deviceWidth, sizes } from 'utils/sizes';

const bottom_tabs = constants.bottom_tabs.map(bottom_tab => ({
  ...bottom_tab,
  ref: createRef<TouchableOpacity>()
}));

interface ITabIndicator {
  measureLayout: any,
  scrollX: any
};

interface IBottomTab {
  scrollX: any,
  onBottomTabPress: Function
};

const TabIndicator = ({measureLayout, scrollX}: ITabIndicator) => {
  const inputRange = bottom_tabs.map((_,i) => i * deviceWidth);

  const tabIndicatorWidth = scrollX.interpolate({
    inputRange,
    outputRange: measureLayout.map((measure: { width: number }) => measure.width)
  });

  const translateX = scrollX.interpolate({
    inputRange,
    outputRange: measureLayout.map((measure: { x: number }) => measure.x)
  });

  return (
    <Animated.View style={[styles.indicator, {width: tabIndicatorWidth, transform: [{ translateX }]}]}/>
  )
}

const BottomTabBar = memo(({scrollX, onBottomTabPress}: IBottomTab) => {
  const containerRef = useRef<View>(null);
  const [measureLayout, setMeasureLayout] = useState<any[]>([]);

  useEffect(() => {
    let ml: any[] = [];

    bottom_tabs.forEach(bottom_tab => {
      bottom_tab?.ref?.current?.measure(
        (x, y, width, height) => {
          ml.push({
            x, y, width, height
          })

          if(ml.length === bottom_tabs.length) {
            setMeasureLayout(ml);
          }
        }
      )
    })
  }, [containerRef.current]);
  
  return (
    <View ref={containerRef} style={styles.container}>
      {measureLayout.length > 0 && <TabIndicator measureLayout={measureLayout} scrollX={scrollX}/>}

      {bottom_tabs.map((item, index) => {
        return (
          <TouchableOpacity 
            key={renderKeyItem('BottomTab', index)}
            ref={item.ref}
            style={styles.tab}
            onPress={() => onBottomTabPress(index)}
          >
            <Image source={item.icon} style={styles.icon} resizeMode="contain" />
            <Text style={styles.label}>{item.label}</Text>
          </TouchableOpacity>
        )
      })}
    </View>
  )
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row'
  },
  tab: {
    flex: 1,
    paddingHorizontal: sizes.size_15,
    alignItems: 'center',
    justifyContent: 'center'
  },
  icon: {
    width: sizes.size_25,
    height: sizes.size_25,
  },
  label: {
    marginTop: 3,
    color: colors.white,
    ...fonts.h3
  },
  indicator: {
    position: 'absolute',
    left: 0,
    height: '100%',
    borderRadius: sizes.radius,
    backgroundColor: colors.primary
  }
});

export default BottomTabBar;