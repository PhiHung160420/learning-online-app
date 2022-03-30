import { ChapterCard, HorizontalCoursesCard, IconButton, IconText, LineDivider, TextButton } from 'components/common';
import React from 'react'
import { FlatList, Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import colors from 'utils/colors';
import { renderKeyItem } from 'utils/common';
import data from 'utils/data';
import { fonts } from 'utils/fonts';
import icons from 'utils/icons';
import images from 'utils/images';
import I18n from 'utils/language/i18n';
import { sizes } from 'utils/sizes';

const CourseChapters = () => {
  const renderHeader = () => {
    return (
      <View style={styles.header}>
        <Text style={styles.headerTitle}>{data?.course_details?.title}</Text>
  
        <View style={styles.marginTop}>
          <Text style={{...fonts.body4}}>{data?.course_details?.number_of_students}</Text>
  
          <IconText 
            icon={icons.time} 
            label={data?.course_details?.duration} 
            iconStyle={styles.timeIconStyle}
            labelStyle={{...fonts.body4}}
            containerStyle={styles.timeIcon}
          />
        </View>
  
        <View style={styles.instructor}>
          <ChapterCard 
            image={images.profile}
            name={data?.course_details?.instructor?.name}
            title={data?.course_details?.instructor?.title}
          />
        </View>
      </View>
    )
  };
  
  const renderchapter = () => {
    return (
      <View>
        {data?.course_details?.videos.map((item, index) => {
          return (
            <TouchableOpacity
              key={renderKeyItem('Videos', index)}
              disabled={!item?.is_playing}
              style={[styles.chaptersComponent, {backgroundColor: item?.is_playing ? colors.additionalColor11 : colors.transparent}]}
            >
              <View style={styles.chapter}>
                <Image 
                  source={item?.is_complete ? icons.completed : item?.is_playing ? icons.play_1 : icons.lock}
                  style={styles.completeIcon}
                />
  
                <View style={styles.chapterContent}>
                  <Text style={{...fonts.h3}}>{item?.title}</Text>
                  <Text style={styles.chapterDuration}>{item?.duration}</Text>
                </View>
  
                <View style={styles.flexRow}>
                  <Text style={styles.chapterSize}>{item?.size}</Text>
  
                  <IconButton 
                    icon={item?.is_downloaded ? icons.completed : icons.download}
                    disabled={!item?.is_complete}
                    containerStyle={styles.downloadIcon}
                    iconStyle={{tintColor: item?.is_lock ? colors.additionalColor4 : item?.is_downloaded ? colors.primary : colors.black}}
                    onPress={() => {}}
                  />
                </View>
              </View>
  
              {/* Progress Bar */}
              {item?.is_playing && (
                <View style={[styles.progressBar, {width: item?.progress}]} />
              )}
            </TouchableOpacity>
          )
        })}
      </View>
    )
  };
  
  const renderPopularCourse = () => {
    return (
      <View style={styles.popularCourse}>
        <View style={styles.popularHeader}>
          <Text style={styles.popularTitle}>{I18n.t('COURSE_CHAPTER_POPULAR_COURSE')}</Text>
  
          <TextButton
            buttonStyle={styles.popularButton}
            label={I18n.t('COURSE_CHAPTER_SEE_ALL')}
            onPress={() => {}}
          />
        </View>
  
        <FlatList 
          data={data?.courses_list_2}
          listKey="PopularCourses"
          scrollEnabled={false}
          keyExtractor={item => renderKeyItem('PopularCourse', item.id)}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.popularCourseList}
          renderItem={({item, index}) => (
            <HorizontalCoursesCard 
              course={item}
              containerStyle={[styles.popularCourseCard]}
              onPress={() => {}}
            />
          )}
          ItemSeparatorComponent={() => (
            <LineDivider />
          )}
        />
      </View>
    )
  }

  return (
    <ScrollView>
      {/* Header */}
      {renderHeader()}

      {/* Line Divider */}
      <LineDivider lineStyle={styles.lineDivider}/> 

      {/* Chapter */}
      {renderchapter()}

      {/* Popular Course */}
      {renderPopularCourse()}
    </ScrollView>
  )
};

const styles = StyleSheet.create({
  header: {
    marginTop: sizes.padding,
    paddingHorizontal: sizes.padding
  },
  headerTitle: {
    ...fonts.h2
  },
  marginTop: {
    flexDirection: 'row',
    marginTop: sizes.base
  },
  timeIconStyle: {
    width: sizes.size_15,
    height: sizes.size_15
  },
  timeIcon: {
    marginLeft: sizes.radius
  },
  instructor: {
    marginTop: sizes.radius
  },
  lineDivider: {
    height: sizes.size_1,
    marginVertical: sizes.radius
  },
  chaptersComponent: {
    alignItems: 'center',
    height: sizes.size_70,
  },
  chapter: {
    flexDirection: 'row',
    paddingHorizontal: sizes.padding,
    alignItems: 'center',
    height: sizes.size_70
  },
  completeIcon: {
    width: sizes.size_40,
    height: sizes.size_40,
  },
  chapterContent: {
    flex: 1,
    marginLeft: sizes.radius
  },
  chapterDuration: {
    color: colors.gray30,
    ...fonts.body4
  },
  flexRow: {
    flexDirection: 'row'
  },
  chapterSize: {
    color: colors.gray30,
    ...fonts.body4
  },
  downloadIcon: {
    width: sizes.size_25,
    height: sizes.size_25,
    marginLeft: sizes.base,
  },
  progressBar: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    height: sizes.size_5,
    backgroundColor: colors.primary
  },
  popularCourse: {
    marginTop: sizes.padding
  },
  popularHeader: {
    flexDirection: 'row',
    paddingHorizontal: sizes.padding
  },
  popularTitle: {
    flex: 1,
    ...fonts.h2
  },
  popularButton: {
    width: sizes.size_80,
    height: sizes.size_30,
    backgroundColor: colors.primary
  },
  popularCourseList: {
    marginTop: sizes.radius,
    paddingHorizontal: sizes.padding,
    paddingBottom: sizes.padding
  },
  popularCourseCard: {
    marginVertical: sizes.padding
  }
});

export default CourseChapters