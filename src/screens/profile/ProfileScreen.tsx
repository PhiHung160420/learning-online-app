import ProfileComponent from 'components/profile/ProfileComponent'
import React, { useState } from 'react'

const ProfileScreen = () => {
  const [newCourseNoti, setNewCourseNoti] = useState(false);
  const [studyReminder, setStudyReminder] = useState(false);
  
  const onChangeCourseNoti = (value: boolean) => {
    setNewCourseNoti(value);
  };

  const onChangeStudyReminder = (value: boolean) => {
    setStudyReminder(value);
  };
  return (
    <ProfileComponent 
      newCourseNoti={newCourseNoti}
      studyReminder={studyReminder}
      onChangeCourseNoti={onChangeCourseNoti}
      onChangeStudyReminder={onChangeStudyReminder}
    />
  )
}

export default ProfileScreen