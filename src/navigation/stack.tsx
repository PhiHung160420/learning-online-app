import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { CategoriesScreen, CourseDetailScreen, CourseListingScreen, InstructorProfileScreen, LandingScreen, LayoutScreen, LoginScreen, NotificationsScreen, PopularCoursesScreen, RegisterScreen } from 'screens';
import screenNames from 'utils/screenName';

const Stack = createStackNavigator();

export const RootStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false}}>
      <Stack.Screen name={screenNames.LANDING_SCREEN} component={LandingScreen} />
      <Stack.Screen name={screenNames.LAYOUT_SCREEN} component={LayoutScreen} />
      <Stack.Screen name={screenNames.COURSE_LISTING_SCREEN} component={CourseListingScreen} />
      <Stack.Screen name={screenNames.COURSE_DETAIL_SCREEN} component={CourseDetailScreen} />
      <Stack.Screen name={screenNames.LOGIN_SCREEN} component={LoginScreen} />
      <Stack.Screen name={screenNames.REGISTER_SCREEN} component={RegisterScreen} />
      <Stack.Screen name={screenNames.CATEGORIES_SCREEN} component={CategoriesScreen} />
      <Stack.Screen name={screenNames.POPULAR_COURSES_SCREEN} component={PopularCoursesScreen} />
      <Stack.Screen name={screenNames.NOTIFICATIONS_SCREEN} component={NotificationsScreen} />
      <Stack.Screen name={screenNames.INSTRUCTOR_PROFILE_SCREEN} component={InstructorProfileScreen} />
    </Stack.Navigator>
  );
};