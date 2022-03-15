import {createStackNavigator} from '@react-navigation/stack';
import screenNames from 'utils/screenName';
import React from 'react';
import { HomeScreen, LayoutScreen } from 'screens';

const Stack = createStackNavigator();

export const RootStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false}}>
      <Stack.Screen name={screenNames.HOME_SCREEN} component={LayoutScreen} />
    </Stack.Navigator>
  );
};