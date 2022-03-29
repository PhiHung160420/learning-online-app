import {HomeComponent} from 'components';
import { navigate } from 'navigation/service';
import React from 'react';
import screenNames from 'utils/screenName';

const HomeScreen = () => {
  const onPressCategoryCard = (category: any) => {
    navigate(screenNames.COURSE_LISTING_SCREEN, category);
  };
  return <HomeComponent onPressCategoryCard={onPressCategoryCard}/>;
};

export default HomeScreen;