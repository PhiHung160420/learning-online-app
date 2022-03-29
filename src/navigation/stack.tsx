import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { CourseDetailScreen, CourseListingScreen, LayoutScreen, LoginScreen, RegisterScreen } from 'screens';
import screenNames from 'utils/screenName';

const Stack = createStackNavigator();

export const RootStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false}} initialRouteName={screenNames.LOGIN}>
      <Stack.Screen name={screenNames.LAYOUT_SCREEN} component={LayoutScreen} />
      <Stack.Screen name={screenNames.COURSE_LISTING_SCREEN} component={CourseListingScreen} />
      <Stack.Screen name={screenNames.COURSE_DETAIL} component={CourseDetailScreen} />
      <Stack.Screen name={screenNames.LOGIN} component={LoginScreen} />
      <Stack.Screen name={screenNames.REGISTER} component={RegisterScreen} />
    </Stack.Navigator>
  );
};