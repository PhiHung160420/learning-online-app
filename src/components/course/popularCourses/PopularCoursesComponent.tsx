import { Container, HorizontalCoursesCard, LineDivider } from 'components/common'
import { navigate } from 'navigation/service';
import React from 'react'
import { FlatList, StyleSheet, Text } from 'react-native';
import colors from 'utils/colors';
import { renderKeyItem } from 'utils/common';
import data from 'utils/data';
import { fonts } from 'utils/fonts';
import I18n from 'utils/language/i18n';
import screenNames from 'utils/screenName';
import { sizes } from 'utils/sizes';

const PopularCoursesComponent = () => {
  return (
    <Container
      isHeader
      isBackButton
      backButtonStyle={styles.backButton}
    >
      <Text style={styles.title}>{I18n.t('POPULAR_COURSES_TITLE')}</Text>
      <Text style={styles.subTitle}>{I18n.t('POPULAR_COURSES_SUBTITLE')}</Text>

      <FlatList 
        data={data.courses_list_2}
        listKey="PopularCourses"
        keyExtractor={item => renderKeyItem("PopularCourses", item.id)}
        pagingEnabled={false}
        contentContainerStyle={styles.flatListPopular}
        showsVerticalScrollIndicator={false}
        renderItem={({item, index}) => (
          <HorizontalCoursesCard 
            course={item} 
            containerStyle={styles.horizontalCard}
            index={index}
            onPress={() => navigate(screenNames.COURSE_DETAIL_SCREEN, item)}
          />
        )}
      />
    </Container>
  )
};

const styles = StyleSheet.create({
  backButton: {
    width: sizes.size_45,
    height: sizes.size_45,
    borderRadius: sizes.size_25,
    backgroundColor: colors.gray20,
    justifyContent: 'center',
    alignItems: 'center'
  },
  title: {
    ...fonts.h1,
    marginTop: sizes.padding
  },
  subTitle: {
    ...fonts.body3,
    marginVertical: sizes.radius
  },
  flatListPopular: {
    marginTop: sizes.radius,
  },
  horizontalCard: {
    marginVertical: sizes.radius
  }
});

export default PopularCoursesComponent