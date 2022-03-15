import { Tabs } from 'components/common';
import React, { useCallback, useRef } from 'react';
import { Animated, FlatList, StyleSheet, View } from 'react-native';
import { Shadow } from 'react-native-shadow-2';
import { HomeScreen, ProfileScreen, SearchScreen } from 'screens';
import colors from 'utils/colors';
import constants from 'utils/constants';
import { deviceHeight, deviceWidth, sizes } from 'utils/sizes';

const LayoutComponent = () => {
  const flatlistRef = useRef<FlatList>(null);
  const scrollX = useRef(new Animated.Value(0)).current;

  const onBottomTabPress = useCallback(bottomTabIndex => {
    flatlistRef?.current?.scrollToOffset({
      offset: bottomTabIndex * deviceWidth
    })
  }, []);

  const renderContent = () => {
    return (
      <View style={styles.content}>
        <Animated.FlatList 
          ref={flatlistRef}
          horizontal
          pagingEnabled
          scrollEnabled={false}
          snapToInterval={deviceWidth}
          decelerationRate="fast"
          showsHorizontalScrollIndicator={false}
          data={constants.bottom_tabs}
          keyExtractor={item => item.id.toString()}
          onScroll={
            Animated.event([{
              nativeEvent: {contentOffset: {x: scrollX}}
            }], {
              useNativeDriver: false
            })
          }
          renderItem={({item, index}) => {
            return (
              <View style={styles.layout}>
                {item.label == constants.screens.home && <HomeScreen />}
                {item.label == constants.screens.profile && <ProfileScreen />}
                {item.label == constants.screens.search && <SearchScreen />}
              </View>
            )
          }}
        />
      </View>
    )
  };

  const renderBottomTab = () => {
    return (
      <View style={styles.bottomTab}>
        <Shadow size={[deviceWidth - (sizes.paddingTab * 2), sizes.size_65]}>
          <View style={styles.tab}>
            <Tabs scrollX={scrollX} onBottomTabPress={onBottomTabPress}/>
          </View>
        </Shadow>
      </View>
    )
  }

  return (
    <View style={styles.container}>
      {/* Contents */}
      {renderContent()}

      {/* BottomTab */}
      {renderBottomTab()}
    </View>
  )
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white
  },
  content: {
    flex: 1
  },
  layout: {
    height: deviceHeight,
    width: deviceWidth,
  },
  bottomTab: {
    marginBottom: sizes.size_20,
    paddingHorizontal: sizes.paddingTab,
    paddingVertical: sizes.radius
  },
  tab: {
    flex: 1,
    borderRadius: sizes.radius,
    backgroundColor: colors.primary3
  }
});

export default LayoutComponent;