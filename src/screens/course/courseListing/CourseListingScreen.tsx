
import { CourseListingComponent } from 'components';
import { navigate } from 'navigation/service';
import React, { useState } from 'react'
import screenNames from 'utils/screenName';

const CourseListingScreen = (props: any) => {
  const category = props.route?.params || '';
  const [sltClassType, setSltClassType] = useState(-1);
  const [sltClassLevel, setSltClassLevel] = useState(-1);
  const [sltCreateWithin, setSltCreateWithin] = useState(-1);

  const onSelectedClassType = (type: number) => {
    setSltClassType(type)
  };

  const onSelectedClassLevel = (level: number) => {
    setSltClassLevel(level)
  };

  const onSelectedCreateWithIn= (create: number) => {
    setSltCreateWithin(create);
  };

  const onClickCourseDetail = (course: any) => {
    navigate(screenNames.COURSE_DETAIL, course);
  };

  return (
    <CourseListingComponent 
      category={category} 
      sltClassType={sltClassType}
      onSelectedClassType={onSelectedClassType}
      sltClassLevel={sltClassLevel}
      onSelectedClassLevel={onSelectedClassLevel}
      sltCreateWithin={sltCreateWithin}
      onSelectedCreateWithIn={onSelectedCreateWithIn}
      onClickCourseDetail={onClickCourseDetail}
    />
  )
}

export default CourseListingScreen;