import {HomeComponent} from 'components';
import { navigate } from 'navigation/service';
import React from 'react';
import screenNames from 'utils/screenName';

const HomeScreen = () => {
  const onPressCategoryCard = (category: any) => {
    navigate(screenNames.COURSE_LISTING_SCREEN, category);
  };

  const onPressCourseDetail = (course: any) => {
    navigate(screenNames.COURSE_DETAIL_SCREEN, course);
  };
  return (
    <HomeComponent 
      onPressCategoryCard={onPressCategoryCard}
      onPressCourseDetail={onPressCourseDetail}
    />
  )
};

export default HomeScreen;