import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { CourseDetailScreen, CourseListingScreen, LayoutScreen } from 'screens';
import screenNames from 'utils/screenName';

const Stack = createStackNavigator();

export const RootStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false}}>
      <Stack.Screen name={screenNames.LAYOUT_SCREEN} component={LayoutScreen} />
      <Stack.Screen name={screenNames.COURSE_LISTING_SCREEN} component={CourseListingScreen} />
      <Stack.Screen name={screenNames.COURSE_DETAIL} component={CourseDetailScreen} />
    </Stack.Navigator>
  );
};