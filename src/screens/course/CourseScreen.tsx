import { CourseComponent } from 'components'
import React, { useState } from 'react'

const CourseScreen = (props: any) => {
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

  return (
    <CourseComponent 
      category={category} 
      sltClassType={sltClassType}
      onSelectedClassType={onSelectedClassType}
      sltClassLevel={sltClassLevel}
      onSelectedClassLevel={onSelectedClassLevel}
      sltCreateWithin={sltCreateWithin}
      onSelectedCreateWithIn={onSelectedCreateWithIn}
    />
  )
}

export default CourseScreen;