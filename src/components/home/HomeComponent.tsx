import { Container, LargeCard, Section, CategoryCard, TextButton, VerticalCourseCard, LineDivider, HorizontalCoursesCard } from 'components/common';
import React from 'react';
import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import colors from 'utils/colors';
import { renderKeyItem } from 'utils/common';
import data from 'utils/data';
import { fonts } from 'utils/fonts';
import icons from 'utils/icons';
import images from 'utils/images';
import I18n from 'utils/language/i18n';
import { sizes } from 'utils/sizes';

interface IProps {
  onPressCategoryCard: (category: any) => void,
}

const HomeComponent = ({onPressCategoryCard}: IProps) => {
  return (
    <Container
      isHeader
      headerTitle={I18n.t('HOME_SCREEN_TITLE')}
      headerSubTitle={I18n.t('HOME_SCREEN_SUB_TITLE')}
      headerIcon={icons.notification}
      containerStyle={styles.container}
    >
      <ScrollView
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={false}
      >
        {/* Start Learning */}
        <LargeCard
          backgroundImage={images.featured_bg_image}
          containerStyle={styles.learningCard}
        >
          {/* Info */}
          <View>
            <Text style={styles.title_1}>{I18n.t('HOME_SCREEN_START_LEARNING_TITLE_1')}</Text>
            <Text style={styles.title_2}>{I18n.t('HOME_SCREEN_START_LEARNING_TITLE_2')}</Text>
            <Text style={styles.title_3}>{I18n.t('HOME_SCREEN_START_LEARNING_TITLE_3')}</Text>
          </View>

          {/* Image */}
          <Image source={images.start_learning} style={styles.learningImage}/>

          {/* Button */}
          <TextButton 
            label={I18n.t('HOME_SCREEN_START_LEARNING_BUTTON')}
            buttonStyle={styles.learningButton}
            labelStyle={styles.learningButtonLabel}
            onPress={() => {}}
          />
        </LargeCard>

        {/* Courses */}
        <FlatList 
          horizontal
          data={data.courses_list_1}
          listKey="Courses"
          keyExtractor={item => renderKeyItem('Courses', item.id)}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.flatlist}
          renderItem={({item, index}) => (
            <VerticalCourseCard course={item} index={index}/>
          )}
        />

        {/* Line Divider */}
        <LineDivider lineStyle={styles.lineDivider}/>

        {/* Categories */}
        <Section 
            title={I18n.t('HOME_SCREEN_CATEGORIES')}
            onPress={() =>  {}}
            button={I18n.t('HOME_SCREEN_SEE_ALL_BUTTON')}
          >
          <FlatList 
            horizontal
            data={data.categories}
            listKey="Categories"
            keyExtractor={item => renderKeyItem("Categories", item.id)}
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.flatListCategories}
            renderItem={({item, index}) => (
              <CategoryCard 
                category={item} 
                containerStyle={
                  {
                    marginLeft: index === 0 ? sizes.padding : sizes.base,
                    marginRight: index === data.categories.length - 1 ? sizes.padding : 0
                  }
                }
                onPressCard={() => onPressCategoryCard(item)}
              />
            )}
          />
        </Section>

        {/* Popular Courses */}
        <Section
          containerStyle={styles.popular}
          title={I18n.t('HOMR_SCREEN_POPULAR_COURSES')}
          button={I18n.t('HOME_SCREEN_SEE_ALL_BUTTON')}
          onPress={() =>  {}}
        >
          <FlatList 
            data={data.courses_list_2}
            listKey="PopularCourses"
            keyExtractor={item => renderKeyItem("PopularCourses", item.id)}
            pagingEnabled={false}
            contentContainerStyle={styles.flatListPopular}
            renderItem={({item, index}) => (
              <HorizontalCoursesCard 
                course={item} 
                containerStyle={styles.horizontalCard}
                index={index}
              />
            )}
            ItemSeparatorComponent={() => (
              <LineDivider />
            )}
          />
        </Section>
      </ScrollView>
   </Container>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 0
  },
  content: {
    paddingBottom: sizes.size_100
  },
  title_1: {
    color: colors.white,
    ...fonts.body2
  },
  title_2: {
    color: colors.white,
    ...fonts.h2
  },
  title_3: {
    color: colors.white,
    ...fonts.body4
  },
  learningImage: {
    width: '100%',
    height: sizes.size_110,
    marginTop: sizes.padding
  },
  learningCard: {
    marginHorizontal: sizes.padding
  },
  learningButton: {
    backgroundColor: colors.white
  },
  learningButtonLabel: {
    color: colors.black
  },
  lineDivider: {
    marginVertical: sizes.padding
  },
  flatlist: {
    marginTop: sizes.padding
  },
  lineStyle: {
    marginVertical: sizes.padding
  },
  flatListCategories: {
    marginTop: sizes.radius,
  },
  popular: {
    marginTop: sizes.size_30
  },
  flatListPopular: {
    marginTop: sizes.radius,
    paddingHorizontal: sizes.padding
  },
  horizontalCard: {
    marginVertical: sizes.padding
  }
});

export default HomeComponent;