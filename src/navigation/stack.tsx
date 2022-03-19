import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { CourseScreen, LayoutScreen } from 'screens';
import screenNames from 'utils/screenName';

const Stack = createStackNavigator();

export const RootStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false}}>
      <Stack.Screen name={screenNames.LAYOUT_SCREEN} component={LayoutScreen} />
      <Stack.Screen name={screenNames.COURSE_SCREEN} component={CourseScreen} />
    </Stack.Navigator>
  );
};