import { CategoryCard, Container, SearchInput, Section, TextButton } from 'components/common';
import React, { useRef } from 'react';
import {
  StyleSheet
} from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import Animated, {
  Extrapolate, interpolate, useAnimatedScrollHandler,
  useAnimatedStyle,
  useSharedValue
} from 'react-native-reanimated';
import colors from 'utils/colors';
import { renderKeyItem } from 'utils/common';
import data from 'utils/data';
import { fonts } from 'utils/fonts';
import I18n from 'utils/language/i18n';
import { deviceWidth, sizes } from 'utils/sizes';

interface IProps {
  searchInput: string,
  selectedTopSearch: any,
  setSearchInput: (value: string) => void,
  setSelectedTopSearch: (index: any) => void,
  onPressCategoryCard: (category: any) => void,
};

const SearchComponent = (props: IProps) => {
  const {
    searchInput,
    selectedTopSearch,
    setSearchInput,
    setSelectedTopSearch,
    onPressCategoryCard
  } = props;

  const scrollViewRef = useRef<Animated.ScrollView>(null);
  const scrollY = useSharedValue(0);
  
  const onScroll = useAnimatedScrollHandler((event) => {
    scrollY.value = event.contentOffset.y
  });

  const inputRange = [0, 70];

  const searchBarAnimationStyle = useAnimatedStyle(() => {
    return {
      height: interpolate(scrollY.value, inputRange, [50, 0], Extrapolate.CLAMP),
      opacity: interpolate(scrollY.value, inputRange, [1, 0], Extrapolate.CLAMP),
    }
  });

  const onScrollEndDrag = (event: any) => {
    if (event.nativeEvent.contentOffset.y > 10 && event.nativeEvent.contentOffset.y < 50) {
      scrollViewRef.current?.scrollTo({
        x: 0,
        y: 60,
        animated: true
      })
    }
  };

  return (
    <Container containerStyle={styles.container}>
      <Animated.ScrollView
        ref={scrollViewRef}
        onScroll={onScroll}
        contentContainerStyle={styles.scrollView}
        showsVerticalScrollIndicator={false}
        scrollEventThrottle={16}
        keyboardDismissMode="on-drag"
        onScrollEndDrag={onScrollEndDrag}
      >
        {/* Top Searches */}
        <Section
          title={I18n.t('SEARCH_SCREEN_TOP_SEARCHES')}
          containerStyle={styles.section}>
          <FlatList
            horizontal
            data={data.top_searches}
            listKey="TopSearches"
            keyExtractor={item => renderKeyItem('TopSearches', item.id)}
            contentContainerStyle={styles.flatlist}
            showsHorizontalScrollIndicator={false}
            renderItem={({item, index}) => (
              <TextButton
                label={item?.label || ''}
                buttonStyle={[
                  styles.SearchesButton,
                  {
                    marginLeft: index === 0 ? sizes.padding : sizes.radius,
                    marginRight: index === data.top_searches.length - 1 ? sizes.padding : 0,
                    backgroundColor: selectedTopSearch === index ? colors.primary : colors.gray10,
                  },
                ]}
                labelStyle={[styles.searchesLabel, {color: selectedTopSearch === index ? colors.white : colors.gray50}]}
                onPress={() => setSelectedTopSearch(index)}
              />
            )}
          />
        </Section>

        {/* Browse Categories */}
        <Section
          title={I18n.t('SEARCH_SCREEN_CATEGORIES')}
          containerStyle={styles.section}>
          <FlatList
            data={data.categories}
            numColumns={2}
            listKey="BrowseCategories"
            keyExtractor={item => renderKeyItem('BrowseCategories', item.id)}
            contentContainerStyle={styles.flatlist}
            renderItem={({item, index}) => (
              <CategoryCard
                category={item}
                containerStyle={[
                  styles.categoryCard,
                  {
                    marginLeft: (index + 1) % 2 === 0 ? sizes.radius : sizes.padding,
                  },
                ]}
                onPressCard={() => onPressCategoryCard(item)}
              />
            )}
          />
        </Section>
      </Animated.ScrollView>

      {/* Search Bar */}
      <Animated.View style={[styles.searchBar, searchBarAnimationStyle]}>
        <SearchInput 
          value={searchInput} 
          onChangeText={value => setSearchInput(value)}
        />
      </Animated.View>
    </Container>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 0
  },
  scrollView: {
    marginTop: sizes.size_70,
    paddingBottom: sizes.size_200
  },
  section: {
    marginTop: sizes.padding
  },
  flatlist: {
    marginTop: sizes.radius
  },
  SearchesButton: {    
    borderRadius: sizes.radius,
  },
  searchesLabel: {
    ...fonts.h3
  },
  categoryCard: {
    height: sizes.size_130,
    width: (deviceWidth - (sizes.padding * 2) - sizes.radius) / 2,
    marginTop: sizes.radius,
  },
  searchBar: {
    position: 'absolute',
    top: sizes.size_20,
    left: 0,
    right: 0,
    paddingHorizontal: sizes.padding,
    height: sizes.size_50,
  },
  searchInput: {
    height: sizes.size_50,
    backgroundColor: colors.gray
  }
});

export default SearchComponent;