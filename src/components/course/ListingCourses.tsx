import { HorizontalCoursesCard, IconButton, LineDivider } from 'components/common';
import React from 'react'
import { FlatList, StyleSheet, Text, View } from 'react-native';
import Animated from 'react-native-reanimated';
import colors from 'utils/colors';
import { renderKeyItem } from 'utils/common';
import data from 'utils/data';
import { fonts } from 'utils/fonts';
import icons from 'utils/icons';
import I18n from 'utils/language/i18n';
import { sizes } from 'utils/sizes';

const AnimatedFlatlist = Animated.createAnimatedComponent(FlatList);

interface IProps {
  flatlistRef?: any,
  onScroll?: any,
  onPressFilterButton: () => void,
}

const ListingCourses = (props: IProps) => {
  const {
    flatlistRef, 
    onScroll, 
    onPressFilterButton
  } = props;

  const listHeaderComponent = () => (
    <View style={styles.headerFlatlist}>
      <Text style={styles.resultText}>{I18n.t('COURSE_SCREEN_RESULTS')}</Text>
      <IconButton 
        icon={icons.filter}
        iconStyle={styles.filterIcon}
        containerStyle={styles.filterButton}
        onPress={onPressFilterButton}
      />
    </View>
  );
  
  return (
    <AnimatedFlatlist 
        ref={flatlistRef}
        data={data.courses_list_2}
        keyExtractor={(item: any) => renderKeyItem("Categories", item.id)}
        contentContainerStyle={styles.flatList}
        showsVerticalScrollIndicator={false}
        scrollEventThrottle={16}
        keyboardDismissMode="on-drag"
        onScroll={onScroll}
        ListHeaderComponent={listHeaderComponent()}
        renderItem={({ item, index }: { item: any, index: number }) => {
          return (
            <HorizontalCoursesCard 
              course={item} 
              containerStyle={styles.courseCard} 
              index={index}
            />
          )
        }}
        ItemSeparatorComponent={() => (
          <LineDivider lineStyle={styles.lineDivider}/>
        )}
      />
  )
};

const styles = StyleSheet.create({
  flatList: {
    paddingHorizontal: sizes.padding
  },
  headerFlatlist: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: sizes.padding,
    marginBottom: sizes.base
  },
  resultText: {
    flex: 1,
    ...fonts.body3
  },
  filterIcon: {
    width: sizes.size_20,
    height: sizes.size_20,
  },
  filterButton: {
    width: sizes.size_40,
    height: sizes.size_40,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: sizes.size_10,
    backgroundColor: colors.primary
  },
  courseCard: {
    marginVertical: sizes.padding
  },
  lineDivider: {
    backgroundColor: colors.gray20
  }
});

export default ListingCourses