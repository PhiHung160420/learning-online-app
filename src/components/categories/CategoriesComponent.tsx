import { CategoryCard, Container } from 'components/common';
import { navigate } from 'navigation/service';
import React from 'react'
import { FlatList, StyleSheet, Text, View } from 'react-native'
import colors from 'utils/colors';
import { renderKeyItem } from 'utils/common';
import data from 'utils/data';
import { fonts } from 'utils/fonts';
import I18n from 'utils/language/i18n';
import screenNames from 'utils/screenName';
import { deviceWidth, sizes } from 'utils/sizes';

const CategoriesComponent = () => {
  return (
    <Container 
      isHeader 
      isBackButton
      backButtonStyle={styles.backButton}
    >
      <Text style={styles.title}>{I18n.t('CATEGORIES_SCREEN_TITLE')}</Text>
      <Text style={styles.subTitle}>{I18n.t('CATEGORIES_SCREEN_SUBTITLE')}</Text>

      <FlatList 
        data={data?.categories}
        numColumns={2}
        keyExtractor={item => renderKeyItem('AllCategories', item.id)}
        renderItem={({item, index}) => {
          return (
            <CategoryCard 
              category={item} 
              containerStyle={[
                styles.categoryCard,
                {
                  marginLeft: index % 2 === 0 ? 0 : sizes.radius
                }
              ]}
              onPressCard={() => navigate(screenNames.COURSE_LISTING_SCREEN, item)}
            />
          )
        }}
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
    marginTop: sizes.radius
  },
  categoryCard: {
    height: sizes.size_130,
    width: (deviceWidth - (sizes.padding * 2) - sizes.radius) / 2,
    marginTop: sizes.radius
  }
});

export default CategoriesComponent