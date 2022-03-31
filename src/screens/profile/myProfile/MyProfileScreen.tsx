import { MyProfileComponent } from 'components';
import React, { useState } from 'react'
import { useAppDispatch, useAppSelector } from 'store';
import { toggleTheme } from 'store/actions/themeAction';

const MyProfileScreen = () => {
  const [newCourseNoti, setNewCourseNoti] = useState(false);
  const [studyReminder, setStudyReminder] = useState(false);
  const appTheme = useAppSelector(state => state?.theme?.appTheme);
  const dispatch = useAppDispatch();

  const onChangeCourseNoti = (value: boolean) => {
    setNewCourseNoti(value);  
  };

  const onChangeStudyReminder = (value: boolean) => {
    setStudyReminder(value);
  };

  const onToggleTheme = () => {
    if (appTheme?.name === "light") {
      dispatch(toggleTheme("dark"));
    } else {
      dispatch(toggleTheme("light"));
    }
  };
  return (
    <MyProfileComponent 
      newCourseNoti={newCourseNoti}
      studyReminder={studyReminder}
      onChangeCourseNoti={onChangeCourseNoti}
      onChangeStudyReminder={onChangeStudyReminder}
      onToggleTheme={onToggleTheme}
    />
  )
}

export default MyProfileScreen