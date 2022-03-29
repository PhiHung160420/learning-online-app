import { VideoCard } from 'components/common';
import { IPopularCourseData } from 'components/common/cards/horizontalCourseCard';
import React, { useRef, useState } from 'react';
import { Animated, FlatList, StyleSheet, View } from 'react-native';
import CourseContent from './CourseContent';
import CourseHeader from './CourseHeader';

interface IProps {
  course: IPopularCourseData
}

const CoursDetailComponent = (props: IProps) => {
  const {
    course
  } = props;

  const [playVideo, setPlayVideo] = useState(false);
  const flatlistRef = useRef<FlatList>(null);
  const scrollX = useRef(new Animated.Value(0)).current;

  return (
    <View style={styles().container}>
      {/* Header */}
      <CourseHeader playVideo={playVideo}/>

      {/* Video */}
      <VideoCard 
        thumbnail={course?.thumbnail}
        playVideo={playVideo}
        setPlayVideo={setPlayVideo}
      />

      {/* Content */}
      <CourseContent 
        flatlistRef={flatlistRef}
        scrollX={scrollX}
      />
    </View>
  )
};

const styles = (appTheme?: any) => StyleSheet.create({
   container: {
     flex: 1,
     backgroundColor: appTheme?.backgroundColor
   },
  
});

export default CoursDetailComponent