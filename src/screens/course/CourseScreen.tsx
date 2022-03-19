import { CourseComponent } from 'components'
import React from 'react'

const CourseScreen = (props: any) => {
  const category = props.route?.params || '';

  return (
    <CourseComponent category={category} />
  )
}

export default CourseScreen;