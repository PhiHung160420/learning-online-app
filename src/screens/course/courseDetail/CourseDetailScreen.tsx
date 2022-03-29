import { CoursDetailComponent } from 'components'
import React from 'react'

const CourseDetailScreen = (props: any) => {
  const course = props.route?.params;
  
  return (
    <CoursDetailComponent 
      course={course}
    />
  )
}

export default CourseDetailScreen